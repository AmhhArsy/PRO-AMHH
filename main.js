let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river');
let boat6 = document.getElementById('boat');
let Like  = document.querySelector('.Like');
window.onscroll = function() {
    let value = scrollY;
    stars.style.left = value +'px';
    moon.style.top = value *3 +'px';
    mountains3.style.top = value *2 +'px';
    mountains4.style.top = value *1.5 +'px';
    river5.style.top = value +'px';
    boat6.style.top = value  +'px';
    boat6.style.left = value *4 +'px';
    Like.style.fontSize = value +'px';
    if(scrollY >= 190)
    if(scrollY >= 77){
        Like.style.fontSize = 190 +'px';
        Like.style.position ='fixed';
        if(scrollY >=478){
            Like.style.display = 'none';
        }else{
            Like.style.display = 'block'
        }
        if(scrollY >= 199){
           document.querySelector('.main').style.background = 'linear-gradient(#0a619b,#200016)';
        }else{document.querySelector('.main').style.background = 'linear-gradient(#500249,#200016)';
        }
       
    }
    
}
