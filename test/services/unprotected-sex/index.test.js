'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('unprotected-sex service', function() {
  it('registered the unprotected-sexes service', () => {
    assert.ok(app.service('unprotected-sexes'));
  });
});
