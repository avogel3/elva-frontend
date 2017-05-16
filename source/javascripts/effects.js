// This is where it all goes :)
$(document).ready(function(){
   $(".button-collapse").sideNav({
      menuWidth: 300, // Default is 300
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      // draggable: true // Choose whether you can drag to open on touch screens
    });

    $('.parallax').parallax();

    var options = [
      {selector: '#scrollfire-marker', offset: 1, callback: function(el) {
        $('#subhead-text').addClass("animated fadeInUp");
      } },
      {selector: '#scrollfire-marker', offset: 800, callback: function(el) {
        console.log('Event 2');
        $('#bottom-head-text').addClass("animated fadeInRight");
      } },
      {selector: '#scrollfire-marker', offset: 970, callback: function(el) {
        $('#bottom-subhead-text').addClass("animated fadeInUp");
      } },
      // {selector: '#image-test', offset: 1500, callback: function(el) {
      //   console.log('Scrollfire');
      // } }
    ];
    Materialize.scrollFire(options);
});
