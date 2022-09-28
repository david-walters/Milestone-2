# Dave' Game - Milestone Project 2


This is a website that I created which is my second assignment on the Front-End Web Development course with The Learning People. The tasks of my assignment were the following;

>Overview:
>- Create an online Quiz of your choice.
>- You will include a ‘How To’ page with clear instructions.
>- You must use appropriate use of JavaScript for the Quiz functionality.
>- You will regularly commit your work to Github as you create your website.
>- There are many examples online of a variation of JavaScript Quizzes.




## Steps I Took to Complete This Assignment

Having some experience of buiding a website, I had a good idea of a quiz/game that I planned in my head. I was very new to JavaScript so I thought I'd make a fun quiz but more towards a game as I thought a plain quiz would be too boring and simple.

I thought it will be interestiong to make a quiz based on images of different animal poos — quizing the user to see if they can guess what animal it was from. I thought this will be a very interesting game and fun also. So having an image of the poo with 4 options beneath with only one being correct. 

I wanted the the correct answer to highlight green if it was selected and if the incorrect ones were selected then for them to turn red, but also to always have the correct one turn green even if the wrong one is selected to show the user the correct answer. I wanted the poo image to also change source to the picture of the animal as a more exciting way of revealing the answer.

I used some course materials to learn basic coding with JS and a few Youtube videos on how to understand JS when making a quiz.

My website was started off by the making of the navbar and footer — using bootstrap. Once that was done I started the welcome pop-up adding a start button and then I moved on to build the how-to-play page before designing the question containers holding the images and answer buttons — I thought that will be a more lengthy task so I thought to get the simple tasks out the way first. Then I created most the JavaScript code to make it all into a functioning quiz before I created a results pop-up at the end providing the user their score along with a comment that suits their score.

I predominantly dealt with HTML and CSS first and making everything responsive to mobile, tablet etc. before moving onto JavaScript. It seemed like the logical thing to do being as JavaScript is about manipulating the DOM.

### Navbar and Footer

The navbar has a poo emoji acting like a logo with the name of the game (**Guess Poo**) attached to the right of it. I added two anchor tags to navigate from the Home page and to the How-to-play page which collapes into a burger button once the screen width becomes less than 576px. The footer was didn't require much information so I wrote a typical copyright statement and I made up a website name with a null link for presentational purposes.

### Welcome Pop-up

I wanted the welcoming message to be a simple pop-up with a provoking statement to the game and a reminder to read the how-to-play page or jump straight in with the start button  — simple and straight to the point with no lenghty reading. All conatainers for my website were made with bootstrap's card attributes and I used a colour style that was similar to the South African and Australian rugby team colours as it gives an exotic animal feel.

### How-to-play Page

The how-to-play page had to be what it says on the tin — literally telling someone how to play so that the user is confident with what they see. This had to be updated now and again throughout building the website as I only had an idea in the beginning of what I wanted to build. I used the same colour scheme and HTML structure for the container except that I used 10 0f the 12 collumns in boostrap as this container required a lot more written content.

### Question Containers

The question containers have only what was required and no more as it is going to be repetative and just simply prompting the user for the answer to the question "who does the poo belong to?" So the main thing I needed was a clear image to the question (first thing to be seen), the repeated question underneath (who does the poo belong to?), and then below that; 4 clear options to choose from (only one being the correct answer), and one other essentional componant for the quiz is the next button which appears underneath the answers only after an answer has been selected. So the user has the choice to analyze the correct answer and to see the animal image that appears after answering before moving on to the next question.

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

For the results pop-up I used the same container that I used in the How-to-play page — changing the title to "Here is Your result!!!" and having two empty <p> tags after it, and a final <p> tag to instruct how to reset the game (by clicking on to poo emoji in the navbar). The first <p> tag has the id of "your-result" and the second one has the id of "comment". These will be accessed with JavaScript to provide the score and the comment that is in accordance to the score.

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

On my start button in the HTML, I have `onclick="next(1)"` applied to it. This will mean that the code `[id-1].style.display = "none";` will essentially mean `[1-1].style.display = "none";`, and 1 - 1 will make 0... so the class at index 0 will have the display of `"none"`, and the code `[id].style.display = "block";` which will essentially mean `[1].style.display = "block";` which will make the 'hide' class at index 1 have the display changed to `"block"` thus, revealing the next container which is the first question. On that question is a 'next' button with `onclick="next(2)"` applied to it — folowing the same concept and making the class at index 1 have the display of `"none"` and the class at index 2 have the display of `"block"` thus, revealing the next container which is the second question.

### Incorrect Answers/Buttons



## Interesting Issues Through Developing



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

From the beginning to end of this assignment, it has been a big journey for me. I started with no experience and I experienced so much in such little time. I came across many hurdles that I overcame through perserverance, problem solving, and research — all of it went in my favour.

I have so much more to learn, more experience to gain, and I can imagine that I will look back at this website one day and think "What on earth was I thinking" :joy:

It has been a great experience and I'm looking forward to working on my other project assignments that I shall be uploading to my portfolio for people to see.

Thanks for checking this out! 

:+1: