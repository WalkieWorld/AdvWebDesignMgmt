var homeBtn = document.getElementById('homeBtn'), 
	resBtn = document.getElementById('resBtn'), 
	blogBtn = document.getElementById('blogBtn');

homeBtn.addEventListener('click', function () {
	window.location.href = "index.html";
});

resBtn.addEventListener('click', function () {
	window.location.href = "resume.html";
});

blogBtn.addEventListener('click', function () {
	window.location.href = "blog.html";
});