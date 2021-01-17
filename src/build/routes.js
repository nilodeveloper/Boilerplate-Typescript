"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var PostRouter_1 = __importDefault(require("./routes/PostRouter"));
var UserRouter_1 = __importDefault(require("./routes/UserRouter"));
var Router = (function () {
    function Router() {
        this.route = express_1["default"]();
        return this.routes();
    }
    Router.prototype.user = function () {
        return UserRouter_1["default"];
    };
    Router.prototype.post = function () { return PostRouter_1["default"]; };
    Router.prototype.routes = function () {
        return [
            this.user(),
            this.post(),
        ];
    };
    return Router;
}());
exports["default"] = Router;
