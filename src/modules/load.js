import { getDataFunc } from './get-data';
import { renderFunc } from './render';

const loadFunc = () => {
	getDataFunc()
		.then((data) => renderFunc(data));
}
const loadWithFilterFunc = (filter) => {
	getDataFunc()
		.then(data => renderFunc(data, filter));
}

export { 
	loadFunc, 
	loadWithFilterFunc 
};