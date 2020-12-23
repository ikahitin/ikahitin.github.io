//  --- Smooth anchor scroll  ---

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
      ) {
      // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
 $("#but").click(function () {
  if ($("#tomat").is(":hidden")) {
    $("#tomat").fadeIn("fast");
    $("#button").addClass("border");
  } else {
    $("#tomat").fadeOut("fast");
    $("#button").removeClass("border");
  }
  return false;
});
 $("#but2").click(function () {
  if ($("#oliv").is(":hidden")) {
    $("#oliv").fadeIn("fast");
    $("#button2").addClass("border");
  } else {
    $("#oliv").fadeOut("fast");
    $("#button2").removeClass("border");
  }
  return false;
});
 $("#but3").click(function () {
  if ($("#mush").is(":hidden")) {
    $("#mush").fadeIn("fast");
    $("#button3").addClass("border");
  } else {
    $("#mush").fadeOut("fast");
    $("#button3").removeClass("border");
  }
  return false;
});


 $("#but11").click(function () {
  if ($("#sshow11").is(":hidden")) {
    $("#sshow11").fadeIn("fast");
    $("#button11").addClass("border");
  } else {
    $("#sshow11").fadeOut("fast");
    $("#button11").removeClass("border");
  }
  return false;
});
 $("#but4").click(function () {
  if ($("#sal").is(":hidden")) {
    $("#sal").fadeIn("fast");
    $("#button4").addClass("border");
  } else {
    $("#sal").fadeOut("fast");
    $("#button4").removeClass("border");
  }
  return false;
});
 $("#but5").click(function () {
  if ($("#onio").is(":hidden")) {
    $("#onio").fadeIn("fast");
    $("#button5").addClass("border");
  } else {
    $("#onio").fadeOut("fast");
    $("#button5").removeClass("border");
  }
  return false;
});
 $("#but6").click(function () {
  if ($("#sshow6").is(":hidden")) {
    $("#sshow6").fadeIn("fast");
    $("#button6").addClass("border");
  } else {
    $("#sshow6").fadeOut("fast");
    $("#button6").removeClass("border");
  }
  return false;
});
 $("#but7").click(function () {
  if ($("#basil").is(":hidden")) {
    $("#basil").fadeIn("fast");
    $("#button7").addClass("border");
  } else {
    $("#basil").fadeOut("fast");
    $("#button7").removeClass("border");
  }
  return false;
});
 $("#but8").click(function () {
  if ($("#pep").is(":hidden")) {
    $("#pep").fadeIn("fast");
    $("#button8").addClass("border");
  } else {
    $("#pep").fadeOut("fast");
    $("#button8").removeClass("border");
  }
  return false;
});
 $("#but9").click(function () {
  if ($("#sshow9").is(":hidden")) {
    $("#sshow9").fadeIn("fast");
    $("#button9").addClass("border");
  } else {
    $("#sshow9").fadeOut("fast");
    $("#button9").removeClass("border");
  }
  return false;
});
 $("#but10").click(function () {
  if ($("#bac").is(":hidden")) {
    $("#bac").fadeIn("fast");
    $("#button10").addClass("border");
  } else {
    $("#bac").fadeOut("fast");
    $("#button10").removeClass("border");
  }
  return false;
});





// var bac = document.getElementById('bac');
// $("#but10").click(function () {
//   if ( $("#button10").hasClass("border") ) {
//     $("#button10").removeClass("border");
//     bac.style.display = "none";
//   }
//   else{
//     bac.style.display = "inline";
//     $("#button10").addClass("border");
//   }
// });










//   ---  Price Maker  ---
  var a = 0, b = 5, c = 5;
  updatePrice();
  $('.butt').click(function(){
    if(this.getAttribute('on-off') == 'on'){
      a-=this.getAttribute('price')-0;
      this.setAttribute('on-off','off')
    }
    else
      {a+=this.getAttribute('price')-0;
    this.setAttribute('on-off','on')
  }
  updatePrice();
})
  function updatePrice(){
   var price = parseInt(a) + parseInt(b) + parseInt(c);
   $('#pr').html(price +' $');
   $('#prr').html(price +' $');
   $('#prdev').html(price + 8 + ' $');
 }
 $('input[name=typeche]').click(function(){
  b=$(this).attr('price');
  updatePrice()
});
$('input[name=psize]').click(function(){
  c=$(this).attr('price');
  updatePrice()
});

//   ---  Navigation Menu  ---
$(document).ready(function(){
    $("#showHideContent").click(function () {
      if ($("#navmenu").is(":hidden")) {
        $("#navmenu").slideDown("fast");
      } else {
        $("#navmenu").slideUp("fast");
      }
      return false;
    });
  });