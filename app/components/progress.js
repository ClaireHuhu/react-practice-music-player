import React from "react";

class Progress extends React.Component {
    render() {
        return (
            <div>{this.props.progress}s</div>
        )
    }
}

export default Progress;
