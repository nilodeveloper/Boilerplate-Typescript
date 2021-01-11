const typeorm = require("typeorm")
const User = require("../build/database/entity/User")

const chai = require('chai');
const chaiHttp = require('chai-http');

const user_default = {username: "teste", email: "teste@email.com", password: "abc123"}
const url_base = 'http://localhost:3001'

chai.use(chaiHttp);
chai.should();

	var pg = require('pg');			
	var config = {
  	host: "localhost",
  	user: "postgres",
  	password: "abc123",
		database: "oni"
	};
	var pool = new pg.Pool(config)

afterEach(function(done) {		
	pool.connect(function(err) {
  	if (err) throw err;
  	var sql = "DELETE FROM users WHERE username = 'teste'";
  	pool.query(sql, function (err, result) {
    	if (err) throw err;
			else
				done()
  	});
	});
})

describe('Usuario - Endpoints', () => {
    describe('GET /users', () => {
        it ('deve retornar usuários registrados - 200', done => {
            chai.request(url_base)
            .get('/users')
            .send(user_default)
            .end((err, res) => {
                chai.assert.isNull(err);
                chai.assert.isNotEmpty(res.body);
                res.should.have.status(200);
                done();
            });
        });
    });
    describe('POST /register/user', () => {
        it ('deve retornar usuário criado - 200', done => {
            chai.request(url_base)
            .post('/register/user')
            .send(user_default)
            .end((err, res) => {
                chai.assert.isNull(err);
                chai.assert.isNotEmpty(res.body);
                res.should.have.status(200);
                done();
            });
        });
    });
});
