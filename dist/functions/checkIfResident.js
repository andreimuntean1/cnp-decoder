"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIfResident = void 0;
const checkIfResident = cnp => cnp.split('')[0] == '7' || cnp.split('')[0] == '8';
exports.checkIfResident = checkIfResident;
