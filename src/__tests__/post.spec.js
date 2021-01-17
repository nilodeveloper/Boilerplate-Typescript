const typeorm = require("typeorm")
const Post = require("../build/database/entity/Post")

const chai = require('chai');
const chaiHttp = require('chai-http');

const user_default = {username: "teste", email: "teste@email.com", password: "abc123"}
const url_base = 'http://localhost:3001'

describe('Model - Endpoints', () => {

    describe('METHOD /end/point', () => {
        it ('O que deve ser testado escrito aqui', done => {
        	chai.request(url_base)
            .post('/end/point')
            .send(user_default)
            .end((err, res) => {
    					chai.assert.isNull(err);
    					chai.assert.isNotEmpty(res.body);
  						res.should.have.status(200);
  					});
					done();
				});
			});
});
