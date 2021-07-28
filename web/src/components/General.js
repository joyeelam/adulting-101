import {Card, Button, CardImg, CardTitle, CardText, CardColumns, CardSubtitle, CardBody} from 'reactstrap';
import './static/General.css'

const Example = ({cat,fact}) => {

    const imgStyle = {
        maxHeight: 500,
        maxWidth: 500
    }

  return (
    <div className="generalbody">
        <CardColumns>
            <Card>
                <CardImg src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/06/25/08/istock-1211156080.jpg?w=230" fluid alt="Card image cap" style={imgStyle}/>
                <CardBody>
                <CardTitle tag="h3">21 Tips to Socialize With new People!</CardTitle>
                <CardText tag="h5">This isn’t another one of those shallow guides that tell you to “be yourself”, “be more confident”, or “not overthink”. This is a guide written by an introvert who had big troubles socializing and spent years figuring out how to be really good at it. I’m writing this specifically for you who blank out in social settings and don’t know what to say, especially around new people.</CardText>
                <a href="https://socialpronow.com/blog/socialize-with-strangers/">
                <Button type="button" class="btn btn-outline-secondary">Learn more at SocialPro!</Button>
                </a>
                </CardBody>
            </Card>
            <Card body inverse style={{ backgroundColor: '#333', }}>
                <CardText tag="h1">{fact}</CardText>
            </Card>
            <Card>
                <CardImg src="https://apicms.thestar.com.my/uploads/images/2021/06/09/1177488.jpg" alt="Card image cap" style={imgStyle}/>
                <CardBody>
                <CardTitle tag="h3">Stay Home! Delta variant is on the move!</CardTitle>
                <CardText tag="h5">the Delta variant is a variant of concern that WHO is tracking and monitoring around the world. It's a variant of concern because we know it has increased transmissibility. This has been demonstrated by several countries. And we know that where the Delta variant is identified, it really rapidly takes off and spreads between people more efficiently than even the Alpha variant that was first detected around December, January 2021. As of today, the Delta variant has been reported in 96 countries and we expect that the Delta variant will continue to spread. There are a number of factors that are contributing to increased transmission around the world. The first are these variants of concern, including the Delta variant. The second factor is that we have increased social mixing and increased social mobility, which increases the number of contacts that individuals have. The third factor is the relaxation or the inappropriate use of public health and social measures. Proven public health and social measures that we know prevent infections, reduce the spread of somebody who is infected with the virus to others and save lives. And the fourth factor is the uneven and inequitable distribution of vaccines. The world remains largely susceptible to infection, including any variants of concern, including the Delta variant</CardText>
                <a href="https://www.yalemedicine.org/news/5-things-to-know-delta-variant-covid">
                <Button type="button" class="btn btn-outline-secondary">Do your part and stay Home!</Button>
                </a>
                </CardBody>
            </Card>
            <Card>
                <CardImg src="https://cdn.quotesgram.com/img/63/61/1075382337-funny-dad-son-the-sex-talk.jpg" alt="Card image cap" style={imgStyle}/>
                <CardBody>
                <CardTitle tag="h3">Life Lessons Every Dad Must Teach His Son</CardTitle>
                <CardText tag="h5">We are all a product of the influence other people have had on us throughout our lives. All of the good and all of the bad are, many times, caused by interactions we’ve had, over the course of our lives, with other friends or adults. Remember those times you would ask about spending the night at a friends’ house or about going over to someone’s house to play?  How many times did your parents say, “No. They are a bad influence on you?” If they never said it, they were thinking it! Your parents knew what their parents knew before them: We are a product of the other people’s influence in our lives.If that’s the case, parents need to realize the impact they can have on the development of the children in their lives. We can never overestimate the impact we have on who our kids grow up to be.
                </CardText>
                <a href="https://www.daduniversity.com/life-lessons-every-dad-must-teach-his-son/">
                <Button type="button" class="btn btn-outline-secondary">learn more at DadUniversity!</Button>
                </a>
                </CardBody>
            </Card>

            <Card>
                <CardImg width="100%" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/22c25024796349.564c9a03d7086.jpg" alt="Card image cap" style={imgStyle}/>
                <CardBody>
                <CardTitle tag="h5">Facts You Probably Didn’t Know That Could Save Your Life or the person you love!</CardTitle>
                <CardText tag="h5">Life isn’t as dark and dangerous as the news and social media would like you to think—there’s plenty of light, humor, and good times to be had. However, when disaster does strike (no matter how low the odds might be), it’s ruthless and you’d best be prepared. nowing what to do if you fall off the edge of a subway platform and onto the tracks is just the tip of the iceberg. And speaking of icebergs, Jack’s shared what we ought to do if we’re ever chased by a polar bear. </CardText>
                <a href="https://www.boredpanda.com/facts-could-save-your-life/?utm_source=google&utm_medium=organic&utm_campaign=organic">
                <Button type="button" class="btn btn-outline-secondary">Learn how to potentially save a life!</Button>
                </a>
                </CardBody>
            </Card>
            <div className="cat">
                <CardText className="catFact" tag="h1">{cat}</CardText>
            </div>
        </CardColumns>
    </div>
  );
};

export default Example;
