
// function initMap() {
//     // The location of Uluru
//     var uluru = {lat: 17.920380, lng: 102.626948};
//     // The map, centered at Uluru
//     var map = new google.maps.Map(
//         document.getElementById('map'), {zoom: 20, center: uluru});
//     // The marker, positioned at Uluru
//     var marker = new google.maps.Marker({position: uluru, map: map});
//   }

  $(window).scroll(function(){
      var scrollTop = $(this).scrollTop();
      if(scrollTop > 1){
          $('#navbar').css('padding','5px 25px')
      }else{
          $('#navbar').css('padding','25px')
      }
  })
  
// Script on to top
  $('.to-top').click(function(e){
    $('html,body').animate({scrollTop:'0px'},800)
  })