$(document).ready(function() {
	
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
   
    $(".my_file").on('change', function(){
        readURL(this);
    });
    
    $(".upload-button").on('click', function() {
       $(".my_file").click();
    });
});