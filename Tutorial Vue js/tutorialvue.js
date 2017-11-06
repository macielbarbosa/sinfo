var data = {
  app1: {
    message: 'Opa! Eae Vue!'
  },
  app2: {
    title: 'Você carregou esta página em ' + new Date().toLocaleString()
  },
  app3: {
    ver: true
  },
  app4: {
    todos: [
      { text: 'Aprender JavaScript' },
      { text: 'Aprender Vue' },
      { text: 'Criar algo incrível' }
    ]
  },
  login: {
    tipo: 'email'
  }
};

Vue.component('login',{
  props: ['type'],
  template: "<form><label>{{typeText}}</label><input type='text' v-bind:placeholder='placeholderText'></form>",
  computed: {
    placeholderText: function() {
      return this.type === 'usuario' ? 'Informe o nome de usuário' : 'Informe o endereço de e-mail'
    },
    typeText: function () {
      debugger
      return this.type === 'usuario' ? 'Usuário' : 'E-mail'
    }
  }
});

var reutilizacaoKey = new Vue({
  el: '#reut-key',
});



var condicional = new Vue({
  el: '#condicional',
  data: {
    ok: true
  }
});

var valoresMultiplos = new Vue({
  el: '#valores-multiplos'
});

var estiloInline = new Vue({
  el: '#estilo-inline',
  data: {
    paragrafo: {
      display: 'displayBlock',
      color: 'white',
      maxWidth: '150px',
      textAlign: 'center'
    },
    botao: {
      backgroundColor: 'gray',
      borderRadius: '15px'
    }
  }
});

var classesArray = new Vue({
  el: '#classes-array',
  data: {
    styleButton: 'btn-warning',
    text: 'text-success'
  },
  computed: {
    classObject: function() {
      return {
        'text-primary': !this.hasError && this.isActive,
        'btn-danger': this.hasError && !this.isActive
      }
    }
  }
});

var classesObjeto = new Vue({
  el: '#classes-objeto',
  data: {
    hasError: true,
    isActive: false
  },
  computed: {
    classObject: function() {
      return {
        'text-primary': !this.hasError && this.isActive,
        'btn-danger': this.hasError && !this.isActive
      }
    }
  }
});

var watchResponse = new Vue({
  el: '#watch-response',
  data: {
    pergunta: '',
    resposta: 'Eu não posso responder até que você faça uma pergunta! :p'
  },
  watch: {
    pergunta: function (novaPergunta) {
      this.resposta = 'Estou esperando você terminar de digitar...';
      this.getResposta()
    }
  },
  methods: {
    getResposta: _.debounce(
      function () {
        var vm = this;
        if(this.pergunta.length === 0){
          this.resposta = 'Eu não posso responder até que você faça uma pergunta! :p';
          return;
        }
        if(this.pergunta.indexOf('?') === -1) {
          this.resposta = 'Perguntas geralmente de o sinal de interrogação! ;)';
          return;
        }
        this.resposta = 'Estou pensando...';
        axios.get('https://yesno.wtf/api')
          .then(function (resposta) {
            vm.resposta = resposta.data.answer === 'yes' ? 'Sim' : resposta.data.answer === 'no' ? 'Não' : 'Talvez';
          })
          .catch(function (erro) {
            vm.resposta = 'Ocorreu um erro. Não foi possível utilizar a API: '+erro;
          })
      },
      1000
    )
  }
});




Vue.component('app-one',{
    template: '<div>{{ message }}</div>',
    data: function () {
        return data.app1
    }
});

Vue.component('app-two',{
    template: '<div><span :title="title">Pare o mouse sobre mim e veja a dica interligada dinamicamente!</span></div>',
    data: function () {
        return data.app2
    }
});

Vue.component('app-three',{
    template: "<div><p v-if='ver'>Agora você me viu</p></div>",
    data: function () {
        return data.app3
    }
});

Vue.component('app-four',{
    template: "<ol><li v-for='algo in todos'>{{ algo.text }}</li></ol>",
    data: function () {
        return data.app4
    }
});


var vm = new Vue({
    el: '#app',
    data: data
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

var computed = new Vue({
	el: '#computed',
	data: {
		mensagem: "Opa! e ae"
	},
    methods:{
	  mensagemInversa: function () {
          return this.mensagem.split('').reverse().join('')
      }
    },
	computed: {
		mensagemInversa: function () {
			return this.mensagem.split('').reverse().join('')
		}/*,
        now: function () {
		    return Date.now()
        }*/
	}
});

var watch = new Vue({
    el: '#watch',
    data: {
        firstname: 'Maciel',
        lastname: 'Barbosa',
        fullname: 'Maciel Barbosa'
    },
    watch: {
        firstname: function (first) {
            this.fullname = first + ' ' + this.lastname
        },
        lastname: function (val) {
            this.fullname = this.firstname + ' ' + val
        }
    }
});

var fullnameComputed = new Vue({
    el: '#fullname-computed',
    data: {
        firstname: 'Maciel',
        lastname: 'Barbosa'
    },
    computed: {
        fullname: function () {
            return this.firstname + ' ' + this.lastname
        }
    }
});

var computedgs = new Vue({
    el: '#computed-gs',
    data: {
        firstname: 'Maciel',
        lastname: 'Barbosa'
    },
    computed: {
        fullname: {
            get: function () {
                return this.firstname + ' ' + this.lastname
            },
            set: function (newValue) {
                var names =  newValue.split(' ');
                this.firstname = names.shift();
                this.lastname = names.pop()
            }
        }
    }
});
