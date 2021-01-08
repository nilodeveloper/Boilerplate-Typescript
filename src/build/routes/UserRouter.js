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
        this.userController = new UserController_1["default"]();
        return this.routes();
    }
    UserRouter.prototype.index = function () {
        var _this = this;
        return this.router.get('/users', function (req, res) {
            return _this.userController.index(req, res);
        });
    };
    UserRouter.prototype.save = function () {
        return this.router.post('/register/user', this.userController.save);
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
