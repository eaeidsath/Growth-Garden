import { MessageItem } from "./PostList.styles"

const PostList = ({
    friends
}) => {
    if ((!friends.length)) {
        return <h3>Add friends to see their posts here!</h3>
    }

    console.log(friends);

    return (
        <MessageItem>
            {friends.map((friend) => (
                friend.posts.map((post) => (
                <div key={post._id}>
                    <p>{post.username}</p>
                    <p>Posted at {post.createdAt}</p>
                    <p>{post.postText}</p>
                </div>
                ))
            ))}
        </MessageItem>
    )
};

export default PostList;