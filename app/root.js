import React from 'react';
import Header from './components/header';
import Player from './page/player';
import MusicList from './page/list';
import { MUSIC_LIST } from './config/config.js';
import { BrowserRouter , Route, Link, Redirect, Switch, Prompt, withRouter } from 'react-router-dom';

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
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route path='/musicList' render={()=> <MusicList 
                        list={this.state.list} 
                        currentMusicItem={this.state.currentMusicItem}
                        />}
                    />
                    <Route path='/player' render={()=><Player {...this.state.currentMusicItem}/>}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default Root;

