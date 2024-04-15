import {gql} from '@apollo/client';

//login the user 
export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

// add a user 
export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

// add a goal
export const ADD_GOAL = gql`
    mutation addGoal($goalText: String!, $username: String!) {
        addGoal(goalText: $goalText, username: $username) {
            _id
            goalTitle
            username
            createdAt
            activities {
                _id
                activityText
                username
                createdAt
            }
        }
    }
`;

// add an activity 
export const ADD_ACTIVITY = gql`
    mutation addActivity($goalId: ID!, $activityText: String!, $username: String!) {
        addActivity(goalId: $goalId, activityText: $activityText, username: $userName) {
            _id
            goalTitle
            username
            createdAt
            activities {
                _id
                activityText
                username
                createdAt
            }
        }
    }
`;

// add a post 
export const ADD_POST = gql`
    mutation addPost($postText: String!, $username: String!) {
        addPost(postText: $postText, username: $userName) {
            _id
            postText
            username
            createdAt
            comments {
                _id
                commentText
                username
                createdAt
            }
        }
    }
`;

// add a comment
export const ADD_COMMENT = gql`
    mutation addComment($postId: ID!, $commentText: String!, $username: String!) {
        addComment(postId: $postId, commentText: $commentText, username: $username) {
            _id
            postText
            username
            createdAt
            comments {
                _id
                commentText
                username
                createdAt 
            }
        }
    }
`;

// add a friend
// note: only included _id, username and email
export const ADD_FRIEND = gql`
    mutation addFriend($userId: ID!, $friendID: ID!) {
        addFriend(userId: $userId, friendId: $friendId) {
            _id
            username
        }
    }
`;

//remove a goal 
export const REMOVE_GOAL = gql`
    mutation removeGoal($goalId: ID!) {
        removeGoal(goalId: $goalId) {
            _id
            goalTitle
            username
            createdAt
            activities {
                _id
                activityText
                username
                createdAt
            }
        }
    }
`;

//remove an activity
export const REMOVE_ACTIVITY = gql`
    mutation removeActivity($goalId: ID!, $activityId: ID!) {
        removeActivity(goalId: $goalId, activityId: $activityId) {
            _id
            goalTitle
            username
            createdAt
            activities {
                _id
                activityText
                username
                createdAt
            }
        }
    }
`;

//remove a post 
export const REMOVE_POST = gql`
    mutation removePost($postId: ID!) {
        removePost(postId: $postId) {
            _id
            postText
            username
            createdAt
            comments {
                _id
                commentText
                username
                createdAt
            }
        }
    }
`;

//remove a comment
export const REMOVE_COMMENT = gql`
    mutation removeComment($postId: ID!, $commentId: ID!) {
        removeComment(postId: $postId, commentId: $commentId) {
            _id
            postText
            username
            createdAt
            comments {
                _id
                commentText
                username
                createdAt
            }
        }
    }
`;

//remove a friend
export const REMOVE_FRIEND = gql`
    mutation removeFriend($userId: ID!, $friendID: ID!) {
        removeFriend(userId: $userId, friendID: $friendID) {
            _id
            username
        }
    }
`;