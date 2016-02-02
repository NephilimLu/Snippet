function showweb() {
    $('#firstweb').css('display', 'none');
    $('#secondweb').css('display', 'block').css('opacity',0).animate({'opacity':1},1000);
    for (var i = 0; i < oldlist.length; i++) {
        var img = "";
        if (oldlist[newlist[i]].checkboxstatus == true) {
            img = "images/check.png";
        } else if (oldlist[newlist[i]].checkboxstatus == false) {
            img = "images/empty.png";
        }
        $('#titlelists').append('<div class ="listtitle" id ="' + newlist[i] + '"><img src="' + img + '" class="check" /><span style ="color: navy;">' + oldlist[newlist[i]].Caption + '</span><img src="images/stack.png" class = "stack"/></div>');
    }
}

function hideweb() {
    $('#secondweb').css('display', 'none');
    $('#firstweb').css('display', 'block').css('opacity',0).animate({'opacity':1},1000);
    $('#picwall').empty();
    for (var i = 0; i < newlist.length; i++) {
        var newpic = oldlist[newlist[i]].url;
        var newcap = oldlist[newlist[i]].Caption;
        var newid = oldlist[newlist[i]].id;
        $("#picwall").append('<div class ="col-xs-6 col-md-3 col-lg-3 " id =' + newid + '><div class ="wallpic"  style="background-image:url(' + newpic + ');background-size:cover;"><span style ="color: gainsboro">' + newcap + '</span><img src ="images/back.png" style="visibility:hidden;width:100%"></div></div>');
    }
    for (var i = 0; i < templistempty.length; i++) {
        $("#" + templistempty[i]).css('display', 'none');
    }
    for (var i = 0; i < templistcheck.length; i++) {
        $("#" + templistcheck[i]).css('display', 'block');
    }

    $('#titlelists').empty();

}
$(document).on("mouseover", ".stack", function() {
    $("#titlelists").sortable({
        disabled: false,
        cursor: "move",
        items: "div",
        opacity: 0.5,
        // revert: true,
        update: function(event, ui) {
            newlist = $(this).sortable("toArray");
            // console.log(newlist);
        },
        stop: function(event, ui) {
            $("#titlelists").sortable({
                disabled: true
            });
        }
    });
});


$(document).on("click", ".check", function() {
    if ($(this).attr("src") == "images/check.png") {
        $(this).attr("src", "images/empty.png");
        var e = $(this).parent().attr("id");
        templistempty.push(e);
        for (var i = 0; i < templistempty.length; i++) {
            $(oldlist[templistempty[i]]).attr('checkboxstatus', false);
        }
    } else {
        $(this).attr("src", "images/check.png");
        var c = $(this).parent().attr("id");
        templistcheck.push(c);
        for (var i = 0; i < templistcheck.length; i++) {
            $(oldlist[templistcheck[i]]).attr('checkboxstatus', true);
        }
    }
});
