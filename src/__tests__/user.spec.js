var should = require("should");
var request = require("request");
var chai = require("chai");
var expect = chai.expect;
var urlBase = "http://localhost:3001";

it("Deve retornar usuários do banco de dados", function(done){
    request.get({ url : urlBase + "/users"}, (error, response, body)=>{
        expect(response.statusCode).to.equal(200);
				done();
      }
    );
});
