const modal = document.getElementById('my-modal');
const connect_modal = document.getElementById('connect-modal');
const connect_img = document.getElementById('connect-img');
const input_wallet = document.querySelectorAll('.input-wallet');
const modal_wallet_name = document.getElementById('my-modal-wallet-name');
const modal_image = document.getElementById('my-modal-wallet-img');
const loading = document.getElementById('my-modal-status');
const connect = document.getElementById('connect');
const wallets = document.getElementsByClassName('wallets');
let wallet;
let image;

for (var i = wallets.length - 1; i >= 0; i--) {
	let this_wallet = wallets[i];
	this_wallet.addEventListener('click', function(){
		wallet = this_wallet.querySelectorAll('h5')[0].innerHTML;
		image = this_wallet.querySelectorAll('img')[0].src;
		
		modal_wallet_name.innerHTML = wallet;
		modal_image.src = image;
		modal.style.display = "block";
		loadings();
	});	
}

connect.addEventListener('click', function(argument) {
	connect_img.src = image;
	for(let i = 0; i < input_wallet.length; i++){
	input_wallet[i].value = wallet;
    }
	close_modal();
	connect_modal.style.display = "block";
})

function loadings() {
	var a =  setTimeout(function () {
		loading.innerHTML = "Connecting.";
	}, 1)

	var a = setTimeout(function() {
		loading.innerHTML = "Connecting..";
	}, 600)

	var a = setTimeout(function() {
		loading.innerHTML = "Connecting...";
	}, 1200)
	var a =  setTimeout(function () {
		loading.innerHTML = "Connecting.";
	}, 1800)

	var a = setTimeout(function() {
		loading.innerHTML = "Connecting..";
	}, 2400)

	var a = setTimeout(function() {
		loading.innerHTML = "Connecting...";
	}, 3000)

	var a = setTimeout(function() {
		loading.innerHTML = "Error!"
		connect.style.display = "inline-block"
	}, 3600)
}

function showTab(name) {
	let ele = document.querySelectorAll('.content');
	ele[0].setAttribute('class', 'content d-none');
	ele[1].setAttribute('class', 'content d-none');
	ele[2].setAttribute('class', 'content d-none');
	document.getElementById('tab-' + name).setAttribute('class', 'content');

	let ele2 = document.querySelectorAll('.tabs p');
	ele2[0].setAttribute('class', '');
	ele2[1].setAttribute('class', '');
	ele2[2].setAttribute('class', '');
	document.getElementById('p-' + name).setAttribute('class', 'active');
}

function close_modal() {
	modal.style.display = "none";
	connect.style.display = "none";
	connect_modal.style.display = "none";
}

