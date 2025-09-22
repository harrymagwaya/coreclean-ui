document.addEventListener('DOMContentLoaded', ()=>{
    const openbtn = document.getElementById('book');
    const form = document.getElementById('user-form');
    const closebtn = document.getElementById('close-form');


    openbtn.addEventListener('click', ()=>{
        form.style.display = 'flex';
    });

    closebtn.addEventListener('click', ()=>{
        form.style.display = 'none';
    });

    form.addEventListener('click', e=>{
        if (e.target === form) {
            form.style.display = 'none';
        }
    });

    
})

const scrollBtn = document.getElementById('scroll-top')

function scroller() {
  //  const scroll = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight;
    
    window.onscroll = () =>{
        scrollBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
    } 
        // scrollBtn.classList.toggle('show', scroll);
       
   
}


scrollBtn.addEventListener('click', ()=>{
    window.scrollTo({top: 0, behavior: 'smooth'});
})

window.addEventListener('scroll', scroller)