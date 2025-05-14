import { useState } from "react";
import SingleBook from "./SingleBook";
import { Row, Col, Form } from "react-bootstrap";

const BookList = ({ books }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <Form className="search-bar">
        <Form.Control type="text" placeholder="Search books by title..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </Form>

      <Row className="px-4">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <Col key={book.asin} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <SingleBook book={book} />
            </Col>
          ))
        ) : (
          <Col>
            <p className="text-center text-muted">No books match your search.</p>
          </Col>
        )}
      </Row>
    </>
  );
};

export default BookList;
