function sendData() {
  fetch('/api')
    .then(res => res.json())
    .then(data => {
      document.getElementById("response").innerText = data.message;
    })
    .catch(err => {
      document.getElementById("response").innerText = "Error connecting to backend";
      console.error(err);
    });
}