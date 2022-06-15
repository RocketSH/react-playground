import React, { useState } from 'react'
import { gql, useMutation } from "@apollo/client"

const NEW_USER = gql`
      mutation CreateUser($input: ) {
        createUser(input: $input) {
          firstName
          lastName
          email
        }
      }
`

const CreateUser = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const [createUser] = useMutation(NEW_USER, {
    firstName: formState.firstName,
    lastName: formState.lastName,
    email: formState.email
  })

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        createUser();
      }}>
        <div>
          <input value={formState.firstName} onChange={e => {
            setFormState({
              ...formState,
              firstName: e.target.value
            })
          }} type="text" placeholder='Your name' />
          <input value={formState.lastName} onChange={e => {
            setFormState({
              ...formState,
              lastName: e.target.value
            })
          }} type="text" placeholder='Your surname' />
          <input value={formState.email} onChange={e => {
            setFormState({
              ...formState,
              email: e.target.value
            })
          }} type="text" placeholder='Your email' />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default CreateUser;