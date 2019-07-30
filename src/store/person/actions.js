export const PERSON_GET_API_DATA = 'PERSON_GET_API_DATA';

export const getApiDataAsync = (localApi) => ({
    type: PERSON_GET_API_DATA,
    payload: localApi
});


export const getApiData = () => {
    return dispatch => {
        fetch('https://swapi.co/api/people/1/')
            .then((response) => {
                return response.json();
            })
            .then((user) => {
                dispatch(getApiDataAsync(user));
            })
            .catch(console.log);
    }
};