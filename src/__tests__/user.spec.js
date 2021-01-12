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
after(()=>{
	pool.connect(function(err) {
  	if (err) throw err;
  	var sql = "DELETE FROM users WHERE username = 'teste'";
  	pool.query(sql, function (err, result) {
    	if (err) throw err;
  	});
	});
})
/*
 *
	pool.connect(function(err) {
  	if (err) throw err;
  	var sql = "INSERT INTO users (username, email, password) VALUES ('teste', 'teste@email.com', 'abc123')";
  	pool.query(sql, function (err, result) {
    	if (err) throw err;
  	});
	});
 */

describe('Usuario - Endpoints', () => {

    describe('POST /register/user', () => {
        it ('deve retornar usuário criado - 200', done => {
            chai.request(url_base)
            .post('/register/user')
            .send(user_default)
            .end((err, res) => {
                chai.assert.isNull(err);
                chai.assert.isNotEmpty(res.body);
                res.should.have.status(200);
            });
           done();

        });
						
    });

    describe('GET /users', () => {
        it ('deve retornar usuários registrados - 200', done => {
            chai.request(url_base)
            .get('/users')
            .send(user_default)
            .end((err, res) => {
                chai.assert.isNull(err);
                chai.assert.isNotEmpty(res.body);
                res.should.have.status(200);
            });	
            done();
        });
    });


    describe('PUT /update/user', () => {
        it ('deve alterar o email do usuário - 200', done => {
            chai.request(url_base)
            .put('/update/user')
            .send({username: "teste", email: "teste_troca_email@email.com"})
            .end((err, res) => {
                res.should.have.status(200);
            });
            done();
        });
    });

		describe('POST /login/user', ()=>{
			it('deve logar o usuário apenas se o token for válido', done => {
				//	
            chai.request(url_base)
            .post('/login/user')
            .set({ "Authorization": "jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RlIiwicGFzc3dvcmQiOiJhYmMxMjMiLCJpYXQiOjE2MTA0ODg2MTF9.x3PrzVLqf_nPAEmlKiDw2puS7ZNQxzWBieau2jAGBNM"})
            .end((err, res) => {
                res.should.have.status(200);
            		done();
            });
			});
		});		
		describe('POST /login/user', ()=>{
			it('NÃO deve logar o usuário se o token for inválido', done => {
				//	
            chai.request(url_base)
            .post('/login/user')
            .set({ "Authorization": "jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RlIiwicGFzc3dvcmQiOiJhYmMxMjMiLCJpYXQiOjE2MTA0ODg2MTF9.x3PrzVLqf_nPAEmlKiDw2puS7ZNQxzWBieau2jAGBNMerrado"})
            .end((err, res) => {
                res.should.have.status(403);
            		done();
            });
			});
		});		

});
