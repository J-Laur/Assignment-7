import React, { Component, useState } from "react";
import SearchField from "./SearchField";

function GifCard(props){
       
    return (
            <div className="container">
                <div className="row text-center">
                    { props.data.map((gif,i)=>{
                        return <Features {...gif} key={gif.username+i} />
                    })}
                </div>
            </div>
        );         
}


export default GifCard;