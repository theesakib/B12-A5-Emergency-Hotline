1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
  Ans: getElementById selects one element by ID, getElementsByClassName selects all elements by class, querySelector selects the first element by any CSS selector, and querySelectorAll selects all elements by any CSS selector.

2.How do you create and insert a new element into the DOM?
  Ans: First create a new element using "document.createElement()" ,and then set it's content and finally insert it into the DOM using "appendChild()"

3.What is Event Bubbling and how does it work?
  Ans:When something happens on a child element, the same event automatically goes up to its parent elements.. For stop it we can use event "stopPropagation()"

4.What is Event Delegation in JavaScript? Why is it useful?
  Ans: An event delegation is a way where i can attached a single event listener to a parent istead of multiple child.Parent listens for events on its children using event bubbling.

5.What is the difference between preventDefault() and stopPropagation() methods?
  Ans:preventDefault() stops default browser action, and stopPropagation() stops event from reaching parent elements.