"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBirthDay = void 0;
const getBirthYear_1 = require("./getBirthYear");
const getBirthDay = cnp => {
    const year = (0, getBirthYear_1.getBirthYear)(cnp);
    const date = new Date(year, parseInt(cnp.slice(3, 5)), parseInt(cnp.slice(5, 7)));
    return date.getDay();
};
exports.getBirthDay = getBirthDay;
