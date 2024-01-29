import React from 'react';

const Logo = ({ isVisible = false }) => {
    const logoStyle = {
        padding: "5px 15px",
        display: isVisible ? 'block' : 'none'
    };

    return (
        <div style={logoStyle}>
            <img
                src="/icon.png"
                alt="Logo"
                width={40}
                height={40}
                style={{ marginLeft: "-55px" }}
            />
        </div>
    );
}

export default Logo;

