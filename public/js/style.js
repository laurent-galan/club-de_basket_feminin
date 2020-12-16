// apparition standard
const ratio = .1
const options = {
    root: null,
    tootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('move_visible')
            observer.unobserve(entry.target)
        }
    })
}
document.documentElement.classList.add('reveal-loaded')
const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('[class*="move-"]').forEach(function (r) {
    observer.observe(r)
})
