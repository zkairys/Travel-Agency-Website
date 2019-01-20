import React from 'react'



export class ContactForm extends React.Component {
    state = {
        name: " ",
        email: " "
    }
    

    handleChange = (e) => {
        console.log(e.target)
        this.setState({ 
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.name, this.state.email);
    }



  
    render() {
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <input type="text" name="name"  placeholder="Name" value={this.state.title} onChange={this.handleChange} />
                <input type="email" name="email"  placeholder="Email" value={this.state.title} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default ContactForm
