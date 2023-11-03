//We can create functional components and import them

//* Inside the components - we can create a component quickly using the [racfe] command

const Footer = () => {
  const date = new Date();
  return (
    <footer>
      <p>Copyright &copy;{date.getFullYear()}</p>
    </footer>
  );
};

export default Footer;

//Then we can return What elements we want

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

//? Styles

//Inline style - style = {{css properties as object}}

<h1 style={{ backgroundColor: "royalblue", color: "white" }}>Grocery List</h1>;

//You can also refer the style in a variable and than refer that variable
const headerStyle = {
  backgroundColor: "royalblue",
  color: "white",
};

<header>
  <h1 style={headerStyle}>Grocery List</h1>
</header>;

//To link external css file use import
import "./index.css";

//? Classes

//! In JSX, we use className instead of class

<h1 className="container">Manisangh Sharma</h1>
