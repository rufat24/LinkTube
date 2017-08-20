$( function() {
    $( "#draggable" ).draggable({
    drag: function(e,ui) {
        var position = $(this).position(),
            x = position.left,
            y = position.top;
			console.log(position);
        $('#top').val(y);
		$('#left').val(x);
    }
})
.resizable({
	resize: function(e,ui) {
            x = ui.size.height,
            y = ui.size.width;
        $('#height').val(x);
		$('#width').val(y);
    }});
  } );

   $(document).ready(function() {
   $( "[id^='annot']" ).live('click',function(){
			console.log("AAAA");
		})
   $('#lom').hide();
   $('#draggable').hide();
	$('#add').click(function () {
		$('#add').hide(500);
		$('#lom').show(500);
		$('#denchkid').show(500);
		$('#nad').hide();
		$('#draggable').show();
		})
	$('#close').click(function () {
		$('#lom').hide(500);
		 $('#draggable').hide();
		 $('#add').show(500);
	})

	$('#add1').click(function () {
	var s=$('#start').val();
	var e=$('#end').val();
	var a = s.split(':');
	var b=  e.split(':');
	var start, end;
	if(a.length==3){
	start= (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
	}
	else{
	start =(+a[0]) * 60  + (+a[1]);
	}
	if(b.length==3){
	end= (+b[0]) * 60 * 60 + (+b[1]) * 60 + (+b[2]);
	}
	else{
	end =(+b[0]) * 60  + (+b[1]);
	}

				$.ajax( {
							url: "/addAnnotation",
							type: "POST",
							dataType: "json",
							data: JSON.stringify({
								video_id: 'sdasdsasdsdsadas',
								start:start,
								end:end,
								height:$('#height').val(),
								width:$('#width').val(),
								top:$('#top').val(),
								left:$('#left').val()
								}),
					        contentType: "application/json",
							complete: function() {
							  $('#denchkid').hide(500);
							  $('#nad').show(500);
							  console.log('gandon');
							},
					        success: function() { console.log('success');},
					        error  : function() { console.log('error');}
					})
	})
	});
	