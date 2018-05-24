import React from 'react';
import Header from './components/header';
import Player from './page/player';
import MusicList from './page/list';
import { MUSIC_LIST } from './config/config.js';

class Root extends React.Component {
    constructor() {
        super();
        this.state = {
            list: MUSIC_LIST,
            currentMusicItem: MUSIC_LIST[0]
        }
    }
    componentDidMount() {
        let _this = this;
        $('#player').jPlayer({
            ready: function() {
                $(this).jPlayer('setMedia', {
                    mp3: _this.state.currentMusicItem.file
                }).jPlayer('play');
            },
            supplied: 'mp3',
            wmode: 'window'
        });
    }
    render() {
        return (
            <div>
                <Header/>
                <MusicList list={this.state.list}/>
                {/* <Player {...this.state.currentMusicItem}/>*/}
            </div>
        )
    }
}

export default Root;
