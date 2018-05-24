import React from 'react';
import style from './listitem.less';

class ListItem extends React.Component {
	playMusic (item) {

	}
	deleteHandler (item) {

	}
	render () {
		let item = this.props.item;
		return (
			<li className="row components-listitem" onClick={this.playMusic.bind(this, item)}>
                <p><span className="bold">{item.title}</span>  -  {item.artist}</p>
                <p className="-col-auto delete" onClick={this.deleteHandler.bind(this, item)}></p>
            </li>
			)
	}
}

export default ListItem;