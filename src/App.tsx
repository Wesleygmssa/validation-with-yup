import React from 'react';
import { Container } from './AppCSS';
import Input from './components/Input';
import Button from './components/Button';
import { Form } from '@unform/web';


function App() {
  return (

    <Container  >
      <h2>INFORME SEUS DADOS</h2>
      <Form onSubmit={() => { }}>
        <Input type="text" name="name" id="name" placeholder="Digite seu nome" />
        <Input type="email" name="email" id="email" placeholder="Digite seu e-mail" />
        <Input type="password" name="password" id="password" placeholder="*******" />
        <Button type="submit">Enviar</Button>
      </Form>
    </Container>);
}

export default App;
