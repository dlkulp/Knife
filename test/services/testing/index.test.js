'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('testing service', function() {
  it('registered the testings service', () => {
    assert.ok(app.service('testings'));
  });
});
