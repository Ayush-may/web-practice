document.getElementById('showMoreBtn').addEventListener('click', ()=>{
    
})

document.getElementById('displaySideBtn').addEventListener('click', ()=>{
    
    let res = document.getElementById("sideBar").classList[1]
    if( res==='moveOut' ){
        document.getElementById("sideBar").classList.remove('moveOut');
    }
    else{
        document.getElementById("sideBar").classList.add('moveOut');
    }
})

function addElementToCatDiv(){
    const item = ['All','History','Musics','Games','React Routers','JavaScript','java','Lo-fi','Computer Science','Java','Neet','DSA', '75 Days Challenge','All','History','Musics','Games','React Routers','JavaScript','java','Lo-fi','Computer Science','Java','Neet','DSA', '75 Days Challenge'];
    let catDiv = document.getElementById('category-inner-div');
    for(let i=0; i< item.length  ;i++){
        const pTag = document.createElement('p');
        pTag.innerText = item[i];
        catDiv.appendChild(pTag);
    }    
}; addElementToCatDiv();