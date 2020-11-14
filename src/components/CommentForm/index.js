import React, { Component } from 'react'

class CommentForm extends Component {

    state = {
        name: '',
        email: '',
        message: '',
        website: ''
    }

    updateHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    subimtHandler = (e) => {
        e.preventDefault();
       
        this.setState({
            name: '',
            email: '',
            message: '',
            website: ''
        })
    }



    render() {

        const { name, email, message, website } = this.state;

        return (
            <div className="comment-respond">
                <h3 className="comment-reply-title">Post Comments</h3>
                <form onSubmit={this.subimtHandler} className="comment-form">
                    <div className="form-textarea">
                        <textarea id="comment" name="message" onChange={this.updateHandler} value={message} placeholder="Write Your Comments..."></textarea>
                    </div>
                    <div className="form-inputs">
                        <input name="website" onChange={this.updateHandler} placeholder="Website" value={website} type="url" />
                        <input name="name" onChange={this.updateHandler} placeholder="Name" value={name} type="text" />
                        <input name="email" onChange={this.updateHandler} placeholder="Email" value={email} type="email" />
                    </div>
                    <div className="form-submit">
                        <button type="submit">Post Comment</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CommentForm;