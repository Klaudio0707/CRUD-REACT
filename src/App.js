import React, { Component } from "react";
import { BrowserRouter  as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import TabelaLivros from "./components/TabelaLivros";
import CadastrarLivros from "./components/CadastrarLivros";
import NotFound from "./components/NotFound";

class App extends Component {
  state ={
livros: [
  {
    id:1,
    isbn: "97-85-7522-403-8",
    titulo: "HTML - 2ª Edição",
    autor: "Maurício Samy Silva"
  },
  {
    id:2,
    isbn: "98-85-7522-807-4",
    titulo: "Introdução ao Pentest",
    autor: "Daniel Moreno"
  },
  {
    id:3,
    isbn: "978-85-7522-780-8",
    titulo: "Internent das Coisas para Desenvolvedor",
    autor: "Ricardo da Silva Ogliari"
  }
]
};
inserirLivro = livro => {
  livro.id = this.state.livros.length + 1;
  this.setState({
    livros: [...this.state.livros, livro]
  });
}

  
  render() {
    return (
      <div className="App">
        <Router>
          <Menu />
          <Routes>
            <Route 
              path="/" 
              element={<TabelaLivros livros={this.state.livros} />} 
            />
            <Route 
              path="/cadastrar" 
              element={<CadastrarLivros />} 
            />
            <Route 
              path="*" 
              element={<NotFound />} 
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
