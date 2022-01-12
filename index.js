

setInterval(function(){
    $(".phone").addClass("flashphone");
    setTimeout(function() {
        $(".phone").removeClass("flashphone");
    }, 1000);
}, 3000);