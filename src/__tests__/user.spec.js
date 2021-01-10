var should = require("should");
var request = require("request");
var chai = require("chai");
var expect = chai.expect;
var assert = chai.assert;
var urlBase = "http://localhost:3001";

it("Deve retornar usuários do banco de dados", function(done){
    request.get({ url : urlBase + "/users"}, (error, response, body)=>{
				const _body = JSON.parse(body);		
        if(expect(response.statusCode).to.equal(200)){
					assert.isArray(_body);
					assert.isObject(_body[0]);
					assert.property(_body[0], 'username');
				}
				done();
      }
    );
});
