import { taskApiClient } from 'components/services/taskApiClient';
import { useEffect, useState } from 'react';

const useHomePage = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        taskApiClient.getTaskByUser().then(t => {
            setTasks(t);
        });
    }, []);
    return { tasks };
};

export default useHomePage;
