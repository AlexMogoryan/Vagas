// VEGAS
// Background SLideShow
// Codepen Demo
// http://vegas.jatysalvat.com

// Pictures from Unsplash
// http://unsplash.com/
/*global $ */

$('body').vegas({
  overlay: true,
  transition: 'fade', 
  transitionDuration: 4000,
  delay: 10000,
  color: 'red',
  animation: 'random',
  animationDuration: 20000,
  slides: [
    { src: "https://ununsplash.imgix.net/reserve/RONyPwknRQOO3ag4xf3R_Kinsey.jpg?fit=crop&fm=jpg&h=700&q=75&w=1600" },
    { src: 'https://unsplash.imgix.net/photo-1414438992182-69e404046f80?fit=crop&fm=jpg&h=625&q=75&w=1600' },
    { src: 'https://unsplash.imgix.net/photo-1414490929659-9a12b7e31907?fit=crop&fm=jpg&h=800&q=75&w=1600' },
    { src: 'https://unsplash.imgix.net/uploads/14129863345840df499fc/0165574c?fit=crop&fm=jpg&h=600&q=75&w=1600' }
  ]
});