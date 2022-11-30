(() => {
    function getArrayElementsByClassName(className) {
        return Array.from( document.getElementsByClassName( className ) );
    }
       
    function removeClassNameAndReturnIndex(arraySelector, removeSelector) {
        for (let i = 0; i <= arraySelector.length; i++) {
            if (arraySelector[i].classList.contains( removeSelector )) {
                arraySelector[i].classList.toggle( removeSelector );
                return i;
            }
        }
    }
    
    function addSelector(array, index, className) {
        array[ index ].classList.add( className)
    }
     
    
    
    getArrayElementsByClassName( "slider__arrow" ).forEach(item => item.onclick = () => {
        const sliderItemElements = getArrayElementsByClassName( "slider__item" ),
            sliderDotElements = getArrayElementsByClassName( "slider__dot" );
        
        let removeIndexItem = removeClassNameAndReturnIndex(sliderItemElements, "slider__item_active"),
            removeIndexDot = removeClassNameAndReturnIndex(sliderDotElements, "slider__dot_active");
        
        if (item.classList.contains( "slider__arrow_prev" )) {
            if ( removeIndexItem === 0 ) {
                removeIndexItem = sliderItemElements.length - 1;
            } else {
                removeIndexItem -= 1;
            }
            
        } else if (item.classList.contains( "slider__arrow_next" )){
            if ( removeIndexItem === sliderItemElements.length - 1 ) {
                removeIndexItem = 0;
            } else {
                removeIndexItem += 1;
            }
        }
        addSelector(sliderItemElements, removeIndexItem, "slider__item_active");
        addSelector(sliderDotElements, removeIndexItem, "slider__dot_active");
    })
    
    getArrayElementsByClassName( "slider__dot" ).forEach((item, index) => item.onclick = () => {
        const sliderItemElements = getArrayElementsByClassName( "slider__item" ),
            sliderDotElements = getArrayElementsByClassName( "slider__dot" );
        
        let removeIndexItem = removeClassNameAndReturnIndex(sliderItemElements, "slider__item_active"),
            removeIndexDot = removeClassNameAndReturnIndex(sliderDotElements, "slider__dot_active");
        
        addSelector(sliderItemElements, index, "slider__item_active");
        addSelector(sliderDotElements, index, "slider__dot_active");
    })
   
})();