
var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";

var QUESTIONS = [
    "Given a list of integers, find the highest product you can get from three of the integers.",
    "You have a list of integers, and for each index you want to find the product of every integer except the integer at that index.",
    "Write a function to see if a binary tree is superbalanced.  A tree is superbalanced if the difference between the depths of any two leaf nodes ↴ is no greater than one.",
    "Write a function that takes an interger n and returns the nth fibonacci number.",
    "Write a function to check if a given integer is prime",
    "Suppose we had a list of n integers sorted in ascending order. How quickly could we check if a given integer is in the list?",
    "Find the most frequent integer in an array",
    "Find pairs in an integer array whose sum is equal to 10 bonus: do it in linear time",
    "Write fibbonaci iteratively and recursively (bonus: use dynamic programming)",
    "Find the only element in an array that only occurs once.",
    "Find the common elements of 2 int arrays",
    "Implement binary search of a sorted array of integers",
    "Implement binary search in a rotated array",
    "Use dynamic programming to find the first X prime numbers",
    "Write a function that prints out the binary form of an int",
    "Implement parseInt",
    "Implement squareroot function",
    "Implement an exponent function",
    "Write a multiply function that multiples 2 integers without using *",
    "Find the first non-repeated character in a String",
    "Reverse a String iteratively and recursively",
    "Determine if 2 Strings are anagrams",
    "Check if String is a palindrome",
    "Check if a String is composed of all unique characters",
    "Determine if a String is an int or a double",
    "Implement a BST with insert and delete functions",
    "Print a tree using BFS and DFS",
    "Write a function that determines if a tree is a BST",
    "Find the smallest element in a BST",
    "Find the 2nd largest number in a BST",
    "Given a binary tree which is a sum tree (child nodes add to parent), write an algorithm to determine whether the tree is a valid sum tree",
    "Find the distance between 2 nodes in a BST and a normal binary tree",
    "Print the coordinates of every node in a binary tree, where root is 0,0",
    "Print a tree by levels",
    "Given a binary tree which is a sum tree, write an algorithm to determine whether the tree is a valid sum tree",
    "Given a tree, verify that it contains a subtree.",
    "Implement a stack with push and pop functions",
    "Implement a queue with queue and dequeue functions",
    "Find the minimum element in a stack in O(1) time",
    "Write a function that sorts a stack (bonus: sort the stack in place without extra memory)",
    "Implement a binary min heap. Turn it into a binary max heap",
    "Implement a linked list (with insert and delete functions)",
    "Find the Nth element in a linked list",
    "Remove the Nth element of a linked list",
    "Check if a linked list has cycles",
    "Check whether a link list is a palindrome",
    "Reverse a linked list iteratively and recursively",
    "Implement bubble sort",
    "Implement selection sort",
    "Implement insertion sort",
    "Implement merge sort",
    "Implement quick sort"
];

/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');

var Question = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
Question.prototype = Object.create(AlexaSkill.prototype);
Question.prototype.constructor = Question;

Question.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    //console.log("onSessionStarted requestId: " + sessionStartedRequest.requestId + ", sessionId: " + session.sessionId);
    // any initialization logic goes here
};

Question.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    //console.log("onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    handleNewQuestionRequest(response);
};

/**
 * Overridden to show that a subclass can override this function to teardown session state.
 */
Question.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    //console.log("onSessionEnded requestId: " + sessionEndedRequest.requestId + ", sessionId: " + session.sessionId);
    // any cleanup logic goes here
};

Question.prototype.intentHandlers = {
    "GetNewFactIntent": function (intent, session, response) {
        handleNewQuestionRequest(response);
    },

    "AMAZON.HelpIntent": function (intent, session, response) {
        response.ask("You can say give me a programming question, or, you can say exit... What can I help you with?", "What can I help you with?");
    },

    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    },

    "AMAZON.CancelIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    }
};

function handleNewQuestionRequest(response) {
    // Get a random space fact from the space facts list
    var questionIndex = Math.floor(Math.random() * QUESTIONS.length);
    var randomQuestion = QUESTIONS[questionIndex];

    // Create speech output
    var speechOutput = "Here's your Programming Question: " + randomQuestion;
    var cardTitle = "Your Question";
    response.tellWithCard(speechOutput, cardTitle, speechOutput);
}

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the SpaceGeek skill.
    var question = new Question();
    question.execute(event, context);
};
