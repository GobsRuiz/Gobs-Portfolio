function loadingComponent()
{
    const element = document.querySelector(".loadingComponent") ;

    setTimeout(() => {
        element.style.display = 'none';
    }, 2150);
}
loadingComponent()