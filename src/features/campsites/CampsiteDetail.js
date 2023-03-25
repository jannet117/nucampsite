import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const CampsiteDetail =({ campsite }) => { 
    const { image, name, description } = campsite;

    return (
        <col md='5' className='m-1'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </col>
    )

};

export default CampsiteDetail;