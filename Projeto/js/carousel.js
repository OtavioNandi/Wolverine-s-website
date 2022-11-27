
// Fazendo funcionar com os botões

const controls = document.querySelectorAll('.control');
let currentItem = 0;
const items = document.querySelectorAll('.item');
const maxItems = items.length;

controls.forEach(control => { 
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('arrow-left');

            if (isLeft) {
                currentItem -= 1;
            } else {
                currentItem += 1;
            }

            if (currentItem >= maxItems) {
                currentItem = 0;
            } 

            if (currentItem < 0) {
                currentItem = maxItems - 1;
            }
            

            items.forEach(item => item.classList.remove('current-item'));

            items[currentItem].scrollIntoView({
                block: "center",
                inline: "center",
                behavior: "smooth",
            });

            items[currentItem].classList.add('current-item');
    }) 
}); 


// Fazendo funcionar com as setas do teclado

document.addEventListener('keydown', function(event) {
    const key = event.key; 
    
        switch (event.key) {
        
        case "ArrowLeft":
            currentItem -= 1;
            break;
        case "ArrowRight":
            currentItem += 1;
            break;
        }

        if (currentItem >= maxItems) {
            currentItem = 0;
        } 

        if (currentItem < 0) {
            currentItem = maxItems - 1;
        }
    
     items.forEach(item => item.classList.remove('current-item'));

     items[currentItem].scrollIntoView({
         block: "center",
         inline: "center",
         behavior: "smooth",
     });

     items[currentItem].classList.add('current-item');
});


// Fazendo o menu desfocar quando scrollar

$(document).scroll(function(){
    if($(this).scrollTop() >150){
        $('.cabecalhoPrincipal').css({'webkit-filter':'sepia(20%) saturate(40%)', 'filter':'sepia(20%) saturate(40%)'});
    }else{
        $('.cabecalhoPrincipal').css({'webkit-filter':'', 'filter':''});
    }
});

