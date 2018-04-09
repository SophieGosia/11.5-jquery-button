function Button(text) {
	this.text = text || 'Hello';
}

Button.prototype = {
	create: function() {
    var self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function() {
			alert(self.text);
    });
    this.$element.appendTo($('body'));
		this.$element.addClass('button');
	}
};

var btn1 = new Button('Hello!');
var btn2 = new Button('Hola!');
var btn3 = new Button('Zdravo!');
var btn4 = new Button('Cześć!');

btn1.create();
btn2.create();
btn3.create();
btn4.create();