const notification = {
    element: document.querySelector(".notification"),
    
    show(text){
        this.element.style.display = 'flex';
        this.element.querySelector("p").innerText = text;
        
        setTimeout(() => {
            this.animate('show')
        }, 50);

        setTimeout(() => {
            this.animate('none')

            setTimeout(() => {
                this.element.style.display = 'none'
            }, 300);
        }, 3000);
    },

    animate(type)
    {
        this.element.style.opacity = type == 'show' ? 1 : 0
        this.element.style.bottom = type == 'show' ? "10px" : 0 
    },
}