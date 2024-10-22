$(document).ready(function(){
    $('.responsive').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 200000,
        arrows: true,
        dots: true,
        customPaging: function(slider, i) {
            return $('<button type="button" data-role="none" role="button" tabindex="0" aria-disabled="false" />').text(i + 1);
        },
        prevArrow:"<button class='a-left control-c prev slick-prev' aria-disabled='true'><img src='assets/images/icons/arrow-left.svg' alt='arrow-left'></button>",
        nextArrow:"<button class='a-right control-c next slick-next' aria-disabled='false'><img src='assets/images/icons/arrow-right.svg' alt='arrow-right'></button>"
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
