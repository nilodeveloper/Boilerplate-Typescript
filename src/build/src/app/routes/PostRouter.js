"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var PostController_1 = __importDefault(require("../controllers/PostController"));
var PostRouter = (function () {
    function PostRouter() {
        this.router = express_1["default"]();
        return this.routes();
    }
    PostRouter.prototype.index = function () {
        return this.router.get('/post', PostController_1["default"].index);
    };
    PostRouter.prototype.save = function () {
        return this.router.post('/register/post', PostController_1["default"].save);
    };
    PostRouter.prototype.update = function () {
        return this.router.put('/update/post', PostController_1["default"].update);
    };
    PostRouter.prototype.routes = function () {
        return [
            this.index(),
            this.save(),
            this.update(),
        ];
    };
    return PostRouter;
}());
exports["default"] = new PostRouter();
