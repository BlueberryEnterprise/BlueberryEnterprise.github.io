const target = document.querySelectorAll('[data-color]');
const colorClass = 'colorNav'

function colorNav(){
    const windowTop = window.scrollY
    target.forEach((e)=>{
       if(windowTop > 580){
           e.classList.add(colorClass)
       }else{
           e.classList.remove(colorClass)
       }
    })
    
}

window.addEventListener('scroll', ()=>{
    colorNav()
})