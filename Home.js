import product from "./Product.json" assert { type: "json" };

// console.log("product:::", product);

let val;
let inputValue;
let add = "";
let cartProduct = [];
let data = [];

const getCardInfo = () => {
  let clone = document.querySelector(".clone");
  let addClone = document.querySelector(".cartClone");
  let container = document.querySelector(".cardContainer");
  let cardId = document.querySelector(".cardId");
  let cartSection = document.querySelector(".showingCart");
  let animation = document.querySelector(".dos");
  let con = document.querySelector(".container");
  let search = document.querySelector(".search");
  let overlay = document.querySelector(".overlay");
  let history =  document.querySelector(".History")

  return {
    clone,
    container,
    cardId,
    cartSection,
    addClone,
    animation,
    con,
    search,
    overlay,
    history
  };
};


window.addEventListener("load", function(e){
let {con} = getCardInfo()
let log = `
   <div class="mainCon w-full fixed flex items-center justify-center  inset-0 z-20 backdrop-filter backdrop-blur-[10px] h-full rounded-[20px] p-5">
      <div class="container w-[30%] h-[80%]  bg-blue-100  rounded-[20px] p-5 relative">
      <div class="cancle absolute right-2 top-2  w-[30px] h-[30px] rounded-[20px] flex items-center justify-center bg-white">
        <i class="cancle fa-solid fa-x "></i>
      </div>
        <div class="flex flex-col items-center">
            <h1 class="logo absolute text-[40px] transition-all duration-400 border-b-blue-400  border-b-[5px]">Log-In</h1>
            <h1 class="Sign-logo absolute right-0  text-[0px] transition-all duration-400 border-b-blue-400  border-b-[5px]">Sign-Up</h1>
        </div>
        <form action="" class="mt-[90px] flex flex-col items-center relative">
            <div class="Name-section hidden w-full h-auto transition-max-height duration-500 p-2 bg-white rounded-[20px] mb-3">
                <label for="input" class="name">Name:</label>
                <p class="namePara absolute right-2 top-0 text-red-600"></p>
                <input class="nameInput w-full mt-1 p-2 outline-none" onkeyup="nameCheck()" type="text" placeholder="Name">
            </div>
            <div class="email-section  w-full h-auto p-2 bg-white rounded-[20px] mb-3 relative">
                <label for="input" class="Emial">Email Address:</label>
                <p class="emial absolute right-2 top-0 text-red-600"></p>
                <input class="input w-full mt-1 p-2 outline-none" onkeyup="emialInput()" type="text" placeholder="UserName@gmail">
            </div>
            <div class="pass-section w-full h-auto p-2 bg-white rounded-[20px] mb-3 relative">
                <label for="input">Password:</label>
                <p class="password absolute right-2 top-0 text-red-600"></p>
                    <input class="input2 w-[90%] mt-1 p-2 outline-none" type="password" onkeyup="pass()" placeholder="Password">
                    <i class="showpass fa-solid fa-eye "></i>
                    <div class="hidd w-[2px] h-[20px] absolute bottom-[18px] right-[25px] rotate-45 bg-black"></div>
            </div>
            <div class="num-section hidden w-full h-auto p-2 bg-white rounded-[20px]  relative">
                <label for="input">Number:</label>
                <p class="NumberPara password absolute right-2 top-0 text-red-600"></p>
                <input class="NumberInput w-[90%] mt-1 p-2 outline-none" type="number" onkeyup="Numeber()"" placeholder="Number">
            </div>
        </form>
        <Button class="submit w-[90%] h-[40px] bg-blue-800 ml-4 rounded-[20px] hover:text-white mt-7" type="submit">Submit</Button>
        <p class="SignUp absolute left-4 bottom-10 hover:text-white">Sign-up</p>
        <p class="absolute right-4 bottom-10 hover:text-white">Forgot password?</p>
    </div>
  <div/> `
  
  con.innerHTML = log;
  // con.append(log);
  cancleBtn()
});

function cancleBtn(){
  let {con} = getCardInfo();
  con.addEventListener('click', function(e){
    if(e.target.classList.contains("cancle")){
      con.style.display = "none"
    }
  })  
}

product.forEach((items) => {
  let { clone, container, cardId, animation } = getCardInfo();
  const { name, price, id, image, stock, description } = items;

  let cardClone = document.importNode(clone.content, true); // to yha pr apnne jo template ko clone kr diya hai mtlb jo bhi uske andar tha wo idhar agya hai
  cardClone.querySelector(".img").src = image;
  cardClone.querySelector(".img").setAttribute("src", image);
  cardClone.querySelector(".img").setAttribute("alt", name);
  cardClone.querySelector(".des").textContent = description;
  cardClone.querySelector(".name").textContent = name;
  cardClone.querySelector(".stock").textContent = stock;
  cardClone.querySelector(".price").textContent = `₹${price}`;
  cardClone.querySelector(".dis-price").textContent = `₹${price * 2}`;
  cardClone.querySelector(".canId").setAttribute("id", `card-${id}`);

  // <----------increment decrement---------->

  cardClone.querySelector(".quantity").addEventListener("click", (e) => {
    cardId = document.querySelector(`#card-${id}`);
    val = cardId.querySelector(".input");
    incrementBtn(val, e, stock);
    decrementBtn(val, e);
  });

  // <----------Add to cart--------->

  cardClone.querySelector(".add").addEventListener("click", (e) => {
    let q = document.querySelector(`#card-${id}`);
    animation.classList.add("animate-bounce");
    let cartId = product[`${id}`];
    cartProduct.push(cartId);

    // localStorage(cartId)
    renderProductInfoInCart(cartId)
  });
  container.append(cardClone);
});

//<----------increment---------->

function incrementBtn(value, e, stock) {
  if (e.target.classList.contains("inc")){
    if (value.value < stock) {
      let int = parseInt(value.value);
      value.value = int + 1;
      value.setAttribute("value", `${value.value}`);
    }
  }
}

//<----------decrement---------->

function decrementBtn(value, e) {
  if (e.target.classList.contains("dec")) {
    if (value.value > 1) {
      value.value -= 1;
      value.setAttribute("value", `${value.value}`);
    }
  }
}

// <-------------quantity---------->

function quantity(qNum) {
  inputValue = val === undefined ? '1' : val.getAttribute("value");
    if(inputValue !== 1){
      qNum.innerHTML = `${inputValue}`;
    }
  val = undefined;
}


// <------------- add To cart---------->

const renderProductInfoInCart = (cartId) => {
    let { cartSection, addClone } = getCardInfo();
    cartProduct.filter((cards) => {
      let addToCartClone = document.importNode(addClone.content, true);
      addToCartClone.querySelector(".cartImg").src = cards.image;
      addToCartClone.querySelector(".cartName").innerHTML = cards.name;
      addToCartClone.querySelector(".cartPrice").innerHTML = cards.price;
      let qNum = addToCartClone.querySelector(".showQuantity");
      let quantity2 = addToCartClone.querySelector(".dot");
      if (val === undefined) {
        quantity2.style.display = "none";
      }
      cartSection.appendChild(addToCartClone);
      // cartSection.innerHTML = addToCartClone;
      quantity(qNum);
      localStorage(cartId)
      cartProduct.pop(cartId);
    });
}

//<-------------Show Hover cart------------>

function showingcart() {
  let { animation } = getCardInfo();
  document
    .querySelector(".shopingCart")
    .addEventListener("mouseover", function (e) {
      if (e.target.classList.contains("dos")) {
        document.querySelector(".showingCart").classList.toggle("hidden");
        animation.classList.remove("animate-bounce");
      }
    });
  window.addEventListener("click", function (e) {
    if (!e.target.classList.contains("shopingCart") && e.target.tagName !== "I"){
      document.querySelector(".showingCart").classList.add("hidden");
    }
  });
}

//<----------- Save to local storage---------->

let localStorage = (details) =>{

  let  { price, id , stock} = details;
  let inputNumber = Number(inputValue);

  let price1 =  `${price * inputNumber}`

  data.push({details,inputNumber,price1})
  let dataSet = window.localStorage.getItem("cartDetails") || '[]'
  let setCon = JSON.parse(dataSet)

  let mappedlocalData = {};
  data.forEach(ele => {
    let {details} = ele;
    mappedlocalData[ele.details.id] = {...ele};;
  })


  const filteredData = setCon.filter(ele => !mappedlocalData[ele.details.id])  // ye apnne isliye kiya kyuki agar add to cart me pehle se data huwa to to addd whisame data pwhle add nhi krega
  let converted = JSON.stringify([...data,...filteredData])
  // console.log("data",[converted])
  
  window.localStorage.setItem("cartDetails", [converted])



  let getToLocal =  window.localStorage.getItem("cartDetails");
  if(!getToLocal){ // agar local sotage me kuchnhi huwa to ek khali array pass krdo
    console.log("e");
    return [];
  }else{
    getToLocal = JSON.parse(getToLocal); // agar getToLocal me data aya hai to usko json me convert krdo mtlb normal text me
  }
  
}


function searchItems(e){
  let {search,overlay,history} = getCardInfo();

  search.addEventListener('focus', function(e){
    overlay.style.display = "block";
  })
  search.addEventListener('blur', function(e){
    overlay.style.display = "none";
    // history.style.display = "none";
  })
  search.addEventListener('input', function(e){
    let filterArray = product.filter((obj) => obj.name.toLowerCase().startsWith(search.value));   // filter kya kr rha hai ki ye dekh rha hai jo obj ka name aya hai wo lstart ho rha hai jo input ki hai value agar true hai to array me daldo kyuki filer array return krta hai agar true hota hai to false me wo array me nhi dalta jo false huwa hai
    let clone = "";

    for(let pro of filterArray){
      // console.log(pro.name);
      clone += `<div class="flex items-center rounded-[20px] hover:bg-zinc-300 hover:opacity-50 p-2">
                  <i class="fa-solid fa-magnifying-glass mr-3"></i>
                  <h3 class ="h3">${pro.name}</h3>
                </div>`;                            
    }
    history.addEventListener('click', function(e){
      // let select = e.target.innerHTML;
      let select = e.target.closest('.h3').innerHTML;
      search.innerHTML = select;

      console.log(select);
      history.style.display = "none";
    })
    history.style.display = "block";
    history.innerHTML = clone;
  })

  
  // let arr = [];
  // product.forEach(function(items,index){
  //   let itemsName = items
  //   arr.push(itemsName)
  // })
  
  // search.addEventListener("keyup", function(){
  //   let comName = search.value

  //   arr.forEach((e) =>{
  //     if(e.name == comName){
  //       console.log(e);
  //     }
  //   })
  // })
}






// function local(){
//   let {cartSection} = getCardInfo();

//   let getToLocal =  window.localStorage.getItem("cartDetails");

//     getToLocal = JSON.parse(getToLocal); // agar getToLocal me data aya hai to usko json me convert krdo mtlb normal text me
//     console.log(getToLocal);

//   window.addEventListener('DOMContentLoaded', function(e){
//     if(getToLocal){
//       getToLocal.filter(function(e, index){
//           add += ` <div class="cart-con w-[280px] rounded-[20px] ml-1 h-[100px] bg-white p-2 flex my-[10px] relative">
//                   <div class="dot animate-pulse w-5 h-5 absolute right-0 top-0 rounded-full bg-red-500 flex items-center justify-center">
//                       <p class="showQuantity">${getToLocal[index].inputValue}</p>
//                   </div>
//                   <img class="cartImg w-[30%] h-full bg-contain rounded-[20px]" src="${getToLocal[index].details.image}">
//                   <div class="flex tems-center">
//                       <h1 class="text-[13px] text-slate-500 mx-4">Name: <span class="cartName">${getToLocal[index].details.name}</span></h1>
//                       <p class="text-[13px] absolute text-slate-500 right-3 bottom-2 mt-5">Price: <span class="cartPrice">${getToLocal[index].details.price}</span></p>
//                   </div>
//               </div>`
//             alert("success");
//       })
//     }else{
//       alert("Error");
//     }
//     cartSection.innerHTML = add;
//   });
// }



// window.addEventListener('beforeunload', function(event) {
//   window.localStorage.setItem('lastVisit', new Date().toString());
//   // event.preventDefault();
// });
// local()

showingcart();
searchItems()
