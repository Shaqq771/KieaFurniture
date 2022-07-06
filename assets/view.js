var idxSlide = 1;
showSlides(idxSlide);

var idxSlideMeja = 1;
showSlidesMeja(idxSlideMeja);

var idxSlideRak = 1;
showSlidesRak(idxSlideRak);

var idxSlideTanaman = 1;
showSlidesTanaman(idxSlideTanaman);

function plusSlides(n) {
  showSlides(idxSlide += n);
}
function plusSlidesMeja(n) {
  showSlidesMeja(idxSlideMeja += n);
}
function plusSlidesRak(n) {
  showSlidesRak(idxSlideRak += n);
}
function plusSlidesTanaman(n) {
  showSlidesTanaman(idxSlideTanaman += n);
}



function showSlides(n) {
    var i, slide = document.getElementsByClassName("kursi");


    if (n < 1) {
        idxSlide = slide.length
    }
    if (n > slide.length) {
        idxSlide = 1
    }

    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    slide[idxSlide-1].style.display = "block";
}

function showSlidesMeja(n) {
    var i, slide = document.getElementsByClassName("meja");


    if (n < 1) {
        idxSlideMeja = slide.length
    }
    if (n > slide.length) {
        idxSlideMeja = 1
    }

    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    slide[idxSlideMeja-1].style.display = "block";
}

function showSlidesRak(n) {
    var i, slide = document.getElementsByClassName("rak");


    if (n < 1) {
        idxSlideRak = slide.length
    }
    if (n > slide.length) {
        idxSlideRak = 1
    }

    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    slide[idxSlideRak-1].style.display = "block";
}

function showSlidesTanaman(n) {
    var i, slide = document.getElementsByClassName("tanaman");


    if (n < 1) {
        idxSlideTanaman = slide.length
    }
    if (n > slide.length) {
        idxSlideTanaman = 1
    }

    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    slide[idxSlideTanaman-1].style.display = "block";
}