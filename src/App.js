import { useState } from "react";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
import ItemsList from "./components/ItemsList";
import { items } from "./data";

function App() {
  const [itemsData, setItemsData] = useState(items);

  // Get all unique categories from the items array, including "الكل"
  const allCategoriesWithoutRepeat = [
    "الكل",
    ...new Set(items.map((i) => i.category)),
  ];

  // Filter by category
  const filterByCategory = (cat) => {
    console.log("Selected Category:", cat);
    if (cat === "الكل") {
      setItemsData(items);
    } else {
      const newArray = items.filter((item) => item.category === cat);
      setItemsData(newArray);
    }
  };

  // Filter by Searching
  const filterBySearch = (word) => {
    if (word.trim() !== "") {
      const newArray = items.filter((item) =>
        item.title.toLowerCase().includes(word.toLowerCase())
      );
      setItemsData(newArray);
    } else {
      setItemsData(items); // Reset to all items if the search field is empty
    }
  };

  return (
    <div className="color-body font">
      <NavBar filterBySearch={filterBySearch} />
      <Container>
        <Header />
        <Category
          filterByCategory={filterByCategory}
          allCategoriesWithoutRepeat={allCategoriesWithoutRepeat}
        />
        <ItemsList itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;
