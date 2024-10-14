import React from 'react';
import {Link} from "react-router-dom";
const NotFound = () =>  (
    <>
    <h1>404!</h1>
    <p>Lamento. Essa p´´agina não existe ou foi removida <br/>
    <Link too="/">Voltar para Tabela de Livros</Link>
    </p>
    </>
  );


export default NotFound
