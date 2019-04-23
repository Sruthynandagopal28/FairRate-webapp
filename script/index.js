$(document).ready(function(){
    $(".signup__nxt_btn").click(function(){
        event.preventDefault();
        $(".signup").css("display", "none");
        $("footer").css("display", "none");
        $(".form_container").css("display", "block");
    });
    $(".slct").click(function(){
        $(this).parent("div").toggleClass("selected");
    });
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
    $( function() {
        $( "#datepicker" ).datepicker();
    } );
    
    $(".dropdown").click(function(){
        $(this).find(".dropdown_list").slideDown();
    });
    $(document).on("click", function(event){
        var $dropdown = $(".dropdown");
        if($dropdown !== event.target && !$dropdown.has(event.target).length){
            $(".dropdown_list").slideUp();
        }    
    });    
    $(".year dropdown").click(function(){
        $(this).find(".year_list dropdown_list").toggle();
    });
    $(document).on("click", function(event){
        var $dropdown = $(".year dropdown");
        if($dropdown !== event.target && !$dropdown.has(event.target).length){
            $(".year_list dropdown_list").hide();
        }    
    });    
    $(".price dropdown").click(function(){
        $(this).find(".price_list dropdown_list").toggle();
    });
    $(document).on("click", function(event){
        var $dropdown = $(".price dropdown");
        if($dropdown !== event.target && !$dropdown.has(event.target).length){
            $(".price_list dropdown_list").hide();
        }    
    });    
    $(".clk").click(function(){
        $(this).parent("div").parent("div").toggleClass("selected"); 
    });
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
    $(".link").click(function(){
        $("header").css("border-bottom", "none");
        $(".review").css("display", "none");
        $(".final_step").css("display", "block");
    });
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
    $(".dropdown_list li").click(function(){
        event.stopPropagation();
        var dropval = $(this).text();
        $(this).parents('.dropdown').children('p').text(dropval);
        $(this).parent('ul').hide();
    });
    $("input [type= 'range'] ").click(function(){
        $(this).css("background-color","white");
    });
    
    
});