var fruits = {};
var total_amount = 0;
var element = 1;
var check = {};
var del_fruits = {}
var total = document.getElementById('total_price');
var amount = document.getElementById('amount');
var currency = document.getElementById('currency');
function addtoCart(clicked_id,value,num) {
    console.log(value);
    var div = document.getElementById(num);
    var img = document.getElementsByClassName(num);
    var container = document.getElementsByClassName('container'+(num.toString()));
    var cart = document.getElementsByClassName('cart_image'+num.toString());
    var bin = document.getElementsByClassName('bin'+(num.toString()));
    if (clicked_id in fruits){
        fruits[clicked_id]+=1;
    }
    else{
        if(clicked_id in del_fruits){
            var return_id = del_fruits[clicked_id]; 
            var div = document.getElementById(return_id);
            var img = document.getElementsByClassName(return_id);
            var container = document.getElementsByClassName('container'+return_id);
            var cart = document.getElementsByClassName('cart_image'+return_id);
            var bin = document.getElementsByClassName('bin'+return_id);
            fruits[clicked_id] = 1;
            delete del_fruits[clicked_id];
        }
        else{
            fruits[clicked_id] = 1;
            check[clicked_id] = element;
        }
    }
    container[0].style.display = 'block';
    container[0].style.height = '50px';
    container[0].style.backgroundColor = 'white';
    container[0].style.width = '100%';
    container[0].style.margin = '0px 5px 5px 0px';
    // container[0].style.boxShadow ='1px 1px 10px 3px rgb(111, 148, 151)';
    img[0].style.display = 'inline-block';
    img[0].style.float = 'left';
    img[0].style.width = '35px';
    img[0].style.height = '35px';
    div.style.display = 'inline-block';
    div.style.fontSize = '18px';
    div.style.float = 'left';
    div.style.width = '30%';
    div.style.padding = '10px 36px';
    cart[0].style.display = 'inline-block';
    cart[0].style.width = '40px';
    cart[0].style.height = '40px';
    cart[0].style.padding = '0px 35px 0px 0px';
    bin[0].style.display = 'inline-block';
    bin[0].style.cursor = 'pointer';
    bin[0].style.float = 'right';
    bin[0].style.width = '20px';
    bin[0].style.height = '20px';
    bin[0].style.padding = '14px 20px 14px 0px';
    console.log("Addded");
    console.log(fruits);
    var txt = clicked_id+"  "+fruits[clicked_id];
    div.innerHTML = txt;
    element+=1;
    total_amount+=parseInt(value);
    console.log(total_amount);
    total.innerHTML = `<div id = 'total_price'>Total Price : <span id = 'amount'>$${total_amount}</span><pre id = 'currency'> USD</pre></div>`;
}
function dustbin(item,para,money) {
    let len = para.length-1;
    var div = document.getElementById(para[len].toString());
    var img = document.getElementsByClassName(para[len].toString());
    var container = document.getElementsByClassName('container'+para[len]);
    var bin = document.getElementsByClassName(para);
    div.style.display = 'none';
    bin[0].style.display = 'none';
    img[0].style.display = 'none';
    container[0].style.display = 'none';
    total_amount-= (parseInt(fruits[item])*money);
    del_fruits[item] = para[len];
    delete fruits[item];
    total.innerHTML = `<div id = 'total_price'>Total Price : <span id = 'amount'>$${total_amount}</span><pre id = 'currency'> USD</pre></div>`;
}