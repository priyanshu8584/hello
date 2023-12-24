const yesbtn=document.querySelector(".yes");
const nobtn=document.querySelector(".no");
const audio = new Audio('loverboy_a_wall.mp3')
let audio2 = new Audio('audio2.mp3');
const btns=document.querySelector(".btns")

audio2.play();
var tl=gsap.timeline();
tl.from(".nav",{
   
    opacity:0,
    ease:Expo.easeInOut,
    duration:1.5,
})
function loadafter(){
  var tl=gsap.timeline();
     
tl.to(".container",{
    
    opacity:1,
    ease:Expo.easeInOut,
    duration:2.5,

})
  .to(".btns",{
  opacity:1,
  ease:Expo.easeInOut,
  duration:0.5,
   })

}
loadafter();

yesbtn.addEventListener("click",()=>{
  

  var sl=gsap.timeline();
  
  sl.to(".image1",{
     opacity:0,
    
  })

   .to(".image2",{
    opacity:1,
    
   })
   .to(".image5",{
    opacity:1,
    
   })
   .to(".image6",{
    opacity:1,
    
   })
   
   
   
  
  audio2.pause();
   audio.play();
})
yesbtn.addEventListener("click",()=>{
  
  var ll=gsap.timeline();
  ll.to(".navtext",{
    opacity:0
   })
  .to(".image3",{
    opacity:0,
   })
   .to(".question",{
    opacity:0,
   })
   .to(".atag",{
    opacity:0,
    
   })
   .to(".answer",{
    opacity:1,
   })
   audio2.pause();
})

nobtn.addEventListener("mouseenter", () => {
  gsap.to(nobtn, {
      opacity: 1,
      duration: 0.5,
      onComplete: () => {
          // Get window dimensions
          const windowWidth = window.innerWidth;
          const windowHeight = window.innerHeight;

          // Calculate random position
          const randomX = Math.random() * (windowWidth - nobtn.offsetWidth);
          const randomY = Math.random() * (windowHeight - nobtn.offsetHeight);

          // Apply new position
          gsap.to(btns, {
              left: randomX,
              top: randomY,
              duration: 4,
              onComplete: () => {
                  gsap.to(btns, {
                      opacity: 1,
                      duration: 0.3,
                  });
              },
          });
      },
  });
});
nobtn.addEventListener("click", () => {
  gsap.to(nobtn, {
      opacity: 1,
      duration: 0.5,
      onComplete: () => {
          // Get window dimensions
          const windowWidth = window.innerWidth;
          const windowHeight = window.innerHeight;

          // Calculate random position
          const randomX = Math.random() * (windowWidth - nobtn.offsetWidth);
          const randomY = Math.random() * (windowHeight - nobtn.offsetHeight);

          // Apply new position
          gsap.to(btns, {
              left: randomX,
              top: randomY,
              duration: 4,
              onComplete: () => {
                  gsap.to(btns, {
                      opacity: 1,
                      duration: 0.3,
                  });
              },
          });
      },
  });
});