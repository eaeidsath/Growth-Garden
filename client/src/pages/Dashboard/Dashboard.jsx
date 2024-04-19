import {
  BoardContainer,
  BoardSidebar,
  MessageBoard,
  MessageGrid,
  MessageItem,
} from "./Dashboard.styles";
import PostForm from "../../components/PostForm/PostForm";
import PostList from "../../components/PostList/PostList";

import { QUERY_USER } from '../../utils/queries';
import { useQuery } from "@apollo/client";

const Dashboard = () => {

  const { loading, data } = useQuery(QUERY_USER);
  const posts = data?.friends.posts || {};


  return (
    <BoardContainer>
      <BoardSidebar>
        <h3>Add a Message</h3>
        <MessageForm />
      </BoardSidebar>
      <MessageBoard>
        <h2>Message Board</h2>
        <MessageGrid>
          <PostList
            posts={posts}
          />
        </MessageGrid>
      </MessageBoard>
    </BoardContainer>
  );
}

export default Dashboard;
