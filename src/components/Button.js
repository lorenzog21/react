import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
    const buttonStyleClass = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const buttonSizeClass = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to='/sign-up' className='btn-mobile'>
            <button
                className={`btn ${buttonStyleClass} ${buttonSizeClass}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    );
};

