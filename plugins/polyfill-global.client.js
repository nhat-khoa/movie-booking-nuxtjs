export default defineNuxtPlugin(() => {
    if (typeof global === 'undefined') {
        window.global = window;
    }
});