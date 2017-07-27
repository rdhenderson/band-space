'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _users = require('../users');

var _pages = require('../pages');

var _RouteList = require('./RouteList');

var _RouteList2 = _interopRequireDefault(_RouteList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import user actions and destructure


var AppRoutes = function (_Component) {
  _inherits(AppRoutes, _Component);

  function AppRoutes() {
    _classCallCheck(this, AppRoutes);

    return _possibleConstructorReturn(this, (AppRoutes.__proto__ || Object.getPrototypeOf(AppRoutes)).apply(this, arguments));
  }

  _createClass(AppRoutes, [{
    key: 'showSettings',
    value: function showSettings(event) {
      // event.preventDefault();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      // If user is not already authenticated
      if (this.props.isAuth) return;
      // Get token from local storage, quit if its null
      var token = localStorage.getItem('jwtToken');
      if (!token || token === '') return;

      // fetch user from token (if server deems it's valid token)
      this.props.meFromToken(token).then(function (response) {
        if (!response.error) {
          _this2.props.meFromTokenSuccess(response.payload);
        } else {
          _this2.props.meFromTokenFailure(response.payload);
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'main',
          { id: 'outer-container' },
          _react2.default.createElement(_pages.NavMenu, { handleLogout: this.props.logoutUser }),
          _react2.default.createElement(_RouteList2.default, null)
        )
      );
    }
  }]);

  return AppRoutes;
}(_react.Component);

function mapStateToProps(state) {
  return {
    user: state.user.user,
    isAuth: state.user.isAuth,
    error: state.error,
    loading: state.loading
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)(_extends({}, _users.actions), dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AppRoutes);
// export default AppRoutes;
//REDUX MAGIC! This puts both of our functions into the Component's props and links them to dispatch
// function mapDispatchToProps(dispatch){
//   return bindActionCreators({ incrementCount, decrementCount }, dispatch);
// }
//
// //MORE REDUX MAGIC! This function takes in all of our Application State and takes pieces of it and maps it
// //to the Component's props.
// function mapStateToProps(state) {
//   return {
//
//   };
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(AppRoutes)
// // export default AppRoutes
//# sourceMappingURL=/Users/reid/Documents/GWU-Bootcamp/Assignments/band-space/babel/maps/navigation/AppRoutes.js.map