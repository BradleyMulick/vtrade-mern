import React, { Component } from 'react';
import { withProvider } from './MainProvider'
import Item from './Item'

class Camping extends Component {
    componentDidMount() {
        this.props.getCamping()
    }

    render() {
        const mappedCamping = this.props.camping.map((camp, i) => <Item key={i + camp.price} price={camp.price} name={camp.name} url={camp.url} _id={camp._id} />)
        return (
            <div>
                <h1 className="page-title">Camping</h1>
                <div className="items-container">
                    {mappedCamping}
                </div>
            </div>
        );
    }
}

export default withProvider(Camping);