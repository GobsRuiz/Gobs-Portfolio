function loadingComponent()
{
    const element = document.querySelector(".loadingComponent") ;

    document.body.style.overflow = 'hidden'

    setTimeout(() => {
        element.style.display = 'none';
        document.body.style.overflow = 'initial'
    }, 2150);
}
loadingComponent()