import { getDataFunc } from './get-data.js';
import { renderFunc } from './render.js';

export const loadFunc = () => {
	getDataFunc()
		.then((data) => renderFunc(data));
}