import { gql } from "@apollo/client";

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
  mutation addGoal(
    $goalTitle: String!
    $category: String!
    $frequency: String!
    $flowerType: String
    $endDate: String
  ) {
    addGoal(
      goalTitle: $goalTitle
      category: $category
      frequency: $frequency
      flowerType: $flowerType
      endDate: $endDate
    ) {
      _id
      goalTitle
      createdAt
      category
      completed
      frequency
      flowerType
      endDate
      activityLevel
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
  mutation addActivity($goalId: ID!, $activityText: String!) {
    addActivity(goalId: $goalId, activityText: $activityText) {
      _id
      goalTitle
      createdAt
      category
      completed
      frequency
      flowerType
      endDate
      activityLevel
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
  mutation addPost($postText: String!) {
    addPost(postText: $postText) {
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
  mutation addComment($postId: ID!, $commentText: String!) {
    addComment(postId: $postId, commentText: $commentText) {
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
    mutation addFriend($friendId: ID!) {
        addFriend(friendId: $friendId) {
            _id
            username
        }
    }
  }
`;

//remove a goal
export const REMOVE_GOAL = gql`
  mutation removeGoal($goalId: ID!) {
    removeGoal(goalId: $goalId) {
      _id
      goalTitle
      createdAt
      category
      completed
      frequency
      flowerType
      endDate
      activityLevel
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
      createdAt
      category
      completed
      frequency
      flowerType
      endDate
      activityLevel
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

//update a goal
export const UPDATE_GOAL = gql`
  mutation updateGoal($goalId: ID!, $updatedGoal: String!) {
    updateGoal(goalId: $goalId, updatedGoal: $updatedGoal) {
      _id
      goalTitle
      username
      category
      completed
      frequency
      flowerType
      createdAt
      endDate
      activities {
        _id
        activityText
      }
      activityLevel
    }
  }
`;
