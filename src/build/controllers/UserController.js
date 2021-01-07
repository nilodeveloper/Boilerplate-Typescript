"use strict";
exports.__esModule = true;
var UserController = (function () {
    function UserController() {
    }
    UserController.prototype.index = function (req, res) {
        res.send('Heyyy users here!');
    };
    UserController.prototype.save = function (req, res) {
        res.send('Users save! Thx!');
    };
    return UserController;
}());
exports["default"] = UserController;
