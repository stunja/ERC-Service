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

var statusButton = document.getElementById("button_order");

var openFormSmall = document.getElementById("open_form");

/* Пусто на случай если надо добавить статус функционал для статус кнопки */
// function buttonSendOnclick() {}

function buttonCheckStatus() {
    
        if (openFormSmall .style.display = "none"){
        openFormSmall .style.display = "block";
        document.getElementById("open_form--button").style.display = "block";
        statusButton.classList.add("button-order__open-style");
        
    }else{
        openFormSmall .style.display = "none";
    }

};


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

// Only Numbers Phone Input Field

$(document).ready(function(){
    
  $(".phone-format").keypress(function (e) {
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
      return false;
    }
    var curchr = this.value.length;
    var curval = $(this).val();
    if (curchr == 3 && curval.indexOf("(") <= -1) {
      $(this).val("(" + curval + ")" + "-");
    } else if (curchr == 4 && curval.indexOf("(") > -1) {
      $(this).val(curval + ")-");
    } else if (curchr == 5 && curval.indexOf(")") > -1) {
      $(this).val(curval + "-");
    } else if (curchr == 9) {
      $(this).val(curval + "-");
      $(this).attr('maxlength', '14');
    }
  });
});


// Текстовое поле только буквы

function letterOnly(input) {

    var regex = /[^А-Я,^а-я]/gi;
    input.value = input.value.replace(regex, "");

};

// Текстовое поле только цифры

function numberOnly(input) {

    var regex = /[^0-9]/g;
    input.value = input.value.replace(regex, "");

};

// Close if clicked away Pop Up form NOT WORKING RIGHT NOW
/*
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
*/
