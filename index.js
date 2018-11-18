
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
      let hour = now.getHours().toString();
      let minute = now.getMinutes().toString();
      let second = now.getSeconds().toString();

      //appends 0 in front if hex number is single digit
      if (hour.length < 2) {
        hour = '0' + hour;
      }
      if (minute.length < 2) {
        minute = '0' + minute;
      }
      if (second.length < 2) {
        second = '0' + second;
      }

      // change background color based on hexadecimal values of the current time
      document.body.style.backgroundColor = `#${hour}${minute}${second}`;

      $('#clock').text(`local time: ${time}`);
    }

  function shanghaiClock() {
    let now = new Date().toLocaleString("en-US", {hour: '2-digit', minute:'2-digit', second:'2-digit', timeZone: "Asia/Shanghai"});


        let element = document.getElementById('shanghai-clock');
        let color = now.replace(/\D/g, '');
        if (color.length < 6){
          color = ('0'+ color);
        }
        color = color.match(/.{1,2}/g);

        let hour = parseInt(color[0]);
            hour += 75;
            hour = hour.toString();
        let minute = color[1];
        let second = color[2];


        // //appends 0 in front if hex number is single digit
        if (hour.length < 2) {
          hour = '0' + hour;
        }
        if (minute.length < 2) {
          minute = '0' + minute;
        }
        if (second.length < 2) {
          second = '0' + second;
        }

        element.style.backgroundColor = `#${hour}${minute}${second}`;


    $('#shanghai-clock').text(`shanghai ${now}`);
  }

  function londonClock() {
    let now = new Date().toLocaleString("en-US", {hour: '2-digit', minute:'2-digit', second:'2-digit', timeZone: "Europe/London"});


        let element = document.getElementById('london-clock');
        let color = now.replace(/\D/g, '');
        if (color.length < 6){
          color = ('0'+ color);
        }
        color = color.match(/.{1,2}/g);

        let hour = parseInt(color[0]);
            hour += 50;
            hour = hour.toString();
        let minute = color[1];
        let second = color[2];


        // //appends 0 in front if hex number is single digit
        if (hour.length < 2) {
          hour = '0' + hour;
        }
        if (minute.length < 2) {
          minute = '0' + minute;
        }
        if (second.length < 2) {
          second = '0' + second;
        }

        element.style.backgroundColor = `#${hour}${minute}${second}`;


    $('#london-clock').text(`london ${now}`);
  }

  function hawaiiClock() {
    let now = new Date().toLocaleString("en-US", {hour: '2-digit', minute:'2-digit', second:'2-digit', timeZone: "Pacific/Honolulu"});


        let element = document.getElementById('hawaii-clock');
        let color = now.replace(/\D/g, '');
        if (color.length < 6){
          color = ('0'+ color);
        }
        color = color.match(/.{1,2}/g);

        let hour = parseInt(color[0]);
            hour += 23;
            hour = hour.toString();
        let minute = color[1];
        let second = color[2];


        // //appends 0 in front if hex number is single digit
        if (hour.length < 2) {
          hour = '0' + hour;
        }
        if (minute.length < 2) {
          minute = '0' + minute;
        }
        if (second.length < 2) {
          second = '0' + second;
        }

        element.style.backgroundColor = `#${hour}${minute}${second}`;


    $('#hawaii-clock').text(`honolulu ${now}`);
  }

  function newYorkClock() {
    let now = new Date().toLocaleString("en-US", {hour: '2-digit', minute:'2-digit', second:'2-digit', timeZone: "America/New_York"});

    let element = document.getElementById('newyork-clock');
    let color = now.replace(/\D/g, '');
    if (color.length < 6){
      color = ('0'+ color);
    }
    color = color.match(/.{1,2}/g);

    let hour = parseInt(color[0]);
        hour += 30;
        hour = hour.toString();
    let minute = color[1];
    let second = color[2];


    // //appends 0 in front if hex number is single digit
    if (hour.length < 2) {
      hour = '0' + hour;
    }
    if (minute.length < 2) {
      minute = '0' + minute;
    }
    if (second.length < 2) {
      second = '0' + second;
    }

    element.style.backgroundColor = `#${hour}${minute}${second}`;

    $('#newyork-clock').text(`new york ${now}`);
  }

  function moscowClock() {
    let now = new Date().toLocaleString("en-US", {hour: '2-digit', minute:'2-digit', second:'2-digit', timeZone: "Europe/Moscow"});

    let element = document.getElementById('moscow-clock');
    let color = now.replace(/\D/g, '');
    if (color.length < 6){
      color = ('0'+ color);
    }
    color = color.match(/.{1,2}/g);

    let hour = parseInt(color[0]);
        hour += 60;
        hour = hour.toString();
    let minute = color[1];
    let second = color[2];


    // //appends 0 in front if hex number is single digit
    if (hour.length < 2) {
      hour = '0' + hour;
    }
    if (minute.length < 2) {
      minute = '0' + minute;
    }
    if (second.length < 2) {
      second = '0' + second;
    }

    element.style.backgroundColor = `#${hour}${minute}${second}`;

    $('#moscow-clock').text(`moscow ${now}`);
  }
});
