import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
class HornedBeasts extends React.Component{
    constructor(props)
    {
        super(props);
        this.state= {

            vots:0
            
        }

    }

       voteFavoritebeast = () =>{
            this.setState({
                vots : this.state.vots +1,

                
            });
            this.props.displayBeast();
            this.props.updateInfomodel(this.props.title,this.props.imageurl,this.props.description);
       } 
       
    
    render()
    {
        return(
            <>
                 {/* <h2>{this.props.title}</h2>
                 <img src={this.props.imageUrl} alt=""></img>
                 <p>{this.props.description}</p> */}
                <Col>
                <Card style={{ width: '18rem' }} onClick={this.voteFavoritebeast}>
                <Card.Img variant="top" src={this.props.imageurl} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                    ❤️= {this.state.vots}
                    </Card.Text>
                    <Card.Text>
                    {this.props.description}
                    </Card.Text>
                   
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
                </Col>
            </>
        )
    }
}
export default HornedBeasts;