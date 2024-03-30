function toggleSwitch() {
  var salesCountLabel = document.getElementById("salesCountLabel");
  if (document.getElementById("toggle").checked) {
    salesCountLabel.textContent = "Number of Reviews:";
  } else {
    salesCountLabel.textContent = "Number of Sales:";
  }
}

function calculateRevenue() {
  var gamePrice = parseFloat(document.getElementById("gamePrice").value);
  var steamFee = parseFloat(document.getElementById("steamFee").value);
  var usTax = parseFloat(document.getElementById("usTax").value);
  var trTax = parseFloat(document.getElementById("trTax").value);

  if (isNaN(gamePrice) || gamePrice <= 0) {
    alert("Please enter a valid game price.");
    return;
  }

  var salesCount = parseInt(document.getElementById("salesCount").value);
  var ratings = salesCount * 40;

  var toggle = document.getElementById("toggle").checked;

  var revenueBeforeTaxes;
  if (toggle) {
    revenueBeforeTaxes = gamePrice * ratings * (1 - steamFee / 100);
  } else {
    revenueBeforeTaxes = gamePrice * salesCount * (1 - steamFee / 100);
  }

  var revenueAfterUSTax = revenueBeforeTaxes * (1 - usTax / 100);
  var revenueAfterTRTax = revenueAfterUSTax * (1 - trTax / 100);

  document.getElementById("revenue").innerHTML = `
      <p>Estimated Revenue Before Taxes: $${revenueBeforeTaxes.toFixed(2)}</p>
      <p>Estimated Revenue After USA Tax: $${revenueAfterUSTax.toFixed(2)}</p>
      <p>Estimated Revenue After Turkey Tax: $${revenueAfterTRTax.toFixed(
        2
      )}</p>
    `;
}
