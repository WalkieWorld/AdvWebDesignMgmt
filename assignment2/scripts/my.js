var homeBtn = document.getElementById('homeBtn'), 
	resBtn = document.getElementById('resBtn'), 
	blogBtn = document.getElementById('blogBtn');

homeBtn.onclick = function () {
	window.location.href = "index.html";
}

resBtn.onclick = function () {
	window.location.href = "resume.html";
}

blogBtn.onclick = function () {
	window.location.href = "blog.html";
}