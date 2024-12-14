import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import Zoom from "react-reveal/Zoom";

const ItemsList = ({ itemsData }) => {
  // Detect if the screen is small (mobile/tablet)
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Row>
      {itemsData.length > 0 ? (
        itemsData.map((item, index) => {
          return (
            <Zoom>
              <Col key={item.id} sm="12" className="mb-3">
                <Card
                  className={`d-flex card-color ${
                    isSmallScreen ? "flex-column" : "flex-row"
                  }`}
                >
                  <Card.Img
                    variant={isSmallScreen ? "top" : "right"}
                    src={item.imgUrl}
                    className="img-item"
                  />
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-between">
                      <div className="item-title">{item.title}</div>
                      <div className="item-price">{item.price}</div>
                    </Card.Title>
                    <Card.Text className="py-2">
                      <span className="item-description">
                        {item.description}
                      </span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Zoom>
          );
        })
      ) : (
        <h3 className="text-center">لا يوجد اصناف حاليا</h3>
      )}
    </Row>
  );
};

export default ItemsList;
