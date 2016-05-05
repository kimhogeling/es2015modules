import { appendHTML } from './modules/funwithdom'
import { extractPricesAndCalcSum } from './modules/crazyprices'


// read all prices and insert sum
appendHTML('.sum', extractPricesAndCalcSum('.p-price').toFixed(2) + ' €')
