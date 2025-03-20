function dropdown()
{
    const btn = document.querySelector(".linksPage__divFloat__ellipsis__btn")
    const menu = document.querySelector(".linksPage__divFloat__ellipsis__menu")

    menu.style.display = 'none'

    btn.addEventListener("click", () => {
        if(menu.style.display == 'none'){
            menu.style.display = 'flex'

            setTimeout(() => {
                menu.style.opacity = 1
                menu.style.top = "45px"
            }, 50);
        }
        else{
            menu.style.top = "40px"
            menu.style.opacity = 0
            
            setTimeout(() => {
                menu.style.display = 'none'
            }, 300);
        }
    })
}
dropdown()