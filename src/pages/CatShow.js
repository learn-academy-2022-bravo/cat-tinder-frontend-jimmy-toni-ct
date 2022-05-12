import React, { Component } from 'react';
import { Card, CardText, CardTitle, Col } from 'reactstrap'

class CatShow extends Component {
    render() {
        let { cat } = this.props
        return (
            <>
                <h2>Cat Show</h2>
                <Col sm="6">
                    <Card body>
                        <CardTitle>Hi, my name is {this.props.cat.name}!</CardTitle>
                        <img src={this.props.cat.image} alt="adorable cat" />
                        <CardText>I am {this.props.cat.age} years old. I enjoy  {this.props.cat.enjoys}.</CardText>
                    </Card>
                </Col>
            </>
        );
    }
}

export default CatShow;