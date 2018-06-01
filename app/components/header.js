import React from 'react';
import header from './header.less';
import img from '../static/image/logo.png';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
        	<Link to='/'>
            <div className='components-header row'>
                <img src={img} width="40" className="-col-auto"/>
                <h1 className="caption">React Music Player</h1>
            </div>
            </Link>
        )
    }
}

export default Header;
