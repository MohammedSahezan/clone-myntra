let addItem =[];


let displayHomeprodect = ()=>{
    const prodectitem = document.querySelector('.prodect-items');
  // slove error for bag.js and bag.html
    if(!prodectitem){
        return
    }
let innerHTML='';
// data js itm1 use for each 
item1 .forEach(item  => {

    innerHTML+= `
 
            <div class="prodect-item">
                <img class="prodect-img" src="${item.item_img}" alt="">
                <div class="rating">
                    ${item.reting.stares}⭐|${item.reting.noOfReview}
                </div>



                <div class="company-name">${item.company}</div>
                <div class="prodect-detalis">${item.peodect_de}</div>

                <div class="price">
                    <span class="current-price">RS.${item.price.currentPrice}</span>
                    <span class="original_price">Rs.${item.price.originalPrics}</span>
                    <span class="discount">(${item.price.discount}% off)</span>
                </div>
                <button class="proadd-btn " onclick="addbag(${item.id})" >ADD TO BUG</button>
            </div>     
`
});

prodectitem.innerHTML = innerHTML;

}
// function for store a bag in strind with data.js id key pair
function addbag(itemId){
addItem.push(itemId);
localStorage.setItem('addItem',JSON.stringify());
addBagcounte();

};




// function count number add on bag icon

function addBagcounte(){
    const countNumber =document.querySelector('.bag-number');
    if(addItem.length > 0){
        countNumber.style.visibility =  'visible';
        countNumber.innerText=addItem.length;
    }
    else {
        countNumber.style.visibility = 'hidden';
    }
}



displayHomeprodect();
addBagcounte();

// btn_bag.addEventListener(click,()=>{

// });

// let item = {
//     item_img : 'img/product/1.webp',
//     reting :{
//      stares :4.4,
//      noOfReview:3800,
//     },

//     company : 'Levis',
//     peodect_de : 'men 512 slim fit jenas ',
     
//     price : {
//         currentPrice : 1200,
//         originalPrics:2400,
//         discount : 50,
//     }

// }

