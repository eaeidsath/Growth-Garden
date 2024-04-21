import { Link } from 'react-router-dom';
import { MessageItem, MessageGrid, Chalk } from "./PostList.styles";

const PostList = ({
    friends
}) => {
    if ((!friends.length)) {
        return <h3>Add friends to see their posts here!</h3>
    }

    console.log(friends);

    return (
        <MessageGrid>
            {friends.map((friend) => (
                friend.posts.map((post) => (
                    <Chalk key={post._id}>
                        <Link to={`/singlepost/${post._id}`}>
                            <MessageItem>
                                <p>{post.username}</p>
                                <p>Posted at {post.createdAt}</p>
                                <p>{post.postText}</p>
                            </MessageItem>
                        </Link>
                    </Chalk>
                ))
            ))}
        </MessageGrid>
    )
};

export default PostList;