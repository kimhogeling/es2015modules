
/****************
 * public parts *
 ****************/

// nothing special here, the party starts at line 9
const $ = (selector) => document.querySelector.call(document, selector)

// querySelectorAll returns a NodeList which does not have higher order functions,
// but we reeeeally want those, because they are super powers!
// We COULD enhance the NodeList prototype, but that is a really bad practise!!
// Object.create() is our radio active spider here. hurray!
const $$ = (selector) => {
    // nothing special
    const boringnodelist = document.querySelectorAll.call(document, selector)

    // steal higher order functions from array prototype
    const objWithHigherOrderFunctions = {
        map: (lambda) => Array.prototype.map.call(boringnodelist, lambda),
        forEach: (lambda) => Array.prototype.forEach.call(boringnodelist, lambda),
        reduce: (lambda) => Array.prototype.reduce.call(boringnodelist, lambda)
    }

    // composition baby!! make the boring node list awesome!
    const supernodelist = Object.create(
        objWithHigherOrderFunctions,
        boringnodelist
    )

    return supernodelist
}


export { $, $$ }
