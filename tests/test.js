'use strict'

var assert = require('assert');
var CreativeWork = require('../index.js');


var model = {};
let creativeWork = new CreativeWork(model);

describe('CreativeWork\n', function() {
  describe('Static Methods:', function() {
    describe('CreativeWork.isNumber()', function() {
      it('should ...', function() {
        assert.equal(CreativeWork.isNumber(1), true);
        assert.equal(CreativeWork.isNumber(''), false);
      });
    });
  });
});
