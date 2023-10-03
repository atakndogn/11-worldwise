import { Link } from "react-router-dom";
import PageNav from "../assets/components/PageNav";
import AppNav from "../assets/components/AppNav";

function Homepage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1>Worldwise</h1>

      <Link to="/app">Go to the app</Link>
    </div>
  );
}

export default Homepage;
