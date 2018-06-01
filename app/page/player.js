import React from 'react';
import Progress from '../components/progress.js';
import player from './player.less';
import { Link } from 'react-router-dom';

let duration = null;
class Player extends React.Component {
    constructor() {
        super();
        this.state = {
            progress: 0,
            volume: 0,
            isPlay: true
        }
    }
    componentDidMount() {
        $('#player').bind($.jPlayer.event.timeupdate, (e) => {
            duration = e.jPlayer.status.duration;
            this.setState({
            	volume: e.jPlayer.options.volume * 100,
                progress: e.jPlayer.status.currentPercentAbsolute
            });
        });
    }
    componentWillUnmount() {
        $('#player').unbind($.jPlayer.event.timeupdate);
    }
    handleChangeProgress(progress) {
        $('#player').jPlayer('play', duration * progress);
    }
    handleChangeVolume(volume) {
    	console.log(volume);
    	$('#player').jPlayer('volume', volume);
    }
    play() {
    	if (this.state.isPlay) {
    		$('#player').jPlayer('pause');
    	} else {
    		$('#player').jPlayer('player');
    	}
    	this.setState({
    		isPlay: !this.state.isPlay
    	})
    }
    render() {
        return (
            <div className='player-page'>
            	<h1 className='caption'>
            		<Link to='/musicList'>我的私人乐坊</Link>
            	</h1>
            	<div className='mt20 row'>
            		<div className='controll-wrapper'>
            			<h2 className='music-title'>{this.props.title}</h2>
            			<h3 className='music-artist mt10'>{this.props.artist}</h3>
            			<div className='row mt20'>
            				<div className='left-time -col-auto'>-2:00</div>
            				<div className='volume-container'>
            					<i className='icon-volume rt' style={{top: 5, left: -5}}></i>
            					<div className='volume-wrapper'>
            						<Progress 
            							onChangeProgress={this.handleChangeVolume}
            							progress={this.state.volume}
            							barColor='#aaa'
            							/>
            					</div>
            				</div>
            			</div>
            			<div style={{height:10,lineHeight:'10px'}}>
            				<Progress 
            							onChangeProgress={this.handleChangeProgress}
            							progress={this.state.progress}
            							/>
            			</div>
            			<div className='mt35 row'>
            				<div>
            					<i className='icon prev'></i>
            					<i className={`icon ml20 ${this.state.isPlay?"play":"pause"}`} onClick={this.play.bind(this)}></i>
            					<i className='icon next ml20'></i>
            				</div>
            				<div className='-col-auto'>
            					<i className='icon repeat-cycle'></i>
            				</div>
            			</div>
            		</div>
            		<div className='-col-auto cover'>
            			<img src={this.props.cover} alt='歌曲名称'/>
            		</div>
            	</div>
            </div>
        )
    }
}

export default Player;
