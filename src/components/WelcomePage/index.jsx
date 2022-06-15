import ProductList from "../ProductList"
import styles from "./Welcome.module.sass"

export default function Welcome() {
  return (
    <div className={styles.wrapper}>
      <h1>Welcome To React Playground</h1>
      <p>We are consuming a GraphQL API from the Rails backend here.</p>
      <ProductList />
    </div>
  );
}
