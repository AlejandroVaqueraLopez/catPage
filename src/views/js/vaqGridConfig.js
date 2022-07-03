"use strict";
const list = [];
const clientsContent = document.querySelector("#clientsContent");
const btnPrev = document.querySelector("#btnPrev");
const btnNext = document.querySelector("#btnNext");
let firstCounter = 0;//500 or less
let secondCounter = 0;//501 -> 999
let thirdCounter = 0;//1000 -> ~
let template = "";

//to use:
//list = [your objects that matched with your template]

function templateCreator(obj){//set here your template item
    //destructuring
    const {name,image,link,iconUrl} = obj;

    //creating
    const galeryItemContainer = document.createElement("div");
    galeryItemContainer.classList.add("galeryItemContainer");
    galeryItemContainer.style.backgroundImage = `url("${link}")`;

    const galeryPanel = document.createElement("div");
    galeryPanel.classList.add("galeryPanel");

    const clientName = document.createElement("span");
    clientName.classList.add("clientName");
    clientName.classList.textContent = obj;

    const a = document.createElement("a");
    a.href = link;

    const igIcon = document.createElement("img");
    igIcon.src = iconUrl;
    igIcon.alt = "icon"

    //appending
    a.appendChild(igIcon);
    galeryPanel.appendChild(clientName);
    galeryPanel.appendChild(a);
    galeryItemContainer.appendChild(galeryPanel);

    /*`<div class="galeryItemContainer" style="background-image:url('./images/clients/client-${obj}.jpg')">
            <div class="galeryPanel">
                <span class="clientName">Catty ${obj}</span>
                <a href="https://www.instagram.com/alejandrovaqueral">
                    <img src="./icons/instagram-icon.png" alt="instagram icon">
                </a>
            </div>
        </div>`;*/
    return galeryItemContainer; 
}

function smallSetting(direction){//(true is btnNext) (false if btnPrev)
    //set the vales for component when (viewport width < 500px)
    template = "";//clear template 
    if(direction){
        firstCounter ++;//when next
    }else{
        firstCounter --;//when previous
    }
    template = templateCreator(list[firstCounter]);
    clientsContent.innerHTML = template;//render template 
}

function midSetting(direction){//(true is btnNext) (false if btnPrev)
    //set the vales for component when (viewport width > 501px && < 999px)
    template = "";//clear template 
    if(direction){
        secondCounter++;
    }else{
        secondCounter --;
    }
    const start = secondCounter * 4;//0
    const end = start + 4;//4
    let elements = list.slice(start,end);
    elements.forEach((item)=>{
        template += templateCreator(item);
    })
    clientsContent.innerHTML = template;
}

function bigSetting(direction){//(true is btnNext) (false if btnPrev)
    //set the vales for component when (viewport width > 1000px)
    template = "";//clear template 
    if(direction){
        thirdCounter++;
    }else{
        thirdCounter --;
    }
    const start = thirdCounter * 8;//0
    const end = start + 8;//4
    let elements = list.slice(start,end);
    elements.forEach((item)=>{
        template += templateCreator(item);
    });
    clientsContent.innerHTML = template;
}

//button next
btnNext.addEventListener("click",()=>{
    if(window.innerWidth <= 500){
        if(firstCounter < list.length - 1){
            //set the vales for component when (viewport width < 500px)
            smallSetting(true);//(true is btnNext) (false if btnPrev)
        }
    }else if(window.innerWidth > 500 && window.innerWidth < 1000){//501 -> 999
        const pageLimit = Math.floor(list.length / 4);//sets a limit of pagination
        if(secondCounter < pageLimit){
            //set the vales for component when (viewport width > 501px && < 999px)
            midSetting(true);//(true is btnNext) (false if btnPrev)
        }
    }else{
        const pageLimit = Math.floor(list.length / 8);//sets a limit of pagination
        if(thirdCounter < pageLimit){
            //set the vales for component when (viewport width > 1000px)
            bigSetting(true);//(true is btnNext) (false if btnPrev)
        }
    }
});

//button previous
btnPrev.addEventListener("click",()=>{
    if(window.innerWidth <= 500){// less than 500px
        if(firstCounter > 0){
            //set the vales for component when (viewport width < 500px)
            smallSetting(false);//(true is btnNext) (false if btnPrev)
        }
    }else if(window.innerWidth > 500 && window.innerWidth < 1000){
        if(secondCounter > 0){
            //set the vales for component when (viewport width > 501px && < 999px)
            midSetting(false);//(true is btnNext) (false if btnPrev)
        }
    }else{
        if(thirdCounter > 0){
            //set the vales for component when (viewport width > 1000px)
            bigSetting(false);//(true is btnNext) (false if btnPrev)
        }
    }
})

//first render 
function firstRender(){
    if(window.innerWidth <= 500){//less than 500px
        template = templateCreator(list[firstCounter]);
        clientsContent.innerHTML = template;
    }else if(window.innerWidth > 500 && window.innerWidth < 1000){//501 -> 999
        const start = 0;
        const end = 4;
        let elements = list.slice(start,end);
        elements.forEach((item)=>{
            template += templateCreator(item);
        });
        clientsContent.innerHTML = template;
    }else{//max than 1000px
        const start = 0;//0
        const end = 8;//8
        let elements = list.slice(start,end);
        elements.forEach((item)=>{
            template += templateCreator(item);
        });
        clientsContent.innerHTML = template;
    }
}

firstRender();
