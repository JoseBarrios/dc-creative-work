'use strict'

var assert = require('assert');
var CreativeWorkDataController = require('../index.js');


var model = {};
let creativeWork = new CreativeWorkDataController(model);

describe('CreativeWork\n', function() {
  describe('Static Methods:', function() {
    describe('CreativeWork.isNumber()', function() {
      it('should ...', function() {
        assert.equal(CreativeWorkDataController.isNumber(1), true);
        assert.equal(CreativeWorkDataController.isNumber(''), false);
      });
    });
  });
});
