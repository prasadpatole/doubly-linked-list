const Node = require('./node');

class LinkedList {
	
    constructor() {
		this.length = 0;
		this._head = null;
		this._tail = null;
	}

    append(data) {		
		if(this.length > 0){
			this._tail = new Node(data, this._tail);
		}
		else{			
			var node = new Node(data);
			this._head = node;
			this._tail = node;			
		}
		this.length++;
	}

    head() {
		return this._head.data;
	}

    tail() {
		return this._tail.data;
	}

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {
		return this.length <= 0;
	}

    clear() {
		this.length = 0;
		this._head.data = null;
		this._tail.data = null;
	}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
