import {Card, CardText, CardBody, CardLink, CardTitle, CardSubtitle} from 'reactstrap'

const Latest = ({title,image,description}) => {
    return (
        <div>
            <Card>
            <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
            </CardBody>
            <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
            <CardBody>
                <CardText></CardText>
                <CardLink href="#"></CardLink>
                <CardLink href="#"></CardLink>
            </CardBody>
            </Card>
        </div>
    )
}

export default Latest
