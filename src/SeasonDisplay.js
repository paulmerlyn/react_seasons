import './SeasonDisplay.css';
import React from 'react';

// We don't actually call this because I passed season as a precalculated property from the App parent component that makes SeasonDisplay its child
let getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const seasonConfig = {
    summer: { iconName: 'massive sun icon', text: "Let's hit the beach" },
    winter: { iconName: 'massive blue snowflake icon', text: "Burr, it's cold!" }
}


const SeasonDisplay = props => {
    const season = props.season;
    //let season = 'summer';

    const { iconName, text } = seasonConfig[season];

    //text = (this.season === 'summer' ? 'Let&rsquo;s hit the beach' : 'Burr, it&rsquo;s chilly!');

    //getIconName = (season) => { return (season === 'summer' ? 'sun icon' : 'snow icon')}

    //renderHTML = (rawHTML) => React.createElement("span", { dangerouslySetInnerHTML: { __html: rawHTML } });
    
    return (
        <div className={`season-display ${season}`}>
            <i className={`top-left ${iconName}`} />
            <h1 className="ui header centered">{text}</h1>
            <i className={`bottom-right ${iconName}`} />
        </div>
    )

}

export default SeasonDisplay;