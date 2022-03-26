import * as React from 'react';
import PropTypes from 'prop-types';
import AssetsPage from './AssetsPage';
import TradePage from './TradePage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import HomePageContent from '../pageContent/HomePageContent';
import account from '../_mocks_/account';
import graphQLFetch from '../graphQLFetch.js';

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
  }

  async componentDidMount() {
    const walletDetail = `query {
      walletDetail {
        id typeName balance
      }
    }`;
    const walletResult = await graphQLFetch(walletDetail);
    const newWallet = walletResult.walletDetail;
    newWallet.sort(function (a, b) {
      return a.id - b.id;
    });

    const historyList = `query {
      historyList {
        id time balance
      }
    }`;
    const historyResult = await graphQLFetch(historyList);
    const newHistory = historyResult.historyList;

    const balanceDetail = `query {
      balanceDetail
    }`;
    const balanceResult = await graphQLFetch(balanceDetail);
    const newBalance = balanceResult.balanceDetail;

    const typesList = `query {
      typesList {
        id typeName price
      }
    }`;
    const typesResult = await graphQLFetch(typesList);
    const newtypes = typesResult.typesList;

    this.setState({ wallet: newWallet, balance : newBalance, history: newHistory, types: newtypes }, () => {});
  }
  
  //定义孙子及以后辈组件能接收到的参数和方法
  static childContextTypes = {
    balance: PropTypes.number,
    history: PropTypes.array,
    wallet: PropTypes.array,
    types: PropTypes.array,
    currentUser: PropTypes.object,
    changePage: PropTypes.func,
    buy: PropTypes.func,
    sell: PropTypes.func,
    convert: PropTypes.func,
    register: PropTypes.func,
    login: PropTypes.func,
    logout: PropTypes.func,
    getAssets: PropTypes.func,
  };

  //将参数和处理方法传递给context
  getChildContext() {
    return {
      balance: this.state.balance,
      wallet: this.state.wallet,
      types: this.state.types,
      history: this.state.history,
      currentUser: this.state.currentUser,
      changePage: this.changePage,
      buy: this.buy,
      sell: this.sell,
      convert: this.convert,
      register: this.register,
      login: this.login,
      logout: this.logout,
      getAssets: this.getAssets,
    };
  }

  logout() {
    if (this.state.currentUser.email != '') {
      this.setState({currentUser: account});
      alert("Successfully log out!");
    } else {
      alert("You do not login!");
    };
  }

  async login(email, password) {
    if (this.state.currentUser.email != '') {
      alert("You have logged in");
      return true;
    }

    const queryUserList = `query {
      users {
        id email firstName lastName password
      }
    }`;
    const userList = await graphQLFetch(queryUserList);
    if (userList.users.length === 0) {
      alert("Before log in, you should first register!");
      return true;
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
        const queryUser = `query userFind($email: String!) {
          userFind(email: $email) {
            _id id email firstName lastName password
          }
        }`;
        const resultFind = await graphQLFetch(queryUser, { email });
        const currentUser =
        {
          displayName: resultFind.userFind.firstName + ' ' + resultFind.userFind.lastName,
          email: email,
          photoURL: '/static/mock-images/avatars/avatar_' + String(resultFind.userFind.id) + '.jpg',
        };
        this.setState({currentUser: currentUser});
        return true;
      }
    }
    return false;
  }

  async register(firstName, lastName, email, password) {
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
        const queryUser = `query userFind($email: String!) {
          userFind(email: $email) {
            _id id email firstName lastName password
          }
        }`;
        const resultFind = await graphQLFetch(queryUser, { email });
        const currentUser =
        {
          displayName: resultFind.userFind.firstName + ' ' + resultFind.userFind.lastName,
          email: email,
          photoURL: '/static/mock-images/avatars/avatar_' + String(resultFind.userFind.id) + '.jpg',
        };
        this.setState({currentUser: currentUser});
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
        const typeId = document.getElementById('uncontrolled-native').value;
        
        const mutation = `mutation walletItemBuy($item: WalletItemInput!) {
          walletItemBuy(item: $item)
        }`;
        const item = 
        {
          id: typeId,
          modification: modification
        };
        const data = await graphQLFetch(mutation, { item });

        if (data !== null) {
          const walletDetail = `query {
            walletDetail {
              id typeName balance
            }
          }`;
          const walletResult = await graphQLFetch(walletDetail);
          const newWallet = walletResult.walletDetail;
          newWallet.sort(function (a, b) {
            return a.id - b.id;
          });

          const historyList = `query {
            historyList {
              id time balance
            }
          }`;
          const historyResult = await graphQLFetch(historyList);
          const newHistory = historyResult.historyList;

          const balanceDetail = `query {
            balanceDetail
          }`;
          const balanceResult = await graphQLFetch(balanceDetail);
          const newBalance = balanceResult.balanceDetail;
          this.setState({ wallet: newWallet, balance : newBalance, history: newHistory }, () => { alert(data.walletItemBuy);; });
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
            const mutation = `mutation walletItemSell($item: WalletItemInput!) {
              walletItemSell(item: $item)
            }`;
            const item = 
            {
              id: typeId,
              modification: modification
            };
            const data = await graphQLFetch(mutation, { item });
    
            if (data !== null) {
              const walletDetail = `query {
                walletDetail {
                  id typeName balance
                }
              }`;
              const walletResult = await graphQLFetch(walletDetail);
              const newWallet = walletResult.walletDetail;
              newWallet.sort(function (a, b) {
                return a.id - b.id;
              });
    
              const historyList = `query {
                historyList {
                  id time balance
                }
              }`;
              const historyResult = await graphQLFetch(historyList);
              const newHistory = historyResult.historyList;
    
              const balanceDetail = `query {
                balanceDetail
              }`;
              const balanceResult = await graphQLFetch(balanceDetail);
              const newBalance = balanceResult.balanceDetail;
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
              const mutation = `mutation walletItemConvert($item: WalletConvertItemInput!) {
                walletItemConvert(item: $item)
              }`;
              const item = 
              {
                idFrom: typeIdFrom,
                idTo: typeIdTo,
                modification: modification
              };
              const data = await graphQLFetch(mutation, { item });
      
              if (data !== null) {
                const walletDetail = `query {
                  walletDetail {
                    id typeName balance
                  }
                }`;
                const walletResult = await graphQLFetch(walletDetail);
                const newWallet = walletResult.walletDetail;
                newWallet.sort(function (a, b) {
                  return a.id - b.id;
                });
      
                const historyList = `query {
                  historyList {
                    id time balance
                  }
                }`;
                const historyResult = await graphQLFetch(historyList);
                const newHistory = historyResult.historyList;
      
                const balanceDetail = `query {
                  balanceDetail
                }`;
                const balanceResult = await graphQLFetch(balanceDetail);
                const newBalance = balanceResult.balanceDetail;
                this.setState({ wallet: newWallet, balance : newBalance, history: newHistory }, () => { alert(data.walletItemConvert);; });
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
    /* console.log(page); */
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

  render() {
    return <HomePageContent changePage = {this.changePage} showPage = {this.showPage} state = {this.state} />;
  }
}