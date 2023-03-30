import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false
  };
  render() {
    return (
      <Card className="shadow libri">
        <Card.Img variant="top" className="img-fluid" id="image-card" src={this.props.img} />
        <Card.Body>
          <Card.Title className="text-truncate">{this.props.title}</Card.Title>
          <Card.Text>Prezzo: {this.props.price} €</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
