import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_COMMENT } from '../../utils/mutations';

import Auth from '../../utils/auth';

import { CommentText, SubmitButton } from './CommentForm.styles';

const CommentForm = ({ postId }) => {
    const [commentText, setCommentText] = useState('');

    const [addComment, { error }] = useMutation(ADD_COMMENT);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addComment({
                variables: {
                    postId,
                    commentText,
                    username: Auth.getProfile().data.username,
                },
            });

            setCommentText('');
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'commentText' && value.length <= 280) {
            setCommentText(value);
        }
    };

    return (
        <div>
            <h3>Reply</h3>

            {Auth.loggedIn() ? (
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <CommentText
                                name='commentText'
                                placeholder='Share your thoughts.'
                                value={commentText}
                                onChange={handleChange}
                            ></CommentText>
                        </div>

                        <div>
                            <SubmitButton type='submit'>
                                Add Comment
                            </SubmitButton>
                        </div>
                    </form>
                </div>
            ) : (
                <p>
                    You need to be logged in to share your thoughts. Please{' '}
                    <Link to="/">login</Link> or <Link to="/signup">signup.</Link>
                </p>
            )}
        </div>
    );
};

export default CommentForm;