//For the given JSON iterate over all for loops

// Given object
var cardata ={

        Car:"Maruti",
        Model:"Celerio",
        kmpl:25,
        Fuel:"petrol"
    }
var json = JSON.stringify(cardata);//object -> JSON
    console.log(json);
    
//JSON iteration over For in
for(var i in json){
    var res1 = json[i]; 
   console.log(res1);

}

//JSON iteration over For of
for(var key of json){
    console.log(key);
}

//JSON iteration over For loop
for(var i=0; i<json.length; i++){
    var res = json[i];
    console.log(res);

}