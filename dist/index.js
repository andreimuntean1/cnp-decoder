"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeCNP = void 0;
const functions_1 = require("./functions");
const getAge_1 = require("./functions/getAge");
const getCounty_1 = require("./functions/getCounty");
const utils_1 = require("./functions/utils");
function decodeCNP(input) {
    const cnp = input.toString();
    const cnpIsValid = (0, utils_1.validateCNP)(cnp);
    if (!cnpIsValid) {
        throw new Error('Provided CNP is not valid');
        return;
    }
    const gender = (0, functions_1.getGender)(cnp);
    const birthDate = (0, functions_1.getBirthDate)(cnp);
    const age = (0, getAge_1.getAge)(cnp);
    const county = (0, getCounty_1.getCounty)(cnp);
    const isResident = (0, functions_1.checkIfResident)(cnp);
    return {
        gender,
        birthDate,
        age,
        county,
        isResident
    };
}
exports.decodeCNP = decodeCNP;
