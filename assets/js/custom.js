// // Javascript for the lower navigation carousel --> scroll prev and next
// $('.carousel-control-prev').click(function() {
// 	$(this).blur();
// 	$(this).parent().find('.carosel-item').first().insertAfter($(this).parent().find('.carosel-item').last());
// });
// $('.carosel-control-next').click(function() {
// 	$(this).blur();
// 	$(this).parent().find('.carosel-item').last().insertBefore($(this).parent().find('.carosel-item').first());
// });

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




// let items = document.querySelectorAll('#carouselLowerNavigation .carousel-item') // [parent-level: carousel-item] carousel-item before modification
// let itemsCopy = items.cloneNode
// let cloneChild = next.cloneNode(true)
// $(document).ready(function(){
// 	$(window).resize(function() {
				
// 		let items = document.querySelectorAll('#carouselLowerNavigation .carousel-item') // [parent-level: carousel-item] carousel-item before modification
// 		let appendItems = document.querySelectorAll('#lowerNavGoalHide') // [child-level: carousel-col] items to appendChild of each carousel-item
// 		const goalLoops = [1,5,9,13,17,4,8,12,16,3,7,11,15,2,6,10,14] //starting goal-value of each slide

// 		let width = screen.width;

// 		let maxPerSlide;

// 		if (width >= 1200) {
// 			maxPerSlide = 4;
// 		} else if (width >= 768 && width < 1200 ) {
// 			maxPerSlide = 3;
// 		} else {
// 			maxPerSlide = 2;
// 		}

// 		items.forEach((el, idx) => {

// 			// grap the next carousel-col of the one in carousel-item
// 			let next = appendItems[ goalLoops[idx] ]

// 			// add next four items from array #lowerNavGoalHide
// 			for (var i=1; i<maxPerSlide; i++) {
// 				// return the first item if next does not exist
// 				if (!next) {
// 					next = appendItems[0]
// 				}
// 				let cloneChild = next.cloneNode(true)
// 				el.appendChild(cloneChild)
// 				next = next.nextElementSibling
// 			}
// 		})
// 	})
// });



// cards carousel on frontpage
// let width = screen.width;
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


// $( "#search-field-close" ).click(function() {
// 	$( "#search-field-close" ).attr("data-toggle", "false");
// });


