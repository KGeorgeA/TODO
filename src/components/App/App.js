import React from "react";
import { Container, Main } from "./App.styled";
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
        <Main>
          <TodoList />
          <Footer />
        </Main>
      </Container>
    );
  }
}

export default App;
