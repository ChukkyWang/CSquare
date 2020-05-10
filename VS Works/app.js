document.addEventListener('scroll', function (){
    const headerContainer = document.querySelector('.header-container');
    const headerButton = document.querySelector('.button');

    if (document.documentElement.scrollTop > 100){
        headerContainer.style.height = "60px";
        headerButton.style.backgroundColor = '#eb5954';
        headerButton.style.color = 'white'
    } else{
        headerContainer.style.height = "100px";
       headerButton.style.backgroundColor = 'white';
        headerButton.style.color = '#3E4751'
    }

    //headerContainer.style.height = '50px';
    //headerContainer.style.backgroundColor = 'blue'
    //document.body.scrollTop > 50 ||
})






//const productsBehaviour = document.querySelector('.productOne');

const pB = document.querySelector('.tileOne', '.tileTwo', '.tileThree')

pB.addEventListener('mouseover', function (){

    pB.style.height = "295px";

    pB.style.width = "205px";
    
}

)