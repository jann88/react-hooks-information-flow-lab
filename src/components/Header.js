import React from 'react'
function Header({onDarkModeClick,currentTheme}) {
    
      return (
      
        <header className={'App ' + [] + currentTheme}>
         <h2>Shopster</h2>
         <button onClick={onDarkModeClick}>
        {currentTheme ? "Dark" : "light"} Mode
        </button>
        </header>
        
        
      
    );
        
    
    }

    export default Header;