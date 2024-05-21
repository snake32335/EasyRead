let intervalid;

document.querySelectorAll('.dropdown-toggle').forEach(e => {
    e.addEventListener("click", e => {
        const menu = e.currentTarget.dataset.path;
        document.querySelectorAll('.dropdown-menu').forEach(e => {
            if  (!(document.querySelector(`[data-target=${menu}]`).classList.contains('open'))){
                e.classList.remove('menu-active');
                e.classList.remove('open');
                document.querySelector(`[data-target=${menu}]`).classList.add('menu-active')
                setTimeout(() => {
                    document.querySelector(`[data-target=${menu}]`).classList.add('open')  
                }, 0)
            }
            if  (document.querySelector(`[data-target=${menu}]`).classList.contains('open')){
                clearTimeout(intervalid)
                document.querySelector(`[data-target=${menu}]`).classList.remove('menu-active')
                setTimeout(() => {
                    document.querySelector(`[data-target=${menu}]`).classList.remove('open')  
                }, 0)
            }
        })
    })
})

function show_list() {
    var courses = document.getElementById("courses_id");

    if (courses.style.display == "block") {
        courses.style.display = "none";
    } else {
        courses.style.display = "block";
    }
}
window.onclick = function (event) {
    if (!event.target.matches('.dropdown_button')) {
        document.getElementById('courses_id')
            .style.display = "none";
    }
}   