import { isTouchDevice } from './modules/touchdetection'
import { qS } from './modules/funwithdom'


// add no-touch class to body for hover effects
if (isTouchDevice()) {
    qS('body').classList.add('touch')
} else {
    qS('body').classList.add('no-touch')
}
