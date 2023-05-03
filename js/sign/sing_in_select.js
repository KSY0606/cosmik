/*
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
})*/


$(document).ready(function() {
    var signInSelect = $("#sign_in_select > p");
    var signInInfo = $('#sign_in_info');
    var nonInfo = $('#non_info');
    
    signInSelect.click(function() {
        var index = signInSelect.index(this);
        
        if (index === 0) {
            signInInfo.show();
            nonInfo.hide();
            signInSelect.eq(0).css({
            backgroundColor: '#555',
            color: 'white'
            });
            signInSelect.eq(1).css({
            backgroundColor: 'white',
            color: 'black'
            });
        } else {
            signInInfo.hide();
            nonInfo.show();
            signInSelect.eq(1).css({
            backgroundColor: '#555',
            color: 'white'
            });
            signInSelect.eq(0).css({
            backgroundColor: 'white',
            color: 'black'
            });
        }
    });
});