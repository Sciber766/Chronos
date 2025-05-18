let body = document.querySelector("body");
let sales = document.querySelector(".sales");
let stockDetail = document.querySelectorAll('.stockDetail');
let productDetails = document.querySelectorAll('.productDetails');


function addItem(placeholder){
    let stockContainer = document.querySelector('.addStocks');
    let stockItem = document.createElement('div')
    stockItem.classList.add('stockItem');
    stockContainer.appendChild(stockItem);
    let input = document.createElement('input');
    input.setAttribute('type','number');
    input.setAttribute('placeholder', placeholder);
    input.setAttribute('min', '0');
    input.classList.add('input');
    let btnPlus = document.createElement('button');
    btnPlus.id = 'increase';
    btnPlus.innerHTML = '<i class="fa-solid fa-circle-plus"></i>';
    let btnMinus = document.createElement('button');
    btnMinus.id = 'decrease';
    btnMinus.innerHTML = '<i class="fa-solid fa-circle-minus"></i>';
    stockItem.appendChild(btnMinus);
    stockItem.appendChild(input);
    stockItem.appendChild(btnPlus);
    anotherToggle(btnMinus);
    anotherToggle(btnPlus);
}

addProduct('VCH101');

function addProduct(name){
    let parentContainer = document.querySelector('.bProduct');
    let innerContainer = document.createElement('div');
    innerContainer.classList.add('product','productInfo');

    let product = document.createElement('div');
    product.innerHTML = name + '<i class="fa-solid fa-xmark">';
    product.classList.add('pName');
    innerContainer.appendChild(product);

    let quantity = document.createElement('input');
    quantity.id = 'quantity';
    quantity.setAttribute('type','number');
    quantity.setAttribute('min','1');
    quantity.value = '1';
    innerContainer.appendChild(quantity);

    let addBtn = document.createElement('div');
    addBtn.innerHTML = '<i class="fa-solid fa-plus"></i>';
    addBtn.classList.add('addProduct');

    addBtn.addEventListener('click', function(){
        let input = this.previousSibling;
        let itemName = input.previousSibling.innerText;
        if(this.innerHTML=='<i class="fa-solid fa-circle-check"></i>'){
            removeFromCart(itemName, input.value);
            this.innerHTML='<i class="fa-solid fa-plus"></i>';
        }else if(this.innerHTML=='<i class="fa-solid fa-plus"></i>'){
            addToCart(itemName, input.value);
            this.innerHTML='<i class="fa-solid fa-circle-check"></i>';
        }
    })

    innerContainer.appendChild(addBtn);
    parentContainer.appendChild(innerContainer);
}
let buttonCheckout = document.querySelector('.buttonCheckout')
buttonCheckout.addEventListener('click',()=>{
    let select = document.querySelector('#buyer');
    let input = document.querySelector('#name');
    let addBtns = document.querySelectorAll('.addProduct');
    if(select.value != "" && input.value != ""){
        addToCart(select.value, input.value);
        // salesHis.push(cart);
        // select.value = '';
        // input.value = '';
        // for(addBtn of addBtns){
        //     addBtn.click();
        // }
    }
    showFillInfo();
    
})

function addFillInfo(model){
    let fillInfoBox = document.querySelector('.fillInfoSection');
    let product = document.createElement('div');
    product.classList.add('product','productInfo');
    let boxName = document.createElement('div');
    boxName.classList.add('boxName');
    boxName.innerText = model;
    product.appendChild(boxName);
    let boxNumber = document.createElement('input');
    boxNumber.id = 'boxNumber';
    boxNumber.setAttribute('type', 'text');
    boxNumber.setAttribute('placeholder', 'Box number');
    product.appendChild(boxNumber);
    fillInfoBox.appendChild(product);
}

function showFillInfo(){
    let fillInfo = document.querySelector('.theBlurBox');
    let fillInfoBox = document.querySelector('.sellingProductInformationFillup')
    fillInfo.classList.add('showFillInfo');
    fillInfoBox.classList.add('showFillInfo');
}
let closeFillInfo = document.querySelector('#closeFillInfo');
closeFillInfo.addEventListener('click', ()=>{
    let fillInfo = document.querySelector('.theBlurBox');
    let fillInfoBox = document.querySelector('.sellingProductInformationFillup')
    fillInfo.classList.remove('showFillInfo');
    fillInfoBox.classList.remove('showFillInfo');
})

let cart = [];
function addToCart(name, value){
    console.dir(cart);
    console.log(`${name},${value}`);
    if(name == "Customer" || name == "Retailer"){
        cart.unshift({name: name, value: value});
    }else{
        cart.push({name: name, value: value});
    }
}

function removeFromCart(name, value){
    cart.splice(cart.indexOf({name: name, value: value}),1);
    console.dir(cart);
}

function addAnotherItem(placeholder){
    let stockContainer = document.querySelector('.bProduct');
    let stockItem = document.createElement('div')
    stockItem.classList.add('stockItem');
    stockContainer.appendChild(stockItem);
    let input = document.createElement('input');
    input.setAttribute('type','number');
    input.setAttribute('placeholder', placeholder);
    input.setAttribute('min', '0');
    input.classList.add('input');
    let btnPlus = document.createElement('button');
    btnPlus.id = 'increase';
    btnPlus.innerHTML = '<i class="fa-solid fa-circle-plus"></i>';
    let btnMinus = document.createElement('button');
    btnMinus.id = 'decrease';
    btnMinus.innerHTML = '<i class="fa-solid fa-circle-minus"></i>';
    stockItem.appendChild(btnMinus);
    stockItem.appendChild(input);
    stockItem.appendChild(btnPlus);
    anotherToggle(btnMinus);
    anotherToggle(btnPlus);
}
function anotherToggle(incDec){
    if(incDec.id == 'increase'){
        incDec.addEventListener('click', ()=>{
            let input = incDec.previousSibling;
            if(input.value == ''){
                input.value += 1;
            }else{
                input.value = parseInt(input.value) + 1;
            }
            
        })
    }else{
        incDec.addEventListener('click', ()=>{
            let input = incDec.nextSibling;
            if(input.value == '' || input.value == '0'){
                input.value = 0;
            }else{
                input.value = parseInt(input.value) - 1;
            }
        })
    }
}

for(let i=0; i<stockDetail.length; i++){
    addToggle(stockDetail[i], productDetails[i]);
}

let salesHis = [
    [
        {
            name : "Seller",
            value : "12-12-2005"
        },
        {
            name : "Customer",
            value : "buyer2"
        },
        {
            name : "VCH101",
            value : "2"
        },
        {
            name : "Dual",
            value : "1"
        },
        {
            name : "Satelite Disk",
            value : "1"
        },
        {
            name : "Cable",
            value : "50m"
        },
    ],
    [
        {
            name : "Seller",
            value : "12-12-2005"
        },
        {
            name : "Customer",
            value : "buyer1"
        },
        {
            name : "VCH101",
            value : "2"
        },
        {
            name : "Dual",
            value : "1"
        },
        {
            name : "Satelite Disk",
            value : "1"
        },
        {
            name : "Cable",
            value : "50m"
        },
    ]
    
]


for(let i = salesHis.length - 1; i >= 0; i--){
    addHistory(salesHis[i]);
}

function addHistory(salesHis){
    let history = document.createElement('div');
    history.classList.add('bullet', 'history');
    sales.appendChild(history);
    createInfo(history, salesHis[0]);
    
    let historyDetail = document.createElement('div');
    historyDetail.classList.add('historyDetail');
    history.appendChild(historyDetail);
    for(i = 1; i<salesHis.length; i++ ){
        createInfo(historyDetail, salesHis[i]);
    }
    addToggle(history, historyDetail);

}

function createInfo(object, data){
    let historyInfo = document.createElement('div');
    historyInfo.classList.add('historyInfo');

    let name = document.createElement('span');
    name.classList.add('name');
    name.innerText = data.name;
    historyInfo.appendChild(name);

    let value = document.createElement('span');
    value.classList.add('value');
    value.innerText = data.value;
    historyInfo.appendChild(value);

    object.appendChild(historyInfo);
}


function addToggle(toggleBox, child) {
    toggleBox.addEventListener('click', ()=>{
        if (child.style.maxHeight){
            child.style.maxHeight = null;
        }else{
            child.style.maxHeight = child.scrollHeight + "px";
        }
    })
}

document.querySelector('.productForm').addEventListener('submit', (event)=>{event.preventDefault();});


const ctx = document.getElementById('salesChart').getContext('2d');

let Months =['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
let monthlySalesData = [30, 45, 28, 60, 50, 70, 90];

// Define the data
const data = {
    labels: Months, // X-axis labels
    datasets: [{
        label: 'Monthly Sales',  // Legend label
        data: monthlySalesData,  // Y-axis data points
        borderColor: 'rgba(54, 162, 235, 1)',  // Line color
        backgroundColor: 'rgba(54, 162, 235, 0.2)',  // Area fill color
        tension: 0.4,  // Smoothness of the curve
        fill: true,  // Fill below the line
        pointRadius: 5,
        pointBackgroundColor: 'white',
        pointBorderColor: 'rgba(54, 162, 235, 1)',
        pointHoverRadius: 7,
    }]
};

// Create the chart
new Chart(ctx, {
    type: 'line',  // Chart type
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: "rgba(255, 255, 255, 0.1)"
                }
            },
            x: {
                grid: {
                    color: "rgba(255, 255, 255, 0.1)"
                }
            }
        }
    }
});
