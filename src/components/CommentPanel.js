import React from "react"
import Comment from "./Comment"
import Form from "./Form"

function CommentPanel({ comments, page }) {
    return (
        <div class="card">
            <h5 class="card-header">Tell Us What You Think</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><Form page={page} /></li>
                {comments.length === 0 && <li class="list-group-item"><strong>Be the first to leave a comment!</strong></li>}
                {comments.length > 0 && comments.map((document, index) => <Comment comment={document} key={index} />)}
            </ul>
        </div>
    );
}

export default CommentPanel