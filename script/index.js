$(document).ready(function(){
    // signup page button function
    $(".signup__nxt_btn").click(function(){
        event.preventDefault();
        $(".signup").css("display", "none");
        $("footer").css("display", "none");
        $(".form_container").css("display", "block");
    });

    // form checkbox 
    $(".slct").click(function(){
        $(this).parent("div").toggleClass("selected");
    });

    //  form page button func
    $(".form__nxt_btn").click(function(){
        $(".form_container").css("display", "none");
        $(".doc_upload").css("display", "block");
        $("footer").css("display", "block");
    });
    $(".form__bck_btn").click(function(){
        $(".form_container").css("display", "none");
        $(".signup").css("display", "block");
        $("footer").css("display", "block");
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
  
    // burgler_alarm div checkbox func
    $(".check").click(function(){
        $(this).parent("div").parent("div").toggleClass("selected"); 
    });

    // doc page button func
    $(".doc_nxt_btn").click(function(){
        $(".doc_upload").css("display", "none");
        $(".results").css("display", "block");
        $("footer").css("display", "block");
    });
    $(".doc_back_btn").click(function(){
        $(".doc_upload").css("display", "none");
        $(".form_container").css("display", "block");
        $("footer").css("display", "none");
    });
    
    // results page button func
    $(".results__back_btn").click(function(){
        $(".results").css("display", "none");
        $(".doc_upload").css("display", "block");
        $("footer").css("display", "block");
    });
    $(".results__next_btn").click(function(){
        $(".results").css("display", "none");
        $(".rates").css("display", "block");
        $("footer").css("display", "block");
    });

    // rate page button func
    $(".rate__back_btn").click(function(){
        $(".rates").css("display", "none");
        $(".results").css("display", "block");
        $("footer").css("display", "block");
    });
    $(".rate__next_btn").click(function(){
        $(".rates").css("display", "none");
        $(".review").css("display", "block");
        $("header").css("border-bottom", "1px solid #dfe3e8");
        $("footer").css("display", "block");
    });
   
    // review page button func
    $(".review_next_btn").click(function(){
        $("header").css("border-bottom", "none");
        $(".review").css("display", "none");
        $(".final_step").css("display", "block");
    });
    $(".review_back_btn").click(function(){
        $("header").css("border-bottom", "1px solid #dfe3e8");
        $(".review").css("display", "none");
        $(".rates").css("display", "block");
    });

    // finalstep page cta func
    $(".redirect").click(function(){
        $("header").css("display","block");
        $(".final_step").css("display", "none");
        $(".form_container").css("display", "block");
    });
    $(".home_redirect").click(function(){
        $("header").css("display","block");
        $(".final_step").css("display", "none");
        $(".signup").css("display", "block");
    });

    // header- user_details 
    $(".user_details").click(function(){
        $(this).find(".profile").toggle();
    });
    $(document).on("click", function(event){
        var $drp = $(".user_details");
        if($drp !== event.target && !$drp.has(event.target).length){
            $(".profile").hide();
        }    
    }); 
    $(".signout").click(function(){
        $(".user_details").css("display","none");
        $(".login").css("display", "inline-block");
    });

    // for getting the text value in dropdown
    $(".dropdown_list li").click(function(){
        var dropval = $(this).text();
        $(this).parents('.dropdown').children('p').text(dropval);
        $(this).parent('ul').slideUp();
    });

    // rate-filter_container 
    $(".filter_container span").click(function(){
        $(this).toggleClass("checkbox_select");
    });
    
});