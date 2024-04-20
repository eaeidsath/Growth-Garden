import { useQuery } from '@apollo/client';

import Users from "../../components/Users/Users";

import { LargeContainer, Title } from './Explore.styles';

import { ALL_USERS } from '../../utils/queries';

export default function Explore() {

  const { loading, data } = useQuery(ALL_USERS);
  const users = data?.users || [];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Title>Explore the Garden</Title>
    <LargeContainer>
        {users.map((user) => (
          <Friend
            users={users}
          />
        ))}
    </LargeContainer>
    </>
  );
}