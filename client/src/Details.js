import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './detailStyles.css'
class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      storage: { contactInfo: { name: '' } }
    }
  }
  componentDidMount() {
    let { _id } = this.props.match.params
    axios.get(`/classifiedItems/${_id}`).then(res => {
      this.setState({
        storage: res.data
      })
    })
  }
  render() {
    let { name, url, price, description } = this.state.storage
    return (
      <div className='wrContainter'>
        <div className='buttonDiv'>
          <Link className='backButton' to={`/${this.state.storage.category}`}>Back to {this.state.storage.category}</Link>
        </div>
        <div className='mainContainer'>
          <div className='imgContainer'>
            <img className='detailImg' src={url} alt='the pic'></img>
          </div>
          <div className='npd'>
            <div className='spaceContainer'>
              <h1>{name}</h1>
              <h2>${price}</h2>
              <p>Description: {description}</p>
              <hr style={{
                height: '1px',
                color: 'black',
                backGroundColor: 'black',
              }} />
            </div>
            <div className='contactInfo'>
              <h5>Contact Info</h5>
              <h5>Name: {this.state.storage.contactInfo.name}</h5>
              <h5>Phone Number: {this.state.storage.contactInfo.phoneNum}</h5>
              <h5>Email: {this.state.storage.contactInfo.email}</h5>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Details;