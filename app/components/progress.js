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
            <div className='components-progress' onClick={this.handleClick} ref={(el)=>{this.progressBar=el;}}>
                <div className='progress' style={{width:`${this.props.progress}%`,background:this.props.barColor}}></div>
            </div>
        )
    }
}
Progress.defaultProps = {
    barColor: '#2f9842'
}

export default Progress;
