import React from 'react';
import Header from './components/header';
import Player from './page/player';
import MusicList from './page/list';
import Detail from './page/Detail';
import { MUSIC_LIST } from './config/config.js';
import { BrowserRouter , Route, Link, Redirect, Switch, Prompt, withRouter } from 'react-router-dom';
import pubsub from 'pubsub-js';

class Root extends React.Component {
    constructor () {
        super();
        this.state = {
            list: MUSIC_LIST,
            currentMusicItem: MUSIC_LIST[0],
            modeIndex: 0
        }
        this.play = this.play.bind(this);
        this.mode = ['repeat-cycle', 'repeat-once', 'repeat-random'];
    }
    play (data) {
        this.setState({
            currentMusicItem: data
        });
        $('#player').jPlayer('setMedia', {
            mp3: this.state.currentMusicItem.file
        }).jPlayer('play');
    }
    playNext (type='next') {
        let mode = this.mode[this.state.modeIndex];
        let newIndex = null;
        let index = this.findIndex(this.state.currentMusicItem);
        let musicLength = this.state.list.length;
        if (mode === 'repeat-cycle') {
            if (type === 'next') {
                newIndex = (index + 1) % musicLength;
            } else {
                newIndex = (index -1 + musicLength) % musicLength;
            }
        } else if (mode === 'repeat-once') {
            newIndex = index;
        } else {
            newIndex = Math.round(Math.random() * musicLength);
        }
        this.play(this.state.list[newIndex]);
    }
    findIndex(item) {
        return this.state.list.indexOf(item);
    }
    componentDidMount () {
        let _this = this;
        $('#player').jPlayer({
            supplied: 'mp3',
            wmode: 'window'
        });
        this.play(this.state.currentMusicItem);
        $('#player').bind($.jPlayer.event.ended, e => {
            this.playNext('next');
        });
        pubsub.subscribe('PLAY_MUSIC', (mes, data) => {
            this.play(data);
        });
        pubsub.subscribe('DELETE_MUSIC', (mes, data) => {
            this.setState({
                list: this.state.list.filter(item=>item.id != data.id)
            })
        });
        pubsub.subscribe('PLAY_PREV', mes => {
            this.playNext('pre');
        });
        pubsub.subscribe('PLAY_NEXT', mes => {
            this.playNext('next');
        });
        pubsub.subscribe('CHANGE_MODE', mes => {
            this.setState({
                modeIndex: (this.state.modeIndex + 1) % this.mode.length
            })
        })
    }
    componentWillUnmount () {
        pubsub.unsubscribe('PLAY_MUSIC');
        pubsub.unsubscribe('DELETE_MUSIC');
        pubsub.unsubscribe('PLAY_PREV');
        pubsub.unsubscribe('PLAY_NEXT');
        $('#player').unbind($.jPlayer.event.ended);
    }
    getItem (id) {
        return MUSIC_LIST.find(item=>item.id==id);
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route path='/' exact render={()=><Player {...this.state.currentMusicItem} mode={this.mode[this.state.modeIndex]}/>}/>
                    <Route path='/musicList' render={()=> <MusicList 
                        list={this.state.list} 
                        currentMusicItem={this.state.currentMusicItem}
                        />}
                    />
                    <Route path='/detail/:id' 
                          render={({match})=><Detail 
                                DetailItem={this.getItem(match.params.id)}/>}
                    />
                </div>
            </BrowserRouter>
        )
    }
}

export default Root;

