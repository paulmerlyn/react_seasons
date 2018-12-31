import React from 'react';

const Loading = (props) => {
    return (
        <div className="ui segment season-display">
            <div className="ui active dimmer">
                <div className="ui large text loader">{props.loadingMessage}</div>
            </div>
        </div>
    )
}

Loading.defaultProps = {
    loadingMessage: 'default waiting'
};

export default Loading;