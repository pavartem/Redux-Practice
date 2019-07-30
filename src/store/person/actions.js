export const PERSON_SAVE_API_DATA = 'PERSON_SAVE_API_DATA';

export const saveApiData = (api) => ({
    type: PERSON_SAVE_API_DATA,
    payload: api
});