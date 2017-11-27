'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  query AllAirtableQuery {\n    allAirtable(filter: { publish: { eq: true }}) {\n      edges {\n        node {\n          id\n          projectName\n          projectSummary\n          publish\n          fields {\n            slug\n          }\n        }\n      }\n    }\n  }\n'], ['\n  query AllAirtableQuery {\n    allAirtable(filter: { publish: { eq: true }}) {\n      edges {\n        node {\n          id\n          projectName\n          projectSummary\n          publish\n          fields {\n            slug\n          }\n        }\n      }\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _gatsbyLink = require('gatsby-link');

var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = function (_ref) {
  var data = _ref.data;

  var projectCount = data.allAirtable.edges.length;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'Projects'
    ),
    _react2.default.createElement(
      'h4',
      null,
      projectCount,
      ' Posts'
    ),
    data.allAirtable.edges.map(function (_ref2) {
      var node = _ref2.node;


      return _react2.default.createElement(
        'div',
        { className: '', key: node.id },
        _react2.default.createElement(
          _gatsbyLink2.default,
          { to: node.fields.slug },
          _react2.default.createElement(
            'h3',
            null,
            node.projectName
          )
        ),
        _react2.default.createElement(
          'p',
          null,
          node.projectSummary
        )
      );
    })
  );
};

var query = exports.query = graphql(_templateObject);
