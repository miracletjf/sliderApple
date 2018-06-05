(function($,window,document){
  let $container = $('.slider-container');
  let $slider = $('.slider-box');
  let $buttons = $('.buttons-box .item a');
  let n = 0;
  let timer ;
  
  $buttons.eq(0).addClass('active');
  
  setTimer();
  addMouseEvent();
  addClickEvent();
  addWindowVisibleEvent();


  function slideTo(index){
    $slider.css({transform:`translateX(${(-920)*index}px)`});
    $buttons.eq(index).addClass('active')
            .parent().siblings().find('a').removeClass('active');
  }
  function setTimer(){
    timer = setInterval(()=>{
      n = (++n)%4;
      slideTo(n);
    },2000);
  }
  function addMouseEvent(){
    $container.on('mouseenter',function(){
      window.clearInterval(timer);
    })
    $container.on('mouseleave',function(){
      setTimer();
    })
  }
  function addClickEvent(){
    $buttons.on('click',function(e){
      let index = $(this).parent().index();
      slideTo(index);
      n = index;
      return false;
    })
  }
  function addWindowVisibleEvent(){
    $(document).on('visibilitychange',function(){
      if(document.visibilityState === 'hidden'){
        window.clearInterval(timer);
      }else if(document.visibilityState === 'visible'){
        setTimer();
      }
    })
  }
})(jQuery,window,document);
