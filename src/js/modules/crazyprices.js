import { qSA } from './funwithdom'


/************************
 * private parts - hihi *
 ************************/

// first translate from german comma to english dot
// second turn the string into a float which also gets rid of euro sign
const extractPrice = (el) => parseFloat(el.innerText.replace(',', '.'), 10)

// using cents, because of JS's broken float add
const convertToCents = (price) => price * 100

// small helper lambda for more readable code
const add = (a, b) => a + b


/****************
 * public parts *
 ****************/

// should be clear as it is almost simple english
// the dividing by 100 is needed to convert cents back to normal price
const extractPricesAndSumB = (selector) =>
    Array.prototype.map.call(qSA(selector), extractPrice).map(convertToCents).reduce(add) / 100

const extractPricesAndSumC = (selector) => {
    const nodesAsArray = Array.prototype.map.call(qSA(selector), (a) => a)
    return nodesAsArray.map(extractPrice).map(convertToCents).reduce(add) / 100
}

const extractPricesAndSum = (selector) =>
    qSA(selector).map(extractPrice).map(convertToCents).reduce(add) / 100


export { extractPricesAndSum }
