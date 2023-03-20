let PentagonalManager = function () {
	
}

PentagonalManager.prototype.getNth = function (n) {
	return (3 * n * n - n) / 2;
}

PentagonalManager.prototype.isPentagonal = function (N) {
	// Get positive root of
	// equation P(n) = N.
	let n = (1 + Math.sqrt(24*N + 1))/6;
     
    // Check if n is an integral
    // value of not. To get the
    // floor of n, type cast to int.
    return (n - parseInt( n) == 0);
}


PentagonalManager.prototype.getIndex = function (n) {
	let i, t = 0;
	
	for (i = 0; i <= n; i++) {
		if (this.isPentagonal(i)) t++;
	}
	
	return t;	
}