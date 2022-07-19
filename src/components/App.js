import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";
function App() {
  
  const [isDarkMode, setIsDarkMode] = useState(false);
  function changeTheme() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }


  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode ? 'App dark' : 'App light'} onDarkModeClick={changeTheme}/> 
      <ShoppingList items={itemData} />
    </div>
  );
 
    
  
}

export default App;
