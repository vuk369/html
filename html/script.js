function myFunction() {
  var x = document.getElementById("main-wrap");
  if (x.style.display === "none") {
    x.style.display = "block";
	document.body.style.height = 'initial';
  } else {
	document.body.style.height = 'initial';
    x.style.display = "none";
  }
}

function myFunction2() {
  var x = document.getElementById("main-wrap");
  if (document.body.style.width === '1000px' && document.body.style.height === 'initial') {
    document.body.style.width = '1400px';
	document.body.style.height = '800px';
	x.style.paddingBottom = "227px"
  } else {
    document.body.style.width = '1000px';
	document.body.style.height = 'initial';
	x.style.paddingBottom = "100px"
  }
}