import PropTypes from 'prop-types';
import React from 'react';
import CardTask from './CardTask';
import '../../assets/css/cardContainer.css';

const CardContainer = ({ tasks = [], title }) => {
    return (
        <div id="myContainer">
            <h2>{title}</h2>
            {tasks.map(task => {
                return <CardTask task={task} id={task.id} />;
            })}
        </div>
    );
};

CardContainer.propTypes = {
    tasks: PropTypes.array,
    title: PropTypes.string,
};

export default CardContainer;
