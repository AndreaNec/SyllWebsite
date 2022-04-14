var content = document.getElementById('content'),
    scrollStep = 200;

document.getElementById('right-button').addEventListener('click', function(e) {
  e.preventDefault();
  let sl = content.scrollLeft,
      cw = content.scrollWidth;
	
  if ((sl + scrollStep) >= cw) {
    content.scrollTo(cw, 0);
  } else {
    content.scrollTo((sl + scrollStep), 0);
  }
});

document.getElementById('left-button').addEventListener('click', function(e) {
  e.preventDefault();
  let sl = content.scrollLeft;
	
  if ((sl - scrollStep) <= 0) {
    content.scrollTo(0, 0);
  } else {
    content.scrollTo((sl - scrollStep), 0);
  }
});