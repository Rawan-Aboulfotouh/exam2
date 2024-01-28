var resp=[]



$(document).ready(function(){
    $(".loadingDiv").fadeOut(1500)
   

})



var xmlHttp= new XMLHttpRequest ();
xmlHttp.open("GET" , "https://www.themealdb.com/api/json/v1/1/categories.php")
xmlHttp.send();
xmlHttp.addEventListener("readystatechange",function(){
    if (xmlHttp.readyState==4 && xmlHttp.status==200){
         resp=JSON.parse(xmlHttp.response).categories
        
        displayResp()

    }
})

function displayResp(){
    var cartona=``
    for( var i=0 ; i< resp.length;i++){
       cartona+= `<div class="col-md-3">
           <h1>`+resp[i].strCategory +`</h1>
            <p>`+resp[i].strCategoryDescription
            +`</p>
         </div>`
    }
    document.getElementById("hamada").innerHTML=cartona
}


// ====contact=========

var ma5zan=[]
if( localStorage.getItem("contact")!=null){
    ma5zan=JSON.parse(localStorage.getItem("webSite"));
    webSite()
}



function contactUs (){

    var contact ={
    conName : document.getElementById("conName").value,
    conPhone: document.getElementById("conPhone").value,
    conPass: document.getElementById("conPass").value,
    conAge: document.getElementById("conAge").value,
    conEmail: document.getElementById("conEmail").value,
    conRePass: document.getElementById("conRePass").value
    }
    ma5zan.push(contact)
    console.log(ma5zan)
    clearWeb()
    displayWeb()
    localStorage.setItem("webSite" , JSON.stringify(ma5zan))
    console.log(ma5zan)
}

