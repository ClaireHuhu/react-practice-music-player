import React from 'react';
import detail from './detail.less';

class Detail extends React.Component {
	render () {
		let {DetailItem:item} = this.props;
		return (
			<div className='detail-page'>
				<img src={item.cover}/>
				<div className='info-wrapper'>
					<p>{item.title}</p>
				</div>
			</div>
			)
	}
}

export default Detail;