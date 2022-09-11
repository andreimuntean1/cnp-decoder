"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAge = void 0;
const getBirthDate_1 = require("./getBirthDate");
const getAge = cnp => {
    const birthDate = (0, getBirthDate_1.getBirthDate)(cnp);
    const difference = Date.now() - birthDate.getTime();
    const date = new Date(difference);
    return Math.abs(date.getUTCFullYear() - 1970);
};
exports.getAge = getAge;
