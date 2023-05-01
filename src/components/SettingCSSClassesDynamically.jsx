import React, { useState } from 'react';
import './FirstCss.css';

const SettingCSSClassesDynamically = () => {
    const [isButtonActive, setIsButtonActive] = useState(false);
    const handleButtonClick = () => {
        setIsButtonActive(!isButtonActive);
    };
    const buttonClassName = isButtonActive ? 'active-button' : 'inactive-button';
    return (
        <button className={buttonClassName} onClick={handleButtonClick}>
            {isButtonActive ? 'Active' : 'Inactive'}
        </button>
    );
}
export default SettingCSSClassesDynamically