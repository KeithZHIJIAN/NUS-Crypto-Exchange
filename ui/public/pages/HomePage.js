"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AssetsPage = _interopRequireDefault(require("./AssetsPage"));

var _TradePage = _interopRequireDefault(require("./TradePage"));

var _LoginPage = _interopRequireDefault(require("./LoginPage"));

var _RegisterPage = _interopRequireDefault(require("./RegisterPage"));

var _OrderPage = _interopRequireDefault(require("./OrderPage"));

var _SettingPage = _interopRequireDefault(require("./SettingPage"));

var _ProfilePage = _interopRequireDefault(require("./ProfilePage"));

var _BlogPage = _interopRequireDefault(require("./BlogPage"));

var _HomePageContent = _interopRequireDefault(require("../pageContent/HomePageContent"));

var _account = _interopRequireDefault(require("../_mocks_/account"));

var _graphQLFetch = _interopRequireDefault(require("../graphQLFetch"));

var _history = require("history");

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

//保留n位小数
function roundFun(value, n) {
  return Math.round(value * Math.pow(10, n)) / Math.pow(10, n);
} // // For copy of dictionary, use slice for array
// function clone(obj) {
//   var copy = {};
//   for (var attr in obj) {
//     copy[attr] = typeof(obj[attr])==='object' ? clone(obj[attr]) : obj[attr];
//   }
//   return copy;
// }


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
      orders: [],
      currentUser: _account.default,
      history: [],
      webHistory: (0, _history.createHashHistory)()
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
    _this.getOrders = _this.getOrders.bind(_assertThisInitialized(_this));
    _this.walletQuery = _this.walletQuery.bind(_assertThisInitialized(_this));
    _this.historyQuery = _this.historyQuery.bind(_assertThisInitialized(_this));
    _this.orderQuery = _this.orderQuery.bind(_assertThisInitialized(_this));
    _this.balanceQuery = _this.balanceQuery.bind(_assertThisInitialized(_this));
    _this.userQuery = _this.userQuery.bind(_assertThisInitialized(_this));
    _this.topup = _this.topup.bind(_assertThisInitialized(_this));
    _this.updateProfile = _this.updateProfile.bind(_assertThisInitialized(_this));
    _this.updatePassword = _this.updatePassword.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Homepage, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.checkLoginStatus();

              case 2:
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
        updatePassword: this.updatePassword
      };
    }
  }, {
    key: "currentUserQueryFunction",
    value: function () {
      var _currentUserQueryFunction = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var query, result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                query = "query { \n      currentUserQuery {\n        currentId, email, photoURL\n      } \n    }";
                _context2.next = 3;
                return (0, _graphQLFetch.default)(query);

              case 3:
                result = _context2.sent;
                return _context2.abrupt("return", result.currentUserQuery);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function currentUserQueryFunction() {
        return _currentUserQueryFunction.apply(this, arguments);
      }

      return currentUserQueryFunction;
    }()
  }, {
    key: "topup",
    value: function () {
      var _topup = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var topupAmount, userId, topupInput, mutation, result, newBalance, newHistory;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                topupAmount = document.getElementById("topup").value;

                if (!(topupAmount <= 0)) {
                  _context3.next = 5;
                  break;
                }

                alert('You should enter a positive value!');
                _context3.next = 17;
                break;

              case 5:
                userId = this.state.currentUser.id;
                topupInput = {
                  amount: topupAmount,
                  userId: userId
                };
                mutation = "mutation topup($topupInput: TopupInput!) {\n        topup(topupInput: $topupInput)\n      }";
                _context3.next = 10;
                return (0, _graphQLFetch.default)(mutation, {
                  topupInput: topupInput
                });

              case 10:
                result = _context3.sent;
                newBalance = result.topup;
                console.log(newBalance);
                _context3.next = 15;
                return this.historyQuery(userId);

              case 15:
                newHistory = _context3.sent;
                this.setState({
                  balance: newBalance,
                  history: newHistory
                }, function () {
                  alert("You add ".concat(parseFloat(topupAmount), " SGD into your amount"));
                });

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function topup() {
        return _topup.apply(this, arguments);
      }

      return topup;
    }()
  }, {
    key: "updateProfile",
    value: function () {
      var _updateProfile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(firstName, lastName) {
        var profileInput, mutation, result, newDisplayName, newUser;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(firstName + ' ' + lastName == this.state.currentUser.displayName)) {
                  _context4.next = 4;
                  break;
                }

                alert('Nothing change, please check what you enter!');
                _context4.next = 13;
                break;

              case 4:
                profileInput = {
                  userId: this.state.currentUser.id,
                  firstName: firstName,
                  lastName: lastName
                };
                mutation = "mutation updateProfile($profileInput: ProfileInput!) {\n        updateProfile(profileInput: $profileInput)\n      }";
                _context4.next = 8;
                return (0, _graphQLFetch.default)(mutation, {
                  profileInput: profileInput
                });

              case 8:
                result = _context4.sent;
                newDisplayName = firstName + ' ' + lastName;
                newUser = Object.assign({}, this.state.currentUser);
                newUser.displayName = newDisplayName;
                this.setState({
                  currentUser: newUser
                }, alert("You have changed your firstName to ".concat(firstName, ", and lastName to ").concat(lastName)));

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function updateProfile(_x, _x2) {
        return _updateProfile.apply(this, arguments);
      }

      return updateProfile;
    }()
  }, {
    key: "updatePassword",
    value: function () {
      var _updatePassword = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(password, confirm) {
        var passwordInput, mutation, result;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!(password == '' || confirm == '')) {
                  _context5.next = 3;
                  break;
                }

                alert('You must enter the new password twice');
                return _context5.abrupt("return", false);

              case 3:
                if (!(password.length * confirm.length < 9)) {
                  _context5.next = 6;
                  break;
                }

                alert('Your new password is too short');
                return _context5.abrupt("return", false);

              case 6:
                if (!(password != confirm)) {
                  _context5.next = 9;
                  break;
                }

                alert('You must enter the new password twice correctly');
                return _context5.abrupt("return", false);

              case 9:
                passwordInput = {
                  userId: this.state.currentUser.id,
                  password: password
                };
                mutation = "mutation updatePassword($passwordInput: PasswordInput!) {\n      updatePassword(passwordInput: $passwordInput)\n    }";
                _context5.next = 13;
                return (0, _graphQLFetch.default)(mutation, {
                  passwordInput: passwordInput
                });

              case 13:
                result = _context5.sent;
                alert(result.updatePassword);

              case 15:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function updatePassword(_x3, _x4) {
        return _updatePassword.apply(this, arguments);
      }

      return updatePassword;
    }()
  }, {
    key: "loadData",
    value: function () {
      var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(userId, email, photoURL) {
        var resultFind, currentUser, newBalance, newtypes, newWallet, newHistory, newOrders;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.userQuery(email);

              case 2:
                resultFind = _context6.sent;
                currentUser = {
                  id: resultFind.userFind.id,
                  displayName: resultFind.userFind.firstName + ' ' + resultFind.userFind.lastName,
                  email: email,
                  // photoURL: '/static/mock-images/avatars/avatar_' + String(resultFind.userFind.id % 25) + '.jpg',
                  photoURL: photoURL
                };
                newBalance = resultFind.userFind.balance;
                _context6.next = 7;
                return this.typesQuery();

              case 7:
                newtypes = _context6.sent;
                _context6.next = 10;
                return this.walletQuery(userId);

              case 10:
                newWallet = _context6.sent;
                _context6.next = 13;
                return this.historyQuery(userId);

              case 13:
                newHistory = _context6.sent;
                _context6.next = 16;
                return this.orderQuery(userId);

              case 16:
                newOrders = _context6.sent;
                this.setState({
                  currentUser: currentUser,
                  balance: newBalance,
                  history: newHistory,
                  wallet: newWallet,
                  types: newtypes,
                  orders: newOrders
                }, function () {});

              case 18:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function loadData(_x5, _x6, _x7) {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: "userQuery",
    value: function () {
      var _userQuery = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(email) {
        var queryUser, resultFind;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                queryUser = "query userFind($email: String!) {\n      userFind(email: $email) {\n        _id id email firstName lastName password balance photoURL\n      }\n    }";
                _context7.next = 3;
                return (0, _graphQLFetch.default)(queryUser, {
                  email: email
                });

              case 3:
                resultFind = _context7.sent;
                return _context7.abrupt("return", resultFind);

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function userQuery(_x8) {
        return _userQuery.apply(this, arguments);
      }

      return userQuery;
    }()
  }, {
    key: "typesQuery",
    value: function () {
      var _typesQuery = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        var typesList, typesResult, newtypes;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                typesList = "query {\n      typesList {\n        id symbol description price\n      }\n    }";
                _context8.next = 3;
                return (0, _graphQLFetch.default)(typesList);

              case 3:
                typesResult = _context8.sent;
                newtypes = typesResult.typesList;
                return _context8.abrupt("return", newtypes);

              case 6:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function typesQuery() {
        return _typesQuery.apply(this, arguments);
      }

      return typesQuery;
    }()
  }, {
    key: "walletQuery",
    value: function () {
      var _walletQuery = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(userId) {
        var walletDetail, walletResult, newWallet;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                walletDetail = "query walletDetail($userId: Int!) {\n      walletDetail(userId: $userId) {\n        id symbol quantity\n      }\n    }";
                _context9.next = 3;
                return (0, _graphQLFetch.default)(walletDetail, {
                  userId: userId
                });

              case 3:
                walletResult = _context9.sent;
                newWallet = walletResult.walletDetail;
                newWallet.sort(function (a, b) {
                  return a.id - b.id;
                });
                return _context9.abrupt("return", newWallet);

              case 7:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function walletQuery(_x9) {
        return _walletQuery.apply(this, arguments);
      }

      return walletQuery;
    }()
  }, {
    key: "historyQuery",
    value: function () {
      var _historyQuery = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(userId) {
        var historyList, historyResult, newHistory;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                historyList = "query historyList($userId: Int!) {\n      historyList(userId: $userId) {\n        id time balance\n      }\n    }";
                _context10.next = 3;
                return (0, _graphQLFetch.default)(historyList, {
                  userId: userId
                });

              case 3:
                historyResult = _context10.sent;
                newHistory = historyResult.historyList;
                return _context10.abrupt("return", newHistory);

              case 6:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      function historyQuery(_x10) {
        return _historyQuery.apply(this, arguments);
      }

      return historyQuery;
    }()
  }, {
    key: "orderQuery",
    value: function () {
      var _orderQuery = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(userId) {
        var orderList, orderResult, newOrders;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                orderList = "query orderList($userId: Int!) {\n      orderList(userId: $userId) {\n        id symbol side quantity openQuantity price filledCost\n      }\n    }";
                _context11.next = 3;
                return (0, _graphQLFetch.default)(orderList, {
                  userId: userId
                });

              case 3:
                orderResult = _context11.sent;
                newOrders = orderResult.orderList;
                return _context11.abrupt("return", newOrders);

              case 6:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      function orderQuery(_x11) {
        return _orderQuery.apply(this, arguments);
      }

      return orderQuery;
    }()
  }, {
    key: "balanceQuery",
    value: function () {
      var _balanceQuery = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(userId) {
        var balanceDetail, balanceResult, newBalance;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                balanceDetail = "query balanceDetail($userId: Int!) {\n      balanceDetail (userId: $userId)\n    }";
                _context12.next = 3;
                return (0, _graphQLFetch.default)(balanceDetail, {
                  userId: userId
                });

              case 3:
                balanceResult = _context12.sent;
                newBalance = balanceResult.balanceDetail;
                return _context12.abrupt("return", newBalance);

              case 6:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }));

      function balanceQuery(_x12) {
        return _balanceQuery.apply(this, arguments);
      }

      return balanceQuery;
    }()
  }, {
    key: "logout",
    value: function () {
      var _logout = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
        var query, result;
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                if (!(this.state.currentUser.email != '')) {
                  _context13.next = 9;
                  break;
                }

                query = "query { logout }";
                _context13.next = 4;
                return (0, _graphQLFetch.default)(query);

              case 4:
                result = _context13.sent;
                this.setState({
                  currentUser: _account.default,
                  balance: 0,
                  types: [],
                  wallet: [],
                  history: []
                });
                alert(result.logout);
                _context13.next = 10;
                break;

              case 9:
                alert("You have not logged in!");

              case 10:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function logout() {
        return _logout.apply(this, arguments);
      }

      return logout;
    }()
  }, {
    key: "login",
    value: function () {
      var _login = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(email, password) {
        var queryUserList, userList, query, user, data, resultFind, currentUser, userId, newBalance, newtypes, newWallet, newHistory, newOrders;
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                this.changePage("Assets");

                if (!(this.state.currentUser.email != '')) {
                  _context14.next = 4;
                  break;
                }

                alert("You have logged in");
                return _context14.abrupt("return", true);

              case 4:
                queryUserList = "query {\n      users {\n        id email firstName lastName password balance photoURL\n      }\n    }";
                _context14.next = 7;
                return (0, _graphQLFetch.default)(queryUserList);

              case 7:
                userList = _context14.sent;

                if (!(userList.users.length === 0)) {
                  _context14.next = 11;
                  break;
                }

                alert("Before log in, you should first register!");
                return _context14.abrupt("return", false);

              case 11:
                query = "query login($user: UserInputs!) {\n      login(user: $user)\n    }";
                user = {
                  email: email,
                  firstName: '',
                  lastName: '',
                  password: password,
                  photoURL: ''
                };
                _context14.next = 15;
                return (0, _graphQLFetch.default)(query, {
                  user: user
                });

              case 15:
                data = _context14.sent;

                if (!(data !== null)) {
                  _context14.next = 39;
                  break;
                }

                alert(data.login);

                if (!(data.login === 'Successfully login!')) {
                  _context14.next = 39;
                  break;
                }

                _context14.next = 21;
                return this.userQuery(email);

              case 21:
                resultFind = _context14.sent;
                currentUser = {
                  id: resultFind.userFind.id,
                  displayName: resultFind.userFind.firstName + ' ' + resultFind.userFind.lastName,
                  email: email,
                  photoURL: resultFind.userFind.photoURL
                };
                userId = currentUser.id;
                newBalance = resultFind.userFind.balance;
                _context14.next = 27;
                return this.typesQuery();

              case 27:
                newtypes = _context14.sent;
                _context14.next = 30;
                return this.walletQuery(userId);

              case 30:
                newWallet = _context14.sent;
                _context14.next = 33;
                return this.historyQuery(userId);

              case 33:
                newHistory = _context14.sent;
                _context14.next = 36;
                return this.orderQuery(userId);

              case 36:
                newOrders = _context14.sent;
                this.setState({
                  currentUser: currentUser,
                  balance: newBalance,
                  history: newHistory,
                  wallet: newWallet,
                  types: newtypes,
                  orders: newOrders
                });
                return _context14.abrupt("return", true);

              case 39:
                return _context14.abrupt("return", false);

              case 40:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function login(_x13, _x14) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: "register",
    value: function () {
      var _register = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(firstName, lastName, email, password) {
        var photoURL,
            mutation,
            user,
            data,
            resultFind,
            currentUser,
            userId,
            newBalance,
            newtypes,
            newWallet,
            newHistory,
            newOrders,
            _args15 = arguments;
        return regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                photoURL = _args15.length > 4 && _args15[4] !== undefined ? _args15[4] : '';
                this.changePage("Assets");
                mutation = "mutation register($user: UserInputs!) {\n      register(user: $user)\n    }";
                user = {
                  email: email,
                  firstName: firstName,
                  lastName: lastName,
                  password: password,
                  photoURL: photoURL == '' ? '' : photoURL
                };
                _context15.next = 6;
                return (0, _graphQLFetch.default)(mutation, {
                  user: user
                });

              case 6:
                data = _context15.sent;

                if (!(data !== null)) {
                  _context15.next = 30;
                  break;
                }

                alert(data.register);

                if (!(data.register === 'Successfully register!')) {
                  _context15.next = 30;
                  break;
                }

                _context15.next = 12;
                return this.userQuery(email);

              case 12:
                resultFind = _context15.sent;
                currentUser = {
                  id: resultFind.userFind.id,
                  displayName: resultFind.userFind.firstName + ' ' + resultFind.userFind.lastName,
                  email: email,
                  photoURL: resultFind.userFind.photoURL
                };
                userId = currentUser.id;
                newBalance = resultFind.userFind.balance;
                _context15.next = 18;
                return this.typesQuery();

              case 18:
                newtypes = _context15.sent;
                _context15.next = 21;
                return this.walletQuery(userId);

              case 21:
                newWallet = _context15.sent;
                _context15.next = 24;
                return this.historyQuery(userId);

              case 24:
                newHistory = _context15.sent;
                _context15.next = 27;
                return this.orderQuery(userId);

              case 27:
                newOrders = _context15.sent;
                this.setState({
                  currentUser: currentUser,
                  balance: newBalance,
                  history: newHistory,
                  wallet: newWallet,
                  types: newtypes,
                  orders: newOrders
                });
                return _context15.abrupt("return", true);

              case 30:
                return _context15.abrupt("return", false);

              case 31:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function register(_x15, _x16, _x17, _x18) {
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
        /*assets.push({ id: item.id, symbol: item.symbol, balance: item.balance, price: this.state.types.find(type => type.id == item.id).price });*/
        assets.push({
          id: item.id,
          symbol: item.symbol,
          quantity: item.quantity,
          description: _this2.state.types.find(function (type) {
            return type.id == item.id;
          }).description
        });
      });
      return assets;
    }
  }, {
    key: "getOrders",
    value: function getOrders() {
      var orders = [];
      this.state.orders.map(function (order) {
        orders.push({
          id: order.id,
          symbol: order.symbol,
          side: order.side,
          quantity: order.quantity,
          openQuantity: order.openQuantity,
          price: order.price,
          filledCost: order.filledCost
        });
      });
      return orders.reverse();
    }
  }, {
    key: "buy",
    value: function () {
      var _buy = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
        var quantity, userId, typeId, buyOrderType, price, mutation, item, data, newWallet, newHistory, newBalance, newOrders;
        return regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                quantity = document.getElementById('quantity').value;

                if (!(quantity > 0)) {
                  _context16.next = 32;
                  break;
                }

                userId = this.state.currentUser.id;
                typeId = document.getElementById('type').value;
                buyOrderType = document.getElementById('buyOrderType').value;
                price = 0;

                if (!(buyOrderType == 'Limit')) {
                  _context16.next = 11;
                  break;
                }

                price = document.getElementById('price').value;

                if (!(price <= 0)) {
                  _context16.next = 11;
                  break;
                }

                alert("Please enter a possitive price!");
                return _context16.abrupt("return", false);

              case 11:
                mutation = "mutation walletItemBuy($item: WalletItemInput!) {\n        walletItemBuy(item: $item)\n      }";
                item = {
                  userId: userId,
                  id: typeId,
                  quantity: quantity,
                  price: price
                };
                _context16.next = 15;
                return (0, _graphQLFetch.default)(mutation, {
                  item: item
                });

              case 15:
                data = _context16.sent;

                if (!(data !== null)) {
                  _context16.next = 30;
                  break;
                }

                _context16.next = 19;
                return this.walletQuery(userId);

              case 19:
                newWallet = _context16.sent;
                _context16.next = 22;
                return this.historyQuery(userId);

              case 22:
                newHistory = _context16.sent;
                _context16.next = 25;
                return this.balanceQuery(userId);

              case 25:
                newBalance = _context16.sent;
                _context16.next = 28;
                return this.orderQuery(userId);

              case 28:
                newOrders = _context16.sent;
                this.setState({
                  wallet: newWallet,
                  balance: newBalance,
                  history: newHistory,
                  orders: newOrders
                }, function () {
                  alert(data.walletItemBuy);
                });

              case 30:
                _context16.next = 33;
                break;

              case 32:
                alert("Please enter a positive modification!");

              case 33:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function buy() {
        return _buy.apply(this, arguments);
      }

      return buy;
    }()
  }, {
    key: "sell",
    value: function () {
      var _sell = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
        var typeId, symbol, item, quantity, typeQuantity, userId, mutation, _item, data, newWallet, newHistory, newBalance, newOrders;

        return regeneratorRuntime.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                if (!(this.state.wallet.length === 0)) {
                  _context17.next = 4;
                  break;
                }

                alert("Before sell, you should buy something");
                _context17.next = 41;
                break;

              case 4:
                typeId = document.getElementById('type').value;
                symbol = this.state.types.find(function (type) {
                  return type.id == typeId;
                }).symbol;
                item = this.state.wallet.find(function (item) {
                  return item.id == typeId;
                });

                if (!(item != undefined)) {
                  _context17.next = 40;
                  break;
                }

                quantity = document.getElementById('quantity').value;

                if (!(quantity > 0)) {
                  _context17.next = 37;
                  break;
                }

                typeQuantity = item.quantity;

                if (!(typeQuantity >= quantity)) {
                  _context17.next = 34;
                  break;
                }

                userId = this.state.currentUser.id;
                mutation = "mutation walletItemSell($item: WalletItemInput!) {\n              walletItemSell(item: $item)\n            }";
                _item = {
                  userId: userId,
                  id: typeId,
                  quantity: quantity
                };
                _context17.next = 17;
                return (0, _graphQLFetch.default)(mutation, {
                  item: _item
                });

              case 17:
                data = _context17.sent;

                if (!(data !== null)) {
                  _context17.next = 32;
                  break;
                }

                _context17.next = 21;
                return this.walletQuery(userId);

              case 21:
                newWallet = _context17.sent;
                _context17.next = 24;
                return this.historyQuery(userId);

              case 24:
                newHistory = _context17.sent;
                _context17.next = 27;
                return this.balanceQuery(userId);

              case 27:
                newBalance = _context17.sent;
                _context17.next = 30;
                return this.orderQuery(userId);

              case 30:
                newOrders = _context17.sent;
                this.setState({
                  wallet: newWallet,
                  balance: newBalance,
                  history: newHistory,
                  orders: newOrders
                }, function () {
                  alert(data.walletItemSell);
                });

              case 32:
                _context17.next = 35;
                break;

              case 34:
                alert("You do not have enough ".concat(symbol, "! You only have ").concat(typeQuantity));

              case 35:
                _context17.next = 38;
                break;

              case 37:
                alert("Please enter a positive modification!");

              case 38:
                _context17.next = 41;
                break;

              case 40:
                alert("You do not own ".concat(symbol, "!"));

              case 41:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function sell() {
        return _sell.apply(this, arguments);
      }

      return sell;
    }()
  }, {
    key: "convert",
    value: function () {
      var _convert = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
        var typeIdFrom, symbolFrom, typeIdTo, symbolTo, itemFrom, quantity, userId, mutation, item, data, newWallet, newHistory, newBalance, newOrders;
        return regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                if (!(this.state.wallet.length === 0)) {
                  _context18.next = 4;
                  break;
                }

                alert("Before convert, you should buy something");
                _context18.next = 46;
                break;

              case 4:
                typeIdFrom = document.getElementById('type-from').value;
                symbolFrom = this.state.types.find(function (type) {
                  return type.id == typeIdFrom;
                }).symbol;
                typeIdTo = document.getElementById('type-to').value;
                symbolTo = this.state.types.find(function (type) {
                  return type.id == typeIdTo;
                }).symbol;

                if (!(typeIdFrom == typeIdTo)) {
                  _context18.next = 12;
                  break;
                }

                alert('From and To types should not be the same!');
                _context18.next = 46;
                break;

              case 12:
                itemFrom = this.state.wallet.find(function (type) {
                  return type.id == typeIdFrom;
                });

                if (!(itemFrom !== undefined)) {
                  _context18.next = 45;
                  break;
                }

                quantity = document.getElementById('quantity').value;

                if (!(quantity > 0)) {
                  _context18.next = 42;
                  break;
                }

                if (!(itemFrom.quantity >= quantity)) {
                  _context18.next = 39;
                  break;
                }

                userId = this.state.currentUser.id;
                mutation = "mutation walletItemConvert($item: WalletConvertItemInput!) {\n                walletItemConvert(item: $item)\n              }";
                item = {
                  userId: userId,
                  idFrom: typeIdFrom,
                  idTo: typeIdTo,
                  quantity: quantity
                };
                _context18.next = 22;
                return (0, _graphQLFetch.default)(mutation, {
                  item: item
                });

              case 22:
                data = _context18.sent;

                if (!(data !== null)) {
                  _context18.next = 37;
                  break;
                }

                _context18.next = 26;
                return this.walletQuery(userId);

              case 26:
                newWallet = _context18.sent;
                _context18.next = 29;
                return this.historyQuery(userId);

              case 29:
                newHistory = _context18.sent;
                _context18.next = 32;
                return this.balanceQuery(userId);

              case 32:
                newBalance = _context18.sent;
                _context18.next = 35;
                return this.orderQuery(userId);

              case 35:
                newOrders = _context18.sent;
                this.setState({
                  wallet: newWallet,
                  balance: newBalance,
                  history: newHistory,
                  orders: newOrders
                }, function () {
                  alert(data.walletItemConvert);
                });

              case 37:
                _context18.next = 40;
                break;

              case 39:
                alert("You do not have enough ".concat(symbolFrom, "! You only have ").concat(itemFrom.quantity));

              case 40:
                _context18.next = 43;
                break;

              case 42:
                alert("Please enter a positive modification!");

              case 43:
                _context18.next = 46;
                break;

              case 45:
                alert("You do not own ".concat(symbolFrom, "!"));

              case 46:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function convert() {
        return _convert.apply(this, arguments);
      }

      return convert;
    }()
  }, {
    key: "changePage",
    value: function changePage(page) {
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

        case 'Profile':
          temp = /*#__PURE__*/React.createElement(_ProfilePage.default, null);
          break;

        case 'Setting':
          temp = /*#__PURE__*/React.createElement(_SettingPage.default, null);
          break;

        case 'Order':
          temp = /*#__PURE__*/React.createElement(_OrderPage.default, null);
          break;

        case 'Blog':
          temp = /*#__PURE__*/React.createElement(_BlogPage.default, null);
          break;

        default:
          temp = /*#__PURE__*/React.createElement(_AssetsPage.default, null);
      }

      return temp;
    }
  }, {
    key: "checkLoginStatus",
    value: function () {
      var _checkLoginStatus = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
        var _this3 = this;

        var result;
        return regeneratorRuntime.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                _context20.next = 2;
                return this.currentUserQueryFunction();

              case 2:
                result = _context20.sent;

                if (!(result.currentId === -1)) {
                  _context20.next = 7;
                  break;
                }

                this.state.webHistory.replace('/login');
                _context20.next = 9;
                break;

              case 7:
                _context20.next = 9;
                return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
                  return regeneratorRuntime.wrap(function _callee19$(_context19) {
                    while (1) {
                      switch (_context19.prev = _context19.next) {
                        case 0:
                          _context19.next = 2;
                          return _this3.loadData(result.currentId, result.email, result.photoURL);

                        case 2:
                        case "end":
                          return _context19.stop();
                      }
                    }
                  }, _callee19);
                }))();

              case 9:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function checkLoginStatus() {
        return _checkLoginStatus.apply(this, arguments);
      }

      return checkLoginStatus;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
        path: "/login"
      }, /*#__PURE__*/React.createElement(_LoginPage.default, null)), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
        path: "/register"
      }, /*#__PURE__*/React.createElement(_RegisterPage.default, null)), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
        path: "/"
      }, /*#__PURE__*/React.createElement(_HomePageContent.default, {
        changePage: this.changePage,
        showPage: this.showPage,
        state: this.state
      }))), this.state.currentUser === _account.default ? this.state.webHistory.replace('/login') : function () {
        _this4.state.webHistory.replace('/');
      }());
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
  webHistory: _propTypes.default.object,
  changePage: _propTypes.default.func,
  buy: _propTypes.default.func,
  sell: _propTypes.default.func,
  convert: _propTypes.default.func,
  register: _propTypes.default.func,
  login: _propTypes.default.func,
  logout: _propTypes.default.func,
  getAssets: _propTypes.default.func,
  getOrders: _propTypes.default.func,
  topup: _propTypes.default.func,
  updateProfile: _propTypes.default.func,
  updatePassword: _propTypes.default.func
});