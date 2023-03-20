window.onload = function () {
  const div = document.getElementById("my-div");
  div.onclick = function () {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    div.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
  };
};
