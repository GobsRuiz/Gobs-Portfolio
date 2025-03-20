const scrollToSection = {
    links: [...document.querySelectorAll(".scrollToSection")],

    toSection(){
        this.links.forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault()

                const section = document.querySelector(link.getAttribute("href"))

                if(!section && header.el) return;

                window.scroll({
                    top: document.querySelector(link.getAttribute("href")).offsetTop - (header.el.offsetHeight + 20),
                    behavior: 'smooth',
                })
            })
        });
    },

    init(){
        this.toSection()
    },
}
scrollToSection.init()