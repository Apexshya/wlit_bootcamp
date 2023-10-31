const DEMO_URL="https://course-api.com/react-store-products"

function fetchData(DEMO_URL, callback){
    fetch(DEMO_URL).then((response)=>{
        
        return response.json()
    }).then((data)=>{
        callback(data)

    })

    .catch((error)=>{
        console.log("Error occured", error)
    })
    
}

function handleData(data){
    console.log(data)

    for (i=0;i<=22;i++){
        console.log(data[i]["name"])
        console.log(data[i]["price"])
        container=document.getElementById("container")
        container.innerHTML=data[i]["name"],data[i]["price"]


    }

}
fetchData(DEMO_URL, handleData)// handledata callback




