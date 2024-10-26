function nextFit(available, required) {
    let bins = [];
    let currentBin = null;
    let stockUsed = 0;

    required.forEach(item => {
        if (!currentBin || currentBin.remaining < item) {
            currentBin = { cuts: [item], remaining: available - item };
            bins.push(currentBin);
            stockUsed++;
        } else {
            currentBin.cuts.push(item);
            currentBin.remaining -= item;
        }
    });

    let waste = bins.reduce((acc, bin) => acc + bin.remaining, 0);
    return { cutList: bins, waste, stockUsed };
}

module.exports = nextFit;
