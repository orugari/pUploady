# pUploady

**pUploady** is a lightweight jQuery plugin that allows asynchronous file uploads with a built-in progress bar and optional cancellation.

- **Website**: [http://puploady.orugari.fr](http://puploady.orugari.fr)
- **Documentation**: [http://puploady.orugari.fr/documentation.php](http://puploady.orugari.fr/documentation.php)
- **Minified version (for production)**: [http://puploady.orugari.fr/download.php](http://puploady.orugari.fr/download.php)

---

## Requirements

This plugin requires **HTML5 support**, especially the `FormData` API.

**Minimum browser versions:**
- Chrome 8+
- Firefox 16+
- Safari 6+
- Internet Explorer 10+
- Opera 11+

---

## Installation

Include jQuery and the `pUploady` plugin in your `<head>` (or before closing `<body>`):

```html
<script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
<script src="js/puploady.min.js"></script>
```

You will also need a PHP file to handle the file upload server-side (see example below).

---

## Usage

### HTML

```html
<form method="post" action="" enctype="multipart/form-data">
    <input type="file" name="the_file" required />
    <input type="submit" />
</form>
```

### JavaScript

```js
$("form").puploady({
    file     : 'upload.php',  // PHP endpoint that processes the file (default: 'upload.php')
    callback : true           // Display an alert with the server response (default: true)
});
```

### PHP (`upload.php`)

```php
<?php
$uploadDir = 'uploads/';
$uploadFile = $uploadDir . basename($_FILES['the_file']['name']);

if (move_uploaded_file($_FILES['the_file']['tmp_name'], $uploadFile)) {
    echo "File uploaded";
} else {
    echo "Upload failed";
}
?>
```

---

## Features

- Simple integration
- Native HTML5 progress bar
- File upload cancellation
- Minimal styling (customizable)
- jQuery-based for compatibility

---

## License

pUploady is released under the [MIT License](https://opensource.org/licenses/MIT).  
© orugari

---

## Credits

- [jQuery](https://jquery.com) — (c) jQuery Foundation, Inc. — MIT License
