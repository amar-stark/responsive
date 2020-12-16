var reqId,
section 		= $('section'),
iframe 			= $('iframe')
searchBarField 	= $('#searchBarText');
refreshBtn 		= $('#refreshBtn');
welcomePage 	= document.getElementById("welcomePage");

searchBarField[0].style.width = '47px';

function preloadFunc() {
	var w = window.outerWidth;
	if (w < 768) {
		welcomePage.style.display = "block";
	} else {
		welcomePage.style.display = "none";
	}
}

window.onpaint = preloadFunc();

function loadPage() {
	section.hide();
	$('#iphone-x').show();
};

function getId() {
	for (i = 0; i < section.length; i++) {
		if (section[i].style['display'] !== 'none') {
			reqId =  section[i].id;
		}
	}
	return reqId
}

var origLeftLabels 	= [],
	origRightLabels = [];

leftLabels = $('#sidebar-wrapper-left .list-group .list-group-item label');
rightLabels = $('#sidebar-wrapper-right .list-group .list-group-item label');

for (i=0; i<leftLabels.length; i++) {
	origLeftLabels.push(leftLabels[i].innerHTML);
}

for (i=0; i<rightLabels.length; i++) {
	origRightLabels.push(rightLabels[i].innerHTML);
}

$(document).ready(function() {
	$(".list-group a").each(function() {
		// if($(this).hasClass("disabled")){
		$(this).removeAttr("href");
		// }
	});
});

function resizeBrowser() {
	var w = window.outerWidth;
	var h = window.outerHeight;
	if (w < 768) {
		welcomePage.style.display = "block";
	} else {
		welcomePage.style.display = "none";
	}
}


$("#menu-toggle-left").click(function(e) {
	e.preventDefault();
	$("#wrapper").toggleClass("toggled-left");
	if ($("#wrapper").hasClass('toggled-left')) {
		$('.iconsLeft').hide();
		for(i = 0; i < leftLabels.length; i++) {
			leftLabels[i].innerHTML = '<i class="fa fa-apple"></i>';
		}
		$('#sidebar-wrapper-left .sidebar-heading')[0].innerHTML = "<img src = './sources/icons/apple.png' style='width:100%''>";
	} else {
		$('.iconsLeft').show();
		for(i = 0; i < leftLabels.length; i++){
			leftLabels[i].innerHTML = origLeftLabels[i];
		}
		$('#sidebar-wrapper-left .sidebar-heading')[0].innerHTML = ' Apple Section <i class="fa fa-apple"></i>';
	}
});

$("#menu-toggle-right").click(function(e) {
	e.preventDefault();
	$("#wrapper").toggleClass("toggled-right");
	if ($("#wrapper").hasClass('toggled-right')) {
		$('.iconsRight').hide();
		for(i = 0; i < rightLabels.length; i++) {
			if (i === 0 || i === 1) {
				rightLabels[i].innerHTML = '<i class="fa fa-android"></i>';
			} else {
				for(j = 0; j < data.length; j++) {
					if (rightLabels[i].innerHTML.trim() === data[j]["deviceName"]) {
						rightLabels[i].innerHTML = data[j]["icon"];
					}
				}
			}
		}
		$('#sidebar-wrapper-right .sidebar-heading')[0].innerHTML = "<img src = './sources/icons/android.png' style='width:100%''>";
	} else {
		$('.iconsRight').show();
		for(i = 0; i < rightLabels.length; i++){
			rightLabels[i].innerHTML = origRightLabels[i];
		}
		$('#sidebar-wrapper-right .sidebar-heading')[0].innerHTML = ' Android Section <i class="fa fa-android"></i>';
	}
});

$('#iPhone').click(function() {
	$('#iPhoneOrient').toggleClass('portrait landscape');
	if ($('#iPhoneOrient').hasClass('landscape')) {
		$('#' + getId() + ' button').addClass('selected');
		$('.deviceContainer.one').css('width', '800px');
	}
	if ($('#iPhoneOrient').hasClass('portrait')) {
		$('#' + getId() + ' button').removeClass('selected');
		$('.deviceContainer.one').css('width', '400px');
	}
});

$('#iPhoneBlack').click(function() {
	$('#iPhoneOrient').addClass('black');
});

$('#iPhoneWhite').click(function() {
	$('#iPhoneOrient').removeClass('black');
})

$('#iPhoneX').click(function() {
	$('#iPhoneXOrient').toggleClass('portrait landscape');
	if ($('#iPhoneXOrient').hasClass('landscape')) {
		$('#' + getId() + ' button').addClass('selected');
		$('.deviceContainer.two').css('width', '800px');
	}
	if ($('#iPhoneXOrient').hasClass('portrait')) {
		$('#' + getId() + ' button').removeClass('selected');
		$('.deviceContainer.two').css('width', '350px');
	}
});

$('#iPhoneXBlack').click(function() {
	$('#iPhoneXOrient').addClass('black');
});

$('#iPhoneXWhite').click(function() {
	$('#iPhoneXOrient').removeClass('black');
});

$('#iPadd').click(function() {
	$('#iPaddOrient').toggleClass('portrait landscape');
	if ($('#iPaddOrient').hasClass('landscape')) {
		$('#' + getId() + ' button').addClass('selected');
		$('.deviceContainer.three').css('width', '800px');
	}
	if ($('#iPaddOrient').hasClass('portrait')) {
		$('#' + getId() + ' button').removeClass('selected');
		$('.deviceContainer.three').css('width', '500px');
	}
});

$('#iPaddBlack').click(function() {
	$('#iPaddOrient').addClass('black');
});

$('#iPaddWhite').click(function() {
	$('#iPaddOrient').removeClass('black');
});

$('#andPhone').click(function() {
	$('#andPhoneOrient').toggleClass('portrait landscape');
	if ($('#andPhoneOrient').hasClass('landscape')) {
		$('#' + getId() + ' button').addClass('selected');
		$('.deviceContainer.four').css('width', '800px');
	}
	if ($('#andPhoneOrient').hasClass('portrait')) {
		$('#' + getId() + ' button').removeClass('selected');
		$('.deviceContainer.four').css('width', '400px');
	}
});

$('#andPhoneBlack').click(function() {
	$('#andPhoneOrient').addClass('black');
});

$('#andPhoneWhite').click(function() {
	$('#andPhoneOrient').removeClass('black');
});

$('#andTab').click(function() {
	$('#andTabOrient').toggleClass('portrait landscape');
	if ($('#andTabOrient').hasClass('landscape')) {
		$('#' + getId() + ' button').addClass('selected');
		$('.deviceContainer.five').css('width', '800px');
	}
	if ($('#andTabOrient').hasClass('portrait')) {
		$('#' + getId() + ' button').removeClass('selected');
		$('.deviceContainer.five').css('width', '500px');
	}
});

$('#andTabBlack').click(function() {
	$('#andTabOrient').addClass('black');
});

$('#andTabWhite').click(function() {
	$('#andTabOrient').removeClass('black');
});

function sectionClick(id) {
	section.hide();
	$(id).show();
};

$(".list-group > .list-group-item").click(function() {
	$(".list-group > .list-group-item").removeClass("active");
	$(this).addClass("active");
});

searchBarField.keyup(function(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		s = searchBarField.val();
		if (is_url(s)) {
			for (i = 0; i < iframe.length; i++) {
				iframe[i].src = '';
				iframe[i].style.backgroundImage = "url('./sources/gif/loadingPlane.gif')";
				iframe[i].style.backgroundPosition = "center";  
				iframe[i].style.backgroundRepeat = "no-repeat";  
				iframe[i].style.backgroundSize = "cover";  
			}
			setTimeout(function () {
				for (i = 0; i < iframe.length; i++) {
					iframe[i].src = s;
				}
			}, 2000);
		} else {
			alert('"' + s + '"' + ' is not a URL.\nPlease Provide a Correct URL to Proceed.');
		}
	}
});

function is_url(str)
{
	regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
	if (regexp.test(str))
	{
		return true;
	}
	else
	{
		return false;
	}
}

refreshBtn.click(function() {
	for (i = 0; i < iframe.length; i++) {
		iframe[i].src = '';
		iframe[i].style.backgroundImage = "url('./sources/gif/loadingPlane.gif')";
		iframe[i].style.backgroundPosition = "center";  
		iframe[i].style.backgroundRepeat = "no-repeat";  
		iframe[i].style.backgroundSize = "cover";  
	}
	setTimeout(function () {
		for (i = 0; i < iframe.length; i++) {
			iframe[i].style.backgroundImage = '';
			iframe[i].src = './demo.html';
		}
	}, 2000);
});

$('#searchBarToggle').click(function() {
	searchBarField[0].style.transition = 'all 500ms linear';
	if (searchBarField[0].style.width === '47px') {
		searchBarField[0].style.width = '89%';
	} else {
		searchBarField[0].style.width = '47px';
	}
});

// infoPanelModal
var infoPanelModal 		= document.getElementById("infoPanelModal");
var comingSoonPage 		= document.getElementById("comingSoonPage");

var comingSoonIcon1 		= document.getElementsByClassName("fa-gear")[0];
var comingSoonIcon2 		= document.getElementsByClassName("fa-info")[1];
var comingSoonIcon3 		= document.getElementsByClassName("fa-question")[0];
var comingSoonIcon4 		= document.getElementsByClassName("fa-clone")[0];
var comingSoonIcon5 		= document.getElementsByClassName("fa-user")[0];

var comingSoonIcon6 		= document.getElementsByClassName("fa-instagram")[0];
var comingSoonIcon7 		= document.getElementsByClassName("fa-twitter")[0];
var comingSoonIcon8 		= document.getElementsByClassName("fa-facebook-square")[0];
var comingSoonIcon9 		= document.getElementsByClassName("fa-pinterest")[0];
var comingSoonIcon10 		= document.getElementsByClassName("fa-linkedin-square")[0];

var infoPanelToggleBtn 	= document.getElementById("infoPanelToggle");

var infoPanelClose 		= document.getElementsByClassName("close")[0];

infoPanelToggleBtn.onclick = function() {
	infoPanelModal.style.transition = "all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55)";
	infoPanelModal.style.display = "block";
	var id,
	vals;
	
	id = getId();
	
	for (i = 0; i < data.length; i++){
		if (id === data[i]["deviceId"]) {
			vals = data[i];
		}
	}
	if (vals) {
		information(vals);
	}
}

comingSoonIcon1.onclick = function() { comingSoonPage.style.display = "block"; }
comingSoonIcon2.onclick = function() { comingSoonPage.style.display = "block"; }
comingSoonIcon3.onclick = function() { comingSoonPage.style.display = "block"; }
comingSoonIcon4.onclick = function() { comingSoonPage.style.display = "block"; }
comingSoonIcon5.onclick = function() { comingSoonPage.style.display = "block"; }
comingSoonIcon6.onclick = function() { comingSoonPage.style.display = "block"; }
comingSoonIcon7.onclick = function() { comingSoonPage.style.display = "block"; }
comingSoonIcon8.onclick = function() { comingSoonPage.style.display = "block"; }
comingSoonIcon9.onclick = function() { comingSoonPage.style.display = "block"; }
comingSoonIcon10.onclick = function() { comingSoonPage.style.display = "block"; }

// When the user clicks on <infoPanelClose> (x), close the infoPanelModal
infoPanelClose.onclick = function() {
	infoPanelModal.style.display = "none";
}

// When the user clicks anywhere outside of the infoPanelModal, close it
window.onclick = function(event) {
	if (event.target == infoPanelModal) {
		infoPanelModal.style.transition = "all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55)";
		infoPanelModal.style.display = "none";
	} 
	if (event.target == comingSoonPage) {
		comingSoonPage.style.display = "none";
	}
}

function information(info) {
	$('#infoDevice').text(info['deviceName']);
	$('#infoSize').text(info['pixels']);
	$('#infoImg')[0].src 						= info['src'] ;
	$('#infoImg')[0].style.width 				= info['width'] ;
	$('#infoImg')[0].style.margin 				= info['margin'] ;
	$('#infoMake').text(info['make']);
	$('#infoModel').text(info['model']);
	$('#infoLaunch').text(info['launch']);
	$('#infoScreen').text(info['screen']);
	$('#infoOS').text(info['os']);
	$('#infoCam').text(info['cam']);
	$('#infoPrice').text(info['price']);
	$('#infoFeatures').text(info['features']);
	$('#infoMore')[0].href 						= info['more'];
}



// function zoomIn(id, num) {
// 	var clas;
// 	if (num === 0) {
// 		clas = id + ' div .deviceContainer';
// 		$(clas).width(
// 			$(clas).width() * 1.05
// 			);

// 		$(clas).height(
// 			$(clas).height() * 1.05
// 			);
// 	} else if (num === 1) {
// 		clas = id + ' .device';
// 		s = $(clas).css('transform');
// 		$(clas).css('transform', 'scale(' + s.substring(s.lastIndexOf("(") + 1, s.indexOf(",")) * 1.05 + ')')
// 	} else if (num === 2) {
// 		clas = '#' + id + ' .marvel-device.' + id;
// 		s = $(clas).css('transform');
// 		$(clas).css('transform', 'scale(' + s.substring(s.lastIndexOf("(") + 1, s.indexOf(",")) * 1.05 + ')')
// 	}
// };

// function zoomOut(id, num) {
// 	var clas;
// 	if (num === 0) {
// 		clas = id + ' div .deviceContainer';
// 		$(clas).width(
// 			$(clas).width() * 0.95
// 			);

// 		$(clas).height(
// 			$(clas).height() * 0.95
// 			);
// 	} else if (num === 1) {
// 		clas = id + ' .device';
// 		s = $(clas).css('transform');
// 		$(clas).css('transform', 'scale(' + s.substring(s.lastIndexOf("(") + 1, s.indexOf(",")) * 0.95 + ')')
// 	} else if (num === 2) {
// 		clas = '#' + id + ' .marvel-device.' + id;
// 		s = $(clas).css('transform');
// 		$(clas).css('transform', 'scale(' + s.substring(s.lastIndexOf("(") + 1, s.indexOf(",")) * 0.95 + ')')
// 	}

// };


// let infoPanel = document.getElementById('infoPanel'),
// infoPanelToggleBtn = document.getElementById('infoPanelToggle');

// let searchPanel = document.getElementById('searchPanel'),
// searchPanelToggleBtn = document.getElementById('searchPanelToggle');

// searchPanelToggleBtn.addEventListener('click', function () {

// 	if (searchPanel.classList.contains('hidden')) {
// 		searchPanel.classList.remove('hidden');
// 		setTimeout(function () {
// 			searchPanel.classList.remove('visuallyhidden');
// 		}, 20);
// 	} else {
// 		searchPanel.classList.add('visuallyhidden');    
// 		searchPanel.addEventListener('transitionend', function(e) {
// 			searchPanel.classList.add('hidden');
// 		}, {
// 			capture: false,
// 			once: true,
// 			passive: false
// 		});
// 	}

// }, false);

// infoPanelToggleBtn.addEventListener('click', function () {

// 	if (infoPanel.classList.contains('hidden')) {
// 		infoPanel.classList.remove('hidden');
// 		setTimeout(function () {
// 			infoPanel.classList.remove('visuallyhidden');
// 		}, 20);
// 	} else {
// 		infoPanel.classList.add('visuallyhidden');    
// 		infoPanel.addEventListener('transitionend', function(e) {
// 			infoPanel.classList.add('hidden');
// 		}, {
// 			capture: false,
// 			once: true,
// 			passive: false
// 		});
// 	}

// }, false);
