import React from 'react';
import ListItem from '../components/listitem';
 
class List extends React.Component {
	render () {
		let items = this.props.list.map((item)=>
			<ListItem item={item} key={item.id} isFocus={this.props.currentMusicItem.id === item.id}/>);
		return (
			<ul>
				{items}
			</ul>
		)
	}
}

export default List;