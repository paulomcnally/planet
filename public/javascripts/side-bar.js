$( document ).ready(function() {
  setUpMobileLayout();
  $('#open-side-bar').click(function(event) {
    if ($('#nav').hasClass('hide-nav')) {
      showNav();
    } else{
      hideNav();
    };
  });

  $('#nav-option-articles').click(function(event) {
    showArticles();
    hideSites();
    hideNav();
  });
  $('#nav-option-sites').click(function(event) {
    showSites();
    hideArticles();
    hideNav();
  });
  // This does not work properly. Only allows user to open and close nav once
  // $(document).click(function(event) {
    
  //     if($('#nav').hasClass('hide-nav')){
  //       console.log('nav hidden');
  //     }
  //     else{
  //       console.log('nav shown');
  //       $('body').on('click', function(event) {
  //         if($(event.target).is('#nav') && ! $(event.target).is('#open-side-bar')){
            
  //         }
  //         else{
  //           console.log('click did not come from nav, closing');
  //           hideNav();
  //         }
  //       });
  //     }
    
  // };

  

});





function hideNav(){
  $('#nav').addClass('hide-nav');
}
function showNav(){
  $('#nav').removeClass('hide-nav');
}

function setUpMobileLayout(){
  showArticles();
  hideSites();
}

function showArticles(){
  if ($('#posts').hasClass('hide-me')){
    $('#posts').removeClass('hide-me');
  }
  showNavItemSelected($('#nav-option-articles'));
}
function showSites(){
  if ($('#links').hasClass('hide-me')){
    $('#links').removeClass('hide-me');
  }
  showNavItemSelected($('#nav-option-sites'));

}
function hideArticles(){
  $('#posts').addClass('hide-me');
}
function hideSites(){
  $('#links').addClass('hide-me');
}

function isShown(el){
  if ( ! el.hasClass('hide-me')){
    return true;
  }
  else{
    return false;
  }
}
/*
This function cycles through all of the nav options. 
It deselects all of the ones that are not the element you passed in.
Then it selects the one you did pass in
 */
function showNavItemSelected(el){
  var navOptions = $('.nav-option');
  
  $.each(navOptions, function(){
    
    if(this.id != el.id){
      $(this).removeClass('nav-selected');
    }
  });

  el.addClass('nav-selected');
}