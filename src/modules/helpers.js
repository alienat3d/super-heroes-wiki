export const animate = ({ timing, draw, duration }) => {

	let start = performance.now();

	// function quad(timeFraction) {
	// 	return Math.pow(timeFraction, 2)
	// }

	requestAnimationFrame(function animate(time) {
		let timeFraction = (time - start) / duration;
		if (timeFraction > 1) timeFraction = 1;

		let progress = timing(timeFraction);

		draw(progress);

		if (timeFraction < 1) {
			requestAnimationFrame(animate);
		}
	});
}
