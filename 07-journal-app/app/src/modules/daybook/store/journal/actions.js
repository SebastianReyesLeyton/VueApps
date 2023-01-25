/**
 * Definition: The actions are async function that invoke a mutation after resolve async request
 * Code example: 
 * 
 *      export const myAction = async ({ commit }) => {
 *          ...
 *      }
 * 
 */

import journalApi from "@/api/journalApi";

export const loadEntries = async ({ commit }) => {
    const { data } = await journalApi.get('/entries.json');
    const entries = [];

    if ( data ) {
        for ( const id of Object.keys( data ) ) {
            entries.push({
                id,
                ...data[id]
            })
        }
    }

    console.log(entries)
    commit('setEntries', entries);
}

export const updateEntry = async ({ commit }, entry) => {

    const { id, ...dataToSave } = entry;

    const res = await journalApi.put(`/entries/${id}.json`, dataToSave);
    
    commit('updateEntry', { ...entry });

}

export const createEntry = async ({ commit }, entry) => {

    const { id, ...dataToSave } = entry;

    const { data } = await journalApi.post(`/entries.json`, dataToSave);

    dataToSave.id = data.name;

    commit('addEntry', dataToSave);

    return data.name;
}

export const deleteEntry = async ({ commit }, id) => {
    await journalApi.delete(`/entries/${id}.json`);
    commit('deleteEntry', id);
}