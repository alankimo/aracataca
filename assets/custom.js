function initBannerSlider() {
  const bodyTag = document.querySelector('body');
  if(bodyTag.classList.contains('template-index')) {
    $('.header-banner-slider').slick();
  }  
}

initBannerSlider();

function moveBannerSlide(target) {
  const slideIndex = target.dataset.slickIndex;
  $('.header-banner-slider').slick('slickGoTo', slideIndex);
}

// Trigger customize section load event
document.addEventListener( 'DOMContentLoaded', function () {
  $(document)
    .on( 'shopify:section:load shopify:section:unload shopify:section:select shopify:block:select shopify:block:deselect', handleEvents);
});

function handleEvents(evt) {
  switch ( evt.originalEvent.type ) {
    case 'shopify:section:load':
      initBannerSlider();
    case 'shopify:block:select':
      if(evt.target.classList.contains('banner') || evt.target.classList.contains('banner__placeholder')) {
        moveBannerSlide(evt.target);
      }
    break;
  }
}