$('.gbogbo').addClass('active');

$('.all').click( function () {
      $('.all').removeClass('active');
      $(this).addClass('active');
});

$('.gbogbo').click( function(){
      $('.box').show();
} )


  var mode = $('#sun');

  mode.on("click",function () {
      $('body').toggleClass('light-theme');

      if ($('body').hasClass('light-theme')) {
            mode[0].src = "./icon-moon.svg";
         
      } else {
          mode[0].src = "./icon-sun.svg";
      }
  });


  $('#active').click( function() {
     $('.box').hide();
     $('.box').has('input.check:checked').show();
      
  });

  $('#inactive').click( function() {
      $('.box').hide();
      $('.box').has('input.check:not(:checked)').show();
  });

  

  
    $('.remove').click( function(event) {
        var result = confirm('are you sure?');
        if(result === false) {
            event.preventDefault;
        }else if (result === true) {
            $('.box').has(this).hide();
        }
       
    
  });

