import { Component } from "react";
import { Card, Button } from "react-bootstrap";

// const SingleBook = ({ book }) => {
//   return (
//     <Card>
//       <Card.Img variant="top" src={book.img} />
//       <Card.Body>
//         <Card.Title>{book.title}</Card.Title>
//         <Button variant="primary">Add to Cart</Button>
//       </Card.Body>
//     </Card>
//   );
// };

class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  handleCardClick = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };
  render() {
    const { book } = this.props;
    const { selected } = this.state;

    return (
      <Card
        onClick={this.handleCardClick}
        className={`h-100 mb-4 single-book-card ${selected ? "selected-book" : ""}`}
        style={{ cursor: "pointer", transition: "all 0.3s ease-in-out" }}
      >
        <Card.Img variant="top" src={book.img} className="card-img-top" />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    );
  }
}
export default SingleBook;
