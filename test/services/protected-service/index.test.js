'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('protected-service service', function() {
  it('registered the protected-services service', () => {
    assert.ok(app.service('protected-services'));
  });
});
