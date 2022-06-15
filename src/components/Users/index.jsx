import styles from "../WelcomePage/Welcome.module.sass"
import { gql, useQuery } from "@apollo/client"
import Nav from "../Nav"
import CreateUser from "./createUser";

const USER_LIST = gql`
      query {
        users {
          fullName
        }
      }
    `;

export default function Users() {
  const { loading, error, data } = useQuery(USER_LIST);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  const Users = data.users.map(({fullName}) => 
    <ul key={fullName}>
      <li>{fullName}</li>
    </ul>
  )
  return (
    <>
      <Nav />
      <div className={ styles.wrapper }>
        <h1>Current User List:</h1>
        {Users}
      </div>
      <CreateUser />
    </>
  )
}