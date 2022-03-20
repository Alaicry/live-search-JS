window.onload = () => {
	let inputWord = document.querySelector('.input');
	inputWord.oninput = function () {
		let value = this.value.trim();
		let list = document.querySelectorAll('.list li');

		if(value != "") {
			list.forEach(elem => {
				if(elem.innerText.search(value) == -1) {
					elem.classList.add('hide')
				}
			});
		} else {
			list.forEach(elem => {
				elem.classList.remove('hide')
			});
		}
	};
};