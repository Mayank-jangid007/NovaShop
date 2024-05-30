let product = [
    {
      "id": 0,
      "name": "Laptop",
      "category": "Computers",
      "brand": "ExampleBrand",
      "price": 999.99,
      "stock": 50,
      "description": "Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.",
      "image": "https://images.unsplash.com/photo-1628557118391-56cd62c9f2cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNhbXN1bmclMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      "id": 1,
      "name": "Smartphone",
      "category": "Mobiles",
      "brand": "TechGadget",
      "price": 499.99,
      "stock": 100,
      "image": "https://images.unsplash.com/photo-1531092601737-e5b3b6e57365?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNhbXN1bmclMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D",
      "description": "Feature-rich smartphone with a 6.2-inch screen, 12MP dual camera, 128GB storage, and a 4000mAh battery."
    },
    {
      "id": 2,
      "name": "Wireless Headphones",
      "category": "Audio",
      "brand": "SoundBeats",
      "price": 149.99,
      "stock": 30,
      "image": "https://images.unsplash.com/photo-1631278919249-b985fdb1f901?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNhbXN1bmclMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D",
      "description": "High-quality wireless headphones with over-ear design, 20 hours of battery life, and a sleek black color."
    },
    {
      "id": 3,
      "name": "Watches",
      "category": "Wearables",
      "brand": "FitTech",
      "price": 199.99,
      "stock": 20,
      "image": "https://images.unsplash.com/photo-1505740106531-4243f3831c78?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNhbXN1bmclMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D",
      "description": "Smartwatch with a 1.3-inch AMOLED display, water-resistant design, fitness tracking features, and a stylish silver color."
    },
    {
      "id": 4,
      "name": "Speakers",
      "category": "Audio",
      "brand": "SoundBeats",
      "price": 149.99,
      "stock": 30,
      "image": "https://images.unsplash.com/photo-1515940279136-2f419eea8051?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNhbXN1bmclMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D",
      "description": "High-quality wireless headphones with over-ear design, 20 hours of battery life, and a sleek black color."
    },
    {
      "id": 5,
      "name": "Speakers",
      "category": "Audio",
      "brand": "SoundBeats",
      "price": 149.99,
      "stock": 30,
      "image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWFyJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D",
      "description": "High-quality wireless headphones with over-ear design, 20 hours of battery life, and a sleek black color."
    },
    {
      "id": 6,
      "name": "Speakers",
      "category": "Audio",
      "brand": "SoundBeats",
      "price": 149.99,
      "stock": 30,
      "image": "https://plus.unsplash.com/premium_photo-1673548917645-e8d9ed21e2b2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFwdG9wfGVufDB8fDB8fHww",
      "description": "High-quality wireless headphones with over-ear design, 20 hours of battery life, and a sleek black color."
    },
    {
      "id": 7,
      "name": "Speakers",
      "category": "Audio",
      "brand": "SoundBeats",
      "price": 149.99,
      "stock": 30,
      "image": "https://images.unsplash.com/photo-1573399054516-90665ecc44be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNjcmVlbnxlbnwwfHwwfHx8MA%3D%3D",
      "description": "High-quality wireless headphones with over-ear design, 20 hours of battery life, and a sleek black color."
    },
    {
      "id": 8,
      "name": "Speakers",
      "category": "Audio",
      "brand": "SoundBeats",
      "price": 149.99,
      "stock": 30,
      "image": "https://images.unsplash.com/photo-1573399054516-90665ecc44be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNjcmVlbnxlbnwwfHwwfHx8MA%3D%3D",
      "description": "High-quality wireless headphones with over-ear design, 20 hours of battery life, and a sleek black color."
    },
]

let clone = document.querySelector(".clone");
let addClone = document.querySelector(".cartClone");
let container = document.querySelector(".cardContainer");
let cardId = document.querySelector(".cardId");
let cartSection = document.querySelector(".showingCart");
let cartProduct = [];

product.forEach((items) =>{
        const {name, price, id, image, stock, description} = items;
        let card =`<div class="canId min-h-[400px] bg-white rounded-[20px] mt-10 mx-2 w-[300px] shadow-lg p-3 relative" id="card-${id}">
        <img class="img w-full h-[250px] rounded-[20px]" src="${image}" alt="image">
        <h1 class="name mt-2 w-[200px] max-h-[50px] overflow-y-auto">${name}</h1>
        <p class="des text-[15px] text-gray-500">${description}</p>
        <p class="d first:text-[15px] text-gray-500 my-3">Total stocks avaible: <span class="stock text-black">${stock}</span></p>
        <div class="quantity flex items-center my-5 w-12">
            <button class="dec bg-gray-200 text-gray-600 rounded-l-md px-1 py-1 border border-r-0 border-gray-400 focus:outline-none">-</button>
            <input type="number" readonly class=" input border-t border-b border-gray-400 px-3 py-1 text-gray-700 w-[50px]" value="1">
            <button class="inc bg-gray-200 text-gray-600 rounded-r-md px-1 py-1 border border-l-0 border-gray-400 focus:outline-none">+</button>
        </div>                        
        <p class="price">${price}</p>
        <p class="dis-price absolute bottom-3 left-[90px] line-through">${price * 2}</p>
        <div class="h-12 w-12 rounded-[30px] flex items-center justify-center bg-black absolute right-2 bottom-2 "><i class="text-white h-4 w-3 fa-solid fa-plus"></i></div>
        </div>`
    
    const tempContainer = document.createElement('div');
        tempContainer.innerHTML = card;
    
        const cardElement = tempContainer;
    
        container.appendChild(cardElement);
    
        const quantityButtons = cardElement.querySelectorAll('.quantity');
    
        quantityButtons.forEach(button => {
            button.addEventListener('click', (e) => {
              let cardId = cardElement.querySelector(`#card-${id}`);
              let val = cardElement.querySelector(".input");
              console.log(cardId);
              incrementBtn(val,e)
            });
        });
        // container.innerHTML = card
    })
    
    
    function incrementBtn(val,e){
              if(e.target.classList.contains("inc")){
                  // if(val.value < stock){
                    let int = parseInt(val.value);
                    val.value = int+1
                  // }
              }
      }