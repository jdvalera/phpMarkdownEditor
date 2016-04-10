
var convertText = function(text) {
      $.ajax({
      	url: 'parse.php',
      	type: 'post',
      	data: {'function': "parse",'text': text},
      	success: function(data) {
      	$("#textview").html(data);
      	},
      	error: function(xhr, desc, err) {
      		console.log(xhr);
      		console.log(err);
      	}
      });
}

$('body').on('keyup focus keydown','#text',function(){
      //var keyed = $(this).val().replace(/\n/g, '<br/>');
      var keyed = $(this).val();
      //var keyed = "<?php echo $parsed; ?>";

      convertText(keyed);
 });
 

$('body').on('click','#pdfButton',function(){
      var keyed = $('#textview').html();
      if(keyed) {
            $('#hiddentext').html(keyed);
            $('#hiddenform').submit();
      }
      // $.ajax({
      //       url: 'pdftest.php',
      //       type: 'post',
      //       data: {'text': "hey"},
      //       success: function() {
      //       console.log(keyed);
      //       $("#pdf").html("success");
      //       },
      //       error: function(xhr, desc, err) {
      //             console.log(xhr);
      //             console.log(err);
      //       }
      //});
});

$.get('startText.txt', function(text){
      $('#text').html(text);

      convertText(text);
      
})
