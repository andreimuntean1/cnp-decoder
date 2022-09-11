"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCNP = void 0;
const validateCNP = cnp => {
    const cnpRegex = /^[1-9]\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])(0[1-9]|[1-4]\d|5[0-2]|99)(00[1-9]|0[1-9]\d|[1-9]\d\d)\d$/;
    return cnp.match(cnpRegex);
};
exports.validateCNP = validateCNP;
