var shortbutn = document.getElementById('short-btn');
var reloadbutn = document.getElementById('reload-btn');

shortbutn.addEventListener('click', function shortenUrl() {
    var originalUrl = document.getElementById("originalUrl").value;
    var apiUrl = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalUrl);
    shortenedUrlTextarea = document.getElementById("shortenedUrl");

    fetch(apiUrl).then(response => response.text()).then(data => {
        shortenedUrlTextarea.value = data;
    }).catch(error => {
        shortenedUrlTextarea.value = "Error : Unable to shorten URL :/";
    });

});

reloadbutn.addEventListener('click', () => {
    location.reload();
});