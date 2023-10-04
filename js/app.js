const App = {
    data() {
        return {
            taskText: '',
            editableTask: '',
            tasks: []
        }
    },
    methods: {
        submitTask() {
            if (this.taskText === '') return;

            if (this.editableTask !== '') {
                this.tasks[this.editableTask].text = this.taskText;
                this.editableTask = '';
            } else {
                this.tasks.push({ text: this.taskText, completed: false });
            }

            this.taskText = '';
        },

        toUpperCase(item) {
            return item.toUpperCase();
        },

        removeTask(index) {
            this.tasks.splice(index, 1);
        },

        editTask(index) {
            this.editableTask = index;
            this.$refs.taskInput.focus();
            this.taskText = this.tasks[index].text;
        },

        changeTaskStatus(index) {
            this.tasks[index].completed = !this.tasks[index].completed;
        }
    }
}

Vue.createApp(App).mount('#app');

