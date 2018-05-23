import React from 'react';

class Player extends React.Component {
    constructor() {
        super();
        this.state = {
            progress: '-'
        }
    }
    componentDidMount() {
        $('#player').bind($.jPlayer.event.timeupdate, (e) => {
            duration = e.jPlayer.status.duration;
            this.setState({
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
    render() {
        return (
            <div>
                <Header/>
                <Progress
                    progress={this.state.progress}
                    onChangeProgress = {this.handleChangeProgress}
                ></Progress>
            </div>
        )
    }
}

export default Player;
