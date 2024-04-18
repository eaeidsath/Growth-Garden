import { CardContainer, ProfilePic, UserInfo, Username, DateJoined, Button } from './Friend.styles';

const ContactCard = ({ profilePic, username, goals }) => {
    return (
      <CardContainer>
        <ProfilePic src={profilePic} alt="Profile Picture" />
        <UserInfo>
          <Username>{username}</Username>
          <DateJoined>{goals}</DateJoined>
        </UserInfo>
        <Button>View Profile</Button>
        <Button>Add Friend</Button>
      </CardContainer>
    );
  };
  
  export default ContactCard;  