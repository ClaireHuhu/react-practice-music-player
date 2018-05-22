import React from "react";
import progress from './progress.less';

class Progress extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        let progress = (e.clientX - this.progressBar.getBoundingClientRect().left) / this.progressBar.clientWidth;
        this.props.onChangeProgress && this.props.onChangeProgress(progress);
    }
    render() {
        return (
            <div className={progress['components-progress']} onClick={this.handleClick} ref={(el)=>{this.progressBar=el;}}>
                <div className='progress' style={{width:`${this.props.progress}%`}}></div>
            </div>
        )
    }
}

export default Progress;
