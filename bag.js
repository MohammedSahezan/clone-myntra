
let bagitemob;

function bagItemobject(){

    bagitemob= addItem.map(itemId => {
        for(let i=0;i<item1.length;i++){
            if(itemId == item1[i].id){
                return item[i] ;
            }
        }
    })
}
 

function displayBagshow(){
    let bagElm = document.querySelector('.bag-contaner');
    bagElm.innerHTML = 
    `
    <div class="left-bag-item">

        <div class="left-bag-contex">
            <img src="img/categories/1.jpg" alt="" class="prodect-img">
            <div class="left-rigt-item">
                <div class="company-name-add">H&M</div>
                <div class="bag-item-detelis">men 512 slim fit jenas</div>
                <div class="bag-prics-add">
                    <span class="bag-current-prices">RS.8555</span>
                    <span class="bag-original-prices">RS.8555</span>
                    <span class="bag-discount-prices">(55% off)<span>
                </div>
                <div class="return"><span>14 days</span> Return available</div>
                <div class="delivery-date">Delivery by <span class="d-date">5 oct 2024 </span></div>
            </div>
            <button class="clear"><i class="fa-solid fa-xmark"></i></button>
        </div>

    </div>`
}
displayBagshow();
bagItemobject();
