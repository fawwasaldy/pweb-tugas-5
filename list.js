createApp({
    data() {
        return {
            python_is_trash: [
                {
                    nama: 'suka',
                    kelas: 'paitan',
                    hobi: 'bim bim'
                },
                {
                    nama: 'blyadd',
                    kelas: 'si plas plas',
                    hobi: 'bam bam'
                }
            ]
        }
    }
}).mount('#app2')

console.log(this.python_is_trash);