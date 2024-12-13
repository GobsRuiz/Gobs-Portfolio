function worked()
{
    const optionsDiv = document.querySelector(".worked__tabs__options")
    const bar = document.querySelector(".worked__tabs__options__bar")
    const btns = document.querySelectorAll(".worked__tabs__options__btn")

    // For scroll bar
    const containerWidth = document.querySelector(".c-container").offsetWidth - 50
    let optionsDivWidth = 0;
    let optionsInViewDefault = 1;
    let optionsInView = 1;
    let scrollIndex = 0;
    let scrollIndexPrev = 0;

    

    mobile()

    btns.forEach((btn, index) => {
        btn.addEventListener("click", (e) => {
            
            setShowOrHideContent(btn, index)
            // if(innerWidth <= 991) scrollBarEvent(btn, index) 
        })
    });



    function setShowOrHideContent(btn, index)
    {
        const activeBtn = document.querySelector(".worked__tabs__options__btn--active")
        const activeElement = document.querySelector(".worked__tabs__content--show")

        if(activeBtn){
            activeBtn.classList.remove("worked__tabs__options__btn--active")
            activeElement.classList.remove("worked__tabs__content--show")
        }

        const div = document.querySelector(`.worked__tabs__content[data-content='${btn.dataset.option}']`)
        
        if(div){
            btn.classList.add("worked__tabs__options__btn--active")
            div.classList.add("worked__tabs__content--show")

            if(innerWidth > 991)
                bar.style.top = btn.offsetTop + "px"
            else{
                bar.style.width = btn.offsetWidth + "px"
                bar.style.left = btn.offsetLeft + "px"
            }
        }
    }

    function scrollBarEvent(btn, index)
    {
        let type = scrollIndexPrev > index ? 'decrease' : 'increase'
        optionsInView = type == 'decrease' && optionsInView > index ? optionsInView - optionsInViewDefault : optionsInView 
        scrollIndex = type == 'decrease' ? index : index + 1
        
        if(scrollIndex == optionsInView){
            optionsDiv.scrollTo(btn.offsetLeft - 200, 0)
        }

        optionsInView = scrollIndex == optionsInView ? (optionsInView + scrollIndex) - 1 : optionsInView 

        scrollIndexPrev = index + 1
    }
    
    function mobile()
    {
        if(innerWidth <= 991)
                bar.style.width = btns[0].offsetWidth + "px"

        let noteWidthValue = 0;
        btns.forEach((btn) => {
            optionsDivWidth += btn.offsetWidth
            noteWidthValue += btn.offsetWidth

            if(optionsDiv.offsetWidth > noteWidthValue)
                optionsInViewDefault++;
        })

        optionsInView = optionsInViewDefault

    }
}
worked()