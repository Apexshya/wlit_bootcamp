const DEMO_URL="https://course-api.com/react-store-products"

const request=fetch(DEMO_URL).then((response)=>{
    console.log(response)
    return response.json()
}).then((data)=>{
    console.log(data)

})

.catch((error)=>{
    console.log("Error occured", error)
})




