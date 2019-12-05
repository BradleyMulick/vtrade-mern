import React, { Component } from 'react'
import { withProvider } from './MainProvider'
import AddItemForm from './AddItemForm'



class PostPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contactInfo: {
                name: '',
                phoneNum: '',
                email: '',
            },
            url: '',
            name: '',
            price: '',
            description: '',
            category: ''
        }
    }
    handleCategoryChange = (e) => {
        e.preventDefault()
        this.setState({ category: e.target.value })
    }
    handleContactChange = (e) => {
        let { name, value } = e.target;
        this.setState((prevState) => {
            return {
                contactInfo: { ...prevState.contactInfo, [name]: value }
            }
        })
    }
    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value })
    }
    // handleChange = (e) => {
    //     let {name, value } = e.target;
    //     this.setState({})
    // }
    handleSubmit = (e) => {
        e.preventDefault()
        const newItem = this.state
        this.props.addNewItem(newItem)
        this.setState({
            contactInfo: {
                name: '',
                phoneNum: '',
                email: '',
            },
            url: '',
            name: '',
            price: '',
            description: '',
            category: ''
        })
        alert(`Nice! You're item has been successfully posted!`)
    }
    render() {
        console.log(this.state)
        return (
            <AddItemForm
                {...this.state}
                handleChange={this.handleChange}
                handleCategoryChange={this.handleCategoryChange}
                handleContactChange={this.handleContactChange}
                handleSubmit={this.handleSubmit} />
        )
    }
}
export default withProvider(PostPage)