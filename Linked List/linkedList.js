/*LinkedList */

function LinkedList(){
    var length = 0
    var head = null

    var Node = function(element){
        this.element = element
        this.next = null
    }

    this.size = function(){
        return length
    }

    this.head = function(){
        return head
    }

    this.add = function(element){
        var node = new Node(element)
        if(head === null){
            head = node
        }else{
            var currentNode = head

            while(currentNode.next){
                currentNode = currentNode.next
            }
            currentNode.next = node
        }
        length++
    }

    this.remove = function(element){
        var currentNode = head
        var previousNode

        if(currentNode.element === element){
            head = currentNode.next
        }else{
            while(currentNode.element !== element){
                previousNode = currentNode
                currentNode = currentNode.next
            }
            previousNode.next = currentNode.next;
        }
        length--
    }

    this.isEmpty = function(){
        return length === 0
    }

    this.indexOf = function(element){
        var currentNode = head
        var index = -1

        while(currentNode){
            index++
            if(currentNode.element === element){
                return index
            }
            currentNode = currentNode.next
        }

        return -1
    }

    this.elementAt = function(index){
        var currentNode = head
        var count = 0
        while(count < index){
            count++
            currentNode = currentNode.next
        }
        return currentNode.element
    }

    this.addAt = function(index, element){
        var node = new Node(element)
        var currentNode = head
        var previousNode
        var currentIndex = 0

        if(index > length){
            return false
        }
        if(index === 0){
            node.next = currentNode
            head = node
        }else{
            while(currentIndex < index){
                currentIndex++
                previousNode = currentNode
                currentNode = currentNode.next
            }
            node.next = currentNode
            previousNode.next = node
        }
        length++
    }

    this.removeAt = function(index){
        var currentNode = head
        var previousNode
        var currentIndex = 0

        if(index < 0 || index >= length){
            return null
        }
        if(index === 0){
            head = currentNode.next
        }else{
            while(currentIndex < index){
                currentIndex++
                previousNode = currentNode
                currentNode = currentNode.next
            }
            previousNode.next = currentNode.next
        }
        length--
        return currentNode.element

    } 
}

var ll = new LinkedList()
ll.add('Kitten')
ll.add('Puppy')
ll.add('Dog')
ll.add('Cat')
ll.add('Fish')
console.log(ll.size());
console.log(ll.removeAt(3));
console.log(ll.elementAt(3));
console.log(ll.indexOf('Puppy'));
console.log(ll.size());

/*

Array vs Linked List

Arrays: Fixed Size; inefficient Insertion and Deletions; Random access i.e., Efficient indexing;
Many result in much memory waste. Sequential access is faster [Reason: Elements in contiguous memory locations].

Linked List: Dynamic size; Efficient Insertion and Deletions; No random access;
No waste of memory. Sequential access is slow [Reason: Elements not in contiguous memory locations].
*/