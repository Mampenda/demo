/*Event listener for DOM content to be loaded, will run once HTML is parsed*/
document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.querySelector('section');     //select form section container and save to variable
    signupForm.style.opacity = '0'; //start opacity at 0 fade in

    //Add transition property by setting opacity to 1 to smoothly fade form in after short wait
    setTimeout(() =>{
        signupForm.style.transition = "opacity 1s ease-in-out";
        signupForm.style.opacity = '1';
    }, 500);
});