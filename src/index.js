import './style/index.scss';
import device from "current-device";

import { hintForMobileFunc } from "./modules/hint-for-mobile";
import { showInfoFunc } from "./modules/show-info";
// import { getDataFunc } from "./modules/get-data";
// import { renderFunc } from "./modules/render";
import { loadFunc } from "./modules/load";

// getDataFunc().then(data => renderFunc(data));

hintForMobileFunc();
showInfoFunc();
loadFunc();