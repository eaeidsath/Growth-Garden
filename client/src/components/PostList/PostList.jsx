import { MessageItem } from "./PostList.styles"

const PostList = ({
    friends
}) => {
    if ((!friends.length)) {
        return <h3>Add friends to see their posts here!</h3>
    }

    return (
        <div>
            {friends.map((friend) => {
                friend.posts.map((post) => {
                <div key={post._id}>
                    <p>Posted at {post.createdAt}</p>
                    <p>{post.postText}</p>
                    <p>{post.username}</p>
                </div>
                })
            })}
        </div>
    )
};

export default PostList;