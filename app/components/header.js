import React from 'react';
import header from './header.less';
import img from '../static/image/logo.png';

class Header extends React.Component {
    render() {
        return (
            <div className='components-header row'>
                <img src={img} width="40" className="-col-auto"/>
                <h1 className="caption">React Music Player</h1>
            </div>
        )
    }
}

export default Header;
