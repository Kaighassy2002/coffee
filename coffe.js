function redirectbtn() {
    var menu = document.getElementById('menu');
    menu.style.display = 'block';
    menu.scrollIntoView({ behavior: 'smooth' });
}

const button1 = document.getElementById('bestseller');
    const button2 = document.getElementById('moreOption');
    const content1 = document.getElementById('celler');
    const content2 = document.getElementById('more');

    
    button1.addEventListener('click', function() {
        
        content1.classList.remove('hidden');
        content2.classList.add('hidden');
        
        button1.classList.add('hidden');
        button2.classList.remove('hidden');
    });

    
    button2.addEventListener('click', function() {
        
        content2.classList.remove('hidden');
        content1.classList.add('hidden');
        
        button2.classList.add('hidden');
        button1.classList.remove('hidden');
    });
