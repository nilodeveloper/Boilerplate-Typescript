"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var HealthcheckRouter = (function () {
    function HealthcheckRouter() {
        this.router = express_1["default"]();
        return this.routes();
    }
    HealthcheckRouter.prototype.index = function () {
        return [
            this.router.get('/healthcheck', function (req, res) {
                res.send('Get is ok!');
            }),
            this.router.post('/healthcheck', function (req, res) {
                res.send('Post is ok!');
            }),
            this.router.put('/healthcheck', function (req, res) {
                res.send('Put is ok!');
            }),
            this.router["delete"]('/healthcheck', function (req, res) {
                res.status(400).send('Delete is ok');
            })
        ];
    };
    HealthcheckRouter.prototype.routes = function () {
        return [
            this.index(),
        ];
    };
    return HealthcheckRouter;
}());
exports["default"] = new HealthcheckRouter();
