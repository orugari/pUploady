# pUploady
jQuery asynchronous upload plugin


1. Requirement

HTML5 is necessary to use this plugin. If you are not sure how to make a website as HTML5, you may need to read this doc (very fast to read).

Browser 	[Chrome 8.0] 	[Internet Explorer 10.0] 	[Firefox 16.0] 	[Safari 6.0] 	[Opera 11.0]

 
2. HTML

Load jQuery then pUploady plugin in <head></head>.

									
<script src="https://code.jquery.com/jquery-2.1.3.min.js" />
<script src="js/puploady.min.js" /></script>
<form method="post" action="" enctype="multipart/form-data">
	<input type="file" name="the_file" required />
	<input type="submit" />
</form>
								

3. Javascript

									
$("form").puploady({
    file        : 'upload.php',     //where you will manage data from the form (default: upload.php)
    callback    : false     //if you want a callback (default: false)
});

								

4. PHP

This part is very up to you. I will not show you how tu manage files, pictures etc. This is inside upload.php

									
<?php
$the_dir = 'uploads/';
$the_file = $the_dir . basename($_FILES['the_file']['name']);

if(move_uploaded_file($_FILES['the_file']['tmp_name'], $the_file)) {    echo "File uploaded";   } 
else {  echo "Upload failed";   }
?>

								
