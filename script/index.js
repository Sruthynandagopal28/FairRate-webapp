$(document).ready(function(){
    // page function
    $(".btn.nxt").click(function(button){
       $(this).parents("section").hide();
       event.preventDefault();
       $(this).parents("section").next().show();
       var ratebutton = $(".rates .nxt");
       if( ratebutton == button.target){
           $("header").css("box-shadow", "0 0  2px grey");
       }
       else{
           $("header").css("box-shadow", "none");
       }
    });
    $(".btn.bck").click(function(){
       $(this).parents("section").hide();
       $(this).parents("section").prev().show();
    });
    
    // form checkbox 
    $(".slct").click(function(){
        $(this).parent("div").toggleClass("selected");
    });

    // calender plugin func
    $( function() {
        $( "#datepicker" ).datepicker();
    } );
     
    // dropdown func
    $(".dropdown p").click(function(){
        event.stopPropagation();
        $(this).next().slideToggle();
    });
    $(document).on("click", function(event){
        var $dropdown = $(".dropdown p");
        if($dropdown !== event.target && !$dropdown.has(event.target).length){
            $(".dropdown_list").slideUp();
        }    
    });   
     // for getting the text value in dropdown
     $(".dropdown_list li").click(function(){
        var dropval = $(this).text();
        $(this).parents('.dropdown').children('p').text(dropval);
        $(this).parent('ul').slideUp();
    });
 
  
    // burgler_alarm div checkbox func
    $(".check").click(function(){
        $(this).parent("div").parent("div").toggleClass("selected"); 
    });

    // finalstep page cta func
    $(".redirect").click(function(){
        $(".final_step").css("display", "none");
        $(".form_container").css("display", "block");
    });
    $(".home_redirect").click(function(){
        $(".final_step").css("display", "none");
        $(".signup").css("display", "block");
    });

    // header -login
    $(".signout").click(function(){
        $(".user_details").css("display","none");
        $(".login").css("display", "inline-block");
    });
     
   
    // rate-filter_container 
    $(".filter_container span").click(function(){
        $(this).toggleClass("checkbox_select");
    });
    
});