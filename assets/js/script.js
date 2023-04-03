// Get the modal 
var modal = document.getElementById("myModal"); 
 
// Get the buttons that open and close the modal 
var btn1 = document.getElementById("openModalJs");
var btn2 = document.getElementById("openModalJs2");
var closeBtn = document.getElementById("closeModalJs");


 
// Function to open the modal 
function openModal() {
  modal.style.display = "block";
}
 
// Function to close the modal 
function closeModal() {
  modal.style.display = "none";
}
 
// Event listeners for opening the modal
if(btn1) {
  btn1.onclick = function() {
    openModal(); 
  }
}

if(btn2) {
  btn2.onclick = function() {
    openModal(); 
  }
}
 
// Event listener for closing the modal 
closeBtn.onclick = function() { 
  closeModal(); 
}
 
// Event listener for clicking outside the modal to close it 
window.onclick = function(event) { 
  if (event.target == modal) { 
    closeModal(); 
  } 
}








$('.modal-body .btn').click( function(e) {
  e.preventDefault();

  $(this).closest('#mc-embedded-subscribe-form').find('input.required').each(function() {
    if ($(this).val() == "") {
      e.preventDefault();

      console.log('Error 2')
    }
  })

  // || $(this).closest('#mc-embedded-subscribe-form').find('input.required').val().length === 0


  if ($(this).closest('#mc-embedded-subscribe-form').find('input.mce_inline_error').length) {
    console.log("Error 1")
  } else {
    $('#mc-embedded-subscribe-form').submit();
    
    window.setTimeout( function(){
      location.href = 'https://oliinyk.github.io/capital-growth/conversion-magic.html'
    }, 500 );

  }
})




