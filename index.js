// Survey structure file for surveyjs.

// This controls some styling options for the theme of the survey
var defaultThemeColors = Survey
    .StylesManager
    .ThemeColors["default"];
defaultThemeColors["$main-color"] = "#293652";
defaultThemeColors["$main-hover-color"] = "#f19436";
defaultThemeColors["$text-color"] = "#293652";
defaultThemeColors["$header-color"] = "#293652";

defaultThemeColors["$header-background-color"] = "#293652";
defaultThemeColors["$body-container-background-color"] = "#293652";

// Survey questions
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    pages: [
        {
            questions: [
                
                {
                    type: "html",
                    title: "Learning Assessment!",
                    html: "<h1>Learning Assessment!</h1>You are about to start a learning assessment! <br/>This will help determine your learning style.<br/>Please click on the <b>'Next'</b> button when you are ready."
                }
            ]
        }, {
             questions: [
        {
            "type": "sortablelist",
            "name": "question1",
            "title": "What type of learner are you? Order the words that describes you the most. ",
            "isRequired": true,
            "choices": ["Arrange, Blend, Develop", "Recipe, Logical, Structure", "Articulate, Huddle, Role-play", "Judicious, Diagnostic, Investigative"]
        }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "question2",
                    title: "What most describes you?'",
                    choicesOrder: "random",
                    choices: [
                        "Step ", "Research", "Creative", "Test"
                    ],
                    
                }
            ]
        }, {
            maxTimeToFinish: 15,
            questions: [
                {
                    type: "sortablelist",
                    name: "question3",
                    title: "Sort these in order of importance to your learning style",
                    choicesOrder: "random",
                    choices: [
                        "Hypothesis, Explanitory, Determining", "Vent, Groupthink, Dialog","Standarize, Practical, Tabulate","Reconstruct, Integrate, Synthesize"
                    ],
                    
                }
            ]
        }
    ]
};

// Display method for survey
window.survey = new Survey.Model(json);

// Server method
/*
survey.onComplete.add(function (sender, options) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", " https://surveyjs.io/api/MySurveys/generateAccessKey?accessKey={5926921888df4091a377f661132274db}");
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhr.send(JSON.stringify(sender.data));
});*/

//You should get the Guid for storing survey data in surveyjs.io service storage
survey.surveyPostId = '06cebbb5-a980-4154-be23-81a79e312bf6';
//You may call survey.sendResult function as another option.
function sendDataToServer(survey) {
  survey.sendResult('10c574fc-692a-4b9c-9294-bf8f2a453372');
}


$("#surveyElement").Survey({model: survey});
