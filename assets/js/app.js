// search js start
document.querySelector('#search_show_btn').addEventListener('click',function(){
    document.querySelector('#search').classList.add('show');
})


// search js end
document.querySelector('#search_close_btn').addEventListener('click',function(){
    document.querySelector('#search').classList.remove('show');
})

 // slick jquery start
$ (function() {
    $(".hero_slider").slick({
       autoplay:true,
       arrows:false,
       fade:true,
       speed:600,
       dots:true,
       dotsClass:'hero_slider_dots'
      

     });

     $('#deals_timer').countdown('2023/12/10', function(event) {
        var $this = $(this).html(event.strftime(''
         
         
          + ' <div><h4>%D</h4> <p>Days</p></div> '
          + '<span>:</span>'
          + ' <div><h4>%H</h4> <p> Hour </p></div> '
          + '<span>:</span>'
          + ' <div><h4>%M</h4> <p>Minute</p></div>   '
          + '<span>:</span>'
          + ' <div><h4>%S</h4> <p>Second</p> </div>  '));
      });
     
 });
  
