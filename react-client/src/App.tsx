import graphql from 'babel-plugin-relay/macro'
import { useLazyLoadQuery } from "react-relay"
import { AppUsersQuery } from "./__generated__/AppUsersQuery.graphql";
import UserCard from "./Card/UserCard"
import Grid from "@material-ui/core/Grid"
import { Container } from "@material-ui/core"
import useStyles from './Styles/useStyles'

const query = graphql`
  query AppUsersQuery {
    users {
      id
      name
      email
      password
      phone
      avatar
    }
  }
`;


function App() {
  const data = useLazyLoadQuery<AppUsersQuery>(query, {}, { fetchPolicy: 'store-or-network' });
  
  const classes = useStyles()

  return (
    <Container className={classes.Global}>
      <Grid container spacing={8}>
        {data.users.map(user => (
          <Grid key={user.id} item xs={12} md={6} lg={4}>
            <UserCard
              name={user.name}
              email={user.email}
              password={user.password}
              phone={user.phone}
              avatar={user.avatar}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;