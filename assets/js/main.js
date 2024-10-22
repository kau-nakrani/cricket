$(document).ready(function(){
    $('.responsive').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 200000,
        arrows: true,
        dots: true,
        prevArrow:"<button class='a-left control-c prev slick-prev'><img src='assets/images/icons/arrow-left.svg'></button>",
        nextArrow:"<button class='a-right control-c next slick-next'><img src='assets/images/icons/arrow-right.svg'></button>"
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
