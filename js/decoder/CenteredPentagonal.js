var CenteredPentagonalManager = function () {
    this.triangles = new Triangles();
}
CenteredPentagonalManager.prototype.getByNumber = function (n) {
    return (5 * n * n - 5 * n + 2) / 2;
}
CenteredPentagonalManager.prototype.getIndex = function (n) {
    // implement
    return -1;
}
CenteredPentagonalManager.prototype.isValid = function (n) {
    // inplment
}

CenteredPentagonalManager.prototype.getCoords = function (centerX, centerY, dist) {
    let
        coords = [],
        opposite,
        adjacent,
        angle
    ;

    // bottom left coord
    coords.push(this.triangles.getCoordinates(centerX, centerY, dist, 54));
    //opposite = this.triangles.getCoordinates(coords[0], coords[1], dist, 72);
    //let x = centerX - opposite, y = centerY  - dist;
    //coords.push([x, y]);
    //opposite = this.triangles.getOppositeByAdjacent(dist, 72);
    //x = x +*/
}
