let projectsGrid=document.getElementsByClassName("projects-grid")[0];let titleText=document.getElementsByClassName("title-text")[0];let monogram=document.getElementById("monogram");let pageLink=document.getElementById("notSelected");let currentPage=document.getElementById("selected");let contentContainer=document.getElementsByClassName("content-container")[0];let projectCard=document.querySelectorAll(".project-card");let projectBackdrop=document.getElementsByClassName("project-backdrop")[0];let main=document.getElementsByTagName("main")[0];function scrollFader(){if(projectsGrid){projectsGrid.removeEventListener("scroll",scrollHandler)}
if(projectsGrid&&window.innerWidth>1250){projectsGrid.addEventListener("scroll",scrollHandler)}
if(contentContainer){contentContainer.removeEventListener("scroll",scrollHandler2)}
if(contentContainer&&window.innerWidth>1250){contentContainer.addEventListener("scroll",scrollHandler2)}}
function scrollHandler(){titleText.style.opacity=Math.max(0,Math.min(1,1-(projectsGrid.scrollTop/150)))}
function scrollHandler2(){titleText.style.opacity=Math.max(0,Math.min(1,1-(contentContainer.scrollTop/80)))}
window.addEventListener("resize",function(){scrollFader()});scrollFader();monogram.addEventListener("mouseover",function(){monogram.classList.add("animate__tada")});monogram.addEventListener("animationend",function(){monogram.classList.remove("animate__tada")});function shortDelay(URL){setTimeout(function(){window.location=URL},500)}
function longDelay(URL){setTimeout(function(){window.location=URL},1000)}
pageLink.addEventListener("click",function(){if(projectsGrid){projectsGrid.classList.add("animate__fadeOut");titleText.style.transition=".5s";titleText.style.opacity="1"}
if(contentContainer){contentContainer.classList.add("animate__fadeOut")}
currentPage.style.opacity=".3";pageLink.style.opacity="1"});projectCard.forEach((i)=>{i.addEventListener("click",function(){if(window.innerWidth>1250&&window.innerHeight>600){projectBackdrop.style.display="block";setTimeout(function(){projectBackdrop.style.transform="translateY(0)"},1)}else{main.classList.add("animate__fadeOut");titleText.style.transition=".5s";titleText.style.opacity="0"}})})
