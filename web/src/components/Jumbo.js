import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './Jumbo.css';


const Jumbo = (props) => {
  return (
    <div className="jum">
      <Jumbotron fluid>
        <Container fluid>
          <h1 className='title'>Welcome to Adulthood 101!</h1>
          <p className="lead">A smart, funny, and essential survival guide that you didn't know you needed. But you do. As any current or former 20-something knows, adult life can get a bit weird because no one tells you what to expect. Many of us spend a decade or more figuring out how the world works, hoping that by age 30 our friends are too old to remember what happened. How does one "adult"? Being an adult doesn't come with directions!</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;