const getBeers = require('./data')


function main(keyword) {
    console.log('keyword:', keyword)
    const beers = getBeers()
    return beers.filter((beer) => beer.name.includes(keyword))
}

console.log(main(process.argv[2]))


// Usage: node searchByName.js <keyword>
// Example: node searchByName.js Rabbit