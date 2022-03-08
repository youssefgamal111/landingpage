/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


const allsections=document.querySelectorAll('section');//global variable
const navbarlist=document.getElementById('navbar__list');
let counter=1;
for(section of allsections){
    let listitem=document.createElement('li');
    let id=section.getAttribute('id');
     listitem.innerHTML= `<a id='${counter}${id}' class= 'menu__link'  onclick="liscroll('${id}')"> ${id} </a>`;
    navbarlist.appendChild(listitem);
   counter++;

}
//i added onclick function to each menulink to make scroll and i send the id of the view in paramters
function liscroll(id){
const theSection=document.getElementById(id);
theSection.scrollIntoView({behavior:"smooth"})

}
let isscrolling;
let itwashidden=false;//indicate if bar is visible to not let the loop hide it again
function activestatus() {
    const button=document.getElementById('myBtn');
   const navigationbar=document.getElementsByClassName('menu__link');
   if(!itwashidden){
    for(links of navigationbar)
    {links.style.display="none";}
    itwashidden=true;
   }
    clearTimeout(isscrolling)
    isscrolling=setTimeout(function unhide() {
        itwashidden=false;
    
    for(links of navigationbar)
    {links.style.display="block";}
    
  }, 500);
  // first i check if i will show the button or not then i check if i choose specific section or not to make it is appears active
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >50) {
       
        button.style.display = "block";
      }
    else {
       button.style.display = "none";
      }
     
    for(section of allsections){
        let rect = section.getBoundingClientRect();
        const elemid=section.getAttribute('id');
       
        const element=document.getElementById(elemid[7]+elemid);
      if((rect.top>=0&&!section.classList.contains('your-active-class'))&&rect.top<70){
        
          element.style.background= '#333';
          element.style.color= '#fff';  
          section.classList.add('your-active-class');
      
        }
      else if((rect.top<0 ||rect.top>70)&&section.classList.contains('your-active-class')) {
         element.style.background= '#fff';
         element.style.color= '#000'; 
        
        section.classList.remove('your-active-class');
        
    }

    }


}
//the event of scrolling the contains function which make two missions
document.addEventListener('scroll',activestatus );
//a button disapear when it was clicked and return to top 
function returnTop(){
  
    const button=document.getElementById('myBtn'); 
    document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  button.style.display="none";
 
}

