import { Comment } from './CommentList.styles';

const CommentList = ({
    comments
}) => {
    if (!comments.length) {
        return <h4>No comments yet.</h4>
    }

    return (
        <div>
            <h2>Comments</h2>

            <div>
                {comments &&
                comments.map((comment) => (
                    <Comment key={comment._id}>
                        <p>
                            {comment.username} commented:
                        </p>
                        <p>
                            {comment.commentText}
                        </p>
                        <p style={{fontSize: '1.0rem'}}>
                            {comment.createdAt}
                        </p>
                    </Comment>    
                ))}
            </div>
        </div>
    );
};

export default CommentList;