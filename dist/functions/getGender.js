"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGender = void 0;
const getGender = cnp => {
    switch (cnp.split('')[0]) {
        case '1':
        case '3':
        case '5':
        case '7':
            return 'Male';
        case '2':
        case '4':
        case '6':
        case '8':
            return 'Female';
    }
};
exports.getGender = getGender;
