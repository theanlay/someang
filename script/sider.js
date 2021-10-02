//navbar fixed 


window.addEventListener("scroll", function(){
    const navBar = document.querySelector("nav");
    const scrollHeight = window.pageYOffset;
    const navbarHeight = navBar.getBoundingClientRect().height;
    if (scrollHeight >navbarHeight){
        navBar.classList.add('c_sticky');

    }else{
        navBar.classList.remove("c_sticky")
    }
}); 

const menuItem = document.querySelectorAll(".c_links li");
menuItem.forEach((item) => {
    item.addEventListener("click",() => {
        const activeClass = document.querySelector(".c_active");
        activeClass.className = activeClass.className.replace("active", "");
        item.className += 'c_active';
    })
})
const slides = document.querySelectorAll(".c_slide");

const preBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector ("#nextBtn");
const indicatorParent = document.querySelector('.c_dot '); 
const indicators = document.querySelectorAll('.c_dot li');
let index = 0;

slides.forEach(function(slide, index){
    slide.style.left= `${index*100}%`;
});

// function for swipe 

function carousel(){
    if (index === slides.length){
        index = 0;
    }
    if (index < 0 ){
        index = slides.length -1 ;
    }

    slides.forEach(function(slide){
        slide.style.transform= `translateX(-${index*100}%)`;
    });

    document.querySelector('.c_dot .c_selected').classList.remove('c_selected');
    indicatorParent.children[index].classList.add('c_selected');
    // setIndex(index);
   
}

// auto slide function 

function autoslide(){
    index++;
    carousel();
    setTimeout(autoslide, 5000);

};

autoslide();

// dot point function 
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
    slides.forEach(function(slide){
        slide.style.transform= `translateX(-${index*100}%)`;
    });
    
    document.querySelector('.c_dot .selected').classList.remove('selected');
    indicatorParent.children[index].classList.add('selected');
    //   index = i;
    });
});

// btn add event listener for swipe card 
nextBtn.addEventListener("click" ,function(){
    index++;
    carousel();


});
preBtn.addEventListener("click" ,function(){
    index--;
    carousel();

});