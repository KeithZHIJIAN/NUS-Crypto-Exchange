import * as React from 'react';
import {Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import AssetsPage from './AssetsPage';
import TradePage from './TradePage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import HomePageContent from '../pageContent/HomePageContent';
import account from '../_mocks_/account';
import graphQLFetch from '../graphQLFetch';
import { createHashHistory } from 'history';

//保留n位小数
function roundFun(value, n) {
  return Math.round(value*Math.pow(10,n))/Math.pow(10,n);
}

// For copy of dictionary, use slice for array
function clone(obj) {
  var copy = {};
  for (var attr in obj) {
    copy[attr] = typeof(obj[attr])==='object' ? clone(obj[attr]) : obj[attr];
  }
  return copy;
}

export default class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 'Assets',
      balance: 0,
      types: [],
      wallet: [],
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
    this.walletQuery = this.walletQuery.bind(this);
    this.historyQuery = this.historyQuery.bind(this);
    this.balanceQuery = this.balanceQuery.bind(this);
    this.userQuery = this.userQuery.bind(this);
    this.topup = this.topup.bind(this);
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
    topup: PropTypes.func,
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
      topup: this.topup,
    };
  }

  async currentUserQueryFunction() {
    const query = `query { 
      currentUserQuery {
        currentId, email
      } 
    }`;
    const result = await graphQLFetch(query);
    return result.currentUserQuery;
  }

  async topup() {
    const topupAmount = document.getElementById("topup").value;
    const userId = this.state.currentUser.id;
    const topupInput = { amount: topupAmount, userId: userId };
    const mutation = `mutation topup($topupInput: TopupInput!) {
      topup(topupInput: $topupInput)
    }`;
    const result = await graphQLFetch(mutation, { topupInput });
    const newBalance = result.topup;
    console.log(newBalance);

    const newHistory = await this.historyQuery(userId);

    this.setState({ balance: newBalance, history: newHistory }, ()=>{} );
  }

  async loadData(userId, email) {
    const resultFind = await this.userQuery(email);
    const currentUser =
    {
      id: resultFind.userFind.id,
      displayName: resultFind.userFind.firstName + ' ' + resultFind.userFind.lastName,
      email: email,
      photoURL: '/static/mock-images/avatars/avatar_' + String(resultFind.userFind.id % 25) + '.jpg',
    };

    const newBalance = resultFind.userFind.balance;
    const newtypes = await this.typesQuery();
    const newWallet = await this.walletQuery(userId);
    const newHistory = await this.historyQuery(userId);
    this.setState({ currentUser: currentUser, balance: newBalance, history: newHistory, wallet: newWallet, types: newtypes }, ()=>{} );
  }

  async userQuery(email) {
    const queryUser = `query userFind($email: String!) {
      userFind(email: $email) {
        _id id email firstName lastName password balance
      }
    }`;
    const resultFind = await graphQLFetch(queryUser, { email });
    return resultFind;
  }

  async typesQuery() {
    const typesList = `query {
      typesList {
        id typeName price
      }
    }`;
    const typesResult = await graphQLFetch(typesList);
    const newtypes = typesResult.typesList;
    return newtypes;
  }

  async walletQuery(userId) {
    const walletDetail = `query walletDetail($userId: Int!) {
      walletDetail(userId: $userId) {
        id typeName balance
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
    };
  }

  async login(email, password, photoURL='') {
    if (this.state.currentUser.email != '') {
      alert("You have logged in");
      return true;
    }

    const queryUserList = `query {
      users {
        id email firstName lastName password balance
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
          photoURL: photoURL == ''? '/static/mock-images/avatars/avatar_' + String(resultFind.userFind.id % 25) + '.jpg' : photoURL,
        };
        const userId = currentUser.id;
        const newBalance = resultFind.userFind.balance;

        const newtypes = await this.typesQuery();
        
        const newWallet = await this.walletQuery(userId);

        const newHistory = await this.historyQuery(userId);
        
        this.setState({ currentUser: currentUser, balance: newBalance, history: newHistory, wallet: newWallet, types: newtypes });
        return true;
      }
    }
    return false;
  }

  async register(firstName, lastName, email, password, photoURL='') {
    const mutation = `mutation register($user: UserInputs!) {
      register(user: $user)
    }`;
    const user = 
    {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
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
          photoURL: photoURL == ''? '/static/mock-images/avatars/avatar_' + String(resultFind.userFind.id % 25) + '.jpg' : photoURL,
        };
        const userId = currentUser.id;
        const newBalance = resultFind.userFind.balance;

        const newtypes = await this.typesQuery();

        const newWallet = await this.walletQuery(userId);

        const newHistory = await this.historyQuery(userId);

        this.setState({ currentUser: currentUser, balance: newBalance, history: newHistory, wallet: newWallet, types: newtypes });
        return true;
      }
    }
    return false;
  }

  getAssets() {
    const assets = [];
    this.state.wallet.map((item) => {
        assets.push({ id: item.id, typeName: item.typeName, balance: item.balance, price: this.state.types.find(type => type.id == item.id).price });
      }
    );
    return assets;
  }

  async buy() {
    const modification = document.getElementById('outlined-adornment-amount').value;
    if (modification > 0) {
      if (this.state.balance >= modification) {
        const userId = this.state.currentUser.id;
        const typeId = document.getElementById('uncontrolled-native').value;
        
        const mutation = `mutation walletItemBuy($item: WalletItemInput!) {
          walletItemBuy(item: $item)
        }`;
        const item = 
        {
          userId: userId, 
          id: typeId,
          modification: modification
        };
        const data = await graphQLFetch(mutation, { item });

        if (data !== null) {
          const newWallet = await this.walletQuery(userId);

          const newHistory = await this.historyQuery(userId);

          const newBalance = await this.balanceQuery(userId);

          this.setState({ wallet: newWallet, balance : newBalance, history: newHistory }, () => { alert(data.walletItemBuy); });
        }
      } else {
        alert(`Do not have enough money! Only have ${this.state.balance}`);
      }
    } else {
      alert("Please enter a non-negative modification!");
    }
  }

  async sell() {
    if ( this.state.wallet.length === 0 ) {
      alert("Before sell, you should buy something");
    } else {
      const typeId = document.getElementById('uncontrolled-native').value;
      const typeName = this.state.types.find(type => type.id == typeId).typeName;
      const item = this.state.wallet.find(item => item.id == typeId);
      if (item != undefined) {
        const modification = document.getElementById('outlined-adornment-amount').value;
        if (modification > 0) {
          const typeBalance = item.balance;
          if (typeBalance >= modification) {
            const userId = this.state.currentUser.id;
            const mutation = `mutation walletItemSell($item: WalletItemInput!) {
              walletItemSell(item: $item)
            }`;
            const item = 
            {
              userId: userId,
              id: typeId,
              modification: modification
            };
            const data = await graphQLFetch(mutation, { item });
    
            if (data !== null) {
              const newWallet = await this.walletQuery(userId);
    
              const newHistory = await this.historyQuery(userId);
    
              const newBalance = await this.balanceQuery(userId);

              this.setState({ wallet: newWallet, balance : newBalance, history: newHistory }, () => { alert(data.walletItemSell);; });
            };
          } else {
            alert(`You do not have enough ${typeName}! You only have ${typeBalance}`);
          }
        } else {
          alert("Please enter a non-negative modification!");
        }
      } else {
        alert(`You do not own ${typeName}!`);
      }
    }
  }
  
  async convert() {
    if ( this.state.wallet.length === 0 ) {
      alert("Before convert, you should buy something");
    } else {
      const typeIdFrom = document.getElementById('uncontrolled-native-from').value;
      const typeNameFrom = this.state.types.find(type => type.id == typeIdFrom).typeName;
      const typeIdTo = document.getElementById('uncontrolled-native-to').value;
      const typeNameTo = this.state.types.find(type => type.id == typeIdTo).typeName;
      if (typeIdFrom == typeIdTo) {
        alert('From and To types should not be the same!');
      } else {
        const itemFrom = this.state.wallet.find(type => type.id == typeIdFrom);
        if (itemFrom !== undefined) {
          const modification = document.getElementById('outlined-adornment-amount').value;
          if (modification > 0) {
            if (itemFrom.balance >= modification) {
              const userId = this.state.currentUser.id;
              const mutation = `mutation walletItemConvert($item: WalletConvertItemInput!) {
                walletItemConvert(item: $item)
              }`;
              const item = 
              {
                userId: userId,
                idFrom: typeIdFrom,
                idTo: typeIdTo,
                modification: modification
              };
              const data = await graphQLFetch(mutation, { item });
      
              if (data !== null) {
                const newWallet = await this.walletQuery(userId);
      
                const newHistory = await this.historyQuery(userId);
      
                const newBalance = await this.balanceQuery(userId);

                this.setState({ wallet: newWallet, balance : newBalance, history: newHistory }, () => { alert(data.walletItemConvert); console.log(this.state); });
              };
            } else {
              alert(`You do not have enough ${typeNameFrom}! You only have ${itemFrom.balance}`);
            }
          } else {
            alert("Please enter a non-negative modification!");
          }
        } else {
          alert(`You do not own ${typeNameFrom}!`);
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
      default:
        temp = <AssetsPage />
    }
    return temp;
  }

  async checkLoginStatus() {
    const result = await this.currentUserQueryFunction();
    result.currentId === -1? this.state.webHistory.replace('/login') : await (async () => {await this.loadData(result.currentId, result.email);})();
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