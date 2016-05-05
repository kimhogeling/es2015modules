import { appendHTML } from './modules/funwithdom'
import { extractPricesAndSum } from './modules/crazyprices'


// read all prices and insert sum
appendHTML('.sum', extractPricesAndSum('.p-price').toFixed(2) + ' €')
