function sendData() {
  fetch('https://firstcoral-app-z626d.ondigitalocean.app/api/health')
    .then(res => res.json())
    .then(data => {
      document.getElementById("response").innerText = data.message;
    })
    .catch(err => {
      document.getElementById("response").innerText = "Error connecting to backend";
      console.error(err);
    });
}
