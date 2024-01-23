import React from 'react';

const Logo = () => {
    return (
        <div style={{ padding: "5px 15px" }}>
            <img
                src="/icon.png"
                alt="Logo"
                width={40}
                height={40}
                style={{ marginLeft: "-55px" }} // Adjust the value to move the logo to the left
            />
        </div>
    );
}

export default Logo;
