
    var even = document.querySelectorAll(".list-name li:nth-child(even)");
    var odd = document.querySelectorAll(".list-name li:nth-child(odd)");

// console.log(text);

function rehman(){

for (let index = 0; index < even.length; index++) {
    
    even[index].style.color = "red";
    odd[index].style.color = "blue";
    
}
}

// function rehman() {
//     // alert();
   
   
    
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }