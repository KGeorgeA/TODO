import React from "react";
import { Container, Main } from "./App.styled";
import Header from "../Header/Header";
import TodoList from "../TodoList/TodoList";
import Footer from "../Footer/Footer";

class App extends React.Component {

  render() {
    
    return (
      <Container>
        <Header />
        <Main className="todos">
          <TodoList />
        </Main>
        <Footer />
      </Container>
    );
  }
}

export default App;
