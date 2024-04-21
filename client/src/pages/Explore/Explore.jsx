import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import Users from "../../components/Users/Users";

import { Message, Alert } from './Explore.styles';

import { ALL_USERS } from '../../utils/queries';
import Auth from '../../utils/auth';

export default function Explore() {

  const { loading, data } = useQuery(ALL_USERS);
  const users = data?.users || [];

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!Auth.loggedIn()) {
    return (
      <Alert>
        <p>You need to be logged in to view your garden.</p>
        <p>Use the links above to <Link to="/">login</Link> or <Link to="/signup">signup.</Link>.</p>
      </Alert>
    );
  }

  return (
    <>
    <Message>Explore the Garden</Message>
      <Users
        users={users}
      />
    </>
  );
}