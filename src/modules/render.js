export const renderFunc = (cards) => {
	const cardsContainer = document.querySelector('.cards');

	cards.forEach(card => {
		cardsContainer.insertAdjacentHTML('beforeend', `
<div class="cards__card ${card.gender.toLowerCase()}">
	<h2 class="cards__card-title">${card.name}</h2>
	<div class="cards__card-pic" style="background-image: url('./images/${card.photo}');"></div>
	<div class="cards__card-info">
		<div class="cards__card-properties">
			<div class="cards__card-gender"></div>
			<div class="cards__card-status ${card.status}">
				${card.status}
			</div>
			${card.birthDay ? `<span class="cards__card-status-birthday">${card.birthDay}</span>` : ''}
			${card.deathDay ? `<span class="cards__card-status-deathday">${card.deathDay}</span>` : ''}
		</div>
			${card.realName ? `<div class="cards__card-real-name">Real name: <strong>${card.realName}</strong></div>` : ''}
			${card.species && card.citizenship ? 
				`<div class="cards__card-properties cards__card-properties--2">
					<div class="cards__card-species">${card.species}</div>
					<div class="cards__card-citizenship">${card.citizenship}</div>
				</div>` : ''}
			${card.species && !card.citizenship ? 
				`<div class="cards__card-properties cards__card-properties--2">
					<div class="cards__card-species">${card.species}</div>
				</div>` : ''}
			${!card.species && card.citizenship ? 
				`<div class="cards__card-properties cards__card-properties--2">
					<div class="cards__card-citizenship">${card.citizenship}</div>
				</div>` : ''}
		<div class="cards__card-actors">
			${card.gender === 'male' ? 'Actor' : 'Actress'}: <strong>${card.actors}</strong>
		</div>
		<div class="cards__card-movies">
			${card.movies ? `<div class="cards__card-movies-title">Appeared in films:</div>` : ''}
		</div>
	</div>
</div>
		`);
		const moviesBlockCollection = document.querySelectorAll('.cards__card-movies');
		const currentHeroMoviesBlock = moviesBlockCollection[moviesBlockCollection.length - 1]
		if (card.movies) {
			const movies = card.movies;
			movies.forEach(movieTitle => {
				currentHeroMoviesBlock.insertAdjacentHTML('beforeend',
					`<div>«${movieTitle}»</div>`);
			});
		}
	});
}