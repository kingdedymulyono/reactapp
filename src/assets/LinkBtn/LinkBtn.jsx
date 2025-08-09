import React from 'react'
// import { Link } from 'react-router-dom'

const LinkBtn = ({ href, text, classlist }) => {
    return (
        <a href={href} className={classlist}>
            {text}
        </a>
    );
};

export default LinkBtn