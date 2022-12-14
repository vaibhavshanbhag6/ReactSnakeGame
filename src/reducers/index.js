import { combineReducers } from "redux";

import snakemove from "./snakemove";
import foodposition from "./foodposition";

const reducers = combineReducers({
    snakemove,
    foodposition
})

export default reducers;