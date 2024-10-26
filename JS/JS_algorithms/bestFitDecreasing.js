function bestFitDecreasing(available, required) {
    let sortedRequired = [...required].sort((a, b) => b - a);
    let bins = [];
    let stockUsed = 0;

    sortedRequired.forEach(item => {
        let bestBin = null;
        let minSpaceLeft = available;

        bins.forEach(bin => {
            if (bin.remaining >= item && bin.remaining - item < minSpaceLeft) {
                bestBin = bin;
                minSpaceLeft = bin.remaining - item;
            }
        });

        if (bestBin) {
            bestBin.cuts.push(item);
            bestBin.remaining -= item;
        } else {
            let newBin = { cuts: [item], remaining: available - item };
            bins.push(newBin);
            stockUsed++;
        }
    });

    let waste = bins.reduce((acc, bin) => acc + bin.remaining, 0);
    return { cutList: bins, waste, stockUsed };
}

module.exports = bestFitDecreasing;
