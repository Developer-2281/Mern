import React, { useState } from  'react';
    
const TabHeader = props => {
    const selectHandler = e => {
        props.isClicked(props.tabItem.index)
        console.log('You clicked Tab #${props.tabItem.index}')
    }
    const selectedStyle = {
        backgroundColor: "mediumseagreen"
    }

    const notSelectedStyle = {
        backgroundColor: "lightgray"
    }

    return(
        <button onClick={selectHandler} style = {props.tabItem.selected ? selectedStyle : notSelectedStyle}>{props.tabItem.title}</button>
    );
}

export default TabHeader;