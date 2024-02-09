let scrollControllerMain = new ScrollMagic.Controller({refreshInterval: 1});
let scenes = [
  CreateScene(SceneName.FadeHeroAnimation),
  CreateScene(SceneName.RingsFlyAnimation),
  CreateScene(SceneName.ShowIntroWhiteChatTitle),
  CreateScene(SceneName.HideSectionIntroWhiteChatAnimation),
];

Init();

var width = $(window).width();
$(window).on('resize', function() {
  if ($(this).width() !== width) {
    width = $(this).width();
    location.reload();
  }
});




