let myMap;
var placemark = [
  {
      latitude: 59.927191, 
      longitude: 30.375411,
      hintContent: 'Burger #1',
      balloonContent: 'Невский проспект, 158'
  },
  {
      latitude: 59.938958, 
      longitude: 30.263624,
      hintContent: 'Burger #2',
      balloonContent: 'Средний проспект Васильевского острова, 75'
  }, 
  {
    latitude: 59.964919,  
    longitude: 30.343746,
    hintContent: 'Burger #3',
    balloonContent: 'Большой Сампсониевский проспект, 23'
} 
];

        
function init(){
    var myMap = new ymaps.Map("map", {
        center: [59.942068, 30.318962],
        zoom: 12,

        controls: []
    });
    placemark.forEach(function(obj){
      var myPlacemark = new ymaps.Placemark ([obj.latitude, obj.longitude] , {
          hintContent: obj.hintContent,
          balloonContent: obj.balloonContent
      },
      {
          iconLayout:'default#image',
          iconImageHref:'./img/map-marker.svg',
          iconImageSize:[46,57]

      });
      myMap.geoObjects.add(myPlacemark);
  });

  var zoomControl = new ymaps.control.ZoomControl({
    options: {
        size: "large"
    }
  });
  myMap.controls.add(zoomControl);
  myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);