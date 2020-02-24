function changePrices() {
  var checkedStatus = document.getElementById("myCheck").checked;
  var basicPrice = document.getElementById("basic-price");
  var proPrice = document.getElementById("pro-price");
  var masterPrice = document.getElementById("master-price");

  if (checkedStatus == true) {
    basicPrice.innerHTML = "$19.99 ";
    proPrice.innerHTML = "$24.99 ";
    masterPrice.innerHTML = "$39.99 ";
  } else {
    basicPrice.innerHTML = "$199.99";
    proPrice.innerHTML = "$249.99";
    masterPrice.innerHTML = "$399.99";
  }
}
