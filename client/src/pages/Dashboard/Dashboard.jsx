import {
  BoardContainer,
  BoardSidebar,
  MessageBoard,
  Welcome,
} from "./Dashboard.styles";
import PostForm from "../../components/PostForm/PostForm";
import PostList from "../../components/PostList/PostList";

import { QUERY_ME } from "../../utils/queries";
import { useQuery } from "@apollo/client";

const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_ME);

  const friends = data?.me.friends || {};
  const user = data?.me || {};

  console.log(data);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Welcome>Hello, {user.username}</Welcome>
      <BoardContainer>
        <BoardSidebar>
          <PostForm />
        </BoardSidebar>
        <MessageBoard>
          <h2>Message Board</h2>
          <PostList friends={friends} />
        </MessageBoard>
      </BoardContainer>
    </>
  );
};

export default Dashboard;
