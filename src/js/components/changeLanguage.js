function changeLanguage()
{
    const btn = document.querySelector(".changeLanguageBtn")
    
    let language = !window.localStorage.language ? 'pt' : window.localStorage.language

    console.log(window.localStorage.language)

    if(language == 'en'){
        changeSVG()
        changeLanguage()
    }

    btn.addEventListener("click", () => {
        language = language == 'pt' ? 'en' : 'pt'

        window.localStorage.setItem("language", language)

        changeSVG()
        changeLanguage()
    })

    function changeSVG(){
        if(language == 'en'){
            btn.querySelector(".changeLanguageBtn__ptSvg").style.display = 'none'
            btn.querySelector(".changeLanguageBtn__enSvg").style.display = 'block'
        }
        else{
            btn.querySelector(".changeLanguageBtn__ptSvg").style.display = 'block'
            btn.querySelector(".changeLanguageBtn__enSvg").style.display = 'none'
        }
    }

    function changeLanguage() {
        document.querySelectorAll("[data-lang-" + language + "]").forEach(el => {
            el.textContent = el.getAttribute("data-lang-" + language);
        });
    }
}
changeLanguage()