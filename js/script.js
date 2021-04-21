/* função de alterar a cor da navbar */
const target = document.querySelectorAll('[data-color]');
const colorClass = 'colorNav'


function colorNav(){
    const windowTop = window.pageYOffset
    target.forEach((e)=>{
       if(windowTop > 200){
           e.classList.add(colorClass)
       }else{
           e.classList.remove(colorClass)
       }
    })
}

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

/* Função de animações */

const targert1 = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'

function animeScroll(){
    const topWindow = window.pageYOffset + (window.innerHeight * 0.75)
    targert1.forEach((e)=>{
        if((topWindow) > e.offsetTop){
            e.classList.add(animationClass)
        }else{
            e.classList.remove(animationClass)
        }
    })
}


animeScroll()


if(targert1.length || target.length){
    window.addEventListener('scroll', debounce(()=>{
        animeScroll()
        colorNav()
    },100))
}


/* funçao Debounce */

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};