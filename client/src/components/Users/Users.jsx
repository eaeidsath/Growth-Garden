import { useMutation } from '@apollo/client';

import { CardContainer, ProfilePic, UserInfo, Username, DateJoined, Button } from './Users.styles';

import { ADD_FRIEND } from '../../utils/mutations';

const ContactCard = ({
  users 
}) => {
  if ((!users.length)) {
      return <h3>No users to view!</h3>
  }

  const [addFriend, { error }]= useMutation(ADD_FRIEND);

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
  }

    return (
      <CardContainer>
        <ProfilePic src='/avatars/avatar.png' alt="Profile Picture" />
        <UserInfo>
          <Username>{users.username}</Username>
          <DateJoined>{users.goals}</DateJoined>
        </UserInfo>
        <Button>View Profile</Button>
        <Button value={users._id} onClick={addFriendButton} >Add Friend</Button>
      </CardContainer>
    );
  };
  
  export default ContactCard;  