import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  render() {
    return (
      <>
        <Row style={{ overflow: "auto" }} className="pt-3 flex-nowrap">
          {this.props.books.map(book => (
            <Col key={book.asin} className="pb-3 px-2">
              <SingleBook img={book.img} title={book.title} price={book.price} />
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default BookList;
