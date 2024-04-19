import { useState } from "react";
import { Link } from 'react-router-dom';
import { NoteText, Category, SubmitButton } from './PostForm.styles';
import { useMutation } from "@apollo/client";

import { ADD_POST } from '../../utils/mutations';

import Auth from '../../utils/auth';

export default function PostForm() {
  const [postText, setPostText] = useState('');

  const [addPost, { error }] = useMutation(ADD_POST)

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'postText' && value.length <= 280) {
      setPostText(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addPost({
        variables: {
          postText,
          username: Auth.getProfile().data.username
        },
      });

      setPostText('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              How's it going?
            </label>
            <NoteText
              value={postText}
              onChange={handleChange}
              name='postText'
              maxLength={280}
              rows={6}
              cols={50}
            />

            <br />

            <br />
            <SubmitButton type="submit">Post</SubmitButton>
          </form>
        </div>
      ) : (
        <p>
          You need to be logged in to share posts. Please{' '}
          <Link to="/">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )
      }
    </div >
  );
}
