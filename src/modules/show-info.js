export const showInfoFunc = () => {
	const htmlTag = document.querySelector('html');
	if (htmlTag.classList.contains('desktop')) return;
	
	const cards = document.querySelector('.cards');
	const cardInfoCollection = cards.querySelectorAll('.cards__card-info');

	cards.addEventListener('touchstart', (evt) => {
		cardInfoCollection.forEach(infoBlock => infoBlock.classList.remove('show'));
		if (evt.target.closest('.cards__card')) {
			const cardInfo = evt.target.closest('.cards__card').querySelector('.cards__card-info');
			cardInfo.classList.toggle('show');
		}
	})
}