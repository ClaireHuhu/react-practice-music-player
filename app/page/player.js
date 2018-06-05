import React from 'react';
import Progress from '../components/progress.js';
import player from './player.less';
import { Link } from 'react-router-dom';
import pubsub from 'pubsub-js';

class Player extends React.Component {
    constructor() {
        super();
        this.state = {
            progress: 0,
            volume: 0,
            isPlay: true,
            leftTime: 0
        }
    }
    componentWillReceiveProps () {
    	this.setState({
    		isPlay: true
    	})
    }
    componentDidMount() {
        $('#player').bind($.jPlayer.event.timeupdate, (e) => {
            this.duration = e.jPlayer.status.duration;
            console.log('duration',this.duration);
            this.setState({
            	volume: e.jPlayer.options.volume * 100,
                progress: e.jPlayer.status.currentPercentAbsolute,
                leftTime: this.transform(this.duration * (1 - e.jPlayer.status.currentPercentAbsolute/100))
            });
        });
    }
    transform (time) {
    	let min = Math.floor(time/60);
    	let sec = Math.floor(time - min * 60);
    	return `-${min}:${sec<10?0:''}${sec}`
    }
    componentWillUnmount() {
        $('#player').unbind($.jPlayer.event.timeupdate);
    }
    handleChangeProgress(progress) {
        $('#player').jPlayer('play', this.duration * progress);
    }
    handleChangeVolume(volume) {
    	$('#player').jPlayer('volume', volume);
    }
    play() {
    	if (this.state.isPlay) {
    		$('#player').jPlayer('pause');
    	} else {
    		$('#player').jPlayer('play');
    	}
    	this.setState({
    		isPlay: !this.state.isPlay
    	})
    }
    handlePrev() {
    	pubsub.publish('PLAY_PREV');
    }
    handleNext() {
    	pubsub.publish('PLAY_NEXT');
    }
    handleChangeMode() {
    	pubsub.publish('CHANGE_MODE');
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
            				<div className='left-time -col-auto'>{this.state.leftTime}</div>
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
            							onChangeProgress={this.handleChangeProgress.bind(this)}
            							progress={this.state.progress}
            							/>
            			</div>
            			<div className='mt35 row'>
            				<div>
            					<i className='icon prev' onClick={this.handlePrev}></i>
            					<i className={`icon ml20 ${this.state.isPlay?"pause":"play"}`} onClick={this.play.bind(this)}></i>
            					<i className='icon next ml20' onClick={this.handleNext}></i>
            				</div>
            				<div className='-col-auto'>
            					<i className={`icon ${this.props.mode}`} onClick={this.handleChangeMode}></i>
            				</div>
            			</div>
            		</div>
            		<div className='-col-auto cover'>
            			<img src={this.props.cover} alt={this.props.title}/>
            		</div>
            	</div>
            </div>
        )
    }
}

export default Player;
