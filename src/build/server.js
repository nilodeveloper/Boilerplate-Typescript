"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var Server = (function () {
    function Server(port) {
        this.app = express_1["default"]();
        this.route();
        this.boot(port);
    }
    Server.prototype.route = function () {
        this.app.use(new routes_1["default"]());
    };
    Server.prototype.boot = function (port) {
        this.app.listen(port, function () { console.log('Server is on port: ' + port); });
    };
    return Server;
}());
exports["default"] = Server;
var server = new Server(3000);
