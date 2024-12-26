let currentIndex = 0;
document.querySelector('#carouselImages').style.width=`${document.querySelectorAll('#carouselImages img').length*100}%`
document.querySelectorAll('#carouselImages img').forEach((item)=>{
    item.style.width=`${100/document.querySelectorAll('#carouselImages img').length}%`
})

    function moveSlide(direction) {
        const slides = document.querySelector('#carouselImages');
        const totalSlides = document.querySelectorAll('#carouselImages img').length; // Number of images
        console.log(totalSlides);
        
        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        } else if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }

        const offset = -currentIndex * (100 / totalSlides);
        slides.style.transform = `translateX(${offset}%)`;
    }