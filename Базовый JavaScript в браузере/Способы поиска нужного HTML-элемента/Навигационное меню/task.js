(() => {
    const menuLinkClass = document.querySelectorAll( ".menu__link" );
    
    menuLinkClass.forEach(item => item.onclick = () => {
        
        const checkMenuActive = document.querySelector( ".menu_active");
        if (checkMenuActive !== null) {
            checkMenuActive.classList.remove( "menu_active" );
        }
        
        const nextElement = item.nextElementSibling;
        
        if ( Boolean(nextElement) ) {
            nextElement.classList.toggle( "menu_active" );
            return false;
        }
    });
})();