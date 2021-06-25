let btn = document.getElementById("contactUsBtn");
let destinationViewElement = document.getElementById("fs-frm")

btn.addEventListener("click", function (event){
    setTimeout(function () {
        destinationViewElement.scrollIntoView();
      }, 1);
});

