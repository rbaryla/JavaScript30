/**
 * Created by rbaryla on 10.01.2017.
 */

const controls = document.querySelectorAll('.controls input');

controls.forEach((element) => {
    element.addEventListener('change', changeHandeler);
    element.addEventListener('input', changeHandeler);
});

/**
 * Change css variable property
 */
function changeHandeler() {
    const sufix = this.dataset['sizing'] || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + sufix);
}