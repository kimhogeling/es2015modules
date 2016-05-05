import { isTouchDevice } from './modules/touchdetection'
import { qS } from './modules/funwithdom'


// add no-touch class to body for hover effects
qS('body').classList.add(isTouchDevice() ? 'touch' : 'no-touch')
