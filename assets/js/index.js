$(document).ready(function(){
    var images = new Array('/assets/img/img-1.jpg','/assets/img/img-2.jpg', '/assets/img/img-3.jpg', '/assets/img/img-4.jpg');

    setInterval(function(){
        var random = images[Math.floor(Math.random()*images.length)];
        $('.image').css('background', 'url(' + random + ')')
    },2500)

    $('.container').mousemove(function(e){
        var x = e.pageX +'px';
        var y = e.pageY + 'px';

        $('.cursor').css({'top:':y , 'left':x})
    })
})