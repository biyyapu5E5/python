bill.addEventListener('submit',generate_bill);
function generate_bill() {
    var prev = previous_unit.value;
    var pres = present_unit.value;
    var units = prev-pres;
    var price;
    if(units<100){
        price = units*2; 
    }
    else if( (units>100) && (units<200))
    { 
        price = units_consumed*3.5;
    } 
    else if((units>200)&&(units <400)){
        price = units*5;
    }
    else{
        price = units*10;
    }
    bill.style.display = 'block';
    bill.style.textAlign = 'center';
    bill.innerHTML = 
    ` <h6> 
        Units Consumend: ${units} Units <br>
        Hi you have to pay ${price} Rs/- for this month..!!
    </h6>
    `
    return false;
    // console.log(units+" "+price);
}
