$(document).ready(function () {
  function checkInternetConnection(){
  var status = navigator.onLine;
  if (status) {
      $(':button').prop('disabled', false);
    } else {
      $(':button').prop('disabled', true);
      $.toast({ text: 'Kindly Check your Internet Connection', heading: 'Internet Disconnected', icon: 'error', showHideTransition: 'fade', allowToastClose: false, hideAfter: 1000, stack: false, position: 'top-right', textAlign: 'left', loader: false, loaderBg: '#9EC600' });
    }  
    setTimeout(function() {
        checkInternetConnection();
    }, 1000);
  }
  checkInternetConnection();
});



