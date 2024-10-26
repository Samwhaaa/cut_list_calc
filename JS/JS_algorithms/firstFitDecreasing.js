function firstFitDecreasing(available, required) {
    let sortedRequired = [...required].sort((a, b) => b - a);
    let bins = [];
    let stockUsed = 0;

    sortedRequired.forEach(item => {
        let placed = false;

        for (let bin of bins) {
            if (bin.remaining >= item) {
                bin.cuts.push(item);
                bin.remaining -= item;
                placed = true;
                break;
            }
        }

        if (!placed) {
            let newBin = { cuts: [item], remaining: available - item };
            bins.push(newBin);
            stockUsed++;
        }
    });

    let waste = bins.reduce((acc, bin) => acc + bin.remaining, 0);
    return { cutList: bins, waste, stockUsed };
}

module.exports = firstFitDecreasing;
