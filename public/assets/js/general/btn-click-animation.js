function InitBtnClickAnimation(){
  let btns = document.querySelectorAll(".btn-click-animation");
  btns.forEach(btn => {
    btn.onclick = () => {
      gsap.fromTo(btn,0.15,{scale: 1},{scale: 0.8});
      gsap.to(btn,0.15,{scale: 1, delay: 0.15});
    }
  })
}

InitBtnClickAnimation();