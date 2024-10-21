$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 200000,
        arrows: true,
        dots: true,
    });
});


const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        // Close other open sections and remove active class
        document.querySelectorAll('.accordion-content').forEach(item => {
            if (item !== content) {
                item.style.display = 'none';
                item.previousElementSibling.classList.remove('active');
            }
        });

        // Toggle the clicked section and apply active class
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
        header.classList.toggle('active');
    });
});
