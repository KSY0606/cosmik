$(document).ready(function () {
    balloon_Moving();
});  

//풍선 움직임
function balloon_Moving() {
    $("#img_ball").animate({ marginTop: "4px" }, 400, "", function () {
        $(this).animate({ marginTop: "0px" }, 400, "", function () { 
            //자기 호출
            balloon_Moving();
        });
    });
} 
    
    
    