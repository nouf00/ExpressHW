"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
let names = [];
let grade1 = [];
app.use(express_1.default.json());
//  get section
app.get('/name', function (req, res) {
    return res.json(names);
});
app.get('/grade', function (req, res) {
    return res.json(grade1);
});
// ________________________________________________________________________________________________
app.post('/', function (req, res) {
    res.send('Hello World');
});
//   _____________________________________________________________________________________________________
app.put('/', function (req, res) {
    res.send('Hello World');
});
//   _________________________________________________________________________________________________________
app.delete('/', function (req, res) {
    res.send('Hello World');
});
//   __________________________________________________________________________________________________________
app.listen(5000);
