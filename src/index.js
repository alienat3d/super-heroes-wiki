import './style/index.scss';

import device from "current-device";

import { hintForMobileFunc } from "./modules/hint-for-mobile";
import { showInfoFunc } from "./modules/show-info";
import { loadFunc } from "./modules/load";
import { filterFunc } from "./modules/filter";

hintForMobileFunc();
showInfoFunc();
loadFunc();
filterFunc();