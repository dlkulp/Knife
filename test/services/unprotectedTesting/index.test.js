'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('unprotectedTesting service', function() {
  it('registered the unprotectedTestings service', () => {
    assert.ok(app.service('unprotectedTestings'));
  });
});
