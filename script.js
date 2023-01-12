$(function() {
    $(".tabs").click(function(e){
     if(e.target.id == "contacts"){
        $(".contact").show();
        $(".added").hide();
        $(".header h1").text("All Contacts are displayed here")
     } else if(e.target.id == "recently-added"){
        $(".contact").hide();
        $(".added").show();
        $(".header h1").text("Recently added contacts")
     } else {
        $(".contact").show()
     }
    })
})

$(function() {
   $("#open-modal").click(function(){
      $(".modal").show('fast');
   })
})

$(function() {
$('.close-btn').click(function(){
      $(".modal").hide("fast");
   })
})




$(function showImg(){
  $("img").click(function(){
   $('.show-img').show('fast');
  })
});

$(function closeImg() {
   $(".close-img").click(function(){
      $(".show-img").hide("fast");
   })
})


//** When someone adds a number */

$(function addNum() {
$("#form").submit(function(e){
   e.preventDefault();
let name = $("#name").val();
let number = $("#number").val();
let description = $("#description").val();


localStorage.setItem(name, JSON.stringify({number, description}));
$("#form").hide();
window.location.reload();
})
}) 

window.addEventListener("load", () => {


for(let key in localStorage){
   let contacts = JSON.parse(localStorage.getItem(key));
    $(".contact").append(
`<li><b>Name:</b> &nbsp;   ${key}<br> <br> 
<b> Number:</b> &nbsp;  ${contacts.number} <br> <br> <br>
<b> Description:</b> &nbsp; <span> &#128509; ${contacts.description}</span></li> 
`
    )
    const elem = document.querySelector(".contact")
let count = elem.children;

console.log(count.length);
$(".count").html(`${count.length - 1} &#9743;`)
}


})


$(function search(){
   $("#contact-list").on("change", function() {
      var inputValue = $(this).val();
   
      // Do something with the input value
      for (let key in localStorage) {
   let contacts = JSON.parse(localStorage.getItem(key));
          if(key.toLowerCase() === inputValue){
            $(".contact").html(
               `<li><b>Name:</b> &nbsp;   ${key}<br> <br> 
               <b> Number:</b> &nbsp;  ${contacts.number} <br> <br> <br>
               <b> Description:</b> &nbsp; <span> &#128509; ${contacts.description}</span></li> 
               `
                   )
         } else if(inputValue === "") {
            window.location.reload();
         }
      }

    });
    
})



const elem = document.querySelector(".contact");

let childElem = elem.children;
 console.log(childElem.length);

   for(let i = 0; i <= childElem.length; i++) 
   {

       console.log(childElem[i]);

   }