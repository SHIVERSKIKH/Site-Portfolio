const accor = document.getElementsByClassName('certificates__accordion');
let i;

for (i = 0; i < accor.length; i++) {
    accor[i].addEventListener('click', function() {
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        if(panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.style.padding = '0 22px';
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
            panel.style.padding = '22px';
        }
    });
}