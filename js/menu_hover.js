/* 햄버거에 마우스 호버 시 */
$(document).ready(function(){
    $(".hamburger > img").hover(function(){
        $('#hamburger_menu').css('display', 'block');
    })
})
/* 햄버거에서 마우스 떠날 시 */
$(document).ready(function(){
    $(".hamburger").mouseleave(function(){
        $('#hamburger_menu').css('display', 'none');
    })
})

/* 대카 호버 시*/
$(document).ready(function(){
    $("#hamburger_menu").hover(function(){
        $('#hamburger_menu').css('display', 'block');
    })
})
/* 대카 떠날 시 */
$(document).ready(function(){
    $("#hamburger_menu").mouseleave(function(){
        $('#hamburger_menu').css('display', 'none');
    })
})



/* 대카 */
/* 건강 호버 */
$(document).ready(function(){
    $(".health").hover(function(){
        $('#hamburger_middle_menu_health').css('display', 'block');
        $('.health').css('background-color', '#f5f1f1');
        $('.health').css('color', '#af262d');
    })
})
/* 건강 떠날 시 */
$(document).ready(function(){
    $(".health").mouseleave(function(){
        $('#hamburger_middle_menu_health').css('display', 'none');
        $('.health').css('background-color', 'white');
        $('.health').css('color', 'black');
    })
})

/* 비타민 호버 */
$(document).ready(function(){
    $(".vitamin").hover(function(){
        $('#hamburger_middle_menu_vitamin').css('display', 'block');
        $('.vitamin').css('background-color', '#f5f1f1');
        $('.vitamin').css('color', '#af262d');
    })
})
/* 비타민 떠날 시 */
$(document).ready(function(){
    $(".vitamin").mouseleave(function(){
        $('#hamburger_middle_menu_vitamin').css('display', 'none');
        $('.vitamin').css('background-color', 'white');
        $('.vitamin').css('color', 'black');
    })
})



/* 중카(건강) 호버 */
$(document).ready(function(){
    $("#hamburger_middle_menu_health").hover(function(){
        $('#hamburger_menu').css('display', 'block');
        $('.health').css('background-color', '#f5f1f1');
        $('.health').css('color', '#af262d');
        $('#hamburger_middle_menu_health').css('display', 'block');
    })
})
/* 중카(건강) 떠날 시 */
$(document).ready(function(){
    $("#hamburger_middle_menu_health").mouseleave(function(){
        $('#hamburger_menu').css('display', 'none');
        $('.health').css('background-color', 'white');
        $('.health').css('color', 'black');
        $('#hamburger_middle_menu_health').css('display', 'none');
    })
})

/* 중카(비타민) 호버 */
$(document).ready(function(){
    $("#hamburger_middle_menu_vitamin").hover(function(){
        $('#hamburger_menu').css('display', 'block');
        $('.vitamin').css('background-color', '#f5f1f1');
        $('.vitamin').css('color', '#af262d');
        $('#hamburger_middle_menu_vitamin').css('display', 'block');
    })
})
/* 중카(비타민) 떠날 시 */
$(document).ready(function(){
    $("#hamburger_middle_menu_vitamin").mouseleave(function(){
        $('#hamburger_menu').css('display', 'none');
        $('.vitamin').css('background-color', 'white');
        $('.vitamin').css('color', 'black');
        $('#hamburger_middle_menu_vitamin').css('display', 'none');
    })
})
