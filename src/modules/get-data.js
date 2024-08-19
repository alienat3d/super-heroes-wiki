export const getDataFunc = () => {
	const SERVER_URL = './db/db.json';

	return fetch(SERVER_URL)
		.then(res => {
			if (res.status === 200) {
				return res.json();
			} else {
				throw new Error("Произошла ошибка, данные не были найдены!");
			}
		})
		.catch(error => {
			error => console.warn(error)
		});
}