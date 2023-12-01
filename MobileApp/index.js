import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL : "https://playground-f0483-default-rtdb.firebaseio.com/"
}
// firebase.database.enableLogging(true);
const app = initializeApp(appSettings);
const database = getDatabase(app);
const shareListInDB = ref(database,'shareListItems')

const txt = document.getElementById('txtField');
const btn = document.getElementById('btn');
const items = document.getElementById('items');

btn.addEventListener('click',function(){
    let inputValue = txt.value

    push(shareListInDB,inputValue)

    txt.value = ''
    // appendItemToShareList(inputValue)
})

onValue(shareListInDB,function(snapshot){

    if(snapshot.exists()){
        let shareArray = Object.entries(snapshot.val())
        clearShareList()
        
        for(let i=0;i<shareArray.length;i++){
            
            let currentShare = shareArray[i]
            
            appendItemToShareList(currentShare)
        }
    }
    else{
        items.innerHTML = "your thoughts are added here...."
    }

})

function clearShareList(){
    items.innerHTML = ''
}

function appendItemToShareList(item) {

    let itemID = item[0]
    let itemValue = item[1]

    let newEl = document.createElement('li');
    newEl.textContent = itemValue;

    newEl.addEventListener('click',function(){

        let currentLocation = ref(database,`shareListItems/${itemID}`)
        remove(currentLocation)
    })
    items.appendChild(newEl);
    
}