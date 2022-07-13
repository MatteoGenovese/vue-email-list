var app = new Vue({
    el: '#app',

    data: {
        contacts: [],
    },

    methods: {
        getContact: function(indexPassed) {
            return this.contacts[indexPassed];
        },
        generateNewEmails: function() {
            for (let index = 0; index < 10; index++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        this.contacts.push(response.data.response)
                        console.log(response.data.response);
                    })
            }
        },
        generationHasFinished: function() {
            if (this.contacts.length == 10)
                return true;
            else
                return false;
        }
    },
    created() {
        this.generateNewEmails();
    },
});