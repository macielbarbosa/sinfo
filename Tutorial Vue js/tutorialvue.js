var data = {
    message: 'Opa! Eae Vue!'
};

Vue.component('app-one',{
   template: '<div>{{ message }}</div>',
    data: function () {
        return data
    }
});

var vm = new Vue({
	el: '#app'
});

/*
var app = new Vue({
	el: '#app',
	data: {
		message: 'Opa! Eae Vue!'
	}
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Você carregou esta página em ' + new Date().toLocaleString()
  }
});

var app3 = new Vue({
	el: '#app-3',
	data: {
		ver: true
	}
});

var app4 = new Vue({
	el: '#app-4',
	data: {
		todos: [
			{ text: 'Aprender JavaScript' },
			{ text: 'Aprender Vue' },
			{ text: 'Criar algo incrível' }
		]
	}
});

var app5 = new Vue({
	el: '#app-5',
	data: {
		message: "Maciel Barbosa"
	},
	methods: {
		reverseMessage: function () {
			this.message = this.message.split('').reverse().join('')
		}
	}
});

var app6=  new Vue({
	el: '#app-6',
	data: {
		message: "Sinfo"
	}
});

Vue.component('todo-item',{
	props: ['todo','id'],
	template: '<li>{{ id }} {{ todo.text}}</li>'
});

var app7 = new Vue({
	el: '#app-7',
	data: {
		list: [
			{ id:0, text: 'Vegetais' },
			{ id:1, text: 'Queijo' },
			{ id:2, text: 'Qualquer coisa' }
		]
	}
});

var computated = new Vue({
	el: '#computed',
	data: {
		mensagem: "Opa! e ae"
	},
	computed: {
		mensagemInversa: function () {
			return this.mensagem.split('').reverse().join('')
		}
	}
});*/