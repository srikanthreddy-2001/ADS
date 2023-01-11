// 1 Delete the elements in an linked list whose sum is equal to zero
class ListNode{
	constructor(val){
		this.val = val
		this.next = null
	}
}

// Function to create Node
function getNode(data){
	let temp = new ListNode(data)
	temp.next = null
	return temp
}
function printList(head){
	while (head.next){
		document.write(head.val,' -> ')
		head = head.next
	}
	document.write(head.val,'')
}
function removeZeroSum(head, K){
	let root = new ListNode(0)
	root.next = head
	let umap = new Map();
	umap.set(0,root)
	let sum = 0
	while (head != null){
		sum += head.val
		if (umap.has(sum - K) == true){
			let prev = umap.get(sum - K)
			let start = prev
			let aux = sum
			sum = sum - K
			while (prev != head){
				prev = prev.next
				aux += prev.val
				if (prev != head)
					umap.delete(aux)
			}
			start.next = head.next
		}
		else
			umap.set(sum,head)
		head = head.next
	}
	return root.next
}
let head = getNode(1)
head.next = getNode(2)
head.next.next = getNode(-3)
head.next.next.next = getNode(3)
head.next.next.next.next = getNode(1)
let K = 5
head = removeZeroSum(head, K)
if(head != null)
	printList(head)

// 2 Javascript program to merge a linked list into another at alternate positions a nexted list node
class Node
{
	constructor()
	{
		this.data = 0;
		this.next = null;
	}
};

function push(head_ref, new_data)
{
	var new_node = new Node();
	new_node.data = new_data;
	new_node.next = (head_ref);
	(head_ref) = new_node;
	return head_ref;

}

function printList(head)
{
	var temp = head;
	while (temp != null)
	{
		console.log( temp.data + " ");
		temp = temp.next;
	}
	console.log("<br>");
}

function merge(p, q)
{
	var p_curr = p, q_curr = q;
	var p_next, q_next;
	while (p_curr != null && q_curr != null)
	{
		p_next = p_curr.next;
		q_next = q_curr.next;
		q_curr.next = p_next; 
		p_curr.next = q_curr; 
		p_curr = p_next;
		q_curr = q_next;
	}
	q = q_curr; 
	return q;
}
var p = null, q = null;
p = push(p, 3);
p = push(p, 2);
p = push(p, 1);
console.log( "First Linked List:<br>");
printList(p);
q = push(q, 8);
q = push(q, 7);
q = push(q, 6);
q = push(q, 5);
q = push(q, 4);
console.log( "Second Linked List:<br>");
printList(q);
q = merge(p, q);
console.log( "Modified First Linked List:<br>");
printList(p);
console.log( "Modified Second Linked List:<br>");
printList(q);

// 3.Merge a linked list into another linked list at alternate positions.
class Node
{
	constructor()
	{
		this.data = 0;
		this.next = null;
	}
};
function push(head_ref, new_data)
{
	var new_node = new Node();
	new_node.data = new_data;
	new_node.next = (head_ref);
	(head_ref) = new_node;
	return head_ref;
}
function printList(head)
{
	var temp = head;
	while (temp != null)
	{
		console.log( temp.data + " ");
		temp = temp.next;
	}
	console.log("<br>");
}

function merge(p, q)
{
	var p_curr = p, q_curr = q;
	var p_next, q_next;
	while (p_curr != null && q_curr != null)
	{
		p_next = p_curr.next;
		q_next = q_curr.next;
		q_curr.next = p_next; 
		p_curr.next = q_curr; 
		p_curr = p_next;
		q_curr = q_next;
	}
	q = q_curr; 
	return q;
}
var p = null, q = null;
p = push(p, 3);
p = push(p, 2);
p = push(p, 1);
console.log( "First Linked List:<br>");
printList(p);
q = push(q, 8);
q = push(q, 7);
q = push(q, 6);
q = push(q, 5);
q = push(q, 4);
console.log( "Second Linked List:<br>");
printList(q);
q = merge(p, q);
console.log( "Modified First Linked List:<br>");
printList(p);
console.log( "Modified Second Linked List:<br>");
printList(q);

// 4 In an array, Count Pairs with given sum
	
	function getPairsCount(arr, n, sum)
{
    let count = 0; 
    for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++)
            if (arr[i] + arr[j] == sum)
                count++;
    return count;
}
    let arr = [ 1, 5, 7, -1, 5 ];
    let n = arr.length;
    let sum = 6;
    console.log("Count of pairs is "
        + getPairsCount(arr, n, sum));

//5 Find duplicates in an array
const a = [4,3,6,3,4,3]

function count_duplicate(a){
 let counts = {}
 for(let i =0; i < a.length; i++){ 
     if (counts[a[i]]){
     counts[a[i]] += 1
     } else {
     counts[a[i]] = 1
     }
    }  
    for (let prop in counts){
        if (counts[prop] >= 2){
            console.log(prop + " counted: " + counts[prop] + " times.")
        }
    }
  console.log(counts)
}

count_duplicate(a)

/* 6 max and min array value */
let arrayList = [1, 2, 3, 4, 3, 20, 10];
let maxNum = arrayList.reduce((prev, current) => {
  return Math.max(prev, current)
});
let minNum = arrayList.reduce((prev, current) => {
  return Math.min(prev, current)
});
console.log(maxNum);
console.log(minNum);


// 7 A JavaScript program to put all negative numbers before positive numbers
function move(arr){
	arr.sort();
}

let arr = [ -1, 2, -3, 4, 5, 6, -7, 8, 9 ];
move(arr);
for (let e of arr)
	document.write(e , " ");


// 8 Reverse a string using a stack data structure
var head; 
	class Node {
			constructor(val) {
				this.data = val;
				this.next = null;
			}
		}
	function reverse(head , k) {
		if (head == null)
			return null;
		var current = head;
		var next = null;
		var prev = null;
		var count = 0;
		while (count < k && current != null) {
			next = current.next;
			current.next = prev;
			prev = current;
			current = next;
			count++;
		}
		if (next != null)
			head.next = reverse(next, k);
		return prev;
	}
	function push(new_data) {
		new_node = new Node(new_data);
		new_node.next = head;
		head = new_node;
	}
	function printList() {
		temp = head;
		while (temp != null) {
			console.log(temp.data + " ");
			temp = temp.next;
		}
		console.log("<br/>");
	}
		push(9);
		push(8);
		push(7);
		push(6);
		push(5);
		push(4);
		push(3);
		push(2);
		push(1);
		console.log("Given Linked List");
		printList();
		head = reverse(head, 3);
		console.log("Reversed list");
		printList();

/* 9 Evaluate a postfix expression using stack*/
function evaluatePostfix(exp)
{
	let stack = [];
	for (let i = 0; i < exp.length; i++)
	{
		let c = exp[i];
		if (c == ' ')
		{
			continue;
		}
		else if (c >= '0' && c <= '9')
		{
			let n = 0;
			while (c >= '0' && c <= '9')
			{
				n = n * 10 + (c - '0');
				i++;
				c = exp[i];
			}
			i--;
			stack.push(n);
		}
		else
		{
			let val1 = stack.pop();
			let val2 = stack.pop();
			switch (c)
			{
				case '+':
				stack.push(val2 + val1);
				break;
				case '-':
				stack.push(val2 - val1);
				break;
				case '/':
				stack.push(parseInt(val2 / val1, 10));
				break;
				case '*':
				stack.push(val2 * val1);
				break;
			}
		}
	}
	return stack.pop();
}
let exp = "100 200 + 2 / 5 * 7 +";
console.log(evaluatePostfix(exp));

//10 Implement a queue using the stack data structure
class Queue{
	constructor()
	{
		this.s1 = [];
		this.s2 = [];
	}
	enQueue(x)
	{
		while (this.s1.length != 0)
		{ 
			this.s2.push(this.s1.pop()); 
		} 
		this.s1.push(x);
		while (this.s2.length != 0) 
		{ 
			this.s1.push(this.s2.pop()); 
		} 
	}
	deQueue() 
	{
		if (this.s1.length == 0) 
		{ 
			console.log("Q is Empty"); 
		} 
		let x = this.s1[this.s1.length - 1]; 
		this.s1.pop(); 
		return x; 
	}
	}
	let q = new Queue(); 
	q.enQueue(1); 
	q.enQueue(2); 
	q.enQueue(3); 
	console.log(q.deQueue() ); 
	console.log(q.deQueue() );
	console.log(q.deQueue() );