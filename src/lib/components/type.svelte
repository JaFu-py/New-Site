<script>
	import { onMount } from 'svelte';
	import { IconLink } from '@tabler/icons-svelte';

	export let texts = [];
	let visibleText = '';
	let textIndex = 0;
	let charIndex = 0;
	let isDeleting = false;

	export let typingSpeed = 175; // Speed for typing
	export let deletingSpeed = 30; // Speed for deleting (faster)

	function processTypewriter() {
		if (!isDeleting) {
			// Typing
			if (charIndex < texts[textIndex].length) {
				visibleText += texts[textIndex].charAt(charIndex);
				charIndex++;
				setTimeout(processTypewriter, typingSpeed);
			} else {
				// Wait a bit before starting deletion
				setTimeout(() => {
					isDeleting = true;
					processTypewriter();
				}, 1000);
			}
		} else {
			// Deleting
			if (visibleText.length > 0) {
				visibleText = visibleText.slice(0, -1);
				charIndex--;
				setTimeout(processTypewriter, deletingSpeed);
			} else {
				// Move to the next text after deletion
				isDeleting = false;
				textIndex = (textIndex + 1) % texts.length; // Loop to the start if end of list is reached
				setTimeout(processTypewriter, typingSpeed);
			}
		}
	}

	onMount(() => {
		processTypewriter();
	});
</script>

{visibleText}|
