## ProgrammerQuiz

[Alexa Store Link][ProgrammerQuiz]

[ProgrammerQuiz]: https://www.amazon.com/THOS-Programmer-Quiz/dp/B06XT4V8VF/ref=sr_1_1?s=digital-skills&ie=UTF8&qid=1499926559&sr=1-1&keywords=programmer

ProgrammerQuiz is an Alexa Skill built for Amazon Echo that helps programmers stay sharp by practicing common software engineering interview questions.

## Instructions

To use this Amazon Alexa Skill, follow the [link][ProgrammerQuiz] to add the skill to your Amazon account.  This will enable the skill on all your Alexa enabled devices(Amazon Echo, Amazon Dot etc...).  To invoke ProgrammerQuiz simply say:

`"Alexa, open Programmer Quiz"`

This will start up the application and provide you with interview question for you to solve.

## The Code

ProgrammerQuiz is built using the `Amazon Alexa SDK` using `Node` and `JavaScript` as the language of choice.  Leveraging the `Alexa SDK`, I set up event listeners for specific voice commands to interact with the user when the program is active.  When a new request for a question is activated, a random question from the preset data is selected and is given to the user.

```javascript
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
```
