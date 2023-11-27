var date = new Date().getDate();
var month = new Date().getMonth();
month++;
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];



var year = new Date().getFullYear();
var days = new Date(year, month, 0).getDate();

//document.body.onload = addElement;
var main = new Array();
//debugger;
var count = 0;

//content
document.getElementById("monthANDyear").innerText=""+monthNames[month-1]+" "+year;


document.cookie="asdf=fdsa";

for (let i = 0; i < days; i++) {

    var createButton = document.createElement("input");
    var createLable = document.createElement("label");
    var breakLine = document.createElement("br");


    createButton.setAttribute("type", "checkbox");    

    createButton.setAttribute("id", i);
    createButton.setAttribute("class", "mainCheckbox checkbox-round");

    createLable.setAttribute("for", i);

    createLable.textContent=i+1;

    document.getElementById("myDiv").insertBefore(createButton, document.getElementById("myDiv").lastChild);
    document.getElementById("myDiv").insertBefore(createLable, document.getElementById("myDiv").lastChild);
    
    if((i+1)%3 == 0){
        document.getElementById("myDiv").insertBefore(breakLine, document.getElementById("myDiv").lastChild);  
    }

}
//begining of code
for (let i = 0; i < days; i++) {
    
    if(localStorage.getItem(i)){
        document.getElementById(i).setAttribute("checked","true");
        main[i]=1;
    }
    else{

    }
    
}

$(document).on('click', '.mainCheckbox', function (event) {
    let id = event.target.id ;
  
    if(main[id]== 0 || main[id]== undefined || main[id]==null){
        main[id]=1;

    }else{
        main[id]=0;
    }
});

//ending of code
window.onbeforeunload=()=>{
    console.log("document about to close");

    for (let i = 0; i < days; i++) {
        if(main[i]==1){
            window.localStorage.setItem(i,1);
        }
        else{
            window.localStorage.removeItem(i);
        }
    }
    return "Are you sure want to leave?"
}