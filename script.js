let enter = document.querySelector('#enter div');
let form = document.querySelector('form');
let inputs = document.querySelectorAll('.log');




enter.addEventListener('click',function(){
    form.classList.toggle('hover');
    setTimeout(
        function(){
           for(let elem of inputs){
            elem.classList.toggle('lognone');
        }
    }, 1000
    )
});
        
    
