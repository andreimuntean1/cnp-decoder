"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBirthDate = void 0;
const utils_1 = require("./utils");
const getBirthDate = cnp => {
    const year = (0, utils_1.getBirthYear)(cnp);
    const month = (0, utils_1.getBirthMonth)(cnp);
    const day = (0, utils_1.getBirthDay)(cnp);
    return new Date(year, month, day);
};
exports.getBirthDate = getBirthDate;
