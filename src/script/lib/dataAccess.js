//REVEALING MODULE 
// Module with self evocing function, deze is volledig afgezonderd
const dataFetch = (function(){
    const getData = function(url, succesHandler, errorHandler){
        return localStorage.getItem("todo");
        // zelfde als .then(data => data)
    };

    // Make something public accessible
    return{
        getData : getData
    }
})(); // als we gebruik maken van bovenstaande parameter moeten we die hier nog meegeven.
