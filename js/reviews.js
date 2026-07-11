const reviewSlider = document.querySelector(".reviews-slider");

document.querySelector(".review-arrow.left").addEventListener("click", () => {

    reviewSlider.scrollBy({

        left:-380,

        behavior:"smooth"

    });

});

document.querySelector(".review-arrow.right").addEventListener("click", () => {

    reviewSlider.scrollBy({

        left:380,

        behavior:"smooth"

    });

});