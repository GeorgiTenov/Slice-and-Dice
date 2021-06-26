const quotes = [
    {id:1,text:`“A room without books is like a body without a soul.”
    ― Marcus Tullius Cicero`},

    {id:2,text:`“So many books, so little time.”
    ― Frank Zappa`},

    {id:3,text:`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
    ― Albert Einstein`},

    {id:4,text:`“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
    ― Marilyn Monroe`},

    {id:5,text:`“Be yourself; everyone else is already taken.”
    ― Oscar Wilde
    `}
]

let buttons = [];

const quotesContainer = document.querySelector(".quotes-container");

const quoteP = document.querySelector("#quote-p");

let quoteCounter = 0;
setInterval(()=>{
   
    if(quoteCounter < quotes.length){
        quoteCounter++;
    }

    if(quoteCounter >= quotes.length) quoteCounter = 0;

    quoteP.innerHTML = quotes[quoteCounter].text;
    activateColorBtn(quotes[quoteCounter].id);
},5000);

function createQuoteButtons(){
    for(let i=1;i<=quotes.length;i++){
        let btn = document.createElement("button");
        btn.setAttribute("id",i);
        setButtonBackgroundColor(btn,"dimgrey");
        setButtonRadius(btn,50);
        setButtonSize(btn,20,20);
        quotesContainer.appendChild(btn);
        buttons.push(btn);
    }
}

function activateColorBtn(counter){
    for(let i=0;i<buttons.length;i++){
        if(buttons[i].getAttribute("id") === counter + "")
            setButtonBackgroundColor(buttons[i],"white");
        
        else setButtonBackgroundColor(buttons[i],"dimgrey");
    }
}





function setButtonSize(btn,width,height){
    btn.style.width = width + "px";
    btn.style.height = height + "px";
}

function setButtonBackgroundColor(btn,color){
    btn.style.backgroundColor = color;
}

function setButtonRadius(btn,radiusInPercentage){
    btn.style.borderRadius = radiusInPercentage + "%";
}

createQuoteButtons();

