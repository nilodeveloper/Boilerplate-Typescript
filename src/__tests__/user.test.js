const request = require('supertest')

const url_base = 'http://localhost:3001' 

describe('GET /healthcheck', function() {
  it('verify healthcheck', function(done) {
    request(url_base)
      .get('/healthcheck')
      .set('Accept', 'application/json')
      .expect(200, done)
  });
});