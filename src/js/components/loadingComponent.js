function loadingComponent()
{
    const element = document.querySelector(".loadingComponent") ;

    setTimeout(() => {
        console.log('execute')
        element.style.display = 'none';
    }, 2150);
}
loadingComponent()