import { loadWithFilterFunc } from './load';

export const filterFunc = () => {
	const selectMovies = document.querySelector('.filters__movies-select');

	const options = {
		searchable: true,
		placeholder: 'Select movie',
		// selectedtext: 'Selected'
	}
	// Styling selects with Nice Select 2 lib
	NiceSelect.bind(selectMovies, options);
	
	selectMovies.addEventListener('change', (evt) => {
		const selectValue = evt.target.value;
		loadWithFilterFunc(selectValue);
	});
}