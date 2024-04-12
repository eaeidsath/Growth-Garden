const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
        password: String
        goals: [Goal]!
        posts: [Post]!
        friends: [User]
    }

    type Goal {
        _id: ID
        goalTitle: String
        username: String
        createdAt: String
        activities: [Activity]!
    }

    type Activity {
        _id: ID!
        activityText: String
        username: String
        createdAt: String
    }

    type Post {
        _id: ID
        postText: String
        username: String
        createdAt: String
        comments: [Comment]!
    }

    type Comment {
        _id: ID!
        commentText: String
        username: String
        createdAt: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(userId: ID!): User
        goals(username: String!): [Goal]
        goal(goalId: ID!): Goal
        posts(username: String!): [Post]
        post(postId: ID!): Post
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addGoal(goalText: String!, username: String!): Goal
        addActivity(goalId: ID!, activityText: String!, username: String!): Goal
        addPost(postText: String!, username: String!): Post
        addComment(postId: ID!, commentText: String!, username: String!): Post
        addFriend(userId: ID!, friendID: ID!): User
        removeGoal(goalId: ID!): Goal
        removeActivity(goalId: ID!, activityId: ID!): Goal
        removePost(postId: ID!): Post
        removeComment(postId: ID!, commentId: ID!): Post
        removeFriend(userId: ID!, friendID: ID!): User
    }
`;

module.exports = typeDefs