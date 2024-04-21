const CommentList = ({
    comments
}) => {
    if (!comments.length) {
        return <h4>No comments yet.</h4>
    }

    return (
        <div>
            <h3>Comments</h3>

            <div>
                {comments &&
                comments.map((comment) => (
                    <div key={comment._id}>
                        <p>
                            {comment.username} commented:
                        </p>
                        <p>
                            {comment.commentText}
                        </p>
                        <p>
                            {comment.createdAt}
                        </p>
                    </div>    
                ))}
            </div>
        </div>
    );
};

export default CommentList;