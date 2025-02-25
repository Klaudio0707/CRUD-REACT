import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";

class CadastrarLivros extends Component {
  state = {
    livro: {
      id: this.props.livro?.id || '',
      isbn: this.props.livro?.isbn || '',
      titulo: this.props.livro?.titulo || '',
      autor: this.props.livro?.autor || ''
    },
    redirecionar: false
  };

  handleLivroForm = e => {
    e.preventDefault();
    this.props.inserirLivro(this.state.livro);
    this.setState({ redirecionar: true });
  };

  render() {
    if (this.state.redirecionar === true) {
      this.props.navigate('/');  // Redireciona para a página inicial
    }

    return (
      <form onSubmit={this.handleLivroForm}>
        <h1>Cadastrar Livro</h1>
        <p>
          <label htmlFor='fisbn'>
            ISBN: Formato - (
            <span style={{ color: "red" }}>978-85-7522-xxx-x </span>)
          </label>
          <input
            type="text"
            autoFocus
            id="fisbn"
            required
            pattern="^978-85-7522-[0-9]{3}-[0-9]{1}$"
            value={this.state.livro.isbn}
            onChange={e =>
              this.setState({
                livro: {
                  ...this.state.livro,
                  isbn: e.target.value
                }
              })
            }
          />
        </p>
        <p>
          <label htmlFor='ftitulo'>Título</label>
          <input
            type="text"
            id="ftitulo"
            required
            value={this.state.livro.titulo}
            onChange={e =>
              this.setState({
                livro: {
                  ...this.state.livro,
                  titulo: e.target.value
                }
              })
            }
          />
        </p>
        <p>
          <label htmlFor='fautor'>Autor</label>
          <input
            type="text"
            id="fautor"
            required
            value={this.state.livro.autor}
            onChange={e =>
              this.setState({
                livro: {
                  ...this.state.livro,
                  autor: e.target.value
                }
              })
            }
          />
        </p>
        <p>
          <button type='submit' className='botao cadastrar'>Cadastrar</button>
        </p>
      </form>
    );
  }
}

// Componente de ordem superior para usar o hook `useNavigate` em um componente de classe
function withNavigation(Component) {
  return function WrappedComponent(props) {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
}

export default withNavigation(CadastrarLivros);
