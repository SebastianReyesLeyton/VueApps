/**
 * Definition: The mutations are sync functions to set the state attributes
 * Code example:
 * 
 *      export const myMutation = ( state ) => {
 *          ...
 *      }
 */

export const setEntries = ( state, entries ) => {
    state.entries = [...state.entries, ...entries];
    state.isLoading = false;
}

export const updateEntry = (/* state */) => {

}

export const addEntry = (/* state */) => {

}