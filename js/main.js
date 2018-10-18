// Logo Button Expand - Hide
var button = document.getElementById("logo_button");
button.addEventListener('click', function() {
  if (button.getAttribute("data-text-swap") == button.innerHTML) {
    button.innerHTML = button.getAttribute("data-text-original");
  } else {
    button.setAttribute("data-text-original", button.innerHTML);
    button.innerHTML = button.getAttribute("data-text-swap");
  }
}, false);

    // Radio Button Check-Uncheck Status


$('input.example').on('change', function() {
    $('input.example').not(this).prop('checked', false);  
});


// Pop Up form Click by Button
function openForm() {
    document.getElementById("banner_pop_up").style.display = "flex";
}

function closeForm() {
    document.getElementById("banner_pop_up").style.display = "none";
    
}

// Close if clicked away Pop Up form

$('#btnFieldWorkers').bind("click", ToggleDisplay);

function ToggleDisplay() {
    if ($("#div_fieldWorkers").data('shown'))
        hide();
    else 
        display();
}
    
function display() {    
    if ($("#div_fieldWorkers").children().length > 0) {
        $("#div_fieldWorkers").fadeIn(500, function() {
            $(document).bind("click", function() {hide(); });            
            $("#div_fieldWorkers").data('shown', true)});         
    }  
}

function hide() {   
    if (window.event.toElement.className != 'noclick') {
        $("#div_fieldWorkers").fadeOut(500, function() {
            $(document).unbind("click");
            $("#div_fieldWorkers").data('shown', false);                
        });
    }
}

    