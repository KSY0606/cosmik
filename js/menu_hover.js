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

/* 다이어트 호버 */
$(document).ready(function(){
    $(".diet").hover(function(){
        $('#hamburger_middle_menu_diet').css('display', 'block');
        $('.diet').css('background-color', '#f5f1f1');
        $('.diet').css('color', '#af262d');
    })
})
/* 다이어트 떠날 시 */
$(document).ready(function(){
    $(".diet").mouseleave(function(){
        $('#hamburger_middle_menu_diet').css('display', 'none');
        $('.diet').css('background-color', 'white');
        $('.diet').css('color', 'black');
    })
})

/* 피부 호버 */
$(document).ready(function(){
    $(".skin").hover(function(){
        $('#hamburger_middle_menu_skin').css('display', 'block');
        $('.skin').css('background-color', '#f5f1f1');
        $('.skin').css('color', '#af262d');
    })
})
/* 피부 떠날 시 */
$(document).ready(function(){
    $(".skin").mouseleave(function(){
        $('#hamburger_middle_menu_skin').css('display', 'none');
        $('.skin').css('background-color', 'white');
        $('.skin').css('color', 'black');
    })
})

/* 케어 호버 */
$(document).ready(function(){
    $(".care").hover(function(){
        $('#hamburger_middle_menu_care').css('display', 'block');
        $('.care').css('background-color', '#f5f1f1');
        $('.care').css('color', '#af262d');
    })
})
/* 케어 떠날 시 */
$(document).ready(function(){
    $(".care").mouseleave(function(){
        $('#hamburger_middle_menu_care').css('display', 'none');
        $('.care').css('background-color', 'white');
        $('.care').css('color', 'black');
    })
})

/* 메이크업 호버 */
$(document).ready(function(){
    $(".makeup").hover(function(){
        $('#hamburger_middle_menu_makeup').css('display', 'block');
        $('.makeup').css('background-color', '#f5f1f1');
        $('.makeup').css('color', '#af262d');
    })
})
/* 메이크업 떠날 시 */
$(document).ready(function(){
    $(".makeup").mouseleave(function(){
        $('#hamburger_middle_menu_makeup').css('display', 'none');
        $('.makeup').css('background-color', 'white');
        $('.makeup').css('color', 'black');
    })
})

/* 남성 호버 */
$(document).ready(function(){
    $(".man").hover(function(){
        $('#hamburger_middle_menu_man').css('display', 'block');
        $('.man').css('background-color', '#f5f1f1');
        $('.man').css('color', '#af262d');
    })
})
/* 남성 떠날 시 */
$(document).ready(function(){
    $(".man").mouseleave(function(){
        $('#hamburger_middle_menu_man').css('display', 'none');
        $('.man').css('background-color', 'white');
        $('.man').css('color', 'black');
    })
})

/* 식품 호버 */
$(document).ready(function(){
    $(".food").hover(function(){
        $('#hamburger_middle_menu_food').css('display', 'block');
        $('.food').css('background-color', '#f5f1f1');
        $('.food').css('color', '#af262d');
    })
})
/* 식품 떠날 시 */
$(document).ready(function(){
    $(".food").mouseleave(function(){
        $('#hamburger_middle_menu_food').css('display', 'none');
        $('.food').css('background-color', 'white');
        $('.food').css('color', 'black');
    })
})

/* 생활 호버 */
$(document).ready(function(){
    $(".life").hover(function(){
        $('#hamburger_middle_menu_life').css('display', 'block');
        $('.life').css('background-color', '#f5f1f1');
        $('.life').css('color', '#af262d');
    })
})
/* 생활 떠날 시 */
$(document).ready(function(){
    $(".life").mouseleave(function(){
        $('#hamburger_middle_menu_life').css('display', 'none');
        $('.life').css('background-color', 'white');
        $('.life').css('color', 'black');
    })
})

/* 유아 호버 */
$(document).ready(function(){
    $(".child").hover(function(){
        $('#hamburger_middle_menu_child').css('display', 'block');
        $('.child').css('background-color', '#f5f1f1');
        $('.child').css('color', '#af262d');
    })
})
/* 유아 떠날 시 */
$(document).ready(function(){
    $(".child").mouseleave(function(){
        $('#hamburger_middle_menu_child').css('display', 'none');
        $('.child').css('background-color', 'white');
        $('.child').css('color', 'black');
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

/* 다이어트 호버 */
$(document).ready(function(){
    $("#hamburger_middle_menu_diet").hover(function(){
        $('#hamburger_menu').css('display', 'block');
        $('.diet').css('background-color', '#f5f1f1');
        $('.diet').css('color', '#af262d');
        $('#hamburger_middle_menu_diet').css('display', 'block');
    })
})
$(document).ready(function(){
    $("#hamburger_middle_menu_diet").mouseleave(function(){
        $('#hamburger_menu').css('display', 'none');
        $('.diet').css('background-color', 'white');
        $('.diet').css('color', 'black');
        $('#hamburger_middle_menu_diet').css('display', 'none');
    })
})

/* 피부 호버 */
$(document).ready(function(){
    $("#hamburger_middle_menu_skin").hover(function(){
        $('#hamburger_menu').css('display', 'block');
        $('.skin').css('background-color', '#f5f1f1');
        $('.skin').css('color', '#af262d');
        $('#hamburger_middle_menu_skin').css('display', 'block');
    })
})
$(document).ready(function(){
    $("#hamburger_middle_menu_skin").mouseleave(function(){
        $('#hamburger_menu').css('display', 'none');
        $('.skin').css('background-color', 'white');
        $('.skin').css('color', 'black');
        $('#hamburger_middle_menu_skin').css('display', 'none');
    })
})

/* 케어 호버 */
$(document).ready(function(){
    $("#hamburger_middle_menu_care").hover(function(){
        $('#hamburger_menu').css('display', 'block');
        $('.care').css('background-color', '#f5f1f1');
        $('.care').css('color', '#af262d');
        $('#hamburger_middle_menu_care').css('display', 'block');
    })
})
$(document).ready(function(){
    $("#hamburger_middle_menu_care").mouseleave(function(){
        $('#hamburger_menu').css('display', 'none');
        $('.care').css('background-color', 'white');
        $('.care').css('color', 'black');
        $('#hamburger_middle_menu_care').css('display', 'none');
    })
})

/* 메이크업 호버 */
$(document).ready(function(){
    $("#hamburger_middle_menu_makeup").hover(function(){
        $('#hamburger_menu').css('display', 'block');
        $('.makeup').css('background-color', '#f5f1f1');
        $('.makeup').css('color', '#af262d');
        $('#hamburger_middle_menu_makeup').css('display', 'block');
    })
})
$(document).ready(function(){
    $("#hamburger_middle_menu_makeup").mouseleave(function(){
        $('#hamburger_menu').css('display', 'none');
        $('.makeup').css('background-color', 'white');
        $('.makeup').css('color', 'black');
        $('#hamburger_middle_menu_makeup').css('display', 'none');
    })
})

/* 남성 호버 */
$(document).ready(function(){
    $("#hamburger_middle_menu_man").hover(function(){
        $('#hamburger_menu').css('display', 'block');
        $('.man').css('background-color', '#f5f1f1');
        $('.man').css('color', '#af262d');
        $('#hamburger_middle_menu_man').css('display', 'block');
    })
})
$(document).ready(function(){
    $("#hamburger_middle_menu_man").mouseleave(function(){
        $('#hamburger_menu').css('display', 'none');
        $('.man').css('background-color', 'white');
        $('.man').css('color', 'black');
        $('#hamburger_middle_menu_man').css('display', 'none');
    })
})

/* 식품 호버 */
$(document).ready(function(){
    $("#hamburger_middle_menu_food").hover(function(){
        $('#hamburger_menu').css('display', 'block');
        $('.food').css('background-color', '#f5f1f1');
        $('.food').css('color', '#af262d');
        $('#hamburger_middle_menu_food').css('display', 'block');
    })
})
$(document).ready(function(){
    $("#hamburger_middle_menu_food").mouseleave(function(){
        $('#hamburger_menu').css('display', 'none');
        $('.food').css('background-color', 'white');
        $('.food').css('color', 'black');
        $('#hamburger_middle_menu_food').css('display', 'none');
    })
})

/* 생활 호버 */
$(document).ready(function(){
    $("#hamburger_middle_menu_life").hover(function(){
        $('#hamburger_menu').css('display', 'block');
        $('.life').css('background-color', '#f5f1f1');
        $('.life').css('color', '#af262d');
        $('#hamburger_middle_menu_life').css('display', 'block');
    })
})
$(document).ready(function(){
    $("#hamburger_middle_menu_life").mouseleave(function(){
        $('#hamburger_menu').css('display', 'none');
        $('.life').css('background-color', 'white');
        $('.life').css('color', 'black');
        $('#hamburger_middle_menu_life').css('display', 'none');
    })
})

/* 유아 호버 */
$(document).ready(function(){
    $("#hamburger_middle_menu_child").hover(function(){
        $('#hamburger_menu').css('display', 'block');
        $('.child').css('background-color', '#f5f1f1');
        $('.child').css('color', '#af262d');
        $('#hamburger_middle_menu_child').css('display', 'block');
    })
})
$(document).ready(function(){
    $("#hamburger_middle_menu_child").mouseleave(function(){
        $('#hamburger_menu').css('display', 'none');
        $('.child').css('background-color', 'white');
        $('.child').css('color', 'black');
        $('#hamburger_middle_menu_child').css('display', 'none');
    })
})

