import React from 'react';
import Header from './components/header'
import Progress from './components/progress'

class Root extends React.Component {
    constructor() {
        super();
        this.state = {
            progress: '-'
        }
    }
    componentDidMount() {
        $('#player').jPlayer({
            ready: function() {
                $(this).jPlayer('setMedia', {
                    mp3: 'http://oj4t8z2d5.bkt.clouddn.com/%E8%8E%AB%E6%96%87%E8%94%9A-%E5%A4%96%E9%9D%A2%E7%9A%84%E4%B8%96%E7%95%8C.mp3'
                }).jPlayer('player');
            },
            supplied: 'mp3',
            wmode: 'window'
        });
        $('#player').bind($.jPlayer.event.timeupdate, (e) => {
            this.setState({
                progress: Math.round(e.jPlayer.status.currentTime)
            });
        });
    }
    render() {
        return (
            <div>
                <Header/>
                <Progress
                    progress={this.state.progress} 
                ></Progress>
            </div>
        )
    }
}

export default Root;
