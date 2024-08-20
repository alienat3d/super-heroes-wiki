export const filterFunc = () => {
	const selectMovies = document.querySelector('.filters__movies-select');
	const options = {
		placeholder: 'Select categories',
		selectedtext: 'Selected'
	}
	// Styling selects with Nice Select 2 lib
	NiceSelect.bind(selectMovies, options);
	selectMovies.addEventListener('select', (evt) => {
		console.log(evt.target.value);
	});
}