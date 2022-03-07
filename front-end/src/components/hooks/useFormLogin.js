import { useState } from 'react';

const useFormLogin = (
    validateInfoLogin,
    initData = { email: '', password: '' },
) => {
    const [data, setData] = useState(initData);
    const [errors, setErrors] = useState({});

    const handleChange = event => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = async event => {
        event.preventDefault();
        const currentErrors = await validateInfoLogin(data);
        setErrors(currentErrors);
    };

    return { handleChange, handleSubmit, errors };
};

export default useFormLogin;
