var images = document.querySelectorAll('.images li');
var listItem = document.querySelectorAll('.links li')

listItem.forEach(function (li_item) {
    // li_item.classList.remove('active')
    li_item.addEventListener('click', function (e) {
        var listItem_data = e.target.parentElement.dataset.filter;
        images.forEach(function (item) {
            var image_data = item.dataset.filter;
            item.children[0].classList.remove('show')
            if (listItem_data === image_data) {
                item.children[0].classList.add('show')
                remove_active();
                li_item.classList.add('active');
            }
        })
    })
});

function remove_active() {
    listItem.forEach(function (item) {
        item.classList.remove('active')
    })
}
