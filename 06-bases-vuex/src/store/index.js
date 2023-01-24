import { createStore } from 'vuex';
import getRandomInt from '@/helpers/getRandomInt';

export default createStore({

    state: {
        count: 1,
        lastMutation: 'none',
        isLoading: false
    },

    mutations: {
        increment ( state ) {
            state.count++;
            state.lastMutation = 'increment';
        },
        incrementBy ( state, val ) {
            state.count += val;
            state.lastMutation = 'increment ' + val;
        },
        setLoading ( state, val ) {
            state.isLoading = val;
            state.lastMutation = 'setLoading ' + val;
        }
    },

    actions: {
        async incrementRandomInt ( { commit } ) {
            commit('setLoading', true);
            const randomInt = await getRandomInt();
            commit('setLoading', false);
            commit('incrementBy', randomInt);
        }
    }

});