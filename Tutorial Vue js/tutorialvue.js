var dados = {
  array1: [
    {id: 0, valor: 'valor 0 array 1'},
    {id: 1, valor: 'valor 1 array 1'},
    {id: 2, valor: 'valor 2 array 1'}
  ],
  array2: [
    {id: 0, valor: 'valor 0 array 2'},
    {id: 1, valor: 'valor 1 array 2'},
    {id: 2, valor: 'valor 2 array 2'},
    {id: 3, valor: 'valor 3 array 2'},
    {id: 4, valor: 'valor 4 array 2'}
  ]
};

Vue.component('dropdown', {
  template: "<select v-model='selecionado' v-on:change='onChange($event.target.value)'>" +
  "<option value='' v-if='useEmpty' selected>--selecione--</option>" +
  "<option v-for='item in opcoes' :value=item.valor>{{item.id}} - {{item.valor}}</option>" +
  "</select>",
  props: ['opcoes','useEmpty'],
  computed: {
    selecionado: function () {
      return this.value
    }
  },
  methods: {
    onChange: function (value){
      if(value==''){
        value = 'valorVazio'
      }
      this.$emit('input',value)
    }
  }

});

var vm = new Vue({
  el: '#app-pratica',
  data: {
    array1: dados.array1,
    array2: dados.array2,
    selected1: dados.array1[0],
    selected2: dados.array2[1]
  }
});

new Vue ({
  el: '#contador',
  components: {
    'simple-counter': {
      template: '<button v-on:click="contador += 1">{{ contador }}</button>',
      // data é tecnicamente uma função, assim o Vue não vai
      // reclamar, mas nós retornamos a mesma referência ao
      // mesmo objeto para qualquer instância do componente
      data: function () {
        return {contador: 0}
      }
    }
  }
});

new Vue ({
  el: '#comp-local',
  components: {
    'meu-componente': {
      template: '<div>Componente personalizado</div>'
    },
    'minha-linha': {
      template: '<tr>Minha linha</tr>'
    }
  }
});

new Vue ({
  el: '#vinc-val',
  data: function () {
    return {
      toggle: 'marcado'
    }
  }
});

new Vue ({
  el: '#select',
  data: function () {
    return {
      selected: 'A',
      options: [
        { text: 'Um', value: 'A' },
        { text: 'Dois', value: 'B' },
        { text: 'Três', value: 'C' }
      ]
    }
  }
});

new Vue ({
  el: '#radio',
  data: function () {
    return {
      picked: ''
    }
  }
});

new Vue ({
  el: '#checkbox',
  data: {
    checado: true,
    checkedNames: []
  }
});

Vue.config.keyCodes.y = 89;

new Vue({
  el: '#mod-teclado',
  data: {
    entrada: ''
  },
  methods: {
    enviar: function () {
      alert(this.entrada);
      this.entrada = ''
    }
  }
});

new Vue({
  el: '#chamada-direta',
  methods: {
    diga: function(string) {
      alert(string)
    },
    warn: function (message, event) {
      // agora temos acesso ao evento nativo
      if (event) event.preventDefault();
      alert(message);
    }
  }
});

var example2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js'
  },
  // define métodos dentro do objeto `methods`
  methods: {
    greet: function (event) {
      // `this` dentro de métodos aponta para a instância Vue
      alert('Olá ' + this.name + '!')
      // `event` é o evento DOM nativo
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
});

var onclick = new Vue({
  el: '#onclick',
  data: {
    contador: 0
  }
});

Vue.component('lista-afazer', {
  template: "<li>{{ title }}<button v-on:click=\"$emit(\'remove\')\">X</button></li>",
  props: ['title']
});

new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Lavar os pratos'
      },
      {
        id: 2,
        title: 'Tirar o lixo'
      },
      {
        id: 3,
        title: 'Cortar a grama'
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      });
      this.newTodoText = ''
    }
  }
});

var intervalo = new Vue({
  el: '#intervalo'
});

var numeros = new Vue ({
  el: "#filtro",
  data: {
    numeros: [1,2,3,4,5,6,7]
  },
  methods: {
    pares: function (array) {
      return array.filter(function (n) {
        return n%2==0
      })
    }
  }
});

var modobj = new Vue ({
  el: "#modObj",
  data: {
    objeto: {
      indice: 1,
      mensagem: "Opa e ai"
    }
  }
});

var key = new Vue ({
  el: "#key",
  data: {
    itens: [
      {
        indice: 1,
        mensagem: "Opa e ai"
      },
      {
        indice: 3,
        mensagem: "tudo bao"
      },
      {
        indice: 4,
        mensagem: "tudo e voce?"
      }
    ]
  }
});

var lista2 = new Vue ({
  el: "#listas2",
  data: {
    objeto: {
      atributo1: 'dado1',
      atributo2: 'dado2',
      atributo3: 'dado3'
    }
  }
});

var lista1 = new Vue ({
  el: "#listas",
  data: {
    titulo: "Item da lista",
    itens: [
      {mensagem: "Opa e ai"},
      {mensagem: "tudo bao"}
    ]
  }
});

var vshow = new Vue ({
  el: '#vshow',
  data: {
    mostrar: true
  }
});

Vue.component('login',{
  props: ['type'],
  template: "<form><label>{{typeText}}</label><input type='text' v-bind:placeholder='placeholderText'></form>",
  computed: {
    placeholderText: function() {
      return this.type === 'usuario' ? 'Informe o nome de usuário' : 'Informe o endereço de e-mail'
    },
    typeText: function () {
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
  }
};

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


var vim = new Vue({
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
