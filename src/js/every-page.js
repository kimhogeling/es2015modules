import { isTouchDevice } from './modules/touchdetection'
import { $ } from './modules/superqueryselector'


// add no-touch class to body for hover effects
$('body').classList.add(isTouchDevice() ? 'touch' : 'no-touch')
