//plans list generation
const servicesContainer = document.querySelector("#servicesContainer");

function createPlanCard(obj){
    const {name,cost,serviceList} = obj;
    return `
        <div class="card">
        <span class="txtTitle">${name}</span>
        <span class="txtPrice">${cost}</span>

        <div class="serviceListHeader">
            <span class="headerContent">Content</span>
            <span class="headerIncluded">Included</span>
            <span class="headerQuantity">Quantity</span>
        </div>

        <ul class="serviceList">
            <li>
                <div>
                    <span>${serviceList[0].name}</span>
                </div>
                <div>
                    <span>${serviceList[0].included}</span>
                </div>
                <div>
                    <span>${serviceList[0].quantity}</span>
                </div>
            </li>
            <li>
                <div>
                    <span>${serviceList[1].name}</span>
                </div>
                <div>
                    <span>${serviceList[1].included}</span>
                </div>
                <div>
                    <span>${serviceList[1].quantity}</span>
                </div>
            </li>
            <li>
                <div>
                    <span>${serviceList[2].name}</span>
                </div>
                <div>
                    <span>${serviceList[2].included}</span>
                </div>
                <div>
                    <span>${serviceList[2].quantity}</span>
                </div>
            </li>
            <li>
                <div>
                    <span>${serviceList[3].name}</span>
                </div>
                <div>
                    <span>${serviceList[3].included}</span>
                </div>
                <div>
                    <span>${serviceList[3].quantity}</span>
                </div>
            </li>
        </ul>
        <button class="btnAdd">Add to cart</button>
        </div>
        `;
} 

//products list generation
const productsContainer = document.querySelector("#productsContainer");

function createProductCard(obj){
    const {name,items} = obj;
    /*
     *
    <div class="card">
        <span class="txtTitle">${name}</span>

        <ul class="productsList">

            <li>
                <div>
                    <label>Plan:</label>
                    <span>${itemList.plan}</span>
                </div>
                <div>
                    <label>Quantity:</label>
                    <span>${itemList.quantity}</span>
                </div>
                <div>
                    <p>${itemList.description}</p>
                </div>
                <div>
                    <img src="${itemList.image}" alt="">
                </div>
            </li>
            
        </ul>
    </div>
        * */
    const itemList = generateProductItem(items);
    return `
    <div class="card">
        <span class="txtTitle">${name}</span>

        <ul class="productsList">
            <!--auto-gen-->
            ${itemList} 
        </ul>
    </div>
        `;
} 

//product item generator
function generateProductItem(itemList){
    let itemListTemplate = "";
    itemList.forEach((item)=>{
        itemListTemplate += `
            <li>
                <div>
                    <label>Plan:</label>
                    <span>${item.plan}</span>
                </div>
                <div>
                    <label>Quantity:</label>
                    <span>${item.quantity}</span>
                </div>
                <div>
                    <p>${item.description}</p>
                </div>
                <div>
                    <img src="${item.image}" alt="">
                </div>
            </li>
        `;
    })
    return itemListTemplate;
}

//this global function adds all the templates at once
function addCard(){
    //adding plans
    plans.forEach((obj)=>{
        const newCard = createPlanCard(obj);
        servicesContainer.innerHTML += newCard;
    });

    //adding products
    products.forEach((obj)=>{
        const newCard = createProductCard(obj);
        productsContainer.innerHTML += newCard;
    });
}

addCard();
