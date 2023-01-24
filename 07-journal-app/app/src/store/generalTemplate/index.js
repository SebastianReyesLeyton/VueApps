/**
 * Definition: It will be imported on store file
 */

import state from './state';
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

const generalModule = {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}

export default generalModule;