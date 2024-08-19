import { animate } from "./helpers";

export const hintForMobileFunc = () => {
	const cookie = document.cookie;
	const htmlTag = document.querySelector('html');

	if (cookie === 'visited=true' || htmlTag.classList.contains('desktop')) return;

	const COOKIE_EXPIRE_DAYS = 30;
	let cookieExpireSeconds;

	const hintMessage = document.querySelector('.content__hint-message');
	const cards = document.querySelector('.cards');

	const hintAppearAnimation = () => {
		hintMessage.classList.add('show');
		animate({
			duration: 400,
			timing(timeFraction) {
				return Math.pow(timeFraction, 2);
			},
			draw(progress) {
				hintMessage.style.opacity = progress;
			}
		})
	}

	const hintDisappearAnimation = () => {
		animate({
			duration: 400,
			timing(timeFraction) {
				return Math.pow(timeFraction, 2);
			},
			draw(progress) {
				hintMessage.style.opacity = 1 - progress;
			}
		})
		setTimeout(() =>
			hintMessage.classList.remove('show'), 500);
	}

	setTimeout(hintAppearAnimation, 2000);

	cookieExpireSeconds = COOKIE_EXPIRE_DAYS * 60 * 60 * 24;

	cards.addEventListener('click', (evt) => {
		if (evt.target.closest('.cards__card')) {
			hintDisappearAnimation();
			document.cookie = `visited=true; ;max-age=${cookieExpireSeconds}`;
		}
	});
}