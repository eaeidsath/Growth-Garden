import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../../components/CommentList/CommentList';
import CommentForm from '../../components/CommentForm/CommentForm';

import { GET_SINGLE_POST } from '../../utils/queries';

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
        <div>
            <div>
                <p>{post.username}</p>
                <p>Posted at {post.createdAt}</p>
                <p>{post.postText}</p>
            </div>

            <div>
                <CommentList comments={post.comments} />
            </div>
            <div>
                <CommentForm postId={post._id} />
            </div>
        </div>
    );
};

export default SinglePost;