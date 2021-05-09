import React from 'react'
import {Icon} from 'antd';

function Footer() {

    var d = new Date();
    var n = d.getFullYear();

    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <p>{'\u00A9'} {n} SAYD.com</p>
        </div>
    )
}

export default Footer
