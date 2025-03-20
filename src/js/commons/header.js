const header = {
    el: document.querySelector(".header"),
    nav: document.querySelector(".header__right__nav"),
    burger: document.querySelector(".header__right__burger"),

    eventScroll(){
        if(!this.el) return;

        window.addEventListener('scroll', () => {
            this.el.classList.toggle('header--scroll', window.scrollY > 50)
        })
    },

    openCloseMenu(){
        if(!this.burger || !this.nav) return;

        let open = false;
        let menu = this.nav.querySelector("div")
        let nav = this.nav
        let burger = this.burger

        this.burger.addEventListener("click", () => {
            execute()
        })

        this.nav.addEventListener("click", (e) => {
            if(!e.target.classList.contains("header__right__nav")) return
            
            execute()
        })

        function execute(){
            open = !open

            burger.classList.toggle("header__right__burger--open")

            if(open){
                nav.style.display = 'block'

                setTimeout(() => {
                    nav.style.opacity = 1
                    menu.style.right = 0
                }, 50);
            }   
            else{
                nav.style.opacity = 0
                menu.style.right = (-(menu.offsetWidth + 30)) + "px"
                
                setTimeout(() => {
                    nav.style.display = 'none'
                }, 300);
            }
        }
    },

    initSetStyle(){
        if(innerWidth <= 991 && this.nav){
            this.nav.style.right = (-(this.nav.offsetWidth + 30)) + "px"
        }
    },

    init(){
        this.eventScroll()
        this.initSetStyle()

        if(innerWidth <= 991){
            this.openCloseMenu()
        }
    },
}

header.init()