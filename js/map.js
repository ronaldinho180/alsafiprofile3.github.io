function initialize(){
    var canvas = document.getElementById('map-canvas');
    var LatLng = new google.maps.LatLng(45.5981458,-76.0432268);
    var options = {
        center: LatLng,
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(canvas, options);


    var pointer = new google.maps.Marker({
        position: LatLng,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Summer Camp Inc.'
    });
}

google.maps.event.addDomListener(window, 'load', initialize);