let cartSection = document.querySelector(".cartSection");
function local() {
  let add = "";
  let getToLocal = window.localStorage.getItem("cartDetails");
  getToLocal = JSON.parse(getToLocal);
  console.log(getToLocal);
  if(getToLocal){
      getToLocal.filter(function (e, index) {
            add += `<div class="outerDiv w-full h-[150px] rounded-[20px] border border-7 border-slate-900 flex items-center relative" id = "${getToLocal[index].details.id}">
                    <img class="h-[150px] w-[150px] object-cover object-center rounded-[20px] p-2" src="${getToLocal[index].details.image}">
                    <h1 class="ml-8 text-[30px]">${getToLocal[index].details.name}</h1>
                                <p class="ml-[60px] w-[25%]">Feature-rich smartphone with a 6.2-inch screen, 12MP dual camera, 128GB storage, and a 4000mAh battery."</p>
                                <div class="quantity ml-[60px] flex items-center my-5 w-12">
                                    <button class="dec bg-gray-200 text-gray-600 rounded-l-md px-1 py-1 border border-r-0 border-gray-400 focus:outline-none">-</button>
                                    <input type="number" readonly class=" input border-t border-b border-gray-400 px-3 py-1 text-gray-700 w-[50px]" value="${getToLocal[index].inputNumber}">
                                    <button class="inc bg-gray-200 text-gray-600 rounded-r-md px-1 py-1 border border-l-0 border-gray-400 focus:outline-none">+</button>
                                </div>     
                        <i class="remove fa-regular fa-circle-xmark text-[30px] absolute right-5"></i>
                    <p class="ml-[60px] absolute right-5 bottom-2">Total price:  <span>${getToLocal[index].price1}</span></p>
                </div>`;
            // alert("success");
        });
    }else{
        alert("Error");
    }
    cartSection.innerHTML = add;
//   cartSection.append(add);

}

function Remove(){
    window.addEventListener('click', function(e){
        // console.log(e.target.id)
        if(e.target.classList.contains('remove')){
            cartSection.removeChild(e.target.closest(".outerDiv"))
        }
    })
}

Remove();
local();
