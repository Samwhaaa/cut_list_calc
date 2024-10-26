function worstFitDecreasing(available, required) {
    let sortedRequired = [...required].sort((a, b) => b - a);
    let bins = [];
    let stockUsed = 0;

    sortedRequired.forEach(item => {
        let worstBin = null;
        let maxSpaceLeft = 0;

        bins.forEach(bin => {
            if (bin.remaining >= item && bin.remaining > maxSpaceLeft) {
                worstBin = bin;
                maxSpaceLeft = bin.remaining;
            }
        });

        if (worstBin) {
            worstBin.cuts.push(item);
            worstBin.remaining -= item;
        } else {
            let newBin = { cuts: [item], remaining: available - item };
            bins.push(newBin);
            stockUsed++;
        }
    });

    let waste = bins.reduce((acc, bin) => acc + bin.remaining, 0);
    return { cutList: bins, waste, stockUsed };
}

module.exports = worstFitDecreasing;
