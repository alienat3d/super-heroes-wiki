// import './style/lib/nice-select2.css';
// import './../node_modules/nice-select2/dist/css/nice-select2.css';
import './style/index.scss';

// import './static/vendor/js/nice-select2.js';
// import './../node_modules/nice-select2/dist/js/nice-select2.js';
import device from "current-device";

import { hintForMobileFunc } from "./modules/hint-for-mobile";
import { showInfoFunc } from "./modules/show-info";
import { loadFunc } from "./modules/load";
import { filterFunc } from "./modules/filter";

hintForMobileFunc();
showInfoFunc();
loadFunc();
filterFunc();