/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
	let output = init;
	return {
		increment: () => ++output,
		decrement: () => --output,
		reset: () => (output = init),
	};
};
