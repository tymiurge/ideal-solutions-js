import React, { Component } from 'react'
import CompanyForm from './app-forms'
import { Container } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Container>
        <CompanyForm />
      </Container>
    );
  }
}

export default App;
