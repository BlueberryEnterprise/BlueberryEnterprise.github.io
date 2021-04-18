/* função de alterar a cor da navbar */
const target = document.querySelectorAll('[data-color]');
const colorClass = 'colorNav'


function colorNav(){
    const windowTop = window.scrollY
    target.forEach((e)=>{
       if(windowTop > 100){
           e.classList.add(colorClass)
       }else{
           e.classList.remove(colorClass)
       }
    })
    
}

window.addEventListener('scroll', ()=>{
    colorNav()
})


function sizeOfThings(){
    var windowWidth = window.innerWidth;
    let navbar = document.querySelectorAll('.navbar-nav')
    navbar.forEach((e)=>{
        if(windowWidth < 992){
            e.classList.add(colorClass)
        }else{
            e.classList.remove(colorClass)
        }
    })
    
};

sizeOfThings();


/* função ocultar item quando clickado */

$('.nav-link').on('click', function(){
    $(".navbar-collapse").collapse("hide");
    
});

