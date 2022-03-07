import axios from 'axios';

export const userApiclient = (() => {
    const URL = 'https://planner-back-end.herokuapp.com';
    /* const URL = 'http://localhost:8080'; */
    return {
        getToken: async loginDTO => {
            /* const response = await fetch(`${URL}/api/v1/auth`, {
                mode: 'cors',
                method: 'POST',
                headers: headers,
                body: JSON.stringify(loginDTO),
            });
            console.log(response);

            if (!response.ok) throw new Error('The response failed');
            return response.json(); */
            const config = {
                url: `${URL}/api/v1/auth`,
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    origin: 'x-requested-with',
                    'Access-Control-Allow-Headers':
                        'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
                    'Content-Type': 'application/json',
                },
                data: JSON.stringify(loginDTO),
            };
            const response = await axios(config);
            console.log(response);
            return response;
        },
    };
})();
