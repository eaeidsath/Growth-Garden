import { Link } from 'react-router-dom';
import { MessageItem, MessageGrid } from "./PostList.styles"

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
                    <Link to={`/singlepost/${post._id}`}>
                        <MessageItem key={post._id}>
                            <p>{post.username}</p>
                            <p>Posted at {post.createdAt}</p>
                            <p>{post.postText}</p>
                        </MessageItem>
                    </Link>
                ))
            ))}
        </MessageGrid>
    )
};

export default PostList;