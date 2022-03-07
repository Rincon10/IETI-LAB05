import { useState } from 'react';
import _ from 'lodash';
import swal from 'sweetalert';
import { userApiclient } from 'components/services/userApiClient';

const useFormLogin = (
    validateInfoLogin,
    initData = { email: '', password: '' },
) => {
    const [data, setData] = useState(initData);
    const [errors, setErrors] = useState({});
    const [token, setToken] = useState(null);

    const login = () => {
        userApiclient
            .getToken()
            .then(token => {
                console.log('token', token);
                setToken(token.json());
                window.location.href = '/home';
            })
            .catch(() => {
                swal({
                    title: 'Login',
                    icon: 'error',
                    text: 'Error al momento de iniciar sesión',
                    timer: '5000',
                });
            });
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = async event => {
        event.preventDefault();
        const currentErrors = await validateInfoLogin(data);
        setErrors(currentErrors);
        if (_.isEqual({}, currentErrors)) {
            login();
        }
    };

    return { handleChange, handleSubmit, errors };
};

export default useFormLogin;
