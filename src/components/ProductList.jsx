import { gql, useQuery } from "@apollo/client"

const PRODUCT_LIST = gql`
      query {
        items {
          imageUrl
          title
          description
        }
      }
    `;

export default function ProductList() {
  const { loading, error, data } = useQuery(PRODUCT_LIST);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  const listItems = data.items.map(( item, index ) =>
    <tr key={index}>
      <td><img src={item.imageUrl} alt={`disply book cover of ${item.title}`} /></td>
      <td>{item.title}</td>
      <td>{item.description}</td>
    </tr>
  );

  return (
    <table>
      <caption>A list of reserved books</caption>
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        {listItems}
      </tbody>
    </table>
  ); 
}