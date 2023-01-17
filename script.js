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
$(".count").html(count)
})
}) 

window.addEventListener("load", () => {

for(let key in localStorage){
   let contacts = JSON.parse(localStorage.getItem(key));
   let time = new Date().getMilliseconds();
       console.log(time);
    $(".contact").append(
`<li id="contact-shown"><b>Name:</b> &nbsp;   ${key}  <br> <br> 
<b> Number:</b> &nbsp;  ${contacts.number} </span><button id="del-btn">&times;</button> <br> <br> 
<b> Description:</b> &nbsp; <span> &#128509; ${contacts.description}</li>

`
    );
      $("#added").append(
         `<li id="contact-shown"><b>Name:</b> &nbsp;   ${key}  <br> <br> 
         <b> Number:</b> &nbsp;  ${contacts.number} </span><button id="del-btn">&times;</button> <br> <br> 
         <b> Description:</b> &nbsp; <span> &#128509; ${contacts.description}</li>
         
         `
             )
    }

  setInterval(() => {
     $("#added:#contact-shown").hide();
  }, 5000)    

$(".count").html(`${count.length - 1} &#9743;`)
})



$(function search(){
   $("#contact-list").on("input", function() {
        var inputValue = $(this).val();
      
     for(let key in localStorage) {
      
 let contacts = JSON.parse(localStorage.getItem(key));    
    if(key.toLowerCase().match(inputValue)){
  
      $(".contact").html(
        `<li id="contact-shown"><b>Name:</b> &nbsp;   ${key}<br> <br> 
        <b> Number:</b> &nbsp;  ${contacts.number} </span><button id="del-btn">&times;</button> <br> <br> 
        <b> Description:</b> &nbsp; <span> &#128509; ${contacts.description}</li>
        
        `)
        $("#added").html(
         `<li id="contact-shown"><b>Name:</b> &nbsp;   ${key}<br> <br> 
         <b> Number:</b> &nbsp;  ${contacts.number} </span><button id="del-btn">&times;</button> <br> <br> 
         <b> Description:</b> &nbsp; <span> &#128509; ${contacts.description}</li>
         
         `)
    } 
   }
       
  
             
    });
    
})


   $(function del(){
      $("#trash").click(function(){
      
        $("#del-btn").toggle('fast').click(function(){
          for(let key in localStorage) {
            if($(this).parent().html().includes(key)){
               localStorage.removeItem(key);
               $(this).parent().hide('fast');
             window.location.reload()
            }
         }    
        });
      })
   })



   