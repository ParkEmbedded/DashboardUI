/******
 *  2023 PARK TECHNOLOGIES
 */
// Insert time and local time settings from linux.

function genTimeZoneJS() {
    // load this inside the status bar
    $(document).ready(function() {
        clockUpdate();
        setInterval(clockUpdate, 1000);
        })

        function clockUpdate() {
        var date = new Date();
        var mid;
        $('#clock').css({'color': '#fff'});
        function addZero(x) {
            if (x < 10) {
            return x = '0' + x;
            } else {
            return x;
            }
        }

        function twelveHour(x) {
            if (x > 12) {
            mid=' pm';
            return x = x - 12;
            } else if (x == 0) {   
            return x = 12
            } else {
            mid=' am'; 
            return x;
            }
        }

        var h = addZero(twelveHour(date.getHours()));
        var m = addZero(date.getMinutes());
        var s = addZero(date.getSeconds());

        $("#clock").text(h + ':' + m + mid)
        }
}