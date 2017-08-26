'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LeaderAll = function (_React$Component) {
  _inherits(LeaderAll, _React$Component);

  function LeaderAll(props) {
    _classCallCheck(this, LeaderAll);

    var _this = _possibleConstructorReturn(this, (LeaderAll.__proto__ || Object.getPrototypeOf(LeaderAll)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(LeaderAll, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      fetch("https://fcctop100.herokuapp.com/api/fccusers/top/alltime").then(function (response) {
        response.json().then(function (data) {
          var userAll = [];
          for (var i = 0; i < data.length; i++) {
            var link = "https://www.freecodecamp.com/" + data[i].username;
            userAll.push(_react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'th',
                  null,
                  'Number'
                ),
                _react2.default.createElement(
                  'th',
                  null,
                  'User'
                ),
                _react2.default.createElement(
                  'th',
                  null,
                  'Points in total'
                ),
                _react2.default.createElement(
                  'th',
                  null,
                  'In the last 30 days'
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  null,
                  i + 1
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement('img', { src: data[i].img }),
                  _react2.default.createElement(
                    'a',
                    { key: i, href: link, target: '_blank' },
                    ' ',
                    data[i].username
                  )
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  data[i].alltime,
                  ' points'
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  data[i].recent,
                  ' points'
                )
              )
            ));
          }
          _this2.setState({
            user: userAll
          });
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'all' },
        this.state.user
      );
    }
  }]);

  return LeaderAll;
}(_react2.default.Component);

var Leader30 = function (_React$Component2) {
  _inherits(Leader30, _React$Component2);

  function Leader30(props) {
    _classCallCheck(this, Leader30);

    var _this3 = _possibleConstructorReturn(this, (Leader30.__proto__ || Object.getPrototypeOf(Leader30)).call(this, props));

    _this3.state = {};
    return _this3;
  }

  _createClass(Leader30, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this4 = this;

      fetch("https://fcctop100.herokuapp.com/api/fccusers/top/recent").then(function (response) {
        response.json().then(function (data) {
          var user30 = [];
          for (var i = 0; i < data.length; i++) {
            var link = "https://www.freecodecamp.com/" + data[i].username;
            user30.push(_react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'th',
                  null,
                  'Number'
                ),
                _react2.default.createElement(
                  'th',
                  null,
                  'User'
                ),
                _react2.default.createElement(
                  'th',
                  null,
                  'Points In the last 30 days'
                ),
                _react2.default.createElement(
                  'th',
                  null,
                  'In total'
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  null,
                  i + 1
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement('img', { src: data[i].img }),
                  ' ',
                  _react2.default.createElement(
                    'a',
                    { key: i, href: link, target: '_blank' },
                    data[i].username
                  )
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  data[i].recent,
                  ' points'
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  data[i].alltime,
                  ' points'
                )
              )
            ));
          }
          _this4.setState({
            user: user30
          });
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { role: 'tabpanel', className: 'tab-pane active', id: '30' },
        _react2.default.createElement(
          'div',
          { className: 'row list-item' },
          this.state.user
        )
      );
    }
  }]);

  return Leader30;
}(_react2.default.Component);

var App = function (_React$Component3) {
  _inherits(App, _React$Component3);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'h1',
            { className: 'text-center' },
            'Free Code Camp Leaders'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2' },
            _react2.default.createElement(
              'nav',
              { className: 'row' },
              _react2.default.createElement(
                'ul',
                { className: 'nav nav-tabs col-sm-offset-1 col-md-8 col-md-offset-2', role: 'tablist' },
                _react2.default.createElement(
                  'li',
                  { className: 'active' },
                  _react2.default.createElement(
                    'a',
                    { href: '#30', 'data-toggle': 'tab', role: 'tab' },
                    'Last 30 days'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: '#all', 'data-toggle': 'tab', role: 'tab' },
                    'All times'
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'tab-content col-sm-offset-1 col-md-8 col-md-offset-2' },
            _react2.default.createElement(Leader30, null),
            _react2.default.createElement(LeaderAll, null)
          )
        ),
        _react2.default.createElement(
          'footer',
          null,
          _react2.default.createElement(
            'p',
            { className: 'text-center' },
            'Coded with ',
            _react2.default.createElement('i', { className: 'fa fa-heart' }),
            ' by Cory Whyte'
          )
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById("app"));
