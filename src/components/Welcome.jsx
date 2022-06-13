import Shark from "../img/small-profile.jpeg"
import "../css/main.css"
import Items from ""

export default function Welcome() {
  return (
    <>
      <div className="wrapper">
        <h1>Welcome To React Playground</h1>
        <p>We are going to consume an api from Rails backend.</p>
        <img src={Shark} alt="profile image" width={200} height={200} />
      </div>
    </>
  );
}
