
let colorIndex = 0;
const colors = ['red', 'green', 'blue'];

function upsize() {
    let balloon = document.getElementById('balloon');
        
    let currentWidth = parseInt(window.getComputedStyle(balloon).width);
    let currentHeight = parseInt(window.getComputedStyle(balloon).height);
        
    if (currentWidth >= 420 && currentHeight >= 420) {
        balloon.style.width = '200px';
        balloon.style.height = '200px';
    } else {
        let newWidth = currentWidth + 10;
        let newHeight = currentHeight + 10;

        balloon.style.width = newWidth + 'px';
        balloon.style.height = newHeight + 'px';

        // เปลี่ยนสีบอลลูน
        balloon.style.backgroundColor = colors[colorIndex];
        // อัพเดตลำดับสี
        colorIndex = (colorIndex + 1) % colors.length;
    }
}

function downsize() {
    let currentWidth = parseInt(window.getComputedStyle(balloon).width);
    let currentHeight = parseInt(window.getComputedStyle(balloon).height);

    if (currentWidth > 200 && currentHeight > 200) {
        let newWidth = currentWidth - 5;
        let newHeight = currentHeight - 5;
        balloon.style.width = newWidth + 'px';
        balloon.style.height = newHeight + 'px';

        balloon.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex - 1) % colors.length;
    }
};