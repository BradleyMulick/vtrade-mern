import React from 'react'

const AddItemForm = (props) => {
    const { handleCategoryChange, handleChange, handleContactChange, handleSubmit, name, url, price } = props
    return (
        <div className='form'>
            <h1>Sell your items</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input onChange={handleChange} type="text" name="name" value={name} placeholder="Item Name" required />
                    <input onChange={handleChange} type="text" name="url" value={url} placeholder="Image URL" required />
                    <input onChange={handleChange} type="text" name="price" value={price} placeholder="Price" required />
                    <input onChange={handleContactChange} type="text" name="name" value={props.contactInfo.name} placeholder="Your Name" required />
                    <input onChange={handleContactChange} type="tel" pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' name="phoneNum" value={props.contactInfo.phoneNum} placeholder="Tel. eg. xxx-xxx-xxxx" required />
                    <input onChange={handleContactChange} type="email" name="email" value={props.contactInfo.email} placeholder="Email" required />
                    <br />
                    <select name="category" onChange={handleCategoryChange}>
                        <option value="default">Item Category</option>
                        <option value="Camping">Camping</option>
                        <option value="Cycling">Cycling</option>
                        <option value="Fishing">Fishing</option>
                        <option value="Skiing">Skiing</option>
                    </select>
                </div>
                <br />
                <div>
                    <textarea onChange={handleChange} name="description" id="" cols="149" rows="15" placeholder="Item Description"></textarea>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default AddItemForm 