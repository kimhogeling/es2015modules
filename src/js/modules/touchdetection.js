import { qS } from './funwithdom'

/************************
 * private parts - hihi *
 ************************/

// to prevent multiple checkings, let's save it in a private const
const IS_TOUCH_DEVICE = (('ontouchstart' in window) || !!(window.DocumentTouch && document instanceof DocumentTouch))


/****************
 * public parts *
 ****************/

const isTouchDevice = () => IS_TOUCH_DEVICE


export { isTouchDevice }
