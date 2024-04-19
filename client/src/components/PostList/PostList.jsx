import { MessageItem } from "./PostList.styles"

const PostList = ({
    posts
}) => {
    if (!posts.length) {
        return <h3>Add friends to see their posts here!</h3>
    }

    return (
        <div>
            {posts &&
            posts.map((post) => {
                <MessageItem key={post._id}>
                    <p>Posted at {post.createdAt}</p>
                    <p>{post.postText}</p>
                    <p>{post.username}</p>
                </MessageItem>
            })}
        </div>
    )
};

export default PostList;