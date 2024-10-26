// main.js
const firstFit = require('./algorithms/firstFit');
const firstFitDecreasing = require('./algorithms/firstFitDecreasing');
const bestFit = require('./algorithms/bestFit');
const bestFitDecreasing = require('./algorithms/bestFitDecreasing');
const worstFit = require('./algorithms/worstFit');
const worstFitDecreasing = require('./algorithms/worstFitDecreasing');
const nextFit = require('./algorithms/nextFit');

function calculateCutList(available, required) {
    const algorithms = [
        firstFit, firstFitDecreasing, bestFit, bestFitDecreasing,
        worstFit, worstFitDecreasing, nextFit
    ];
    let results = [];
    
    algorithms.forEach(algo => {
        try {
            let result = algo(available, required);
            results.push(result);
        } catch (e) {
            console.log(`Algorithm ${algo.name} failed: ${e.message}`);
        }
    });

    const bestResult = results.reduce((best, current) => current.waste < best.waste ? current : best, results[0]);
    return bestResult;
}

// Example usage
const availableStock = ["1@4.8", "1@2.7"];
const requiredCuts = ["1@2.7", "2@1.8"];

const { cutList, waste, stockUsed } = calculateCutList(availableStock, requiredCuts);

console.log("Cut List:");
cutList.forEach(cut => console.log(cut));
console.log(`\nTotal waste: ${waste.toFixed(2)}m`);
console.log(`Total stock pieces used: ${stockUsed}`);
