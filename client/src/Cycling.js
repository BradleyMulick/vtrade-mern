import React, { Component } from 'react';
import { withProvider } from './MainProvider'
import Item from './Item'

class Cycling extends Component {
    componentDidMount() {
        this.props.getCycling()
    }

    render() {
        const mappedCycling = this.props.cycling.map((cycle, i) => <Item key={i + cycle.price} price={cycle.price} name={cycle.name} url={cycle.url} _id={cycle._id} />)
        return (
            <div>
                <h1 className="page-title">Cycling</h1>
                <div className="items-container">
                    {mappedCycling}
                </div>
            </div>
        );
    }
}

export default withProvider(Cycling);