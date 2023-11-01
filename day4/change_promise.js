function fetchData(url){
    return fetch(url)
    .then(response=> response.json());
}

function processData(data){
    //performing data processing
    return processData;

}
function handleError(error){
    console.error('An error occured:', error);

}
fetchData('https://course-api.com/react-store-products')
.then(processData)
.catch(handleError)