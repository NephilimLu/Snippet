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
                $("#picwall").append('<div class ="wallpic" style="background-image:url(' + pic + ')"><span style ="color: gainsboro">' + cap + '</span></div>');
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
