import React, { useState } from 'react';
import "./css/VerticalMenu.css";

const VerticalMenu = ({ categories }) => {
  const [expandedCategories, setExpandedCategories] = useState([]);

  const toggleCategory = (category) => {
    if (expandedCategories.includes(category)) {
      setExpandedCategories(expandedCategories.filter((c) => c !== category));
    } else {
      setExpandedCategories([...expandedCategories, category]);
    }
  };

  return (
    <div className="vertical-menu">
      {categories.map((category, index) => (
        <div key={index}>
          <div className="category-header" onClick={() => toggleCategory(category)}>
            {category.name}
          </div>
          {expandedCategories.includes(category) && (
            <ul className="category-items">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default VerticalMenu;