



// Amazon
// function getProduct(n)
// {
// var arr = ["earphone", "headphone", "ipad","phone"];
// if(n<0){
// return null;
// }
// return arr[n];
// }

// var result = getProduct(3);
// if(result == null){
// console.log("Invalid Input");
// }
// console.log(result);

let user={
    name:"sunil",
    age:25,
    gender:"male",
    mobile:9598125005,
    city:"jaipur",
    marks:[25,36,40,78,100],
    personalInfo:{
     fathername:"xyz",
     fmobile:95986936212,
     fdata:"jaipur",
     value:[1,2,3,4]
    } 
}

// for(let i=0;i<user.length;i++){

//     console.log(user[i]);
// }

// let keys = Object.keys(user);
// console.log(keys);

// for (let i = 0; i < keys.length; i++) {
//     let key = keys[i];
//     console.log(key, user[key]);
// } 
for(let value in user){
    console.log(user[value])
}