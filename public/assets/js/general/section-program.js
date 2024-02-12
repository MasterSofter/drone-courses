function InitSectionProgram(){
  let btnsOpen = document.getElementsByClassName('btn-open-accordion');
  let btnsClose = document.getElementsByClassName('btn-close-accordion');

  for(let i = 0; i < btnsOpen.length; i++){
    btnsOpen[i].onclick = OpenEventHandler;
  }

  for(let i = 0; i < btnsClose.length; i++){
    btnsClose[i].onclick = CloseEventHandler;
  }
}
function OpenEventHandler(event){
  let btns = document.querySelectorAll(".btn-open-accordion");

  for(let i = 0; i< btns.length; i++){
    if(btns[i] !== event.currentTarget){
      if(btns[i].classList.contains("is-hidden")){
        gsap.to(btns[i], 0.2, {opacity: 1, scale: 1});
        btns[i].classList.remove("is-hidden");
        btns[i].parentElement.parentElement.parentElement.parentElement.classList.add("bg-dark");
        btns[i].parentElement.parentElement.parentElement.parentElement.classList.remove("bg-dim-light-dark");
      }
    }
  }

  //Анимация нажатия на кнопку +
  gsap.to(event.currentTarget, 0.25, {scale: 1.5});
  gsap.to(event.currentTarget, 0.2, {opacity: 0, scale: 0.5, delay: 0.05});
  event.currentTarget.classList.add("is-hidden");

  //Анимация появления элементов списка
  let listItems = event.currentTarget.parentElement.parentElement.parentElement.parentElement.querySelectorAll("li");
  let btnClose = event.currentTarget.parentElement.parentElement.parentElement.parentElement.querySelector(".btn-close-accordion");
  for (let i = 0; i < listItems.length; i++) {
    gsap.fromTo(
      listItems[i],
      { opacity: 0, translateX: "-4rem" },
      {opacity: 1, translateX: 0,  delay: 0.035 * i}
    )
  }
  gsap.fromTo(btnClose, 0.2, {opacity: 0, scale: 0.5},{opacity: 1, scale: 1, delay: 0.2})

  event.currentTarget.parentElement.parentElement.parentElement.parentElement.classList.remove("bg-transparent");
  event.currentTarget.parentElement.parentElement.parentElement.parentElement.classList.add("bg-dim-light-dark");
}
function CloseEventHandler(event){
  let btns = document.getElementsByClassName("btn-open-accordion");

  for(let i = 0; i< btns.length; i++){
    if(btns[i] !== event.currentTarget){
      if(btns[i].classList.contains("is-hidden")){
        gsap.to(btns[i], 0.2, {opacity: 1, scale: 1});
        btns[i].classList.remove("is-hidden");
        btns[i].parentElement.parentElement.parentElement.parentElement.classList.add("bg-dark");
        btns[i].parentElement.parentElement.parentElement.parentElement.classList.remove("bg-dim-light-dark");
      }
    }
  }

  //Анимация нажатия на кнопку -
  gsap.to(event.currentTarget, 0.2, {opacity: 0, scale: 0.5});
}


InitSectionProgram();