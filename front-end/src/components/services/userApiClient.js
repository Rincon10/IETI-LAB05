export const userApiclient = (() => {
    const URL = 'https://planner-back-end.herokuapp.com';
    /* const URL = 'http://localhost:8080'; */

    return {
        getToken: async loginDTO => {
            const response = await fetch(`${URL}/api/v1/auth`, {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }),
                body: JSON.stringify(loginDTO),
            });
            console.log(response);
            console.log(response.json());

            if (!response.ok) throw new Error('The response failed');
            return response.json();
        },
    };
})();
