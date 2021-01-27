const $ = document.querySelectorAll.bind(document)
const _ = document.querySelector.bind(document)

const submit_form = async (form, event) => {
	event.preventDefault()
	await form.submit()
	form_submitted = true
	await form.reset()
	form_submitted = false
}

window.addEventListener('DOMContentLoaded', () => {
	new Typewriter(_('#skills'), {
		loop: true,
		cursor: ''
	}).typeString(STRINGS.en.game_dev)
		.pauseFor(1500)
		.deleteAll()
		.typeString(STRINGS.en.designer)
		.pauseFor(1500)
		.deleteAll()
		.typeString(STRINGS.en.hacker)
		.pauseFor(1500)
		.deleteAll()
		.start()

	var projects_container = _('#projects_container')
	var horizontal_scroll = _('#horizontal_scroll')
	var arrow_left = _('#arrow_left')
	var arrow_right = _('#arrow_right')

	projects_container.addEventListener('scroll', (e) => {
		var h_scroll = e.target.scrollLeft
		var target_width = e.target.clientWidth

		if (h_scroll + target_width > horizontal_scroll.clientWidth - 10) {
			arrow_right.classList.add('fadeOut')
			arrow_right.classList.remove('fadeIn')
			arrow_right.style.display = 'none'
		} else {
			arrow_right.classList.add('fadeIn')
			arrow_right.classList.remove('fadeOut')
			arrow_right.style.display = 'flex'
		}

		if (h_scroll > 10) {
			arrow_left.classList.add('fadeIn')
			arrow_left.classList.remove('fadeOut')
			arrow_left.style.display = 'flex'
		} else {
			arrow_left.classList.add('fadeOut')
			arrow_left.classList.remove('fadeIn')
			arrow_left.style.display = 'none'
		}
	})

	arrow_left.addEventListener('click', () => {
		projects_container.scroll(0, 0)
	})
	arrow_right.addEventListener('click', () => {
		projects_container.scroll(horizontal_scroll.clientWidth, 0)
	})
})