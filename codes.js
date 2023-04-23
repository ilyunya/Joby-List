const app = {
    data() {
        return {
            titleText: 'JOBY LIST TESTING V',
            placeholderInput: 'введите значение',
            inputValue: '',
            notes: []
        }
    },
    methods: {
        resultApp(event) {
            this.inputValue = event.target.value
        },
        addMyNote() {
            if(this.inputValue !== '') {
                this.notes.push(this.inputValue);
                this.inputValue = '';
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        deleteNotes() {
            this.notes.pop(this.inputValue)
        }
    }
}

Vue.createApp(app).mount('#app')