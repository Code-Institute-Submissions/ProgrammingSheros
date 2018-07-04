function stopVideo(id){
  var src = $j('iframe.'+#video).attr('src');
  $j('iframe.'+#video).attr('src','');
  $j('iframe.'+id).attr('src',src);

}