// // Javascript for the lower navigation carousel --> scroll prev and next
// source: https://www.codeply.com/p/0CWffz76Q9
let items = document.querySelectorAll('#carouselLowerNavigation .carousel-item')

items.forEach((el) => {
	const minPerSlide = 4
	let next = el.nextElementSibling
	for (var i=1; i<minPerSlide; i++) {
		if (!next) {
			// wrap carousel by using first child
			next = items[0]
		}
		let cloneChild = next.cloneNode(true)
		el.appendChild(cloneChild.children[0])
		next = next.nextElementSibling
	}
})


// cards carousel on frontpage
let width = screen.width;
let cards = document.querySelectorAll('#carouselCard .carousel-item');
let minSlide = 3;

// if (width >= 1200) {
// 	minSlide = 3;
// } else if (width >= 768 && width < 1200 ) {
// 	minSlide = 2;
// } else {
// 	minSlide = 1;
// }

cards.forEach((cc) => {
	let next = cc.nextElementSibling
	for (var i=1; i<minSlide; i++) {
		if (!next) {
			// wrap carousel by using first child
			next = cards[0]
		}
		let cloneChild = next.cloneNode(true)
		cc.appendChild(cloneChild.children[0])
		next = next.nextElementSibling
	}
})


// // change number of cards per slide according to screen width
// $(document).ready(function(){
// 	$(window).resize(function() {
// 		cards.forEach((cc) => {
// 			while (cc.childElementCount > 1) {
// 				cc.removeChild(cc.lastChild);
// 			}
// 		})

// 		let width = screen.width;
		
// 		if (width >= 1200) {
// 			minSlide = 3;
// 		} else if (width >= 768 && width < 1200 ) {
// 			minSlide = 2;
// 		} else {
// 			minSlide = 1;
// 		}

// 		cards = document.querySelectorAll('#carouselCard .carousel-item');
// 		cards.forEach((cc) => {
// 			let next = cc.nextElementSibling
// 			for (var i=1; i<minSlide; i++) {
// 				if (!next) {
// 					// wrap carousel by using first child
// 					next = cards[0]
// 				}
// 				let cloneChild = next.cloneNode(true)
// 				cc.appendChild(cloneChild.children[0])
// 				next = next.nextElementSibling
// 			}
// 		})

// 	})
// });