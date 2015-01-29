/*
	Here is for the dynamic header and footer
*/

var homeBtn,
	resBtn,
	blogBtn,
	newTag,
	holdTag,
	/* 
	*	0: tag name; 
	*	1: class name; 
	*	2: parent id;
	*	3: current id;
	*	4: text content; 
	*	5: new attribute; 
	*	6: new attribute content;
	*/
	headerTagArr = [
		['header', ['wrap'], 0, 1],
		['section', ['big-header','container'], 1, 2, '', 'id', 'big-header'],
		['section', ['header'], 2, 3, '', 'id', 'header'],
		['section', ['logo'], 3, 4, "Hao's World", 'id', 'logo'],
		['nav', [''], 3, 5, '', 'id', 'nav-btn'],
		['button', ['btn'], 5, 6, 'Home', 'id', 'homeBtn'],
		['button', ['btn'], 5, 7, 'Resume', 'id', 'resBtn'],
		['button', ['btn'], 5, 8, 'Blog', 'id', 'blogBtn'],
		['aside', ['split-line'], 2, 9, '', 'id', 'split-line'],
		['section', ['breadcrumb'], 2, 10, '', 'id', 'breadcrumb'],
		['nav', ['container'], 10, 11, '', 'id', 'nav-bread'],
		['label', [''], 11, 12, '', 'id', 'label-bread'],
		['a', [''], 12, 13, 'Home', 'href', 'index.html'],
		['label', ['active'], 11, 14, '', 'id', 'label-active'],
		['footer', ['site-footer', 'container'], 0, 15],
		['p', [''], 15, 16, 'Author: Hao Zhang', 'id', 'p1'],
		['span', [''], 15, 17, '', 'id', 'sp1'],
		['p', [''], 15, 18, 'Course: ICT-4510', 'id', 'p2'],
		['span', [''], 15, 19, '', 'id', 'sp2'],
		['p', [''], 15, 20, 'Assginment 3', 'id', 'p3'],
	],
	title;

var dynamicFun = function(){
	
	headerTagArr.forEach(function (curVal, index, headerTagArr){

		curVal[0] !== "header" && curVal[0] !== "footer"
			? newTag = document.createElement(curVal[0]) 
			: newTag = document.querySelector(curVal[0]);
		
		// set attributes
		var attrArr = curVal[1];
		attrArr.forEach(function (cVal, index, attrArr){
			
			if(cVal !== ''){

				newTag.classList.add(cVal);
			}
		});

		// get parent tag
		if(curVal[2] !== 0 ){

			var id;

			headerTagArr[curVal[2] - 1][5] !== 'id' 
				? id = headerTagArr[curVal[2] - 1][0] 
				: id = '#' + headerTagArr[curVal[2] - 1][6];

			holdTag = document.querySelector( id );
		}
		
		switch(curVal.length){
			case 7:
				var curContent;

				if(curVal[6] === 'label-active'){
					
					curContent = document.querySelector('title').textContent;
				}else{

					curContent = curVal[4];
				}
				newTag.textContent = curContent;
				newTag.setAttribute(curVal[5], curVal[6]);
				break;
			default:
				break;
		}

		if( holdTag !== undefined && newTag.textContent !== 'Index'){

			holdTag.appendChild(newTag);
			holdTag = undefined;
		}

		if(curVal[0] === 'button'){
			switch(curVal[6]){
				case 'homeBtn':
					homeBtn = newTag;
					break;
				case 'resBtn':
					resBtn = newTag;
					break;
				case 'blogBtn':
					blogBtn = newTag;
					break;
				default:
				break;
			}
		}
	});
}

dynamicFun();

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

var panelAnimation = function(index, selector){

	var height = sectionColl[index].offsetHeight;

	selector.parentNode.style.height = height + 'px';

	selector.addEventListener('click', function(){

		var parentNode = selector.parentNode;

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
};

title = document.querySelector('title').textContent;

if(title === 'Resume'){

	for (var i = 0; i < sectionColl.length; i += 1) {
		
		var h3 = sectionColl[i].querySelector('h3');
		var sp = sectionColl[i].querySelector('.collapse-icons');
		panelAnimation(i, h3);
		panelAnimation(i, sp);
	};
}
