;(function () {

    function updateTimestamp() {
        var timestamp = (new Date()).toLocaleString();
        $('#timestamp').text(timestamp);
    }

    updateTimestamp();

})();
