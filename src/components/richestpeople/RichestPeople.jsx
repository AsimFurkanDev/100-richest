import { data } from "../../helper/data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import RichestPeopleCards from "./RichestPeopleCards";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const RichestPeople = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <Form.Control
        className="mb-3 w-50 mx-auto my-2"
        type="search"
        placeholder="Search by name or rank"
        onChange={(e) => handleChange(e)}
      />
      <Container className="p-3 rounded-4 card-container">
        <Row className="g-4 justify-content-center">
          {data
            .filter(
              (person) =>
                person.name
                  .toLowerCase()
                  .includes(search.trim().toLowerCase()) ||
                person.id
                  .toString()
                  .toLowerCase()
                  .includes(search.trim().toLowerCase())
            )
            .map((person) => (
              <RichestPeopleCards key={person.id} {...person} />
            ))}
        </Row>
      </Container>
    </>
  );
};

export default RichestPeople;
