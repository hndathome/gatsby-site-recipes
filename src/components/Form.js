import React, { useState } from "react";
import { firestore } from "../../firebase";

function Form({ page }) {

    const [visitor, setVisitor] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async event => {
        event.preventDefault();

        let comment = {
            Name: visitor,
            Message: message,
            Page: page,
            Created: new Date()
        };

        setVisitor("");
        setMessage("");

        firestore.collection(`comments`).add(comment).catch(err => {
            console.error(`Error adding comment: `, err);
        })

    }
    return (
        <>
            <h5>Leave your comment</h5>

            <form onSubmit={e => handleSubmit(e)}>
                <div class="form-group">
                    <label htmlFor="visitor">Your Name</label>
                    <input type="text" class="form-control" name="visitor" value={visitor} id="visitor" placeholder="Your Name" onChange={e => setVisitor(e.target.value)} required />
                </div>

                <div class="form-group">
                    <label htmlFor="message">Your Comment</label>
                    <textarea class="form-control" name="message" value={message} id="message" placeholder="Your Comment" onChange={e => setMessage(e.target.value)} required />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </>
    );
}

export default Form