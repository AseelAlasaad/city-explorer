import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col';
class SelectedBeast extends React.Component {




    render() {
     
        return (
            <>

                <Modal show={this.props.show} onHide={this.props.close}>
                    <Modal.Header closeButton>
                    </Modal.Header>

                    <Modal.Body>   <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={this.props.imageurl}  />
                            <Card.Body>
                                <Card.Title>{this.props.title}</Card.Title>
                               
                                <Card.Text>
                                    {this.props.describtion}
                                </Card.Text>

                             
                            </Card.Body>
                        </Card>
                    </Col></Modal.Body>


                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.close}>
                            Close
                        </Button>
                        
                    </Modal.Footer>
                </Modal>

            </>
        )
    }
}
export default SelectedBeast;