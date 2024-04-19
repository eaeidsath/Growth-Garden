import {
  BoardContainer,
  BoardSidebar,
  MessageBoard,
  MessageGrid,
} from "./Dashboard.styles";
import PostForm from "../../components/PostForm/PostForm";
import PostList from "../../components/PostList/PostList";

import { QUERY_ME } from '../../utils/queries';
import { useQuery } from "@apollo/client";

const Dashboard = () => {

  const { loading, data } = useQuery(QUERY_ME);

  const friends = data?.me.friends || {};

  console.log(data);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <BoardContainer>
      <BoardSidebar>
        <h3>Add a Message</h3>
        <PostForm />
      </BoardSidebar>
      <MessageBoard>
        <h2>Message Board</h2>
        <MessageGrid>
          <PostList
            friends={friends}
          />
        </MessageGrid>
      </MessageBoard>
    </BoardContainer>
  );
}

export default Dashboard;
