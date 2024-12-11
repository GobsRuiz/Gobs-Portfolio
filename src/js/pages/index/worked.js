function worked()
{
    const btns = document.querySelectorAll(".worked__tabs__options__btn")
    
    

    btns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const activeElement = document.querySelector(".worked__tabs__content--show")

            if(activeElement){
                activeElement.classList.remove("worked__tabs__content--show")
            }

            const div = document.querySelector(`.worked__tabs__content[data-content='${btn.dataset.option}']`)

            if(div){
                div.classList.add("worked__tabs__content--show")
            }
        })
    });
}
worked()