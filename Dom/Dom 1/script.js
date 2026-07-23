//
const bulb = document.querySelector(".bulb")
const btn = document.querySelector("button")
// let flag =true;

// btn.addEventListener('click',function(){
//  if(flag){
//     bulb.style.backgroundColor= "Yellow";
//     btn.textContent= "OFF";
//     flag = false ;

//  }else{
//     bulb.style.backgroundColor= "transparent";
//     btn.textContent= "ON";
//     flag = true;

//  }
// });
 
//another way 
btn.addEventListener("click",function(){
    if(bulb.classList.toggle("lightUp")){
        btn.textContent = "OFF";
    }else{
        btn.textContent = "ON";
    }
});
 
