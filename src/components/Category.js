import React from "react";
import { Col, Row } from "react-bootstrap";
import Roll from "react-reveal/Roll";

const Category = ({ filterByCategory, allCategoriesWithoutRepeat }) => {
  // Filter by category
  const onFilter = (category) => {
    filterByCategory(category);
  };

  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        {allCategoriesWithoutRepeat.length > 0 ? (
          <div className="scroll-buttons-container">
            <Roll>
              {allCategoriesWithoutRepeat.map((categ) => {
                return (
                  <div key={categ}>
                    <button
                      onClick={() => onFilter(categ)}
                      className="btn-style mx-2"
                    >
                      {categ}
                    </button>
                  </div>
                );
              })}
            </Roll>
          </div>
        ) : (
          <Roll>
            <h3>لا يوجد تصنيفات</h3>
          </Roll>
        )}
      </Col>
    </Row>
  );
};

export default Category;
