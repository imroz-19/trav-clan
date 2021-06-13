const BASE_URL = 'https://intense-tor-76305.herokuapp.com/merchants';

const getList = async () => {
    return await fetch(`${BASE_URL}`).then(data => data.json())
};

export default getList;