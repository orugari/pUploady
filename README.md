# pUploady
jQuery asynchronous upload plugin

## Requirement
HTML5 is necessary to use this plugin. Check also the minimum version for each browser.

[Chrome 8.0] 	[Internet Explorer 10.0] 	[Firefox 16.0] 	[Safari 6.0] 	[Opera 11.0]

# Installation

Load jQuery then pUploady plugin in &lt;head&gt;&lt;/head&gt;.

&lt;script src="https://code.jquery.com/jquery-2.1.3.min.js" /&gt;<br/>
&lt;script src="js/puploady.min.js" /&gt;&lt;/script&gt;

You will also need a php file.


## Usage

HTML :

&lt;form method="post" action="" enctype="multipart/form-data"&gt;<br />
	&lt;input type="file" name="the_file" required /&gt;<br />
	&lt;input type="submit" /&gt;<br />
&lt;/form&gt;

JS :

$("form").puploady({<br />
	file        : 'upload.php',     //where you will manage data from the form (default: upload.php)<br />
	callback    : false     //if you want a callback (default: false)<br />
})<br />

PHP (in upload.php):

<?php<br />
$the_dir = 'uploads/';<br />
$the_file = $the_dir . basename($_FILES['the_file']['name']);<br />
<br />
if(move_uploaded_file($_FILES['the_file']['tmp_name'], $the_file)) {    echo "File uploaded";   } <br />
else {  echo "Upload failed";   }<br />
?>
