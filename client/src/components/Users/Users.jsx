import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';

import { CardContainer, ProfilePic, UserInfo, Username, Button, LargeContainer } from './Users.styles';

import { ADD_FRIEND } from '../../utils/mutations';

const ContactCard = ({
  users
}) => {
  if ((!users.length)) {
    return <h3>No users to view!</h3>
  }

  const [addFriend, { error }] = useMutation(ADD_FRIEND);

  const addFriendButton = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addFriend({
        variables: {
          friendId: event.target.value
        },
      });
    } catch (err) {
      console.error(err);
    }

    event.target.innerHTML = "Friend Added!"
  }

  return (
    <div>
      <LargeContainer>
        {users.map((user) => (
          <CardContainer key={user._id}>
            <ProfilePic src='/avatars/avatar.png' alt="Profile Picture" />
            <UserInfo>
              <Username>{user.username}</Username>
            </UserInfo>
            <Button>View Profile</Button>
            <Button value={user._id} onClick={addFriendButton} >Add Friend</Button>
          </CardContainer>
        ))
        }
      </LargeContainer>
    </div>
  );
};

export default ContactCard;  