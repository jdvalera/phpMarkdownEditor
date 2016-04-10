
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
 

$('body').on('click','#pdfButton',function(event){
      var keyed = $('#textview').html();
      if(keyed) {
            $('#hiddentext').html(keyed);
            $('#hiddenform').submit();
      }
      // event.preventDefault();
      
      // $.ajax({
      //       url: 'index.php',
      //       type: 'post',
      //       data: {'function': "pdf", 'text': "heyfsd"},
      //       success: function() {
      //             console.log("sent");
      //             $("#textview").html("success");
      //             // var keyed = $('#textview').html();
      //             // if(keyed) {
      //             //       $('#hiddentext').html(keyed);
      //             //       $('#hiddenform').submit();
      //             // }
      //       },
      //       error: function(xhr, desc, err) {
      //             console.log(xhr);
      //             console.log(err);
      //       }
      // });
});

$.get('startText.txt', function(text){
      $('#text').html(text);
      var text = $("#text").html();
      convertText(text);
      
})
