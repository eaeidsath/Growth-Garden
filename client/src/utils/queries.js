import { gql } from "@apollo/client";

//create query user data
export const QUERY_USER = gql`
    query user($username: String!){
        user(username: $username){
            _id
            username
            email
            goals {
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
                    createdAt
                }
            }
            posts {
                _id
                postText
                username
                createdAt
            }
            friends {
                _id
                username
                posts {
                    _id
                    postText
                    createdAt
                }
            }
        }
    }
`;

export const ALL_USERS = gql`
    query allUsers {
        users {
            _id
            username
            email
            goals {
                _id
                goalTitle
                createdAt
                category
                completed
                frequency
                flowerType
                endDate
                activityLevel
            }
            posts {
                _id
                postText
                createdAt
            }
            friends {
                _id
                username
            }
        }
    }
`

//create query to all goals from one user
export const GET_GOALS = gql`
    query getGoals($username: String!) {
        goals(username: $username) {
            _id
            goalTitle
            username
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

//create query to get one goal data
export const GET_SINGLE_GOAL = gql`
    query getSingleGoal($goalId: ID!) {
        goal(goalId: $goalId) {
            _id
            goalTitle
            username
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


//create query to get all posts for a user
export const GET_POSTS = gql`
    query getPosts($username: String!) {
        posts(username: $username) {
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


//create query to get one post
export const GET_SINGLE_POST = gql`
    query getSinglePost($postId: ID!) {
        post(postId: $postId) {
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

//get user data for myGarden
export const QUERY_ME = gql`
  query me {
    me {
        _id
        username
        email
        goals {
            _id
            goalTitle
            createdAt
            category
            completed
            frequency
            flowerType
            endDate
            activityLevel
        }
        posts {
            postText
            username
            createdAt
            _id
        }
        friends {
            username
            posts {
              username
              postText
              createdAt
              _id
            }
        }
    }
  }
`;