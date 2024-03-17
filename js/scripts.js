document.addEventListener('DOMContentLoaded', function() {

	console.log('Hey Michael & René :)');
	console.log('Har lavet et array med data til FAQen som jeg løber igennem. Så er det lidt mere dynamisk modul-agtigt.');
	console.log('... og så havde jeg en undskyldning for at prøve at lave en html-template med vanilla JS i stedet for php som jeg normalt bruger');
	console.log('Vi ses :)');

    const faqArray = [
      { 
      	title: 'Bliv klogere og mærk efter', 
      	description: 'Læs materialer, stil spørgsmål til vores mæglere og kom til infomøde. Det er et stort spring at flytte i boligfællesskab, så brug god tid på at mærke efter. ', 
      	image: '/img/illustrationer_eksport-01.svg' 
      },
      { 
      	title: 'Tag beslutningen og vær med', 
      	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
      	image: '/img/illustrationer_eksport-02.svg' 
      },
      { 
      	title: 'Giv fællesskabet form', 
      	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
      	image: '/img/illustrationer_eksport-03.svg' 
      },
      { 
      	title: 'Flyt ind i dit nye hjem', 
      	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
      	image: '/img/illustrationer_eksport-05.svg' 
      },
      { 
      	title: 'Kom godt i gang', 
      	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
      	image: '/img/illustrationer_eksport-08.svg' 
      },
    ];

    // Get template 
    const template = document.getElementById('question');

    // Get container to append items
    const container = document.querySelector('.faq');
    // Count questions
    let count = 0;

    // Loop through array of questions
    faqArray.forEach(itemData => {
      
      count++;

      // Clone the template content 
      const templateContent = template.content.cloneNode(true);

      // Fill in the template with data
      templateContent.querySelector('.title').textContent = itemData.title;
      templateContent.querySelector('.description').textContent = itemData.description;
      templateContent.querySelector('.number').textContent = count;

      //set image-url as data attribute
      templateContent.querySelector('.accordion-content').setAttribute('data-image', itemData.image);

      // Append the filled-in template to the container
      container.appendChild(templateContent);
    });

    const questions = document.querySelectorAll('.accordion-item');

    questions.forEach(function(item, index) {
    	//Make first item active
    	if (index === 0) {
    		item.classList.add('active');
    	}
    	const header = item.querySelector(".accordion-header");
    	const content = item.querySelector(".accordion-content");
    	const imageUrl = content.getAttribute('data-image');

    	header.addEventListener("click", function(e) {

    		//Do nothing if clicked item is already active
    		if(item.classList.contains('active')) {
    			return;
    		};
    		e.preventDefault();
	        // Toggle active class to expand/collapse accordion
	        item.classList.add("active");

	        // Get image element
	        let imgElement = document.getElementById('faq-image');
	        imgElement.classList.add('fadeOut');
	        
	        // Make smooth transition to fadeout image before changing image and fading back in
	        setTimeout(function() {
	        	imgElement.setAttribute('src', imageUrl);
	        	imgElement.classList.add('fadeIn');
	        	imgElement.classList.remove('fadeIn');
	        	imgElement.classList.remove('fadeOut');
	        }, 300);


	        // Remove active class from other accordion items
	        questions.forEach(function(otherItem) {
	            if (otherItem !== item) {
	              otherItem.classList.remove("active");
	            }
	        });

	    });
    })

});