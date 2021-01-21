"use strict";
exports.__esModule = true;
var typeorm_1 = require("typeorm");
typeorm_1.createConnection().then(function () { return console.log('Database connected!'); });
