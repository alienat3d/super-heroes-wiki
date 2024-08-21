import { loadWithFilterFunc, loadFunc } from './load';

export const filterFunc = () => {
	const selectMovies = document.querySelector('.filters__movies-select');
	const resetBtn = document.querySelector('.filters__reset-btn');


	const options = {
		searchable: true
	}
	// Styling selects with Nice Select 2 lib
	NiceSelect.bind(selectMovies, options);
	
	selectMovies.addEventListener('change', (evt) => {
		const selectValue = evt.target.value;
		if (selectValue === 'Choose movie') return;
		loadWithFilterFunc(selectValue);
	});
	resetBtn.addEventListener('click', () => {
		document.querySelector('.filters__movies-select > .current').textContent = '';
		document.querySelectorAll('.nice-select-dropdown > .list > li').forEach(li => {
			if (li.classList.contains('selected')) li.classList.remove('selected');
		});
		loadFunc();
	});

}