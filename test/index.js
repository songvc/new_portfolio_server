import http from 'http';
import assert from 'assert';

import '../lib/index.js';

describe('Example Node Server', () => {
  it('should return 200', done => {
    http.get('http://localhost:3090', res => {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});
