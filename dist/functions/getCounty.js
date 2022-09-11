"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCounty = void 0;
const counties = [
    {
        "code": "01",
        "county": "Alba"
    },
    {
        "code": "02",
        "county": "Arad"
    },
    {
        "code": "03",
        "county": "Argeș"
    },
    {
        "code": "04",
        "county": "Bacău"
    },
    {
        "code": "05",
        "county": "Bihor"
    },
    {
        "code": "06",
        "county": "Bistrița-Năsăud"
    },
    {
        "code": "07",
        "county": "Botoșani"
    },
    {
        "code": "08",
        "county": "Brașov"
    },
    {
        "code": "09",
        "county": "Brăila"
    },
    {
        "code": "10",
        "county": "Buzău"
    },
    {
        "code": "11",
        "county": "Caraș-Severin"
    },
    {
        "code": "12",
        "county": "Cluj"
    },
    {
        "code": "13",
        "county": "Constanța"
    },
    {
        "code": "14",
        "county": "Covasna"
    },
    {
        "code": "15",
        "county": "Dâmbovița"
    },
    {
        "code": "16",
        "county": "Dolj"
    },
    {
        "code": "17",
        "county": "Galați"
    },
    {
        "code": "18",
        "county": "Gorj"
    },
    {
        "code": "19",
        "county": "Harghita"
    },
    {
        "code": "20",
        "county": "Hunedoara"
    },
    {
        "code": "21",
        "county": "Ialomița"
    },
    {
        "code": "22",
        "county": "Iași"
    },
    {
        "code": "23",
        "county": "Ilfov"
    },
    {
        "code": "24",
        "county": "Maramureș"
    },
    {
        "code": "25",
        "county": "Mehedinți"
    },
    {
        "code": "26",
        "county": "Mureș"
    },
    {
        "code": "27",
        "county": "Neamț"
    },
    {
        "code": "28",
        "county": "Olt"
    },
    {
        "code": "29",
        "county": "Prahova"
    },
    {
        "code": "30",
        "county": "Satu Mare"
    },
    {
        "code": "31",
        "county": "Sălaj"
    },
    {
        "code": "32",
        "county": "Sibiu"
    },
    {
        "code": "33",
        "county": "Suceava"
    },
    {
        "code": "34",
        "county": "Teleorman"
    },
    {
        "code": "35",
        "county": "Timiș"
    },
    {
        "code": "36",
        "county": "Tulcea"
    },
    {
        "code": "37",
        "county": "Vaslui"
    },
    {
        "code": "38",
        "county": "Vâlcea"
    },
    {
        "code": "39",
        "county": "Vrancea"
    },
    {
        "code": "40",
        "county": "București"
    },
    {
        "code": "41",
        "county": "București - Sector 1"
    },
    {
        "code": "42",
        "county": "București - Sector 2"
    },
    {
        "code": "43",
        "county": "București - Sector 3"
    },
    {
        "code": "44",
        "county": "București - Sector 4"
    },
    {
        "code": "45",
        "county": "București - Sector 5"
    },
    {
        "code": "46",
        "county": "București - Sector 6"
    },
    {
        "code": "51",
        "county": "Călărași"
    },
    {
        "code": "52",
        "county": "Giurgiu"
    },
    {
        "code": "47",
        "county": "Bucuresti - Sector 7 (desfiintat)"
    },
    {
        "code": "48",
        "county": "Bucuresti - Sector 8 (desfiintat)"
    }
];
const getCounty = cnp => {
    let county;
    counties.forEach(item => {
        if (item.code === cnp.slice(7, 9))
            county = item.county;
    });
    return county;
};
exports.getCounty = getCounty;
