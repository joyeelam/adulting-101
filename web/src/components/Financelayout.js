import {Card, CardText, CardBody, CardLink, CardTitle, CardSubtitle} from 'reactstrap'

import "./static/Financelayout.css"

const Financelayout = ({title, content,image,author,url}) => {
    return (
        <div>
            <Card>
            <CardBody>
                <CardTitle tag="h5">{title}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{author}</CardSubtitle>
            </CardBody>
            <img className="image" src={image} alt="sorry about that, be right back!" />
            <CardBody>
                <CardText>{content}</CardText>
                <CardLink href={url}>Learn more</CardLink>
                <CardLink href="#"></CardLink>
            </CardBody>
            </Card>
        </div>
    )
}

export default Financelayout
