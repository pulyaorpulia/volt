function copyAddress() {
    var copyText = document.getElementById("crypto-address");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Address copied: " + copyText.value);
}
