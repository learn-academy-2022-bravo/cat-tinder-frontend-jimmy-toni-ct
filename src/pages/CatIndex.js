import React, { Component } from 'react';

class CatIndex extends Component {
    render() {
        console.log(this.props.cats)
        return (
            <div>
                <h3>I am the Cat Index</h3>
                {this.props.cats.map(cat => {
                    return<p>(cat.name)</p>
                })}
            </div>
        );
    }
}

export default CatIndex;