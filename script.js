
// Griglia 6x6, ad ogni click parte una
// richiesta AJAX che prende un
// numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro
// del quadrato
// (vedi una slide di oggi)


$(document).ready(function(){
  $(".blocco").click(function(){
    var target = $(this)
    $.ajax({
      url: "https://flynn.boolean.careers/exercises/api/random/int",
      method: "GET",
      success: function(data, state){

        var success = data["success"]
        var value = data["response"]

        if (target.hasClass("color") || target.hasClass("color2")) {
          
        }
        else {
          if (value <= 5) {

            $(target).addClass("color")
            $(target).text(value)

          }
          else {
            $(target).addClass("color2")
            $(target).text(value)
          }
        }

      }



    }
  )


  })
})
