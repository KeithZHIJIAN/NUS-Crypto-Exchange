"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AssetsPage = _interopRequireDefault(require("./AssetsPage"));

var _TradePage = _interopRequireDefault(require("./TradePage"));

var _LoginPage = _interopRequireDefault(require("./LoginPage"));

var _RegisterPage = _interopRequireDefault(require("./RegisterPage"));

var _HomePageContent = _interopRequireDefault(require("../pageContent/HomePageContent"));

var _account = _interopRequireDefault(require("../_mocks_/account"));

var _graphQLFetch = _interopRequireDefault(require("../graphQLFetch.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

//保留n位小数
function roundFun(value, n) {
  return Math.round(value * Math.pow(10, n)) / Math.pow(10, n);
} // For copy of dictionary, use slice for array


function clone(obj) {
  var copy = {};

  for (var attr in obj) {
    copy[attr] = _typeof(obj[attr]) === 'object' ? clone(obj[attr]) : obj[attr];
  }

  return copy;
}

var Homepage = /*#__PURE__*/function (_React$Component) {
  _inherits(Homepage, _React$Component);

  var _super = _createSuper(Homepage);

  function Homepage() {
    var _this;

    _classCallCheck(this, Homepage);

    _this = _super.call(this);
    _this.state = {
      page: 'Assets',
      balance: 0,
      types: [],
      wallet: [],
      currentUser: _account.default,
      history: []
    };
    _this.changePage = _this.changePage.bind(_assertThisInitialized(_this));
    _this.showPage = _this.showPage.bind(_assertThisInitialized(_this));
    _this.buy = _this.buy.bind(_assertThisInitialized(_this));
    _this.sell = _this.sell.bind(_assertThisInitialized(_this));
    _this.convert = _this.convert.bind(_assertThisInitialized(_this));
    _this.register = _this.register.bind(_assertThisInitialized(_this));
    _this.login = _this.login.bind(_assertThisInitialized(_this));
    _this.logout = _this.logout.bind(_assertThisInitialized(_this));
    _this.getAssets = _this.getAssets.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Homepage, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var walletDetail, walletResult, newWallet, historyList, historyResult, newHistory, balanceDetail, balanceResult, newBalance, typesList, typesResult, newtypes;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                walletDetail = "query {\n      walletDetail {\n        id typeName balance\n      }\n    }";
                _context.next = 3;
                return (0, _graphQLFetch.default)(walletDetail);

              case 3:
                walletResult = _context.sent;
                newWallet = walletResult.walletDetail;
                newWallet.sort(function (a, b) {
                  return a.id - b.id;
                });
                historyList = "query {\n      historyList {\n        id time balance\n      }\n    }";
                _context.next = 9;
                return (0, _graphQLFetch.default)(historyList);

              case 9:
                historyResult = _context.sent;
                newHistory = historyResult.historyList;
                balanceDetail = "query {\n      balanceDetail\n    }";
                _context.next = 14;
                return (0, _graphQLFetch.default)(balanceDetail);

              case 14:
                balanceResult = _context.sent;
                newBalance = balanceResult.balanceDetail;
                typesList = "query {\n      typesList {\n        id typeName price\n      }\n    }";
                _context.next = 19;
                return (0, _graphQLFetch.default)(typesList);

              case 19:
                typesResult = _context.sent;
                newtypes = typesResult.typesList;
                this.setState({
                  wallet: newWallet,
                  balance: newBalance,
                  history: newHistory,
                  types: newtypes
                }, function () {});

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }() //定义孙子及以后辈组件能接收到的参数和方法

  }, {
    key: "getChildContext",
    value: //将参数和处理方法传递给context
    function getChildContext() {
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
        getAssets: this.getAssets
      };
    }
  }, {
    key: "logout",
    value: function logout() {
      if (this.state.currentUser.email != '') {
        this.setState({
          currentUser: _account.default
        });
        alert("Successfully log out!");
      } else {
        alert("You do not login!");
      }

      ;
    }
  }, {
    key: "login",
    value: function () {
      var _login = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(email, password) {
        var queryUserList, userList, query, user, data, queryUser, resultFind, currentUser;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(this.state.currentUser.email != '')) {
                  _context2.next = 3;
                  break;
                }

                alert("You have logged in");
                return _context2.abrupt("return", true);

              case 3:
                queryUserList = "query {\n      users {\n        id email firstName lastName password\n      }\n    }";
                _context2.next = 6;
                return (0, _graphQLFetch.default)(queryUserList);

              case 6:
                userList = _context2.sent;

                if (!(userList.users.length === 0)) {
                  _context2.next = 10;
                  break;
                }

                alert("Before log in, you should first register!");
                return _context2.abrupt("return", true);

              case 10:
                query = "query login($user: UserInputs!) {\n      login(user: $user)\n    }";
                user = {
                  email: email,
                  firstName: '',
                  lastName: '',
                  password: password
                };
                _context2.next = 14;
                return (0, _graphQLFetch.default)(query, {
                  user: user
                });

              case 14:
                data = _context2.sent;

                if (!(data !== null)) {
                  _context2.next = 25;
                  break;
                }

                alert(data.login);

                if (!(data.login === 'Successfully login!')) {
                  _context2.next = 25;
                  break;
                }

                queryUser = "query userFind($email: String!) {\n          userFind(email: $email) {\n            _id id email firstName lastName password\n          }\n        }";
                _context2.next = 21;
                return (0, _graphQLFetch.default)(queryUser, {
                  email: email
                });

              case 21:
                resultFind = _context2.sent;
                currentUser = {
                  displayName: resultFind.userFind.firstName + ' ' + resultFind.userFind.lastName,
                  email: email,
                  photoURL: '/static/mock-images/avatars/avatar_' + String(resultFind.userFind.id) + '.jpg'
                };
                this.setState({
                  currentUser: currentUser
                });
                return _context2.abrupt("return", true);

              case 25:
                return _context2.abrupt("return", false);

              case 26:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function login(_x, _x2) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: "register",
    value: function () {
      var _register = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(firstName, lastName, email, password) {
        var mutation, user, data, queryUser, resultFind, currentUser;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                mutation = "mutation register($user: UserInputs!) {\n      register(user: $user)\n    }";
                user = {
                  email: email,
                  firstName: firstName,
                  lastName: lastName,
                  password: password
                };
                _context3.next = 4;
                return (0, _graphQLFetch.default)(mutation, {
                  user: user
                });

              case 4:
                data = _context3.sent;

                if (!(data !== null)) {
                  _context3.next = 15;
                  break;
                }

                alert(data.register);

                if (!(data.register === 'Successfully register!')) {
                  _context3.next = 15;
                  break;
                }

                queryUser = "query userFind($email: String!) {\n          userFind(email: $email) {\n            _id id email firstName lastName password\n          }\n        }";
                _context3.next = 11;
                return (0, _graphQLFetch.default)(queryUser, {
                  email: email
                });

              case 11:
                resultFind = _context3.sent;
                currentUser = {
                  displayName: resultFind.userFind.firstName + ' ' + resultFind.userFind.lastName,
                  email: email,
                  photoURL: '/static/mock-images/avatars/avatar_' + String(resultFind.userFind.id) + '.jpg'
                };
                this.setState({
                  currentUser: currentUser
                });
                return _context3.abrupt("return", true);

              case 15:
                return _context3.abrupt("return", false);

              case 16:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function register(_x3, _x4, _x5, _x6) {
        return _register.apply(this, arguments);
      }

      return register;
    }()
  }, {
    key: "getAssets",
    value: function getAssets() {
      var _this2 = this;

      var assets = [];
      this.state.wallet.map(function (item) {
        assets.push({
          id: item.id,
          typeName: item.typeName,
          balance: item.balance,
          price: _this2.state.types.find(function (type) {
            return type.id == item.id;
          }).price
        });
      });
      return assets;
    }
  }, {
    key: "buy",
    value: function () {
      var _buy = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var modification, typeId, mutation, item, data, walletDetail, walletResult, newWallet, historyList, historyResult, newHistory, balanceDetail, balanceResult, newBalance;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                modification = document.getElementById('outlined-adornment-amount').value;

                if (!(modification > 0)) {
                  _context4.next = 32;
                  break;
                }

                if (!(this.state.balance >= modification)) {
                  _context4.next = 29;
                  break;
                }

                typeId = document.getElementById('uncontrolled-native').value;
                mutation = "mutation walletItemBuy($item: WalletItemInput!) {\n          walletItemBuy(item: $item)\n        }";
                item = {
                  id: typeId,
                  modification: modification
                };
                _context4.next = 8;
                return (0, _graphQLFetch.default)(mutation, {
                  item: item
                });

              case 8:
                data = _context4.sent;

                if (!(data !== null)) {
                  _context4.next = 27;
                  break;
                }

                walletDetail = "query {\n            walletDetail {\n              id typeName balance\n            }\n          }";
                _context4.next = 13;
                return (0, _graphQLFetch.default)(walletDetail);

              case 13:
                walletResult = _context4.sent;
                newWallet = walletResult.walletDetail;
                newWallet.sort(function (a, b) {
                  return a.id - b.id;
                });
                historyList = "query {\n            historyList {\n              id time balance\n            }\n          }";
                _context4.next = 19;
                return (0, _graphQLFetch.default)(historyList);

              case 19:
                historyResult = _context4.sent;
                newHistory = historyResult.historyList;
                balanceDetail = "query {\n            balanceDetail\n          }";
                _context4.next = 24;
                return (0, _graphQLFetch.default)(balanceDetail);

              case 24:
                balanceResult = _context4.sent;
                newBalance = balanceResult.balanceDetail;
                this.setState({
                  wallet: newWallet,
                  balance: newBalance,
                  history: newHistory
                }, function () {
                  alert(data.walletItemBuy);
                  ;
                });

              case 27:
                _context4.next = 30;
                break;

              case 29:
                alert("Do not have enough money! Only have ".concat(this.state.balance));

              case 30:
                _context4.next = 33;
                break;

              case 32:
                alert("Please enter a non-negative modification!");

              case 33:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function buy() {
        return _buy.apply(this, arguments);
      }

      return buy;
    }()
  }, {
    key: "sell",
    value: function () {
      var _sell = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var typeId, typeName, item, modification, typeBalance, mutation, _item, data, walletDetail, walletResult, newWallet, historyList, historyResult, newHistory, balanceDetail, balanceResult, newBalance;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!(this.state.wallet.length === 0)) {
                  _context5.next = 4;
                  break;
                }

                alert("Before sell, you should buy something");
                _context5.next = 45;
                break;

              case 4:
                typeId = document.getElementById('uncontrolled-native').value;
                typeName = this.state.types.find(function (type) {
                  return type.id == typeId;
                }).typeName;
                item = this.state.wallet.find(function (item) {
                  return item.id == typeId;
                });

                if (!(item != undefined)) {
                  _context5.next = 44;
                  break;
                }

                modification = document.getElementById('outlined-adornment-amount').value;

                if (!(modification > 0)) {
                  _context5.next = 41;
                  break;
                }

                typeBalance = item.balance;

                if (!(typeBalance >= modification)) {
                  _context5.next = 38;
                  break;
                }

                mutation = "mutation walletItemSell($item: WalletItemInput!) {\n              walletItemSell(item: $item)\n            }";
                _item = {
                  id: typeId,
                  modification: modification
                };
                _context5.next = 16;
                return (0, _graphQLFetch.default)(mutation, {
                  item: _item
                });

              case 16:
                data = _context5.sent;

                if (!(data !== null)) {
                  _context5.next = 35;
                  break;
                }

                walletDetail = "query {\n                walletDetail {\n                  id typeName balance\n                }\n              }";
                _context5.next = 21;
                return (0, _graphQLFetch.default)(walletDetail);

              case 21:
                walletResult = _context5.sent;
                newWallet = walletResult.walletDetail;
                newWallet.sort(function (a, b) {
                  return a.id - b.id;
                });
                historyList = "query {\n                historyList {\n                  id time balance\n                }\n              }";
                _context5.next = 27;
                return (0, _graphQLFetch.default)(historyList);

              case 27:
                historyResult = _context5.sent;
                newHistory = historyResult.historyList;
                balanceDetail = "query {\n                balanceDetail\n              }";
                _context5.next = 32;
                return (0, _graphQLFetch.default)(balanceDetail);

              case 32:
                balanceResult = _context5.sent;
                newBalance = balanceResult.balanceDetail;
                this.setState({
                  wallet: newWallet,
                  balance: newBalance,
                  history: newHistory
                }, function () {
                  alert(data.walletItemSell);
                  ;
                });

              case 35:
                ;
                _context5.next = 39;
                break;

              case 38:
                alert("You do not have enough ".concat(typeName, "! You only have ").concat(typeBalance));

              case 39:
                _context5.next = 42;
                break;

              case 41:
                alert("Please enter a non-negative modification!");

              case 42:
                _context5.next = 45;
                break;

              case 44:
                alert("You do not own ".concat(typeName, "!"));

              case 45:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function sell() {
        return _sell.apply(this, arguments);
      }

      return sell;
    }()
  }, {
    key: "convert",
    value: function () {
      var _convert = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var typeIdFrom, typeNameFrom, typeIdTo, typeNameTo, itemFrom, modification, mutation, item, data, walletDetail, walletResult, newWallet, historyList, historyResult, newHistory, balanceDetail, balanceResult, newBalance;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!(this.state.wallet.length === 0)) {
                  _context6.next = 4;
                  break;
                }

                alert("Before convert, you should buy something");
                _context6.next = 50;
                break;

              case 4:
                typeIdFrom = document.getElementById('uncontrolled-native-from').value;
                typeNameFrom = this.state.types.find(function (type) {
                  return type.id == typeIdFrom;
                }).typeName;
                typeIdTo = document.getElementById('uncontrolled-native-to').value;
                typeNameTo = this.state.types.find(function (type) {
                  return type.id == typeIdTo;
                }).typeName;

                if (!(typeIdFrom == typeIdTo)) {
                  _context6.next = 12;
                  break;
                }

                alert('From and To types should not be the same!');
                _context6.next = 50;
                break;

              case 12:
                itemFrom = this.state.wallet.find(function (type) {
                  return type.id == typeIdFrom;
                });

                if (!(itemFrom !== undefined)) {
                  _context6.next = 49;
                  break;
                }

                modification = document.getElementById('outlined-adornment-amount').value;

                if (!(modification > 0)) {
                  _context6.next = 46;
                  break;
                }

                if (!(itemFrom.balance >= modification)) {
                  _context6.next = 43;
                  break;
                }

                mutation = "mutation walletItemConvert($item: WalletConvertItemInput!) {\n                walletItemConvert(item: $item)\n              }";
                item = {
                  idFrom: typeIdFrom,
                  idTo: typeIdTo,
                  modification: modification
                };
                _context6.next = 21;
                return (0, _graphQLFetch.default)(mutation, {
                  item: item
                });

              case 21:
                data = _context6.sent;

                if (!(data !== null)) {
                  _context6.next = 40;
                  break;
                }

                walletDetail = "query {\n                  walletDetail {\n                    id typeName balance\n                  }\n                }";
                _context6.next = 26;
                return (0, _graphQLFetch.default)(walletDetail);

              case 26:
                walletResult = _context6.sent;
                newWallet = walletResult.walletDetail;
                newWallet.sort(function (a, b) {
                  return a.id - b.id;
                });
                historyList = "query {\n                  historyList {\n                    id time balance\n                  }\n                }";
                _context6.next = 32;
                return (0, _graphQLFetch.default)(historyList);

              case 32:
                historyResult = _context6.sent;
                newHistory = historyResult.historyList;
                balanceDetail = "query {\n                  balanceDetail\n                }";
                _context6.next = 37;
                return (0, _graphQLFetch.default)(balanceDetail);

              case 37:
                balanceResult = _context6.sent;
                newBalance = balanceResult.balanceDetail;
                this.setState({
                  wallet: newWallet,
                  balance: newBalance,
                  history: newHistory
                }, function () {
                  alert(data.walletItemConvert);
                  ;
                });

              case 40:
                ;
                _context6.next = 44;
                break;

              case 43:
                alert("You do not have enough ".concat(typeNameFrom, "! You only have ").concat(itemFrom.balance));

              case 44:
                _context6.next = 47;
                break;

              case 46:
                alert("Please enter a non-negative modification!");

              case 47:
                _context6.next = 50;
                break;

              case 49:
                alert("You do not own ".concat(typeNameFrom, "!"));

              case 50:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function convert() {
        return _convert.apply(this, arguments);
      }

      return convert;
    }()
  }, {
    key: "changePage",
    value: function changePage(page) {
      /* console.log(page); */
      this.setState({
        page: page
      });
    }
  }, {
    key: "showPage",
    value: function showPage() {
      var temp;

      switch (this.state.page) {
        case 'Assets':
          temp = /*#__PURE__*/React.createElement(_AssetsPage.default, null);
          break;

        case 'Trade':
          temp = /*#__PURE__*/React.createElement(_TradePage.default, null);
          break;

        case 'Login':
          temp = /*#__PURE__*/React.createElement(_LoginPage.default, null);
          break;

        case 'Register':
          temp = /*#__PURE__*/React.createElement(_RegisterPage.default, null);
          break;

        default:
          temp = /*#__PURE__*/React.createElement(_AssetsPage.default, null);
      }

      return temp;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_HomePageContent.default, {
        changePage: this.changePage,
        showPage: this.showPage,
        state: this.state
      });
    }
  }]);

  return Homepage;
}(React.Component);

exports.default = Homepage;

_defineProperty(Homepage, "childContextTypes", {
  balance: _propTypes.default.number,
  history: _propTypes.default.array,
  wallet: _propTypes.default.array,
  types: _propTypes.default.array,
  currentUser: _propTypes.default.object,
  changePage: _propTypes.default.func,
  buy: _propTypes.default.func,
  sell: _propTypes.default.func,
  convert: _propTypes.default.func,
  register: _propTypes.default.func,
  login: _propTypes.default.func,
  logout: _propTypes.default.func,
  getAssets: _propTypes.default.func
});