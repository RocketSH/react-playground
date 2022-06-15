import "./ProductList.module.sass"
import { gql, useQuery } from "@apollo/client"

const PRODUCT_LIST = gql`
      query {
        items {
          imageUrl
          title
          description
          user {
            firstName
          }
        }
      }
    `;

export default function ProductList() {
  const { loading, error, data } = useQuery(PRODUCT_LIST);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  const listItems = data.items.map(({title, imageUrl, description, user }) =>
    <tr key={title}>
      <td><img src={imageUrl} alt={`disply book cover of ${title}`} /></td>
      <td>{title}</td>
      <td>{description}</td>
      <td>{user.firstName}</td>
    </tr>
  );

  return (
    <table>
      <caption>A list of books</caption>
      <thead>
        <tr>
          <th scope="col">Cover</th>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col">Owner</th>
        </tr>
      </thead>
      <tbody>
        {listItems}
      </tbody>
    </table>
  ); 
}