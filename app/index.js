import React from "react";
import ReactDOM from 'react-dom';
import styles from './index.less';
class Router extends React.Component {
	render () {
		return <div className={styles.test}><span>test</span></div>
	}
}

ReactDOM.render(<Router/>,document.getElementById('root'));
