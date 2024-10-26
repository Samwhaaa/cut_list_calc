// main.js
const firstFit = require('./algorithms/firstFit');
const firstFitDecreasing = require('./algorithms/firstFitDecreasing');
const bestFit = require('./algorithms/bestFit');
const bestFitDecreasing = require('./algorithms/bestFitDecreasing');
const worstFit = require('./algorithms/worstFit');
const worstFitDecreasing = require('./algorithms/worstFitDecreasing');
const nextFit = require('./algorithms/nextFit');

function calculateCutList(available, required) {
    const algorithms = [firstFit, firstFitDecreasing, bestFit, bestFitDecreasing, worstFit, worstFitDecreasing, nextFit];
    let bestResult = null;

    algorithms.forEach(algo => {
        const result = algo(available, required);
        if (!bestResult || result.waste < bestResult.waste) {
            bestResult = result;
        }
    });

    return bestResult;
}

const availableStock = 4.8; // example stock length
const requiredCuts = [2.7, 1.8, 1.8]; // example required cuts

const result = calculateCutList(availableStock, requiredCuts);
console.log("Best Cut List:", result.cutList);
console.log("Waste:", result.waste);
console.log("Stock Used:", result.stockUsed);
