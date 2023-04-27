const cardArrow = document.querySelectorAll('.card-visible svg'),
      cardList = document.querySelectorAll('.card-hidden');
cardArrow.forEach((item, i) => {
    cardArrow[i].addEventListener("click", function() {
        cardArrow[i].classList.toggle('active');
        cardList[i].classList.toggle('active');
    });
});