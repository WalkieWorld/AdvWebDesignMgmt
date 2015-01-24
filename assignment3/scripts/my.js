/*
	Here is for the dynamic header and footer
*/

var homeBtn,
	resBtn,
	blogBtn,
	header = document.querySelector('header'),
	footer = document.querySelector('footer'),
	secBigHeader = document.createElement('section'),
	secHeader = document.createElement('section'),
	secLogo = document.createElement('section'),
	secBreadcrumb = document.createElement('section'),
	navHeader = document.createElement('nav'),
	navBreadcrumb = document.createElement('nav'),
	asideSplit = document.createElement('aside'),
	labelArray = [ document.createElement('label'), document.createElement('label') ],
	// btn[0]: btnHome, btn[1]: btnResume, btn[2]: btnBlog
	btnArray = [ document.createElement('button') , document.createElement('button') , document.createElement('button') ],
	// For footer: p[0]: Author, p[1]: Course, p[2]: Assignment 2
	pArray = [ document.createElement('p'), document.createElement('p'), document.createElement('p') ],
	spanArray = [ document.createElement('span'), document.createElement('span') ],
	title = document.getElementsByTagName('title')[0].textContent,
	a = document.createElement('a');


// add basic css class
header.classList.add('wrap');
footer.classList.add('site-footer'); 
footer.classList.add('container');
secBigHeader.classList.add('big-header');
secBigHeader.classList.add('container');
secHeader.classList.add('header');
secLogo.classList.add('logo');
asideSplit.classList.add('split-line');
secBreadcrumb.classList.add('breadcrumb');
navBreadcrumb.classList.add('container');

btnArray.forEach(function(val, index, btnArray){
	
	btnArray[index].classList.add('btn');

	if(index === 0){

		if(title === 'Index'){
		
			btnArray[index].classList.add('active');
			labelArray[index].classList.add('active');
			labelArray[index].textContent = 'Home';
		}

		navBreadcrumb.appendChild(labelArray[index]);
		btnArray[index].setAttribute('id', 'homeBtn');
		btnArray[index].textContent = 'Home';
		homeBtn = btnArray[index];
	}else if(index === 1){

		if(title === 'Resume'){

			btnArray[index].classList.add('active');
			labelArray[index].textContent = 'Resume';
			labelArray[index].classList.add('active');
			a.setAttribute('href', 'index.html');
			a.textContent = "Home"
			labelArray[index - 1].appendChild(a);
			navBreadcrumb.appendChild(labelArray[index]);
		}

		btnArray[index].setAttribute('id', 'resBtn');
		btnArray[index].textContent = 'Resume';
		resBtn = btnArray[index];
	}else{

		if(title === 'Blog'){

			btnArray[index].classList.add('active');
			labelArray[index - 1].textContent = 'Blog';
			labelArray[index - 1].classList.add('active');
			a.setAttribute('href', 'index.html');
			a.textContent = 'Home';
			labelArray[index - 2].appendChild(a);
			navBreadcrumb.appendChild(labelArray[index - 1]);
		}

		btnArray[index].setAttribute('id', 'blogBtn');
		btnArray[index].textContent = 'Blog';
		blogBtn = btnArray[index];
	}

	navHeader.appendChild(btnArray[index]);
});

pArray.forEach(function(val, index, pArray){

	if(index === 0){

		pArray[index].textContent = 'Author: Hao Zhang';
	}else if(index === 1){

		pArray[index].textContent = 'Course: ICT-4510';
	}else{

		pArray[index].textContent = 'Assginment 3';
	}

	footer.appendChild(pArray[index]);

	if(index < pArray.length - 1){
		footer.appendChild(spanArray[index]);
	}
});

header.appendChild(secBigHeader);
secBigHeader.appendChild(secHeader);
secHeader.appendChild(secLogo);
secHeader.appendChild(navHeader);
secBigHeader.appendChild(asideSplit);
secBigHeader.appendChild(secBreadcrumb);
secBreadcrumb.appendChild(navBreadcrumb);

secLogo.textContent = "Hao's World";

/*
	-------------- End --------------
*/

/* 
*	add links to the navigation buttons
*/
homeBtn.addEventListener('click', function(){

	window.location.href = "index.html";
});

resBtn.addEventListener('click', function(){

	window.location.href = "resume.html";
});

blogBtn.addEventListener('click', function(){

	window.location.href = "blog.html";
});

/**
 *	Collapse Panel
 *	
*/

var sectionColl = document.getElementsByClassName('resume-section'),
	heightArray = [];

if(title === 'Resume'){

	for(var i = 0; i < sectionColl.length; i += 1){

		(function(n){

			var h3 = sectionColl[n].querySelector('h3');
			var height = sectionColl[n].offsetHeight;

			h3.parentNode.style.height = height + 'px';

			h3.addEventListener('click', function(){

				var parentNode = h3.parentNode;

				var sectionContent = parentNode.querySelector('section');
				sectionContent.classList.add('collapse-content');

				if(parentNode.classList.contains('panel')){

					parentNode.classList.add('panel-collapse');
					parentNode.style.height = '40px';
					parentNode.classList.remove('panel');
				}else{

					parentNode.classList.remove('panel-collapse');
					parentNode.classList.add('panel');
					parentNode.style.height = height + 'px';
				}
			});
		})(i);

		(function(n){

			var sp = sectionColl[n].querySelector('.collapse-icons');
			var height = sectionColl[n].offsetHeight;

			sp.parentNode.style.height = height + 'px';

			sp.addEventListener('click', function(){

				var parentNode = sp.parentNode;

				var sectionContent = parentNode.querySelector('section');
				sectionContent.classList.add('collapse-content');

				if(parentNode.classList.contains('panel')){

					parentNode.classList.add('panel-collapse');
					parentNode.style.height = '40px';
					parentNode.classList.remove('panel');
				}else{

					parentNode.classList.remove('panel-collapse');
					parentNode.classList.add('panel');
					parentNode.style.height = height + 'px';
				}
			});
		})(i);
	}
}
