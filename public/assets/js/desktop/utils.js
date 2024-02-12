function InitSectionIntroWhiteChat(){
  const root = document.querySelector("#section-intro-white-chat-root-desktop");
  for(let i = 0; i < COUNT_RINGS; i++){
    let element = document.createElement("img");
    element.classList = `position-absolute ring-start-position-${i} transition-smooth will-change transform-origin-center z-1`;
    element.src = "assets/images/ring-mai.png";
    element.id = `mai-logo-border-desktop-${i}`;
    RINGS.push(element);
    root.appendChild(element);
  }
}
function CreateScene(sceneName){
  let scene = new ScrollMagic.Scene();
  scene.name = sceneName;
  return scene;
}
function InitScene(scene, controller){
  switch (scene.name){
    case SceneName.FadeHeroAnimation : {
      scene = new ScrollMagic.Scene({
        duration: (document.getElementById("section-hero-desktop").getBoundingClientRect().bottom -
          document.getElementById("section-hero-desktop").getBoundingClientRect().top) / 4,
        triggerHook: 0,
        offset: (document.getElementById("section-hero-desktop").getBoundingClientRect().bottom -
          document.getElementById("section-hero-desktop").getBoundingClientRect().top) / 1.5
      }).setTween(
        gsap.fromTo(
          "#section-hero-desktop",
          { opacity: 1 },
          { opacity: 0 }
        )
      ).addTo(scrollControllerMain);

      scene.name = SceneName.FadeHeroAnimation;
      return;
    }
    case SceneName.RingsFlyAnimation : {
      scene = [];
      scene.name = SceneName.RingsFlyAnimation;

      const triggerElement = document.querySelector("#section-intro-white-chat-desktop");
      let distanceBetween = INDEX * 5;
      let duration = INDEX * 140;
      let startPosition = INDEX * 25;
      let endPosition = - INDEX * 25;
      let triggerOffset = 0;


      const scrollHeight = document.createElement("div");
      scrollHeight.className = "scroll-height p-0 m-0";
      scrollHeight.style.height = `${INDEX * 225}px`;
      triggerElement.appendChild(scrollHeight);

      RINGS.forEach((ring, i) => {
        scene.push(new ScrollMagic.Scene({
          triggerElement: triggerElement,
          duration: duration,
          triggerHook: 1,
          offset: triggerOffset
        })
          .setTween(
            gsap.fromTo(
              ring,
              {translateZ: `${startPosition}`},
              {translateZ: `${endPosition}`, stagger: 0.1}
            )
          )
          .addTo(controller));
        triggerOffset += distanceBetween;
      })


      return;
    }
    case SceneName.ShowIntroWhiteChatTitle: {
      const triggerElement = document.querySelector("#section-intro-white-chat-desktop");

      scene = new ScrollMagic.Scene({
        triggerElement: triggerElement,
        duration: INDEX * 50,
        triggerHook: 1,
        offset: INDEX * 110
      }).setTween(
        gsap.fromTo("#section-intro-white-chat-title-desktop",
          {opacity: 0},
          {opacity: 1, stagger: 0.01})
      ).addTo(controller);

      scene.name = SceneName.ShowIntroWhiteChatTitle;
      return;
    }
    case SceneName.HideSectionIntroWhiteChatAnimation:{
      const triggerElement = document.querySelector("#section-intro-white-chat-desktop");

      scene = new ScrollMagic.Scene({
        triggerElement: triggerElement,
        duration: INDEX * 20,
        triggerHook: 0.5,
        offset: INDEX * 180
      }).setTween(
        gsap.fromTo("#section-intro-white-chat-root-desktop",
          {opacity: 1 },
          {opacity: 0, stagger: 0.01})
      ).addTo(controller);

      scene.name = SceneName.HideSectionIntroWhiteChatAnimation;
      return;
    }
    case SceneName.ShowWhiteChatAnimation: {
      const triggerElement = document.querySelector("#section-white-chat-desktop");

      triggerElement.innerHTML = DefaultState.SectionWhiteChat;

      const scrollHeight = document.createElement("div");
      scrollHeight.className = "scroll-height-white-chat bg-dim-light rounded-bottom-5";
      scrollHeight.style.height = `${INDEX * 10}px`;
      triggerElement.appendChild(scrollHeight);

      const chatMsgs = document.querySelectorAll(".chat-msg");
      let offset = 0;
      let duration = INDEX * 70;
      let distanceBetween = 0;

      scene = [];
      scene.name = SceneName.ShowWhiteChatAnimation;

      chatMsgs.forEach((element, i) => {
        scene.push(new ScrollMagic.Scene({
          triggerElement: triggerElement,
          duration: duration,
          triggerHook: 0.6,
          offset: offset
        }).setPin(triggerElement.children[0].children[0]).addTo(controller));

        scene.push(new ScrollMagic.Scene({
          triggerElement: triggerElement,
          duration: 500,
          triggerHook: 1,
          offset: offset
        }).setTween(
          gsap.fromTo(element,
            {opacity: 0, scale: 0},
            {opacity: 1, scale: 1}
          )
        ).addTo(controller));

        distanceBetween =
          (element.getBoundingClientRect().bottom - element.getBoundingClientRect().top) +
          (chatMsgs[1].getBoundingClientRect().top - chatMsgs[0].getBoundingClientRect().bottom);

        offset += duration + distanceBetween;
      });
      return;
    }
  }
}
function InitSwiperDesktop(){
  new Swiper(".swiper-desktop", {
    loop: true,
    slidesPerView: 4,
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
  });
}
function InitSwiperTeachersDesktop(){
  new Swiper(".swiper-teachers-desktop", {
    loop: true,
    spaceBetween: 30,
    effect: "fade",
    allowTouchMove: false,
    navigation: {
      nextEl: ".btn-next-teacher",
      prevEl: ".btn-prev-teacher",
    },
  });
}

function Init(){
  InitSwiperDesktop();
  InitSwiperTeachersDesktop();

  InitSectionIntroWhiteChat();
  scenes.forEach((scene, i) => {
    InitScene(scene, scrollControllerMain);
  });
}