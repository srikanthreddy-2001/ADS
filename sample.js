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

// Function to print the Linked List
function printList(head){
	while (head.next){
		document.write(head.val,' -> ')
		head = head.next
	}
	document.write(head.val,'')
}

// Function that removes continuous nodes
// whose sum is K
function removeZeroSum(head, K){

	// Root node initialise to 0
	let root = new ListNode(0)

	// Append at the front of the given
	// Linked List
	root.next = head

	// Map to store the sum and reference
	// of the Node
	let umap = new Map();

	umap.set(0,root)

	// To store the sum while traversing
	let sum = 0

	// Traversing the Linked List
	while (head != null){

		// Find sum
		sum += head.val

		// If found value with (sum - K)
		if (umap.has(sum - K) == true){

			let prev = umap.get(sum - K)
			let start = prev

			// Delete all the node
			// traverse till current node
			let aux = sum

			// Update sum
			sum = sum - K

			// Traverse till current head
			while (prev != head){
				prev = prev.next
				aux += prev.val
				if (prev != head)
					umap.delete(aux)
			}

			// Update the start value to
			// the next value of current head
			start.next = head.next
		}

		// If (sum - K) value not found
		else
			umap.set(sum,head)

		head = head.next
	}

	// Return the value of updated
	// head node
	return root.next
}


// Driver Code

// Create Linked List
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

// A nexted list node
class Node
{
	constructor()
	{
		this.data = 0;
		this.next = null;
	}
};

/* Function to insert a node at the beginning */
function push(head_ref, new_data)
{
	var new_node = new Node();
	new_node.data = new_data;
	new_node.next = (head_ref);
	(head_ref) = new_node;
	return head_ref;

}

/* Utility function to print a singly linked list */
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

// Main function that inserts nodes of linked list q into p at
// alternate positions. Since head of first list never changes
// and head of second list may change, we need single pointer
// for first list and double pointer for second list.
function merge(p, q)
{
	var p_curr = p, q_curr = q;
	var p_next, q_next;

	// While there are available positions in p
	while (p_curr != null && q_curr != null)
	{
		// Save next pointers
		p_next = p_curr.next;
		q_next = q_curr.next;

		// Make q_curr as next of p_curr
		q_curr.next = p_next; // Change next pointer of q_curr
		p_curr.next = q_curr; // Change next pointer of p_curr

		// Update current pointers for next iteration
		p_curr = p_next;
		q_curr = q_next;
	}

	q = q_curr; // Update head pointer of second list
	return q;
}

// Driver code
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



	//4 In an array, Count Pairs with given sum
	
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

// driver code

let arr = [ -1, 2, -3, 4, 5, 6, -7, 8, 9 ];
move(arr);
for (let e of arr)
	document.write(e , " ");

// This code is contributed by shinjanpatra





// 8 Reverse a string using a stack data structure
var head; 
	/* Linked list Node */
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
		/* Reverse first k nodes of linked list */
		while (count < k && current != null) {
			next = current.next;
			current.next = prev;
			prev = current;
			current = next;
			count++;
		}
		/*
		next is now a pointer to (k+1)th node
		Recursively call for the list starting
		from current. And make rest of the list
		as next of first node
		*/
		if (next != null)
			head.next = reverse(next, k);

		// prev is now head of input list
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