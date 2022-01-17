import React from "react";
import { Container } from "../styles/Components.styled";
import Header from "../Header/Header";
import TodoList from "../TodoList/TodoList";
import Footer from "../Footer/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <Container>
        <Header />
        <TodoList />
        <Footer />
      </Container>
    );
  }
}

export default App;
