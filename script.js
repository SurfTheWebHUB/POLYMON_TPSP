window.onload = function() {
    
    StartIntro();
};

function StartIntro() {
  var splashScreen = document.querySelector('.splash-screen');
  

  // Check if the splash screen element exists
  if (splashScreen) {
    // Set initial opacity to 1
    splashScreen.style.opacity = '1';

    // After 5 seconds, fade out the splash screen and navigate to the next page
    setTimeout(function() {
      splashScreen.style.opacity = '0';
      
    }, 5000);

    setTimeout(function() {
      NextPage();
    }, 10500)
  } else {
    // Handle the case where the splash screen element does not exist
    console.log("Splash screen element not found or new page is loaded!");
  }
}

  

  


function NextPage() {
  
  window.location.href = "intro.html";
  

}

