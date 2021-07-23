import React, { Component } from 'react'

export default class Username extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.userName.split("").map((value,index)=>{
                    return <>
                        <p>{index + value}</p>
                    </>
                }) }</h4>
            </div>
        )
    }
}
