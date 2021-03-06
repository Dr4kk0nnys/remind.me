"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes
const index_1 = __importDefault(require("./routes/index"));
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.use('/', index_1.default);
app.listen(3000, () => console.log('Listening on port 3000'));
