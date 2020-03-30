function popupReview(){
  const reviewList = document.querySelector('.reviews__list');
  
  reviewList.addEventListener('click' , function(e){
    event.preventDefault();
    const target = e.target;
    if(target.classList.contains('btn')){
      const btn = target.parentNode;
      const title = btn.parentNode.querySelector('.review__username').textContent;
      const text = btn.parentNode.querySelector('.review__content').textContent;
      
      renderPopup(title, text);
    }
  })
  
  function renderPopup(title, text){
    const popup = document.querySelector('.popup');

    popup.classList.add('popup--active');
    body.classList.add('body--active-menu');

    popup.querySelector('.popup__title').textContent = title;
    popup.querySelector('.popup__text').textContent = text;

    popup.querySelector('.popup__close').addEventListener('click' , e=>{
      e.preventDefault();

      popup.classList.remove('popup--active');
      body.classList.remove('body--active-menu');
    })
  }
}

popupReview();
