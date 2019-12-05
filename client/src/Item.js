import React, { Component } from 'react';
import { withProvider } from './MainProvider';
import { Link } from 'react-router-dom';


class Item extends Component {
    constructor() {
        super()
        this.state = {
            itemInfo: {},
        }
    }
    // componentDidMount() {
    //     axios.get(this.props).then(res => {
    //         this.setState({itemInfo: res.data})
    //     })
    // }

    render() {
        let { price, name, url, _id } = this.props;
        return (
            <div className="productinfo">
                <Link className='productName' to={`/details/${_id}`}>
                    <img className="imgs" alt="item" src={url}></img>
                    <h2>{name}</h2>
                    <h3>
                        ${price}
                    </h3>
                </Link>
            </div>
        )
    }
}


export default withProvider(Item);