(() => {
    function getFilterArrayElements(className, parentClass) {
        return Array.from( document.getElementsByClassName( className ) ).filter(
            item => item.closest( `.${parentClass}`));
    }    
    
    const menuMain = getFilterArrayElements("menu__link", "menu_main"),
        menuFoot = getFilterArrayElements("menu__link", "menu_foot");

    menuMain.forEach(item => item.onclick = () => {
        const menuSubMain = getFilterArrayElements("menu_active", "menu_main");
        
        if (menuSubMain.length > 0) {
            menuSubMain.forEach(item => item.classList.remove( "menu_active" ));
        }

        const nextElement = item.nextElementSibling;  
        if ( Boolean(nextElement) ) {
            nextElement.classList.toggle( "menu_active" );
            return false;
        }
    })

    menuFoot.forEach(item => item.onclick = () => {
        const menuSubMain = getFilterArrayElements("menu_active", "menu_foot");
        
        if (menuSubMain.length > 0) {
            menuSubMain.forEach(item => item.classList.remove( "menu_active" ));
        }

        const nextElement = item.nextElementSibling;  
        if ( Boolean(nextElement) ) {
            nextElement.classList.toggle( "menu_active" );
            return false;
        }
    })
})();