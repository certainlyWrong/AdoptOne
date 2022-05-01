const seletor = document.querySelector('#bkbn')

seletor.addEventListener('click',function(e){
    e.preventDefault();
    const name  = document.querySelector('#name');
    const email = document.querySelector('#email');
    const value1 = name.value;
    const value2 = email.value;
    localStorage.setItem('user',value1);
    localStorage.setItem('email',value2);
    document.getElementById('name');
    document.getElementById('email');
});