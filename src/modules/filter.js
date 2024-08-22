import { loadWithFilterFunc, loadFunc } from './load';

export const filterFunc = () => {
	const filters = document.querySelector('.filters');
	const selectMovies = document.querySelector('.filters__movies-select');
	const resetBtn = document.querySelector('.filters__reset-btn');

	const options = {
		searchable: true
	}
	
	// Styling select with Nice Select 2 lib
	NiceSelect.bind(selectMovies, options);

	filters.addEventListener('click', (evt) => {
		if (evt.target.classList.contains('filters__reset-btn') || evt.target.classList.contains('filters')) return;
		resetBtn.classList.toggle('open');
	});

	selectMovies.addEventListener('change', (evt) => {
		const selectValue = evt.target.value;
		if (selectValue === 'Choose movie') return;
		loadWithFilterFunc(selectValue);
		resetBtn.classList.remove('disabled');
	});

	resetBtn.addEventListener('click', () => {
		document.querySelector('.filters__movies-select > .current').textContent = '';
		document.querySelectorAll('.nice-select-dropdown > .list > li').forEach(li => {
			if (li.classList.contains('selected')) li.classList.remove('selected');
		});
		loadFunc();
		resetBtn.classList.add('disabled');
	});
}