var oldlist = [];
var newlist = [];
var templistempty = [];
var templistcheck = [];

function myobj(theURL, theCaption, id, checkboxstatus) {
    this.url = theURL;
    this.Caption = theCaption;
    this.id = id;
    this.checkboxstatus = checkboxstatus;
}
$.ajax('json/tiles.json', {
    type: 'GET',
    dataType: 'json',
    success: function(resp) {
        for (var i = 0, j = 0; i < resp.Tiles.length; i++) {
            var data = resp.Tiles[i];
            if (data.TileProperties.HomeTileStatus == true && data.SubCategory !== undefined && data.TileProperties.Dimensions.Width == 1) {
                var pic = data.TileProperties.HomeURL;
                var cap = data.Caption;
                var listobj = new myobj(pic, cap, j, true);
                $("#picwall").append('<div class ="col-xs-6 col-md-3 col-lg-3 "><div class ="wallpic" style="background-image:url(' + pic + ');background-size:cover;"><span style ="color: gainsboro" >' + cap + '</span><img src ="images/back.png" style="visibility:hidden;width:100%"></div></div>');
                oldlist.push(listobj);
                newlist.push(j);
                j++;
            };
        };
    },
    error: function(req, status, err) {
        console.log('something went wrong', status, err);
    }
});
