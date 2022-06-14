import ProductList from "./ProductList"
import clsx from "clsx";
const listWrapper = "wrapper"


export default function Welcome() {
  return (
    <>
      <div className={clsx(listWrapper)}>
        <h1>Welcome To React Playground</h1>
        <p>We are consuming a GraphQL API from the Rails backend here.</p>
        <ProductList />
      </div>
    </>
  );
}
