$(document).ready(function() {
  // IntersectionObserver 객체 생성
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };

  //sec를 가진 요소들을 관찰 대상으로 등록
  const boxList = document.querySelectorAll('.sec');
  boxList.forEach(el => observer.observe(el));


/*--실력게이지 웹--------------------------------*/
const web_apple = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
};

const web_banana = new IntersectionObserver(entry => {
  //대상이 화면에 보일 때 active 추가, 보이지 않을 때는 제거
  entry.forEach(entry => {
    if (entry.isIntersecting) {
      $(".p2_skill").addClass('active');
    } else {
      $(".p2_skill").removeClass('active');
    }
  });
}, web_apple);

//sec를 가진 요소들을 관찰 대상으로 등록
const web_mango = document.querySelectorAll('.page2_wrap');
web_mango.forEach(el => web_banana.observe(el));
/*----------------------------------*/

  /*--실력게이지 모바일--------------------------------*/
  const apple = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };

  const banana = new IntersectionObserver(entry => {
    //대상이 화면에 보일 때 active 추가, 보이지 않을 때는 제거
    entry.forEach(entry => {
      if (entry.isIntersecting) {
        $(".p2_rtext").addClass('active');
      } else {
        $(".p2_rtext").removeClass('active');
      }
    });
  }, apple);

  //sec를 가진 요소들을 관찰 대상으로 등록
  const mango = document.querySelectorAll('.page2_wrap');
  mango.forEach(el => banana.observe(el));
  /*----------------------------------*/

  $(window).on('scroll', function() {
    //스크롤 위치 확인
    var pos = $(window).scrollTop();
    var pos2 = pos + 50;
    var scrollBottom = pos + $(window).height();

    //현재 위치에 따라 해당 섹션을 하이라이트로 표시
    if (pos2 > $('#section01').offset().top) { highlightLink('section01'); }
    if (pos2 > $('#section02').offset().top) { highlightLink('section02'); }
    if (pos2 > $('#section03').offset().top) { highlightLink('section03'); }
    if (pos2 > $('#section04').offset().top) { highlightLink('section04'); }
  });

  //highlightLink 설정 함수
  function highlightLink(anchor) {
    $('.sec_nav .on').removeClass('on');
    $(".sec_nav").find('[href="#' + anchor + '"]').addClass('on');
  }

/*
  //section 요소들을 배열로 가져옴
  const elm = document.querySelectorAll('.script');
  const elmCount = elm.length;
  let currentIndex = 0;

  //각 section에 mousewheel event 추가
  elm.forEach(function(item, index) {
    item.addEventListener('mousewheel', function(event) {
      //팝업이 열려있는지 확인
      const test = document.querySelector('.pop_box');
      if (test.style.display === 'block' || test.style.display === '') {
        //열려있을 때 이벤트 처리 X
        event.preventDefault();
      } else {
        let delta = 0;
        if (!event) event = window.event;
        if (event.wheelDelta) {
          delta = event.wheelDelta / 120;
          if (window.opera) delta = -delta;
        } else if (event.detail) {
          delta = -event.detail / 7;
        }

        const currentSection = elm[currentIndex];

        if (delta < 0) {
          //휠 아래로 스크롤 시 다음 섹션 이동
          if (currentIndex !== elmCount - 1) {
            try {
              currentIndex++;
              const nextSection = elm[currentIndex];
              const moveTop = window.pageYOffset + nextSection.getBoundingClientRect().top;
              const body = document.querySelector('html');
              window.scrollTo({ top: moveTop, left: 0, behavior: 'smooth' });
            } catch (e) {}
          }
        } else {
          //휠 위로 스크롤 시 이전 섹션 이동
          if (currentIndex !== 0) {
            try {
              currentIndex--;
              const prevSection = elm[currentIndex];
              const moveTop = window.pageYOffset + prevSection.getBoundingClientRect().top;
              const body = document.querySelector('html');
              window.scrollTo({ top: moveTop, left: 0, behavior: 'smooth' });
            } catch (e) {}
          }
        }
      }
    });
  });
*/

  //mobile 전체 메뉴
  $('.list_box button').click(function() {
    $(this).toggleClass('active');
    $('.wrap_list').toggleClass('active');
  });


  $('.wrap_list ul li').click(function(){
    $('.wrap_list').toggleClass('active');
  })
  
    $(".popup_list li").click(function() {
      var popidx = $(this).index();
      $(".popup").show();
      $("body").addClass('noscroll');
      $(".popup .pop_box").hide();
      $(".popup .pop_box").eq(popidx).show();
      $(".btn_open").css("display","none")
    });
  
    $(".popup .dim").click(function() {
      $(".popup").stop().hide();
      $("body").removeClass('noscroll');
      $(".section").addClass('script');
      $(".btn_open").removeAttr('style')
    });
    
  });