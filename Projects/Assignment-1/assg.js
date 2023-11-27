function drop_enter() {
    var drop = document.getElementById('dropdown-list');
    drop.style.display = 'block';
}
function drop_leave() {
    var drop = document.getElementById('dropdown-list');
    drop.style.display = 'none';
}
var txt = document.getElementsByClassName('txt');
var txt1 = document.getElementById('txt1');
var txt2 = document.getElementById('txt2');
function generate() {
    let gen = document.getElementsByClassName('data');
    txt[0].style.display = 'block';
    txt[1].style.display = 'block';
    txt1.innerHTML = gen[0].value;
    txt2.innerHTML = gen[1].value;
    return false;
}
function reset_fun() {
    txt[1].style.display = 'none';
    txt[0].style.display = 'none';
}
function arrow(arrow_) {
    var collection = document.getElementById('gallery_imgs').children;
    var len = collection.length-3;
    for(var i=0;i<=len;i++){
        if(collection[i].style.display=='block'){
            collection[i].style.display = 'none';
            if(arrow_=='left'){
                if(i==0){
                    i = len;
                }
                else{
                    i--;               
                }
                collection[i].style.display = 'block';
            }
            else{
                if(i==len){
                    i = 0;
                }
                else{
                    i++;
                }
                collection[i].style.display = 'block';
            }
        }
    }
}