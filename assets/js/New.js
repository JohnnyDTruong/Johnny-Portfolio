
function myFunction3() {
	var dots3 = document.getElementById("dots3");
	var moreText3 = document.getElementById("more3");
	var btnText3 = document.getElementById("myBtn3");

	if (dots3.style.display === "none") {
		dots3.style.display = "inline";
		btnText3.innerHTML = "Read more";
		moreText3.style.display = "none";
	} else {
		dots3.style.display = "none";
		btnText3.innerHTML = "Read less";
		moreText3.style.display = "inline";
	}
};
function readMore() {
	var dots4 = document.getElementById("dots4");
	var moreText4 = document.getElementById("more4");
	var btnText4 = document.getElementById("myBtn4");

	if (dots4.style.display === "none") {
		dots4.style.display = "inline";
		btnText4.innerHTML = "Read more";
		moreText4.style.display = "none";
	} else {
		dots4.style.display = "none";
		btnText4.innerHTML = "Read less";
		moreText4.style.display = "inline";
	}
};
function readMore2() {
	var dots5 = document.getElementById("dots5");
	var moreText5 = document.getElementById("more5");
	var btnText5 = document.getElementById("myBtn5");

	if (dots5.style.display === "none") {
		dots5.style.display = "inline";
		btnText5.innerHTML = "Read more";
		moreText5.style.display = "none";
	} else {
		dots5.style.display = "none";
		btnText5.innerHTML = "Read less";
		moreText5.style.display = "inline";
	}
};
function readMore3() {
	var dots6 = document.getElementById("dots6");
	var moreText6 = document.getElementById("more6");
	var btnText6 = document.getElementById("myBtn6");

	if (dots6.style.display === "none") {
		dots6.style.display = "inline";
		btnText6.innerHTML = "Read more";
		moreText6.style.display = "none";
	} else {
		dots6.style.display = "none";
		btnText6.innerHTML = "Read less";
		moreText6.style.display = "inline";
	}
};
function readMore4() {
	var dots7 = document.getElementById("dots7");
	var moreText7 = document.getElementById("more7");
	var btnText7 = document.getElementById("myBtn7");

	if (dots7.style.display === "none") {
		dots7.style.display = "inline";
		btnText7.innerHTML = "Read more";
		moreText7.style.display = "none";
	} else {
		dots7.style.display = "none";
		btnText7.innerHTML = "Read less";
		moreText7.style.display = "inline";
	}
};
function readMore5() {
	var dots8 = document.getElementById("dots8");
	var moreText8 = document.getElementById("more8");
	var btnText8 = document.getElementById("myBtn8");

	if (dots8.style.display === "none") {
		dots8.style.display = "inline";
		btnText8.innerHTML = "Read more";
		moreText8.style.display = "none";
	} else {
		dots8.style.display = "none";
		btnText8.innerHTML = "Read less";
		moreText8.style.display = "inline";
	}
};

function readMore6() {
	var dots8 = document.getElementById("dots10");
	var moreText8 = document.getElementById("more10");
	var btnText8 = document.getElementById("myBtn10");

	if (dots10.style.display === "none") {
		dots10.style.display = "inline";
		btnText10.innerHTML = "Read more";
		moreText10.style.display = "none";
	} else {
		dots10.style.display = "none";
		btnText10.innerHTML = "Read less";
		moreText10.style.display = "inline";
	}
};

function readMore7() {
	var dots8 = document.getElementById("dots9");
	var moreText8 = document.getElementById("more9");
	var btnText8 = document.getElementById("myBtn9");

	if (dots9.style.display === "none") {
		dots9.style.display = "inline";
		btnText9.innerHTML = "Read more";
		moreText9.style.display = "none";
	} else {
		dots9.style.display = "none";
		btnText9.innerHTML = "Read less";
		moreText9.style.display = "inline";
	}
};

const clickActions = {};
const colors = ["red", "orange", "purple"],
	fonts = ["papyrus", "chiller", "Symbol"];
let colorIndex = 0;
let fontIndex = 0;
clickActions.test = () => {

	document.body.style.backgroundColor = colors[colorIndex];
	colorIndex = (colorIndex + 1) % colors.length;
	document.body.style.fontFamily = fonts[fontIndex];
	fontIndex = (fontIndex + 1) % fonts.length;
};

document.addEventListener("click", (event) => {
	let source = event.target;
	let action = source.dataset.click;
	clickActions[action]?.();
});

const clickActionsAgain = {};
clickActionsAgain.back = () => {
	document.body.style.backgroundColor = "antiquewhite";
	document.body.style.fontFamily = "Times New Roman";
};

document.addEventListener("click", (event) => {
	let alSource = event.target;
	let actionAgain = alSource.dataset.click;
	clickActionsAgain[actionAgain]?.();
});


const button = document.querySelector(".nameButton");

button.addEventListener("click", updateName);

function updateName() {
	const name = prompt("Enter your name:");
	button.textContent = `Recently Viewed by: ${name}`;
	alert(`Thanks for viewing my website ${name}!`);
};



// Function to scroll to the top of the page
function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth' // Smooth scrolling behavior
	});
};

// Show the scroll button when scrolling down, hide it when scrolling to the top
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("scrollBtn").style.display = "block";
	} else {
		document.getElementById("scrollBtn").style.display = "none";
	}
}

//slideshow code
let slideIndex = 0;
showSlides();

function showSlides() {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) { slideIndex = 1 }
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
	setTimeout(showSlides, 4000); // Change image every 6 seconds
}