import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { CardTitle, Col } from 'reactstrap'

class CatIndex extends Component {
    render() {
        return(
            <>
                <h2>Cat Index</h2>
                <br />
                <Col sm="6">
                {this.props.cats && this.props.cats.map(cat => {
                    return <NavLink to={`/catshow/${cat.id}`} key={cat.id}>
                    <CardTitle>
                    <h4>{cat.name}</h4>
                    </CardTitle>
                    </NavLink>
                })}
                </Col>
            </>
        );
    }
}

export default CatIndex;