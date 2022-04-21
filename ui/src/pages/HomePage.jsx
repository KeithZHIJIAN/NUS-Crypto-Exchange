import * as React from 'react';
import {Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import account from '../_mocks_/account';
import graphQLFetch from '../graphQLFetch';
import { createHashHistory } from 'history';

import loadable from '@loadable/component';
const AssetsPage = loadable(() => import('./AssetsPage'));
const TradePage = loadable(() => import('./TradePage'));
const LoginPage = loadable(() => import('./LoginPage'));
const RegisterPage = loadable(() => import('./RegisterPage'));
const OrderPage = loadable(() => import('./OrderPage'));
const SettingPage = loadable(() => import('./SettingPage'));
const ProfilePage = loadable(() => import('./ProfilePage'));
const BlogPage = loadable(() => import('./BlogPage'));
const HomePageContent = loadable(() => import('../pageContent/HomePageContent'));


//保留n位小数
function roundFun(value, n) {
  return Math.round(value*Math.pow(10,n))/Math.pow(10,n);
}

// // For copy of dictionary, use slice for array
// function clone(obj) {
//   var copy = {};
//   for (var attr in obj) {
//     copy[attr] = typeof(obj[attr])==='object' ? clone(obj[attr]) : obj[attr];
//   }
//   return copy;
// }

export default class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 'Assets',
      balance: 0,
      types: [],
      wallet: [],
      orders: [],
      currentUser: account,
      history: [],
      webHistory: createHashHistory(),
    };
    this.changePage = this.changePage.bind(this);
    this.showPage = this.showPage.bind(this);
    this.buy = this.buy.bind(this);
    this.sell = this.sell.bind(this);
    this.convert = this.convert.bind(this);
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.getAssets = this.getAssets.bind(this);
    this.getOrders = this.getOrders.bind(this);
    this.walletQuery = this.walletQuery.bind(this);
    this.historyQuery = this.historyQuery.bind(this);
    this.orderQuery = this.orderQuery.bind(this);
    this.balanceQuery = this.balanceQuery.bind(this);
    this.userQuery = this.userQuery.bind(this);
    this.topup = this.topup.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  async componentDidMount() {
    await this.checkLoginStatus();
  }
  
  //定义孙子及以后辈组件能接收到的参数和方法
  static childContextTypes = {
    balance: PropTypes.number,
    history: PropTypes.array,
    wallet: PropTypes.array,
    types: PropTypes.array,
    currentUser: PropTypes.object,
    webHistory: PropTypes.object,
    changePage: PropTypes.func,
    buy: PropTypes.func,
    sell: PropTypes.func,
    convert: PropTypes.func,
    register: PropTypes.func,
    login: PropTypes.func,
    logout: PropTypes.func,
    getAssets: PropTypes.func,
    getOrders: PropTypes.func,
    topup: PropTypes.func,
    updateProfile: PropTypes.func,
    updatePassword: PropTypes.func,
  };

  //将参数和处理方法传递给context
  getChildContext() {
    return {
      balance: this.state.balance,
      wallet: this.state.wallet,
      types: this.state.types,
      history: this.state.history,
      currentUser: this.state.currentUser,
      webHistory: this.state.webHistory,
      changePage: this.changePage,
      buy: this.buy,
      sell: this.sell,
      convert: this.convert,
      register: this.register,
      login: this.login,
      logout: this.logout,
      getAssets: this.getAssets,
      getOrders: this.getOrders,
      topup: this.topup,
      updateProfile: this.updateProfile,
      updatePassword: this.updatePassword,
    };
  }

  async currentUserQueryFunction() {
    const query = `query { 
      currentUserQuery {
        currentId, email, photoURL
      } 
    }`;
    const result = await graphQLFetch(query);
    return result.currentUserQuery;
  }

  async topup() {
    const topupAmount = document.getElementById("topup").value;
    if (topupAmount <= 0) {
      alert('You should enter a positive value!');
    } else {
      const userId = this.state.currentUser.id;
      const topupInput = {amount: topupAmount, userId: userId};
      const mutation = `mutation topup($topupInput: TopupInput!) {
        topup(topupInput: $topupInput)
      }`;
      const result = await graphQLFetch(mutation, {topupInput});
      const newBalance = result.topup;
      console.log(newBalance);

      const newHistory = await this.historyQuery(userId);

      this.setState({balance: newBalance, history: newHistory}, () => {alert(`You add ${parseFloat(topupAmount)} SGD into your amount`)});
    }
  }

  async updateProfile(firstName, lastName) {
    if (firstName + ' ' + lastName == this.state.currentUser.displayName) {
      alert('Nothing change, please check what you enter!');
    } else {
      const profileInput = {userId: this.state.currentUser.id, firstName: firstName, lastName: lastName};
      const mutation = `mutation updateProfile($profileInput: ProfileInput!) {
        updateProfile(profileInput: $profileInput)
      }`;
      const result = await graphQLFetch(mutation, {profileInput});
      const newDisplayName = firstName + ' ' + lastName;
      const newUser = Object.assign({}, this.state.currentUser);
      newUser.displayName = newDisplayName;
      this.setState({currentUser: newUser}, alert(`You have changed your firstName to ${firstName}, and lastName to ${lastName}`));
    }
  }

  async updatePassword(password, confirm) {
    if (password == '' || confirm == '') {
      alert('You must enter the new password twice');
      return false;
    }
    if (password.length * confirm.length < 9) {
      alert('Your new password is too short');
      return false;
    }
    if (password != confirm) {
      alert('You must enter the new password twice correctly');
      return false;
    }
    const passwordInput = {userId: this.state.currentUser.id, password: password};
    const mutation = `mutation updatePassword($passwordInput: PasswordInput!) {
      updatePassword(passwordInput: $passwordInput)
    }`;
    const result = await graphQLFetch(mutation, {passwordInput});
    alert(result.updatePassword);
  }

  async loadData(userId, email, photoURL) {
    const resultFind = await this.userQuery(email);
    const currentUser =
    {
      id: resultFind.userFind.id,
      displayName: resultFind.userFind.firstName + ' ' + resultFind.userFind.lastName,
      email: email,
      // photoURL: '/static/mock-images/avatars/avatar_' + String(resultFind.userFind.id % 25) + '.jpg',
      photoURL: photoURL,
    };

    const newBalance = resultFind.userFind.balance;
    const newtypes = await this.typesQuery();
    const newWallet = await this.walletQuery(userId);
    const newHistory = await this.historyQuery(userId);
    const newOrders = await this.orderQuery(userId);
    this.setState({ currentUser: currentUser, balance: newBalance, history: newHistory, wallet: newWallet, types: newtypes, orders: newOrders }, ()=>{} );
  }

  async userQuery(email) {
    const queryUser = `query userFind($email: String!) {
      userFind(email: $email) {
        _id id email firstName lastName password balance photoURL
      }
    }`;
    const resultFind = await graphQLFetch(queryUser, { email });
    return resultFind;
  }

  async typesQuery() {
    const typesList = `query {
      typesList {
        id symbol description price
      }
    }`;
    const typesResult = await graphQLFetch(typesList);
    const newtypes = typesResult.typesList;
    return newtypes;
  }

  async walletQuery(userId) {
    const walletDetail = `query walletDetail($userId: Int!) {
      walletDetail(userId: $userId) {
        id symbol quantity
      }
    }`;
    const walletResult = await graphQLFetch(walletDetail, { userId });
    const newWallet = walletResult.walletDetail;
    newWallet.sort(function (a, b) {
      return a.id - b.id;
    });
    return newWallet;
  }

  async historyQuery(userId) {
    const historyList = `query historyList($userId: Int!) {
      historyList(userId: $userId) {
        id time balance
      }
    }`;
    const historyResult = await graphQLFetch(historyList, { userId });
    const newHistory = historyResult.historyList;
    return newHistory;
  }

  async orderQuery(userId) {
    const orderList = `query orderList($userId: Int!) {
      orderList(userId: $userId) {
        id currentState symbol quantity price amount
      }
    }`;
    const orderResult = await graphQLFetch(orderList, { userId });
    const newOrders = orderResult.orderList;
    return newOrders;
  }

  async balanceQuery(userId) {
    const balanceDetail = `query balanceDetail($userId: Int!) {
      balanceDetail (userId: $userId)
    }`;
    const balanceResult = await graphQLFetch(balanceDetail, { userId });
    const newBalance = balanceResult.balanceDetail;
    return newBalance;
  }

  async logout() {
    if (this.state.currentUser.email != '') {
      const query = `query { logout }`;
      const result = await graphQLFetch(query);
      this.setState({currentUser: account, balance: 0, types: [], wallet: [], history: []})
      alert(result.logout);
    } else {
      alert("You have not logged in!");
    }
  }

  async login(email, password) {
    this.changePage("Assets");

    if (this.state.currentUser.email != '') {
      alert("You have logged in");
      return true;
    }

    const queryUserList = `query {
      users {
        id email firstName lastName password balance photoURL
      }
    }`;
    const userList = await graphQLFetch(queryUserList);
    if (userList.users.length === 0) {
      alert("Before log in, you should first register!");
      return false;
    }

    const query = `query login($user: UserInputs!) {
      login(user: $user)
    }`;
    const user = 
    {
      email: email,
      firstName: '',
      lastName: '',
      password: password,
      photoURL: '',
    };

    const data = await graphQLFetch(query, { user });
    if (data !== null) {
      alert(data.login);
      if (data.login === 'Successfully login!') {
        const resultFind = await this.userQuery(email);
        const currentUser =
        {
          id: resultFind.userFind.id,
          displayName: resultFind.userFind.firstName + ' ' + resultFind.userFind.lastName,
          email: email,
          photoURL: resultFind.userFind.photoURL,
        };
        const userId = currentUser.id;
        const newBalance = resultFind.userFind.balance;

        const newtypes = await this.typesQuery();
        
        const newWallet = await this.walletQuery(userId);

        const newHistory = await this.historyQuery(userId);

        const newOrders = await this.orderQuery(userId);
        
        this.setState({ currentUser: currentUser, balance: newBalance, history: newHistory, wallet: newWallet, types: newtypes, orders: newOrders });
        return true;
      }
    }
    return false;
  }

  async register(firstName, lastName, email, password, photoURL='') {
    this.changePage("Assets");

    const mutation = `mutation register($user: UserInputs!) {
      register(user: $user)
    }`;
    const user = 
    {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
      photoURL: photoURL == ''? '' : photoURL,
    };

    const data = await graphQLFetch(mutation, { user });
    if (data !== null) {
      alert(data.register);
      if (data.register === 'Successfully register!') {
        const resultFind = await this.userQuery(email);
        const currentUser =
        {
          id: resultFind.userFind.id,
          displayName: resultFind.userFind.firstName + ' ' + resultFind.userFind.lastName,
          email: email,
          photoURL: resultFind.userFind.photoURL,
        };
        const userId = currentUser.id;
        const newBalance = resultFind.userFind.balance;

        const newtypes = await this.typesQuery();

        const newWallet = await this.walletQuery(userId);

        const newHistory = await this.historyQuery(userId);

        const newOrders = await this.orderQuery(userId);

        this.setState({ currentUser: currentUser, balance: newBalance, history: newHistory, wallet: newWallet, types: newtypes, orders: newOrders });
        return true;
      }
    }
    return false;
  }

  getAssets() {
    const assets = [];
    this.state.wallet.map((item) => {
      /*assets.push({ id: item.id, symbol: item.symbol, balance: item.balance, price: this.state.types.find(type => type.id == item.id).price });*/
      assets.push({ id: item.id, symbol: item.symbol, quantity: item.quantity, description: this.state.types.find(type => type.id == item.id).description });
      }
    );
    return assets;
  }

  getOrders() {
    const orders = [];
    this.state.orders.map((item) => {
          orders.push({ id: item.id, state: item.currentState, symbol: item.symbol, quantity: item.quantity, price: item.price, amount: item.amount });
        }
    );
    return orders.reverse();
  }

  async buy() {
    const quantity = document.getElementById('quantity').value;
    if (quantity > 0) {
      const userId = this.state.currentUser.id;
      const typeId = document.getElementById('type').value;
      const buyOrderType = document.getElementById('buyOrderType').value;
      let price = 0;
      if (buyOrderType == 'Limit') {
        price = document.getElementById('price').value;
        if (price <= 0) {
          alert("Please enter a possitive price!");
          return false;
        }
      }

      const mutation = `mutation walletItemBuy($item: WalletItemInput!) {
        walletItemBuy(item: $item)
      }`;
      const item =
      {
        userId: userId,
        id: typeId,
        quantity: quantity,
        price: price,
      };
      const data = await graphQLFetch(mutation, { item });

      if (data !== null) {
        const newWallet = await this.walletQuery(userId);

        const newHistory = await this.historyQuery(userId);

        const newBalance = await this.balanceQuery(userId);

        const newOrders = await this.orderQuery(userId);

        this.setState({ wallet: newWallet, balance : newBalance, history: newHistory, orders: newOrders }, () => { alert(data.walletItemBuy); });
      }
    } else {
      alert("Please enter a positive modification!");
    }
  }

  async sell() {
    if ( this.state.wallet.length === 0 ) {
      alert("Before sell, you should buy something");
    } else {
      const typeId = document.getElementById('type').value;
      const symbol = this.state.types.find(type => type.id == typeId).symbol;
      const item = this.state.wallet.find(item => item.id == typeId);
      if (item != undefined) {
        const quantity = document.getElementById('quantity').value;
        if (quantity > 0) {
          const typeQuantity = item.quantity;
          if (typeQuantity >= quantity) {
            const userId = this.state.currentUser.id;
            const mutation = `mutation walletItemSell($item: WalletItemInput!) {
              walletItemSell(item: $item)
            }`;
            const item = 
            {
              userId: userId,
              id: typeId,
              quantity: quantity
            };
            const data = await graphQLFetch(mutation, { item });
    
            if (data !== null) {
              const newWallet = await this.walletQuery(userId);
    
              const newHistory = await this.historyQuery(userId);
    
              const newBalance = await this.balanceQuery(userId);

              const newOrders = await this.orderQuery(userId);

              this.setState({ wallet: newWallet, balance : newBalance, history: newHistory, orders: newOrders }, () => { alert(data.walletItemSell); });
            }
          } else {
            alert(`You do not have enough ${symbol}! You only have ${typeQuantity}`);
          }
        } else {
          alert("Please enter a positive modification!");
        }
      } else {
        alert(`You do not own ${symbol}!`);
      }
    }
  }
  
  async convert() {
    if ( this.state.wallet.length === 0 ) {
      alert("Before convert, you should buy something");
    } else {
      const typeIdFrom = document.getElementById('type-from').value;
      const symbolFrom = this.state.types.find(type => type.id == typeIdFrom).symbol;
      const typeIdTo = document.getElementById('type-to').value;
      const symbolTo = this.state.types.find(type => type.id == typeIdTo).symbol;
      if (typeIdFrom == typeIdTo) {
        alert('From and To types should not be the same!');
      } else {
        const itemFrom = this.state.wallet.find(type => type.id == typeIdFrom);
        if (itemFrom !== undefined) {
          const quantity = document.getElementById('quantity').value;
          if (quantity > 0) {
            if (itemFrom.quantity >= quantity) {
              const userId = this.state.currentUser.id;
              const mutation = `mutation walletItemConvert($item: WalletConvertItemInput!) {
                walletItemConvert(item: $item)
              }`;
              const item = 
              {
                userId: userId,
                idFrom: typeIdFrom,
                idTo: typeIdTo,
                quantity: quantity
              };
              const data = await graphQLFetch(mutation, { item });
      
              if (data !== null) {
                const newWallet = await this.walletQuery(userId);
      
                const newHistory = await this.historyQuery(userId);
      
                const newBalance = await this.balanceQuery(userId);

                const newOrders = await this.orderQuery(userId);

                this.setState({ wallet: newWallet, balance : newBalance, history: newHistory, orders: newOrders }, () => { alert(data.walletItemConvert); });
              }
            } else {
              alert(`You do not have enough ${symbolFrom}! You only have ${itemFrom.quantity}`);
            }
          } else {
            alert("Please enter a positive modification!");
          }
        } else {
          alert(`You do not own ${symbolFrom}!`);
        }
      }
    }
  }

  changePage(page) {
    this.setState({ page : page });
  }

  showPage() {
    var temp
    switch(this.state.page) {
      case 'Assets':
        temp = <AssetsPage />
        break;
      case 'Trade':
        temp = <TradePage />
        break;
      case 'Login':
        temp = <LoginPage />
        break;
      case 'Register':
        temp = <RegisterPage />
        break;
      case 'Profile':
        temp = <ProfilePage />
        break;
      case 'Setting':
        temp = <SettingPage />
        break;
      case 'Order':
        temp = <OrderPage />
        break;
      case 'Blog':
        temp = <BlogPage />
        break;
      default:
        temp = <AssetsPage />
    }
    return temp;
  }

  async checkLoginStatus() {
    const result = await this.currentUserQueryFunction();
    result.currentId === -1? this.state.webHistory.replace('/login') : await (async () => {await this.loadData(result.currentId, result.email, result.photoURL);})();
  }

  render() {
    return (
      <React.Fragment>
        	<Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
            <Route path="/">
              <HomePageContent changePage = {this.changePage} showPage = {this.showPage} state = {this.state} />
            </Route>
          </Switch>
          {this.state.currentUser === account? this.state.webHistory.replace('/login') : (() => {this.state.webHistory.replace('/')})()}
      </React.Fragment>
    );
  }
}