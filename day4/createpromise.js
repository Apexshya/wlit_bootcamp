const promise=new Promise((resolve, reject)=>{
    setTimeout(function(){
       resolve("success")
       reject("rejected")
    },200)
})

promise.then((response)=>{
    console.log(response)
}).catch((error)=>{
    console.log(error)
})
console.log("Hello")