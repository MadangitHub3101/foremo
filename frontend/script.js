function sendData() {
  fetch('http://myfirstalb-162822641.ap-south-2.elb.amazonaws.com/api/health')
    .then(res => res.json())
    .then(data => {
      document.getElementById("response").innerText = data.message;
    })
    .catch(err => {
      document.getElementById("response").innerText = "Error connecting to backend";
      console.error(err);
    });
}