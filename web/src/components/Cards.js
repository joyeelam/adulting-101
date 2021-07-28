import { Card, Button, CardImg, CardTitle, CardText, CardColumns, CardBody, Row, Col } from 'reactstrap'
import './static/Cards.css'
import { Route, Link } from "react-router-dom"
import Recipes from '../pages/Recipes.js'
import Finance from '../pages/Finance.js';
import General from '../pages/General.js';
import MealPlan from '../pages/MealPlan.js'
import Trivia from '../pages/Trivia.js'

const Cards = (props) => {

  const handleAlert = () => {
    window.alert("We need to pay $$$ to get the API - check it out on our localhost ;) ");
  }

  return (
    <div className='cards-container'>
      <Row>
        <Col xs={12} sm={12} md={4}>
          <Card className='card'>
            <CardImg className='card-img' top src="/images/cooking2.jpg" />
            <CardBody>
              <CardTitle tag="h5">Cooking</CardTitle>
              <CardText>If you've literally never cooked, start here! So you’re really, really into food. You also have no idea how to cook it. I get it, we've all been there. </CardText>
              <Link to="/recipe-generator"><Button outline color='secondary'>Get Recipe</Button></Link>
              <Route path="./pages/Recipes" component={Recipes} />
              {' '}
              <Link to="/meal-planner"><Button outline color='secondary'>Meal Planner</Button></Link>
              <Route path="./pages/MealPlan" component={MealPlan} />
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={4}>
          <Card className='card' >
            <CardImg className='card-img' top src="/images/finance2.jpg" />
            <CardBody>
              <CardTitle tag="h5">Finance</CardTitle>
              <CardText>Mortgage? Loans? Bitcoin? Crypto? Insurance? Finance stuff that no one ever told you about before you got your first paycheck.</CardText>
              <Button outline color='secondary' onClick={handleAlert}>Latest News</Button>
              <Route path="./pages/Finance" component={Finance} />
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={4}>
          <Card className='card' >
            <CardImg className='card-img' top src="/images/General-Knowledge21.jpg" />
            <CardBody>
              <CardTitle tag="h5">General Knowledge</CardTitle>
              <CardText>Did you know Shaq only ever made one three-pointer in his entire career? Or that you have 7 doppelgängers? Random facts to impress your in-laws. </CardText>
              <Link to="/general"><Button outline color='secondary'>Random Facts</Button></Link>
              <Route path="./pages/General" component={General} />
              {' '}
              <Link to="/trivia"><Button outline color='secondary'>Trivia</Button></Link>
              <Route path="./pages/Trivia" component={Trivia} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Cards
