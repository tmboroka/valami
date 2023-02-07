const getBeers = require('./data')

function main(type) {
    console.log('type:', type)
    const beers = getBeers();
    return beers.filter((beer) => beer.type.includes(type))
}
console.log(main('Ale'));


// Usage: node filterByType.js <type>
// Example: node filterByType.js ALE