$(function(){
  $('#stress-form').submit(function(event){
    event.preventDefault();
    $('#warning-response').hide();
    $('#symptoms-response').hide();
    $('#coping-response').hide();

    var warning = $("input:checkbox[name=warning]:checked").length;
    var symptoms = $("input:checkbox[name=symptoms]:checked").length;
    var coping = $("input:checkbox[name=coping]:checked").length;


    if(warning > coping && warning > symptoms){
      $("input:checkbox[name=warning]:checked").each(function(){
        var checkedWarn = $(this).val();
        $('#warning-response').append(checkedWarn + "<br>");
        $('#warning-response').show();
      });
    }else if(symptoms > warning && symptoms > coping){
      $("input:checkbox[name=symptoms]:checked").each(function(){
        var checkedSymp = $(this).val();
        $('#symptoms-response').append(checkedSymp + "<br>");
        $('#symptoms-response').show();
      });
    } else {
      $("input:checkbox[name=coping]:checked").each(function(){
        var checkedCope = $(this).val();
        $('#coping-response').append(checkedCope + "<br>");
        $('#coping-response').show();
  });
};
});
});
