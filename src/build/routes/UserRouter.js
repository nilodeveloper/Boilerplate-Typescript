"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var UserRouter = (function () {
    function UserRouter() {
        this.router = express_1["default"]();
        return this.routes();
    }
    UserRouter.prototype.index = function () {
        return this.router.get('/users', function (req, res) {
            return res.send('Users!');
        });
    };
    UserRouter.prototype.save = function () {
        return this.router.get('/register/user', function (req, res) {
            return res.send('Registrar Users!');
        });
    };
    UserRouter.prototype.routes = function () {
        return [
            this.index(),
            this.save()
        ];
    };
    return UserRouter;
}());
exports["default"] = UserRouter;
