import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import error from '../../../images/notFound.gif';

const NotFound = () => {
    return (
        <div className='pt-md-5'>
            <Card className="container-fluid text-center rounded-0 mt-md-3">
                <Card.Img style={{ height: '500px' }} className="w-100 notFound-card-img" src={error} alt="Card image" />
                <Card.ImgOverlay>
                    <h3 className="ps-3">Error 404</h3>
                    <Card.Body>
                        <Card.Title>The page you requested is no longer here!</Card.Title>
                        <Card.Text className='d-md-block d-none'>
                            Visit the Home Page
                            In order to improve our service, can you inform us that someone else has an incorrect link to our site?
                            Report broken link
                        </Card.Text>
                    </Card.Body>
                    <div className='notFound-btn'>
                        <Link className="text-decoration-none" to="/"><Button style={{ backgroundColor: 'orange' }} className="border-0 mx-4 px-5 py-2 mt-md-1">Go Back</Button></Link>
                    </div>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default NotFound;