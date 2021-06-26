const btnSandwich = document.getElementById("sandwich-btn");
const linksList = document.querySelector(".link-list");

const projectHoverList = document.getElementsByClassName("project-hover-container");
const projectsList = document.querySelector(".projects-container ul");


    for(let li of projectsList.children){
       li.addEventListener("mouseover",e => showHover(li.children[1]));
       li.addEventListener("mouseout",e => hideHover(li.children[1]));
    }


function hideHover(children){
    console.log(children);
    children.style.display="none";
}

function showHover(children){
    children.style.display="block";
}

let isListShown = false;

const toggleList = () => {
    
    isListShown = !isListShown;

    if(isListShown) linksList.style.display = "block";

    else linksList.style.display = "none";
}

btnSandwich.addEventListener("click",toggleList);

