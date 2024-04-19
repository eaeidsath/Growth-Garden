import {
  BoardContainer,
  BoardSidebar,
  MessageBoard,
  MessageGrid,
  MessageItem,
} from "./Dashboard.styles";
import PostForm from "../../components/PostForm/PostForm";

function Dashboard() {
  return (
    <BoardContainer>
      <BoardSidebar>
        <h3>Add a Message</h3>
        <MessageForm />
      </BoardSidebar>
      <MessageBoard>
        <h2>Message Board</h2>
        <MessageGrid>
          <MessageItem>
            Today at 6:15am
            <br />
            Just completed my 15-minute morning walk around the neighborhood!
            Starting the day off right 💪 #morningroutine
            <br />
            -- Evelyn
            <br />
            <a href="#">Comments(1)</a>
          </MessageItem>
          <MessageItem>
            Sunday at 10:30pm
            <br />
            Feeling accomplished after watering all my plants and giving them
            some love 🌱💚 #greenthumb
            <br />
            -- Benita
            <br />
            <a href="#">Comments(1)</a>
          </MessageItem>
          <MessageItem>
            Sunday at 9:46pm
            <br />
            Managed to drink 8 glasses of water today! Hydration goals on point
            💧 #stayhydrated
            <br />
            -- Keri
            <br />
            <a href="#">Comments(1)</a>
          </MessageItem>
          <MessageItem>
            Sunday at 7:38pm
            <br />
            Celebrating a successful day of decluttering and organizing! Feels
            good to tidy up 👌 #konmari
            <br />
            -- Sarun
            <br />
            <a href="#">Comments(1)</a>
          </MessageItem>
          <MessageItem>
            Sunday at 7:29pm
            <br />
            Just finished a delicious and nutritious homemade dinner! Cooking
            skills leveling up 🍽️👩‍🍳 #homechef
            <br />
            -- Melissa
            <br />
            <a href="#">Comments(1)</a>
          </MessageItem>
          <MessageItem>
            Saturday at 6:51pm
            <br />
            Completed my daily gratitude journaling session. Grateful for the
            little things in life 🙏 #gratitude
            <br />
            -- Manya
            <br />
            <a href="#">Comments(1)</a>
          </MessageItem>
          <MessageItem>
            Saturday at 6:07pm
            <br />
            Learned a new recipe that involved butterflying a whole chicken.
            Done and done. Call me Julia Child!
            <br />
            -- Stephen
            <br />
            <a href="#">Comments(3)</a>
          </MessageItem>
        </MessageGrid>
      </MessageBoard>
    </BoardContainer>
  );
}

export default Dashboard;
