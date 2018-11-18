
$(document).ready(function() {

    setInterval(myClock, 1000);
    setInterval(newYorkClock, 1000);
    setInterval(hawaiiClock, 1000);
    setInterval(londonClock, 1000);
    setInterval(moscowClock, 1000);
    setInterval(shanghaiClock, 1000);

    function myClock() {
      let now = new Date();
      // let month = now.getMonth();
      let time = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second: '2-digit'});
      let hour = now.getHours();
      let minute = now.getMinutes();
      let second = now.getSeconds();

      //brightens background color for daytime
      if (hour > 7 && hour < 18) {
            hour += 75;
            minute += 75;
            second += 75;
          }

      // convert to hex
      hour = hour.toString(16);
      minute = minute.toString(16);
      second = second.toString(16);

      //appends 0 in front if hex number is single digit
      if (hour.length === 1) {
        hour = '0' + hour;
      }
      if (minute.length === 1) {
        minute = '0' + minute;
      }
      if (second.length === 1) {
        second = '0' + second;
      }

      // change background color based on hexadecimal values of the current time
      document.body.style.backgroundColor = `#${hour}${minute}${second}`;

      $('#clock').text(`local time: ${time}`);
    }

  function shanghaiClock() {
    let now = new Date().toLocaleString("en-US", {hour: '2-digit', minute:'2-digit', second:'2-digit', timeZone: "Asia/Shanghai"});

    $('#shanghai-clock').text(`shanghai ${now}`);
  }

  function londonClock() {
    let now = new Date().toLocaleString("en-US", {hour: '2-digit', minute:'2-digit', second:'2-digit', timeZone: "Europe/London"});

    $('#london-clock').text(`london ${now}`);
  }

  function hawaiiClock() {
    let now = new Date().toLocaleString("en-US", {hour: '2-digit', minute:'2-digit', second:'2-digit', timeZone: "Pacific/Honolulu"});

    $('#hawaii-clock').text(`honolulu ${now}`);
  }

  function newYorkClock() {
    let now = new Date().toLocaleString("en-US", {hour: '2-digit', minute:'2-digit', second:'2-digit', timeZone: "America/New_York"});

    $('#newyork-clock').text(`new york ${now}`);
  }

  function moscowClock() {
    let now = new Date().toLocaleString("en-US", {hour: '2-digit', minute:'2-digit', second:'2-digit', timeZone: "Europe/Moscow"});

    $('#moscow-clock').text(`moscow ${now}`);
  }
});
