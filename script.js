$(document).ready(function() {
  let url = $("#infoVideo").attr('src');

  $("#myModal").on('hide.bs.modal', function() {
    $("#infoVideo").attr('src', '');
  });

  $("#myModal").on('show.bs.modal', function() {
    $("#infoVideo").attr('src', url);
  });
});
