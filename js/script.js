console.log (Hello, world);

// Создаем новую сущность Vue.js
var demo = new Vue({
	
	// DOM элемент, к которому прикреплена сущность
	el: '#main',

    // Начало модели.
	// Определяем свойства и присваиваем им необходимые значения.
	data: {
		active: 'home'
	},

	// Функции, которые будем использовать.
	methods: {
		makeActive: function(item){
			// Когда модель будет изменена, представление обновится.
			this.active = item;
		}
	}
});

