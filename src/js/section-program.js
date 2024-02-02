
let btnsOpen = document.getElementsByClassName('btn-open-accordion');
let btnsClose = document.getElementsByClassName('btn-close-accordion');
//let badges = btnOpen.parentElement.getElementsByClassName("program-badge");

for(let i = 0; i < btnsOpen.length; i++){
  btnsOpen[i].onclick = OpenEventHandler;
}

for(let i = 0; i < btnsClose.length; i++){
  btnsClose[i].onclick = CloseEventHandler;
}

function OpenEventHandler(event){
  let btns = document.getElementsByClassName("btn-open-accordion");

  for(let i = 0; i< btns.length; i++){
    if(btns[i] !== event.currentTarget){
      btns[i].classList.remove("d-none");
      btns[i].parentElement.parentElement.parentElement.parentElement.classList.add("bg-transparent");
      btns[i].parentElement.parentElement.parentElement.parentElement.classList.remove("bg-dim-light-dark");
    }
  }
  event.currentTarget.classList.add("d-none");

  event.currentTarget.parentElement.parentElement.parentElement.parentElement.classList.remove("bg-transparent");
  event.currentTarget.parentElement.parentElement.parentElement.parentElement.classList.add("bg-dim-light-dark");
}

function CloseEventHandler(event){
  let btns = document.getElementsByClassName("btn-open-accordion");

  for(let i = 0; i< btns.length; i++){
    btns[i].classList.remove("d-none");
  }

  event.currentTarget.parentElement.parentElement.parentElement.classList.add("bg-transparent");
  event.currentTarget.parentElement.parentElement.parentElement.classList.remove("bg-dim-light-dark");
}