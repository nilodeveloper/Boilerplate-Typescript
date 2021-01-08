"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var UserRouter_1 = __importDefault(require("./routes/UserRouter"));
var Router = (function () {
    function Router() {
        this.route = express_1["default"]();
        return this.routes();
    }
    Router.prototype.user = function () {
        return UserRouter_1["default"];
    };
    Router.prototype.routes = function () {
        return [
            this.user()
        ];
    };
    return Router;
}());
exports["default"] = Router;
