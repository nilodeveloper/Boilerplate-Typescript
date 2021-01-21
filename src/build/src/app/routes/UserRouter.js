"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var UserController_1 = __importDefault(require("../controllers/UserController"));
var UserRouter = (function () {
    function UserRouter() {
        this.router = express_1["default"]();
        return this.routes();
    }
    UserRouter.prototype.index = function () {
        return this.router.get('/users', UserController_1["default"].index);
    };
    UserRouter.prototype.save = function () {
        return this.router.post('/register/user', UserController_1["default"].save);
    };
    UserRouter.prototype.update = function () {
        return this.router.put('/update/user', UserController_1["default"].update);
    };
    UserRouter.prototype.login = function () {
        return this.router.post('/login/user', UserController_1["default"].login);
    };
    UserRouter.prototype.routes = function () {
        return [
            this.index(),
            this.save(),
            this.update(),
            this.login()
        ];
    };
    return UserRouter;
}());
exports["default"] = new UserRouter();
