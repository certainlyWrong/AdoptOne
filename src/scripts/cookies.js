const seletor = document.querySelector('#bkbn')
seletor.addEventListener('click',function(e){
    e.preventDefault();
    const name  = document.querySelector('#name');
    const email = document.querySelector('#email');
    const value1 = name.value;
    const value2 = email.value;
    document.cookie = "user="+value1
    document.cookie = "email="+value2   
});


