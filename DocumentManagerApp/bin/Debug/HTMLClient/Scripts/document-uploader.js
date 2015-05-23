function createDocumentUploader(element, contentItem) {
    var $element = $(element);

    if (window.FileReader) {
        createHTML5Uploader();
    }

    function createHTML5Uploader() {
        var $file_browse_button = $('<input name="file" type="file" style="margin-bottom: 10px;" />');
        $element.append($file_browse_button);

        var $fileName = $('<div></div>');
        $element.append($fileName);

        $file_browse_button.bind('change', function handleFileSelect(evt) {
            var files = evt.target.files;
            if (files.length == 1) {
                var file = files[0];
                $fileName.append($('<label> File Name: ' + file.name + '</label>'));
                var reader = new FileReader();
                reader.onload = function (e) {
                    setContentItem(e.target.result, contentItem, $fileName);
                };
                reader.readAsDataURL(files[0]);
            } else {
                setContentItem(null, contentItem, $fileName);
            }
        });
    }

    function setContentItem(fullBinaryString, contentItem, $fileName) {
        if ((fullBinaryString == null) || (fullBinaryString.length == 0)) {
            contentItem.value = null;
        } else {
            contentItem.value = fullBinaryString.substring(fullBinaryString.indexOf(",") + 1);
        }
    }
}