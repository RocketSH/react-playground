import "../css/main.sass"
import ProductList from "./ProductList"

export default function Welcome() {
  return (
    <>
      <div className="wrapper">
        <h1>Welcome To React Playground</h1>
        <p>We are consuming a GraphQL API from the Rails backend here.</p>
        <ProductList />
      </div>
    </>
  );
}
