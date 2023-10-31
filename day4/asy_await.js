const DEMO_URL="https://course-api.com/react-store-products"


const fetchAPI=async function(){
    try{
    const res = await fetch(DEMO_URL)
    const data=await res.json()
    console.log(data)
}
catch(error){
    console.log("error occured",error)
}
}





fetchAPI()
console.log("hello")


