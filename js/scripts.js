const { createApp } = Vue;

createApp ({
    data () {
        return {
            // lui deve diventare un array di 10 email 
            emails: [],
        }
    },
    methods: {

    },
    mounted () {

        for (let i = 1; i <= 10; i++) {

            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((resp) => {
                
                const email = resp.data.response;

                this.emails.push(email);

            })

        }

        console.log(this.emails);
    }
}
).mount('#app')