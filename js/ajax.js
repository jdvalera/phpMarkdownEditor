$('body').on('keyup','#text',function(){
      //var keyed = $(this).val().replace(/\n/g, '<br/>');
      var keyed = $(this).val();
      //var keyed = "<?php echo $parsed; ?>";

      $.ajax({
      	url: 'parse.php',
      	type: 'post',
      	data: {'text': keyed},
      	success: function(data) {
      	$("#textview").html(data);
      	},
      	error: function(xhr, desc, err) {
      		console.log(xhr);
      		console.log(err);
      	}
      });
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