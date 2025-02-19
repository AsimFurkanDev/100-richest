import { useState } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const RichestPeopleCards = ({
  id,
  name,
  img,
  net_worth,
  description,
  profile_link,
}) => {
  // const [show, setShow] = useState(true);

  return (
    <Col xs={10} sm={8} md={6} lg={4} xl={3}>
      <Card
        style={{ width: "18rem" }}
        // onClick={() => setShow(!show)}
        role="button"
      >
        <Card.Img variant="top" src={img} />

        <Card.Body>
          <h1>Rank : {id}</h1>
          <Card.Title>{name}</Card.Title>
          <Card.Title>{net_worth}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Link href={profile_link} target="blank">
            {profile_link}
          </Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default RichestPeopleCards;
