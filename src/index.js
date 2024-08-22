import './style/index.scss';

import device from "current-device";

import { hintForMobileFunc } from "./modules/hint-for-mobile";
import { loadFunc } from "./modules/load";
import { filterFunc } from "./modules/filter";

hintForMobileFunc();
loadFunc();
filterFunc();