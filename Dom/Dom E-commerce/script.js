const createBtn  = document.querySelector("#create");
const formDiv = document.querySelector(".form");
const CLoseBtn = document.querySelector("#close");
const form = document.querySelector("form");
const productDiv =document.querySelector(".prodducts";)


let ui = () =>{
    productDiv.innerHTML= ""; //baar baar repeat nahi honge product
    productsArr.forEach((elem)=>{


        productDiv.innerHTML+=`<div class="productcard">

                <div class="img">
                    <img src=${elem.image} alt="">

                </div>
                <div class="text">
                    <h3>${elem.productname}</h3>
                    <p>${elem.description}</p>
                    <p>${elem.price}</p>
                </div>
                <div class="btns">
                    <button id="update">Update</button>
                    <button id="delete">Delete</button>
                </div> 
            </div>`
    })
}

const productsArr =[];

createBtn.addEventListener('click',()=>{
    formDiv.style.display = "flex";
})

CLoseBtn.addEventListener('click',()=>{
    formDiv.style.display="none";
})


form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let productname = event.target[0].value;
    let description = event.target[1].value;
    let price = event.target[2].value;
    let image = event.target[3].value;
    if(productname.trim() ==="" ||
        description.trim() ==="" ||
        price.trim()===""||
        image===""){
        alert("please fill all the fields");
        return;
    }

    let obj = {
        productname,
        description,
        price,
        image,
    };
    productsArr.push(obj);
    ui();
    
    console.log(productsArr);

    form.reset();
    formDiv.style.display="none";

    

})



