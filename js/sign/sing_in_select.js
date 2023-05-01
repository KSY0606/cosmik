
$(document).ready(function(){
    $("#sign_in_select > p:nth-child(1)").click(function(){
        $('#sign_in_info').css('display', 'block');
        $('#non_info').css('display', 'none');
        $(this).css('backgroundColor', '#555');
        $('#sign_in_select > p:nth-child(2)').css('backgroundColor', 'white');
        $('#sign_in_select > p:nth-child(2)').css('color', 'black');
        $('#sign_in_select > p:nth-child(1)').css('color', 'white');
    })
})

$(document).ready(function(){
    $("#sign_in_select > p:nth-child(2)").click(function(){
        
        $('#sign_in_info').css('display', 'none');
        $('#non_info').css('display', 'block');
        $(this).css('backgroundColor', '#555');
        $('#sign_in_select > p:nth-child(1)').css('backgroundColor', 'white');
        $('#sign_in_select > p:nth-child(1)').css('color', 'black');
        $('#sign_in_select > p:nth-child(2)').css('color', 'white');
    })
})
