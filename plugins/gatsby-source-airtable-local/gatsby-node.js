'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Airtable = require('airtable');
var crypto = require('crypto');
var _ = require('lodash');
var camelizeObjectKey = require('camelize-object-key');

exports.sourceNodes = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2, _ref3) {
    var boundActionCreators = _ref2.boundActionCreators;
    var apiKey = _ref3.apiKey,
        baseId = _ref3.baseId,
        tableName = _ref3.tableName,
        tableView = _ref3.tableView;
    var createNode, setPluginStatus, base, table, query, all;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            createNode = boundActionCreators.createNode, setPluginStatus = boundActionCreators.setPluginStatus;
            base = new Airtable({
              apiKey: apiKey
            }).base(baseId);
            table = base(tableName);
            _context.next = 5;
            return table.select({
              view: tableView
            });

          case 5:
            query = _context.sent;


            console.time('fetch all Airtable rows');
            _context.next = 9;
            return query.all();

          case 9:
            all = _context.sent;


            console.timeEnd('fetch all Airtable rows');

            setPluginStatus({
              status: {
                lastFetched: new Date().toJSON()
              }
            });

            all.forEach(function (row) {
              var camelizedFields = camelizeObjectKey.camelize(row.fields);
              var gatsbyNode = Object.assign({
                // Required Gatsby fields
                id: 'Airtable ' + tableName + ' ' + row.id,
                parent: "__SOURCE__",
                children: [],
                internal: {
                  type: "Airtable",
                  contentDigest: crypto.createHash("md5").update(JSON.stringify(row)).digest("hex")
                }
              }, camelizedFields);

              createNode(gatsbyNode);
            });

            return _context.abrupt('return');

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
