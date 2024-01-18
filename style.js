let text = document.getElementById("para").innerText;
let btn = document.getElementById("btn")
let conut = 0;

if (text.length > 100) {
  textFun()

}

function textFun() {
 
    let content = text.slice(0, 100);
    let show = (document.getElementById("para").innerText = content);
    let btn = (document.getElementById("btn").style.display = "block");
    btn.innerHTML ="show more"
  } 

function showMore(){
    let contentFull = document.getElementById("para").innerText = text
    console.log(contentFull.length, "show mpre fun")
   let textBtn = document.getElementById("btn").innerText ="show less"  
   console.log(textBtn , "button") 
}

function mainFun(){
    if(conut){
      btn.innerHTML ="show more"
      textFun()
      conut++
    }
    else{
      btn.innerHTML ="show less"
        showMore()
        conut--
    }
}

function tellTime() {
     var now = new Date();
     var hour = now.getHours();
     var Min = now.getMinutes();
     alert("Current time: "+ hour + ":" + Min);
}

tellTime();

 
