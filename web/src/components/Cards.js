import {Card, Button, CardImg, CardTitle, CardText, CardColumns, CardBody, Row, Col} from 'reactstrap'
import './static/Cards.css'
import {Route, Link} from "react-router-dom"
import Cooking from '../pages/Cooking.js'

const Cards = (props) => {
  return (
    <div className='cards-container'>
      <Row>
        <Col xs={12} sm={12} md={4}>
          <Card className='card'>
              <CardImg className='card-img' top src="/images/cooking2.jpg" />
              <CardBody>
              <CardTitle tag="h5">Cooking</CardTitle>
              <CardText>If You Literally Never Cook, Start Here! So you’re really, really into food. You also have no idea how to cook it. I get it, We've all been there. There are more of us than you might think: most of us grew up in a system awash in convenience foods, while our parents were working longer and harder and had less and less time to cook. Then, when we became adults, time and money were scarcer still, and restaurants became the places we gathered with our friends. If there’s a term you don’t understand, Google it! Almost every mysterious recipe term has been clearly defined online now and here we have a few to help you get started!</CardText>
              <Link to="/cooking"><Button outline color='secondary'>Learn More</Button></Link>
              <Route path="./pages/Cooking" component={Cooking} />
              </CardBody>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={4}>
          <Card className='card' >
              <CardImg className='card-img'top src="/images/finance2.jpg" />
              <CardBody>
              <CardTitle tag="h5">Finance</CardTitle>
              <CardText>What is Finance? Finance is a broad term that describes activities associated with banking, leverage or debt, credit, capital markets, money, and investments. Finance also encompasses the oversight, creation, and study of money, banking, credit, investments, assets, and liabilities that make up financial systems. There are plenty of things about Finance that most of us were never taught growing up.</CardText>
              <Button outline color='secondary'>Learn More</Button>
              </CardBody>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={4}>
          <Card className='card' >
              <CardImg className='card-img' top src="/images/General-Knowledge21.jpg"/>
              <CardBody>
              <CardTitle tag="h5">General Knowledge</CardTitle>
              <CardText>General knowledge opens different avenues for one's seeking. It develops students' social, sensitive, reasoning, and analytical thinking skills. It forms an identity right from a tender stage, which only helps build our perspective about the world. The path of learning, be it General Knowledge or science, is neverending. Such as Shaq only ever made one three-pointer in his entire career or you share your birthday with at least 9 million other people in the world.</CardText>
              <Button outline color='secondary'>Learn More</Button>
              </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Cards