async function getData(url){
    try{
        let response = await fetch(url);  
        let data = await response.json();

        return data;
        // console.log(data);
    }
    catch(err){
        console.log("Error :", err);
    }
}

function showData(data,location){
    data.map(({strCAtegoryThumb, strCategory,strCategoryThumb})  =>{
        let maindiv=document.createElement("div");
        let item_logo=document.createElement("img")
        
        let categ = document.createElement("h2");
        item_logo.setAttribute('src',strCategoryThumb)
        categ.innerText = strCategory;
        maindiv.append(categ,item_logo)
        location.append(maindiv);
    });
}
export  {getData,showData};
