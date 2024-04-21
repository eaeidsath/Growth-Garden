import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../../components/CommentList/CommentList';
import CommentForm from '../../components/CommentForm/CommentForm';

import { GET_SINGLE_POST } from '../../utils/queries';

import { BoardContainer, MessageBoard, Post } from './SinglePost.styles';

const SinglePost = () => {
    const { postId } = useParams();

    const { loading, data } = useQuery(GET_SINGLE_POST, {
        variables: { postId: postId },
    });

    const post = data?.post || {};

    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <BoardContainer>
            <MessageBoard>
                <Post>
                    
                    <p>{post.username} posted at {post.createdAt}</p>
                    <p>{post.postText}</p>
                </Post>

                <div>
                    <CommentList comments={post.comments} />
                </div>
                <div>
                    <CommentForm postId={post._id} />
                    <button><Link to={'/dashboard'}>Back to Dashboard</Link></button>
                </div>
            </MessageBoard>
        </BoardContainer>
    );
};

export default SinglePost;