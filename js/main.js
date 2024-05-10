const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            chefigata: `vueJs e' na gran figata`,
            spiderman: `<img src="./img/01.webp" alt="">`
        }
    }
}).mount('#app')