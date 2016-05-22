'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('protectedTesting service', function() {
  it('registered the protectedTestings service', () => {
    assert.ok(app.service('protectedTestings'));
  });
});
