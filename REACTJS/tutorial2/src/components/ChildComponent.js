import React, { Component } from 'react'

export default class ChildComponent extends Component {

    render() {
        return (
            <div>
                Hello {this.props.username}!
             
            </div>
        )
    }
}
