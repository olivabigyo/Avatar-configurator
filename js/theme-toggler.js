// Variables

const themeSwitch = document.querySelector('#themeSwitch');
const body = document.querySelector('body');

// Function variables

const setTheme = (dark, notrans) => {
    // console.log('theme', dark);
    if (dark) {
        if (!notrans) trans();
        // document.documentElement.setAttribute('data-theme', 'dark');
        // body.setAttribute('data-theme', 'dark');
        body.classList.add('greysand');
        body.classList.remove('whitesand');
    } else {
        if (!notrans) trans();
        // document.documentElement.setAttribute('data-theme', 'light');
        // body.setAttribute('data-theme', 'light');
        body.classList.add('whitesand');
        body.classList.remove('greysand');
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light');
}

const trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 500);
};

// The Toggler Listener
themeSwitch.addEventListener('change', function () {
    setTheme(this.checked);
});
// The Storage Checker
if (localStorage.getItem('theme') === 'dark') {
    themeSwitch.checked = true;
    setTheme(true, true);
}
