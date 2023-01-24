/**
 * Definition: Get information from module state and it computed.
 * Code example:
 * 
 *      export const myGetter = ( state ) => {
 *          return state.attr
 *      }
 */

export const getEntriesByTerm = (state) => ( term = '' ) => {
    if ( term.length === 0 )  return state.entries;
    return state.entries.filter( entry => entry.text.toLowerCase().includes( term.toLocaleLowerCase() ) );
}

export const getEntriesByName = (/* state */) => {

}