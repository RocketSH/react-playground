import Shark from "../img/small-profile.jpeg"
import "../css/main.css"
import ProductList from "./ProductList"

export default function Welcome() {
  return (
    <>
      <div className="wrapper">
        <h1>Welcome To React Playground</h1>
        <p>We are consuming a GraphQL API from Rails backend here.</p>
        <img src={Shark} alt="profile image" width={200} height={200} />
        <ProductList />
      </div>
    </>
  );
}
