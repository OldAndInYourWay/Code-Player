$(document).ready(function(){
    function calibrateWidth(){
            //Get Number of showing divs
            var showingDivs = $(".code-container").filter(function(){
               return ($(this).css("display") != "none")
            });

            //Create the width from that
            var width = 100 / showingDivs.length;

            //Resize
            $(".code-container").css("width", width + "%");
        }
    
    
    function resize(){
        //Set Height for Window
        var windowHeight = $(window).height() - 78;
        $("#codebody").height(windowHeight + "px");
        $(".code-container").height(windowHeight + "px");
    }
    
    resize();
    calibrateWidth();
    
    $(window).resize(function(){
       resize(); 
    });
    
    //=========== TOGGLE ==============
    $(".toggle").click(function() {
        $(this).toggleClass("selected");
        
        var divToToggle = $(this).html() + "code";
        $("#" + divToToggle).toggle();
        
        calibrateWidth();
    });
    
    //=========== RUN ===============
    $("#run").click(function(){
        //Replace the HTML with our new HTML/CSS elements
        $("iframe").contents().find("html").html('<style>' + $("#cssbody").val() + '</style>' + $("#htmlbody").val());
       
        //Execute [dangerous] javascript inside the iFrame window
        document.getElementById('resultbody').contentWindow.eval($("#jsbody").val());
    });
    
});



