"use strict";
window.onload = function () {
	let baseUrl = 'http://localhost:8080';
	let button = document.createElement('button');
	let body = document.querySelector('body');
	button.innerText = 'получить';
	button.onclick = function () {
		ajaxRequestGet(baseUrl+'/get', renderResponse);
		let buttonSend = document.createElement('button');
		buttonSend.innerText = 'отправить';
		buttonSend.onclick = function () {
			ajaxRequestPost(baseUrl+'/post', {name: 'Alex'})
		};
		body.appendChild(buttonSend)
	};
	
	
	body.appendChild(button);
	
	
	
};

function ajaxRequestGet(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.send();
	
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			alert(xhr.responseText);
			callback(xhr.responseText);
		}
	}
}

function renderResponse(response) {
	let div = document.createElement('div');
	div.innerText = response;
	document.querySelector('body').appendChild(div);
}

function ajaxRequestPost(url, params) {
	var xhr = new XMLHttpRequest();
	
	
	xhr.open('POST', url);
	xhr.setRequestHeader('content-type', 'application/json');
	xhr.send(params);
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			alert(params);
			// callback(JSON.parse(xhr.responseText));
		}
	}
}

