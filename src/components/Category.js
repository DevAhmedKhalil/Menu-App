import React from "react";
import { Col, Row } from "react-bootstrap";

const Category = ({ filterByCategory, allCategoriesWithoutRepeat }) => {
  // Filter by category
  const onFilter = (category) => {
    filterByCategory(category);
  };

  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        {allCategoriesWithoutRepeat.length > 0 ? (
          allCategoriesWithoutRepeat.map((categ) => {
            return (
              <div className="">
                <button
                  onClick={() => onFilter(categ)}
                  className="btn-style mx-2"
                >
                  {categ}
                </button>
              </div>
            );
          })
        ) : (
          <h3>لا يوجد تصنيفات</h3>
        )}
      </Col>
    </Row>
  );
};

export default Category;
