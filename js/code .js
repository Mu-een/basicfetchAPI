// fetch('../data/data.json')
// .then((response)=> {
//    return response.json();
// })
// // display what you want to return
// .then((data)=> {
//     // console.table(data.results);
// 2nd approach
//     let results = data.results;
//     let record = results.filter((item)=>{
//         return item.id == 1;
//     })
//     console.table(record);
// });

// Array methods
// let data = [9, 12, "Mu-een", 26, 8,  1];
// add an element
// data.push(20);
// remove 1st element
// data.shift();
// remove last element
// data.pop();
// show element removed
// console.log((data.pop()))
// add 1st element
// data.unshift('Felix');
// show only number elements
// console.log(data.filter(item => typeof item == "number"))

// console.log(data);

// 2nd approach to show only number elements
// let onlyNumbers = data.filter(Number);
// console.log(onlyNumbers);
// // sort elements 
// let sortedValues = onlyNumbers.sort((a, b)=>{
//     if(a < b)
//         return -1;
//     return 1;
// });
// console.log(sortedValues);

// display a section of an array
// console.log(data.slice(3, 5));

// display different sections of the array in one display
// spread method allow us to access the elements instead of just the array (...)
// let first = data.slice(0, 2);
// let second = data.slice(3);
// let finalResult = [...first, ... second];
// console.log(finalResult);

// splice: add/swap an element at any position in array
// splice(start, removeCount, item1, item2, ...)
// data.splice(0, 0, "Jacobus");
// data.splice(2, 1 ,"Beth");
// console.log(data);


// fetch("../data/data.json")
// .then((res)=>{
//     return res.json();
// })
// .then (data=>{
//     console.log(data.results);
// })
// .catch(err=>{
//     console.log("Please try again later")
// })

// 2nd approach to fetch data
// To make code short when fetching data make use of async
// (async function fetchData() {
//     let res = await fetch("../data/data.json");
//     let data = await res.json();
//     console.log(data.results);
// })();

// row
let wrapper = document.querySelector('.wrapper');
// 2nd approach to async
async function fetchData() {
    let res = await fetch("https://randomuser.me/api?results=100");
    let data = await res.json();
    return data.results;
};

(async function display(){
    let data = await fetchData();
    data.forEach((item)=>{
        // console.log(item);
        wrapper.innerHTML +=`
        <div class="card" style="width: 18rem;">
        <img src="${item.picture.large}" class="card-img-top" alt="${item.name}">
        <div class="card-body">
          <h5 class="card-title">${item.name.first} ${item.name.last}</h5>
        </div>
      </div>`
    })
})();



