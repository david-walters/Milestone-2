# Dave's Game - Milestone Project 2


This is a website that I created which is my second assignment on the Front-End Web Development course with The Learning People. The tasks of my assignment were the following;

>Overview:
>- Create an online Quiz of your choice.
>- You will include a ‘How To’ page with clear instructions.
>- You must use appropriate use of JavaScript for the Quiz functionality.
>- You will regularly commit your work to Github as you create your website.
>- There are many examples online of a variation of JavaScript Quizzes.

<br>


## Steps I Took to Complete This Assignment

Having some experience of buiding a website, I had a good idea of a quiz/game that I planned in my head. I was very new to JavaScript so I thought I'd make a fun quiz but more towards a game as I thought a plain quiz would be too boring and simple.

I thought to make a quiz based on images of different animal poos — quizing the user to see if they can guess what animal it was from. I thought this will be a very interesting game and fun also. So having an image of the poo with 4 options beneath with only one being correct. 

I wanted the the correct answer to highlight green if it was selected and if the incorrect ones were selected then for them to turn red, but also to always have the correct one turn green even if the wrong one is selected to show the user the correct answer. I wanted the poo image to also change source to the picture of the animal as a more exciting way of revealing the answer.

I used some course materials to learn basic coding with JS and a few Youtube videos on how to understand JS when making a quiz.

My website was started off by the making of the navbar and footer — using bootstrap. Once that was done I started the welcome pop-up adding a start button and then I moved on to build the how-to-play page before designing the question containers holding the images and answer buttons — I thought that will be a more lengthy task so I thought to get the simple tasks out the way first. Then I created most the JavaScript code to make it all into a functioning quiz before I created a results pop-up at the end providing the user their score along with a comment that suits their score.

I predominantly dealt with HTML and CSS first and making everything responsive to mobile, tablet etc. before moving onto JavaScript. It seemed like the logical thing to do being as JavaScript is about manipulating the DOM.

### Navbar and Footer

The navbar has a poo emoji acting like a logo with the name of the game (**Guess Poo**) attached to the right of it. I added two anchor tags to navigate from the Home page and to the How-to-play page which collapes into a burger button once the screen width becomes less than 576px. The footer didn't require much information, so I wrote a typical copyright statement and I made up a website name with a null link for presentational purposes.

### Welcome Pop-up

I wanted the welcoming message to be a simple pop-up with a provoking statement to the game and a reminder to read the how-to-play page or jump straight in with the start button  — simple and straight to the point with no lenghty reading. All conatainers for my website were made with bootstrap's card attributes and I used a colour style that was similar to the South African and Australian rugby team colours as it gives an exotic animal feel.

### How-to-play Page

The how-to-play page had to be what it says on the tin — literally telling someone how to play so that the user is confident with what they see. This had to be updated now and again throughout building the website as I only had an idea in the beginning of what I wanted to build. I used the same colour scheme and HTML structure for the container except that I used 10 of the 12 collumns in boostrap as this container required a lot more written content.

### Question Containers

The question containers have only what was required and no more as it is going to be repetative and just simply prompting the user for the answer to the question "who does the poo belong to?" So the main thing I needed was a clear image to the question (first thing to be seen), the repeated question underneath (who does the poo belong to?), and then below that; 4 clear options to choose from (only one being the correct answer), and one other essential componant for the quiz is the next button which appears underneath the answers only after an answer has been selected. So the user has the choice to analyze the correct answer and to see the animal image that appears after answering before moving on to the next question.

### Question and Answer Images

Many of my images were obtained from **Pixabay** (free downloadable images website) and the others were obtained just from google search after inspecting if they had copyright properties. In order to get consitancy with the image sizes after rendering through the browser, firstly, they all had to be the same ratio — in my case that was 3:2. I managed to get this ratio by using the Windows 10 picture editor on my computer called **Photos**. Secondly, I had to contain the images within a div and give that div specific CSS properties which were;

```
    width: 100%;
    max-width: 330px;
    height: 75%;
    max-height: 224px;
    border-radius: 20px;
    border: solid 6px #1c6841;
    padding: 1.1px 1.2px;
```
Then with Google Chrome's dev tools I used the inspection tool to see if all the images had the same size specifications. Some images needed to be edited with the crop tool to achieve this as some would take differnt amount of pixels when in mobile view.

### Results Pop-up

For the results pop-up I used the same container that I used in the How-to-play page — changing the title to "Here is Your result!!!" and having two empty `<p>` tags after it, and a final `<p>` tag to instruct how to reset the game (by clicking on the poo emoji in the navbar). The first `<p>` tag has the id of "your-result" and the second one has the id of "comment". These will be accessed with JavaScript to provide the score and the comment that is in accordance to the score.

<br>

## Use of JavaScript

JavaScript is essential for the functionality of the quiz. Without it there is no quiz. The following will explain how I used JS to get the desired results I wanted to be able to make my planned quiz a success.

### The 'Next' Functionality

The 'next' functionality is all about removing the 'hide' class to reveal the next question container and to add the 'hide' class on the current container (to make it disappear). I applied the same functionality to the 'start' button to get rid of the welcome pop-up and to reveal the first question.

All the containers for the quiz (including the welcome pop-up and the results pop-up) have the class 'hide' which is simply `display: none;` So, as of yet, nothing can be seen on the home page until the 'next' function is established, which is as follows;

```
document.getElementsByClassName('hide')[0].style.display = "block";

function next(id) {
    
document.getElementsByClassName('hide')[id-1].style.display = "none";
document.getElementsByClassName('hide')[id].style.display = "block";
}
```
When you use `getElementsByClassName` it registers every element of that class into an array with the first one being at index 0.

As you can see in the block of code above, the first line of code is referencing the 'hide' class at index 0, which is the welcome pop-up, so that will then be displayed as a block element. Underneath that is my 'next' function. This will take a parameter and will be refenced as 'id'.

This is how it will work:

On my start button in the HTML, I have `onclick="next(1)"` applied to it. This will mean that the code `[id-1].style.display = "none";` will essentially mean `[1-1].style.display = "none";`, and 1 - 1 will make 0... so the class at index 0 will have the display of `"none"`, and the code `[id].style.display = "block";` which will essentially mean `[1].style.display = "block";` will make the 'hide' class at index 1 have the display changed to `"block"` thus, revealing the next container which is the first question. On that question is a 'next' button with `onclick="next(2)"` applied to it — folowing the same concept and making the class at index 1 have the display of `"none"` and the class at index 2 have the display of `"block"` thus, revealing the next container which is the second question.

### Incorrect Answers/Buttons

All the wrong answer buttons on question 1 have the class 'wrong1', and all the wrong answer buttons on question 2 have the class 'wrong2', and so on. I esteblished them all into const variables like so `const wrong1 = document.querySelectorAll('.wrong1');` and then made functions with them all like so;

```
wrong1.forEach((e) => {

    e.addEventListener('click',() => {    
        makeRed();
        makeGreen1();    
   });
    
    function makeRed() {

        wrong1.forEach((el) => {
        
        el.style.backgroundColor = 'red';

        })
    }
})
```
Two functions will be executed when an incorrect button is selected; makeRed and makeGreen1 (there's makeGreen2 and 3 and so on for all correct answers).

As you can see, I made an arrow function inside an arrow function which adds an onclick event listener to all the wrong buttons to execute makeRed and makeGreen functions, and then I established the makeRed function which targets all the incorrect answers with the `forEach` attribute to change the background style to red.

### Correct Answers/Buttons


For the correct answer in question 1, I have given it an id of 'correct1', and for question 2 I have given the correct answer the id of 'correct2', and so on. I established them all into const variables like so `const correct1 = document.getElementById('correct1');` to add an onclick event listener to them to execute the makeGreen functions (makeGreen1 for question one, and makeGreen2 for question 2, and so on).

This function will do the following;

```
function makeGreen1() {

    correct1.style.backgroundColor = 'rgb(7 204 7)';
    correct1.style.color = '#fff0c4';
    correct1.style.textShadow = '0px 0px 5px #000000';
    }
```
It will make the button show as green and it will style the writing to make it more visible because white is hard to read in that shade of green. This is also executed when a wrong answer is selected in order to reveal the correct answer to the user.

### Iterating The Score

First of all I had to declare a let variable like so `let score = 0` and intitialize it with the value of 0. This has to be a let variable and not a const as it is going to change through iteration when a correct answer is selected. I then declared a const like so `const scorePlus = document.querySelectorAll('.score-plus')`, this is a class which is applied to every correct answer. I then applied an onclick event on every single correct answer along with an anonymous function like so;

```
scorePlus.forEach(e => {

    e.addEventListener('click', () => {

        score++
        console.log(score)
        console.log('worked')

    } )
})
```
The score++ will iterate score by one and this function will provide the score and the message "worked" in the console to show me that it is funtioning correctly.

### Disabeling The Buttons

If the correct button wasn't disabled after an answer had been selected, then the user could constantly press the correct button and continuously iterate the score. Disabeling the button is essential for that reason. Within the 'makeGreen' functions (because they are executed no matter what answer is selected), I added the following code;

```
document.querySelector('#correct1').disabled = true;
wrong1.forEach((e) => {e.disabled = true;});
```
This code disables all the wrong buttons and the correct button. I disabled the wrong ones also to add a good effect and to prevent the answers from being changed red if the correct one has been selected.

### Revealing The 'Next' Button

All 'next' buttons have an id — 'hide1' for question one, 'hide2' for question 2 (and so on...). All the 'next' buttons are also hidden with the class 'hide'. I declared the 'hide' ids inside the 'makeGreen' function because that function will always execute no matter what answer is selected. I then followed the decleration with a code to remove the 'hide' class from it, just like the following;

```
let hide = document.getElementById('hide1');
hide.classList.remove('hide');
```
I thought when adding the 'hide' class to the 'next' buttons it will affect the 'next' function because the 'hide' classes are all put into an array which are accesed in the function, but due to the fact that this code removes the 'hide' class from the 'next' button, that means it also takes that out of the array, so there are no logical errors with the 'next' funtion.

### Changing The Image Source

Again, because the image source is going to change when any answer is selected, I put the required code into the 'makeGreen' functions because that will also execute no matter what answer is selected. So my 'makeGreen' functions look like the following;

```
function makeGreen1() {

    correct1.style.backgroundColor = 'rgb(7 204 7)';
    correct1.style.color = '#fff0c4';
    correct1.style.textShadow = '0px 0px 5px #000000';
    document.querySelector('#correct1').disabled = true;
    wrong1.forEach((e) => {e.disabled = true;});
    let hide = document.getElementById('hide1');
    hide.classList.remove('hide');
    document.getElementById("image1").src = "Assets/Images/elephant.webp";
}
```
The last line of code in the code above will change the image source. Each image has an id from 'image1' to 'image10' and they all change to the appropriate image source once an answer is selected.

### Revealing Results and Comment

On the 'see result' button in the HTML, I have applied an onclick event with the function 'showResult', which I later established in JavaScript as the following;

```
function showResult() {

    yourResult.innerHTML = `You Scored ${score}/10!!!`;

    if(score <= 4) {
            comment.innerHTML = "I think you need to get your... stuff together!";
    } else if(score <= 6) {
            comment.innerHTML = "Fair play, not a bad effort.";
    } else if(score <= 9) {
            comment.innerHTML = "Very impressive! It seems like you know your... stuff!";
    } else{
        comment.innerHTML = "I'm actually concerned that you got all those correct...";
    }
}
```
So the two empty `<p>` tags on the show result pop-up will have the innerHTML accessed through their ids. Their ids were made as const variables at the beginning of the JS code like so;

```
const yourResult = document.getElementById('your-result');
const comment = document.getElementById('comment');
```

The first `<p>` tag, having the id of yourResult, will insert the sentence `You Scored ${score}/10!!!` into the innerHtml except the code ${score} will print the value of the variable 'score' as a string.

The second `<p>` tag, having the id of 'comment' will insert one of the 4 comments in the above block of code into the innerHTML. The first comment will be inserted if the value of 'score' is less than or equal to 4. If the value of 'score' does not fit this equation, then it will move to the next code to see if it is befitting to that one, (if so then it will insert that comment) and if not, then it will move to the next one. The maximum score that can be reached is 10, so it will have to insert one of those 4 comments once the see result button is selected. 

<br>


## Interesting Issues Through Developing

### Issue 1

A very interesting issue I had which I learned a lot from is not being able to have any of my files located when clicking on the link to see my website live through github, despite having them all added to github. It gave me a reminder that I need to have an index.html file... but I did...

I then realised the issue — I had my index.html written with a capital I and not a lowercase i.

So, once I rectified this, I had another issue adding the file, after changing its name, into the working tree in git. I technically changed the name of the file but git is still working with the old name and not recognising the new one. I then came to learn the following after a Google search;

To rename a file in git, use the git command with mv along with two arguments. The first argument will have the old file name and the second argument will have the new file name. Just like this `git mv Index.html index.html`. If the second argument is a name of a folder, then instead of a rename it wil move the file to that folder. Once I did this, it then worked perfectly.

### Issue 2

I attempted to declare a const by getting an element by its id and naming it 'result'. Once I checked my website in the browser the whole entire content for the quiz had disappeared... I thought perhaps 'result' is a key word and it has caused some unknown issues. I kept renaming the variable and none of them fixed it. 

I then realised... `const yourResult = document.getElementById(your-result);` the id name inside the parentheses were missing quotes like so `document.getElementById('your-result');` and because it was at the very top of the global scope, it prevented the rest of the code from being executed and thus; not showing the welcome pop-up because the hide class was not being removed, so everything was hidden.

### Issue 3

This one is a classic, I'm sure this happens to every newby;

`yourResult.innerHTML = "You Scored ${score}/10!!!";`

This code literally printed ${score} in the innerHTML as it is written and not as the expected string valuable of the variable score... All because I used double quotation marks instead of single back ticks.

### General Issues

All my other issues were basically the same thing over and over again. I was very new to JavaScript so I just kept experimenting with code and hoping to get desired results. It was mainly down to syntax errors and lack of knowledge of what options I could use that caused the issues. Some things I guesed and it worked and others I had to Google to see how others do it, and I extrapolated from them some knowledge and skills to then work with the project. The vast majority of it was trial and error, and I got there in the end.


<br>



## Technologies Used

- [**HTML5**](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
    - The project uses **HTML5** to create the basic elements and content of my website.
- [**CSS3**](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3)
    - The project uses **CSS3** to add custom styles to the elements and content of my website.
- [**Bootstrap v4.3**](https://getbootstrap.com/)
    - The project uses **Bootstrap v4.3** to add a responsive grid system, prebuilt components, plugins built on jQuery, and Bootstrap styles to my website, before adding my custom styles.
- [**jQuery**](https://jquery.com)
    - The project uses **jQuery** to simplify DOM manipulation. This is the standard jQuery that is built with Bootstrap components.
- [**JavaScript**](https://www.javascript.com/)
    - The project uses **JavaScript** from Bootstrap and my own personal JS file which is required to add functionality to the quiz to pop up the next quesion, change image, add score, show results etc,.
- [**Google Fonts**](https://fonts.google.com/)
    - A couple of fonts were used from **Google fonts** to add a playful, non-serious feel to the quiz.
- [**Windows 10 Photos**](https://apps.microsoft.com/store/detail/microsoft-photos/9WZDNCRFJBH4?hl=en-gb&gl=gb)
    - This was the photo editing tool I used to get consistancy in the image sizes.
- [**Visual Studio Code**](https://code.visualstudio.com/)
    - I've used **Visual Studio Code** as the development environment to write the code for my website.
- [**Git**](https://git-scm.com/)
    - I've used **Git** as a version control system to regularly add and commit changes made to project in Cloud9, before pushing them to GitHub.
- [**GitHub**](https://github.com/)
    - I've used **GitHub** as a remote repository to push and store the committed changes to my project from Git. I've also used GitHub pages to deploy my website in a live environment.
- [**Chrome DevTools**](https://developer.chrome.com/docs/devtools/)
    - I've used **Chrome DevTools** to view my website from different screen sizes and to play around with the HTML and CSS before deciding what code to implement.

## Deployment

The hosting platform that I've used for my project is GitHub Pages. To deploy my website to GitHub pages, I used the following steps:

1. Opened the main directory in documents folder, right clicked, selected "git bash here."
2. Initialised Git using the `git init` command.
3. Added all files to the Staging area (Git) using the `git add .` command.
4. Committed the files to Git using the `git commit -m "First commit"` command.
5. Created a new repository in GitHub called 'Milestone-1'.
6. Copied the below code from GitHub into the terminal window:

    ```
    git remote add origin https://https://github.com/david-walters/Milestone-2.git
    
    git push -u -f origin main
    
    ```

7. Entered my GitHub username and password to push the files from Git to GitHub.
8. Went into 'Settings' on my repository page in GitHub.
9. Selected the 'main branch' option under the 'GitHub Pages' section.
10. Opened the provided link to my website in a new tab.

### Repository Link

**https://github.com/david-walters/Milestone-2.git** 

### Live Website Link

**https://david-walters.github.io/Milestone-2/**


## Personal Overview

From the beginning to the end of this assignment, it has been a big journey for me. I started with no experience and I experienced so much in such little time. I came across many hurdles that I overcame through perserverance, problem solving, and research — all of it went in my favour as progression.

I have so much more to learn, more experience to gain, and I can imagine that I will look back at the code I have written and see that I could have done it in a much easier and efficiant way and in possibly a fraction of the time — I hope :joy:

This prjoect has given me a lot of love for JavaScript. I didn't think I'd enjoy so much. It also took away the intimdation of JavaScript as I orignally seen it and thought I will struggle to understand it. So this project has really been beneficial in many ways and I'm looking forward to dealing with it more.

Thanks for checking this out! 

:+1: