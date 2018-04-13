Vue.component("message", {
    props: [
        'title',
        'body'
    ],
    data() {
        return {
            isVisible: true
        }
    },
    template: `
        <article class="message" v-show="isVisible">
            <div class="message-header">
                {{ title }}

                <button class="close" @click="isVisible = false">x</button>
            </div>
            <div class="message-body">
                {{ body }}
            </div>
        </article>
    `
});

Vue.component('task-list', {

    template: `
    
        <div>
            <task v-for="task in tasks">{{task.task}}</task>
        </div>`,

    data() {
        return {
            tasks: [

                { 
                    task: 'Do some work',
                    complete: true
                },
                { 
                    task: 'Eat lunch',
                    complete: false
                },
                {
                    task: 'Drink water',
                    complete: true
                },
                {
                    task: 'Get some sleep',
                    complete: false
                }

            ]
        }
    }

});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

new Vue({
    el: "#root"
});