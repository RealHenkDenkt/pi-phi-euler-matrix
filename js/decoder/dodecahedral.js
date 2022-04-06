var DodecahedralManager = function () {

}
DodecahedralManager.prototype.getByNumber = function (n) {
    return n * (3 * n - 1) * (3 * n - 2) / 2;
}
DodecahedralManager.prototype.getIndex = function (n) {
    if (DODECAHEHDRALS.indexOf(n) >= 0) return DODECAHEHDRALS[n];
    return -1;
}
DodecahedralManager.prototype.isValid = function (n) {
    return DODECAHEHDRALS.indexOf(n) >= 0;
}

const DODECAHEHDRALS = [0,1,20,84,220,455,816,1330,2024,2925,4060,5456, 7140,9139,11480,14190,17296,20825,24804,29260,
    34220,39711,45760,52394,59640,67525,76076,85320, 95284,105995,117480,129766,142880,156849,171700, 187460,204156];


