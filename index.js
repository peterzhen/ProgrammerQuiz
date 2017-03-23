
var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";

var QUESTIONS = [
    "Given a list of integers, find the highest product you can get from three of the integers.",
    "You have a list of integers, and for each index you want to find the product of every integer except the integer at that index.",
    "Write a function to see if a binary tree is superbalanced.  A tree is superbalanced if the difference between the depths of any two leaf nodes ↴ is no greater than one.",
    "Write a function that takes an interger n and returns the nth fibonacci number.",
    "Write a function to check if a given integer is prime",
    "Suppose we had a list of n integers sorted in ascending order. How quickly could we check if a given integer is in the list?"
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
