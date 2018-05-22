import React from 'react';
import header from './header.less'

class Header extends React.Component {
    render() {
        return (
            <div className={header['components-header'] + ' row'}>
                <img src='/static/image/logo.png' width="40" className="-col-auto"/>
                <h1 className="caption">React Music Player</h1>
            </div>
        )
    }
}

export default Header;
