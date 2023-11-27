manifest = {
    "manifest_version": 3,
    "version": "1.0",
    "name": "Leads tracker",
    "action": {
        "default_popup": "index.html",
        "default_icon": "icon.png"
    }
}
let inputFld = document.getElementById('inputFld');
let saveInput = document.getElementById('saveInput-btn')
let saveTab = document.getElementById('saveTab-btn')
let delBtn = document.getElementById('del-btn')
let unList = document.getElementById('unList');
let array = []
arr = JSON.parse(localStorage.getItem('myLeads'));
if(arr){
    array = arr;
    getData();
}
saveInput.addEventListener('click',function(){
    array.push(inputFld.value);
    localStorage.setItem('myLeads',JSON.stringify(array));
    inputFld.value = '';
    getData();
})
function getData() {
    let msg='';
    // console.log(data);
    for(let i=0;i<array.length;i++){
        msg += `<li>    <a href = "${array[i]}">    ${array[i]} </a>    </li>`
    }
    unList.innerHTML = msg;
}

// const tabs = [
//     {url: "https://www.linkedin.com/in/per-harald-borgen/"}
// ]
saveTab.addEventListener('click',function(){
    chrome.tabs.query({action:true,currentWindow},function(tabs){
        let activeTab = tabs[0].url;
        array.push(activeTab);
        localStorage.setItem('myLeads',JSON.stringify(array));
    })
    getData();
})

delBtn.addEventListener('dblclick',function(){
    localStorage.clear();
    array = [];
    unList.innerHTML = '';
})
