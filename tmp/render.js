if (card.movies) {
	movies = card.movies;

	movies.forEach(movieTitle => {
		currentHeroMoviesBlock.insertAdjacentHTML('beforeend',
			`<div>«${movieTitle}»</div>`);
	});
	// To get all the movie titles in one array:
	movies = movies.filter(e => !~movieTitles.indexOf(e));
	movieTitles.push(...movies);
	console.log('movieTitles', movieTitles.sort())
}