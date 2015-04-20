# pUploady
A very light jQuery plugin to upload your files asynchronously with a progress bar.

* Site: http://puploady.orugari.fr
* Documentation:http://puploady.orugari.fr/documentation.php
* Minified version for production: http://puploady.orugari.fr/download.php

## Credits

* jQuery (http://jquery.com | (c) 2005, 2014 jQuery Foundation, Inc. and other contributors | MIT license)

## License

pUploady is released under the MIT license.

Copyright (c) orugari

## Requirement
HTML5 is necessary to use this plugin. Check also the minimum version for each browser.

[Chrome 8.0] 	[Internet Explorer 10.0] 	[Firefox 16.0] 	[Safari 6.0] 	[Opera 11.0]

## Installation

Load jQuery then pUploady plugin in &lt;head&gt;&lt;/head&gt;.

&lt;script src="https://code.jquery.com/jquery-2.1.3.min.js" /&gt;<br/>
&lt;script src="js/puploady.min.js" /&gt;&lt;/script&gt;

You will also need a php file.


## Usage

HTML:

	<form method="post" action="" enctype="multipart/form-data">
		<input type="file" name="the_file" required />
		<input type="submit" />
	</form>

JS:

	$("form").puploady({
		file        : 'upload.php',     //where you will manage data from the form (default: upload.php)
		callback    : false     //if you want a callback (default: false)
	})

PHP (in upload.php):

	<?php
	$the_dir = 'uploads/';
	$the_file = $the_dir . basename($_FILES['the_file']['name']);
	
	if(move_uploaded_file($_FILES['the_file']['tmp_name'], $the_file)) {    echo "File uploaded";   }
	else {  echo "Upload failed";   }
	?>
