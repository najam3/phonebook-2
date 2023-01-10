$(function() {
    $(".tabs").click(function(e){
     if(e.target.id == "contacts"){
        $("#contact").show();
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
$("#submit-btn").click(function(e){

   e.preventDefault();
//   Dynamically creating an Element on click
  const elem = document.createElement('div');
  elem.setAttribute("class", "contact-new");
  //Adding details of the contact
  const span = document.createElement("span");
 elem.appendChild(span)
  span.setAttribute("class", "contact-in");


  
//    // userObject.forEach(contact => {
//    // $("span#name").html(`${contact.contactName}`);
//    // $("span#number").html(`${contact.contactNum}`)  
//    // $("dl#description").html(`${contact.contactDescription}`) 
//    // });

   const contactName = $("#name").val();
   const contactNum = $("#number").val();
   const contactDescription = $("#description").val();
 
  //Storing Data in localstorage
  localStorage.setItem(  
      {'name': contactName}.name, 
      {'number': contactNum}.number,
      {'description': contactDescription}.description 
       );


   span.innerHTML = "Contact Name: " + contactName + "<br>" +"<br>" + "Contact Number: " + contactNum + "<br>" + "<br>" + "Description: " + contactDescription;

$(".contacts").append(elem);
$(".modal").hide();
  
})
}) 


