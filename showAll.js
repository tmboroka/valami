const getBeers = require('./data')

function main() {
    const beers = getBeers()
    beers.map(beer=>console.log(beer.name)
}

main()

// Usage: node showAll.js