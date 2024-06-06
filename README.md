# 🌊 Beach Quest with Finley and Friends !
<img src="./assets/banner.png"><br>
_This is a submission for [Frontend Challenge v24.04.17]((https://dev.to/challenges/frontend-2024-05-29), Glam Up My Markup: Beaches_

## What I Built


I developed **Beach Quest with Finley and Friends**, a visually stunning and interactive web app designed to showcase a list of beaches provided in the prompt. Being from a coastal city in India, I knew that static images wouldn't capture the true beauty of beaches, so I opted to use videos for the visuals. This led me to work closely with the **HTML5 Video element and API**.

I envisioned the website as a **virtual tour**. To achieve this, I synchronized background videos with the corresponding beach descriptions. This inspired another idea: adding **tour guides** for each beach. That's where Finley and his friends come in—they guide users through the beaches and share their pro tips, making the website more informative.

I built this website with **a strong focus on accessibility, ensuring it is user-friendly for everyone**. To enhance user experience, **I included a navigation menu for easy jumping between sections, a progress bar with previous and next buttons, a loader to handle dynamic video loading, and responsiveness for all devices.** Although I recommend visiting the website on a desktop to truly appreciate the visuals, it is also fully viewable on mobile devices.
 
<!--<video controls><source src="https://github.com/everly-gif/everly-gif/assets/77877486/e043ffd0-e779-4d55-a0cd-d3691911bddb"></source></video>-->
<!-- Tell us what you built and what you were looking to achieve. -->

## Demo
<!-- Show us your project! You can directly embed an editor into this post (see the FAQ section from the challenge page) or you can share an image of your project and share a public link to the code.<video controls><source src="https://github.com/everly-gif/everly-gif/assets/77877486/e043ffd0-e779-4d55-a0cd-d3691911bddb"></source></video> -->

Below, I have added screenshots of all the features I mentioned and provided the deployed URL and GitHub source code.

### Landing screen with Tour Guide and CTA
![Landing screen with Tour Guide and CTA](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/c3yqn2bil4j4sfwcwfxz.png)
### Intro Screen with Progress Bar
![Intro Screen with Progress Ba](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8bp87f6s4up42fd22i7g.png)
### Beach Screen with Background Video
![Beach Screen with Background Video](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sq0hz687lnucvcijqnpn.png)
### Accessibility Navigation Menu
![Accessibility Navigation Bar](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/grzongcnhxg9ecjpijmz.png)
### Responsiveness
![Mobile View](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2raj1enirjlz9jm7kqyq.png)

_Note: you'll only be able to see the loader if there is a delay in loading the video, if you have good internet speed, likely, you will not see it._


I have deployed the website on **GitHub Pages** : https://everly-gif.github.io/BeachQuest/

**Source Code** : https://github.com/everly-gif/BeachQuest

## Journey
Building this wasn't as simple as I initially thought it would be. I faced numerous challenges throughout the process, especially since the rules strictly prohibited altering the markup directly. As a result, every interaction—from the tour guides and navigation bar to the buttons, loader, video element, video overlay and progress bar had to be added using pure JavaScript. Here below I write an overview of my journey.

### Setup

My first challenge was to find freely available videos of the beaches listed in the prompt. After extensive internet searching, I discovered [Pexels.com](https://www.pexels.com/search/videos/beach/). I am incredibly grateful for this resource, as the freely available videos for most of the beaches allowed me to bring my vision to life. _(Thank you, Pexels, all video credits to the rightful owners!)_

Secondly, I needed a tour guide. I went through a lot of different character sets before I found Finley and friends. I found them on [freepik.com](https://www.freepik.com/)(credits to rightful owners). With this, I was all set to dive into logic!

### Development
At first, I began by directly injecting the additional HTML elements needed through JavaScript with the necessary classes and attributes. I then also modified the existing markup through javascript with the necessary attributes.

#### Progress Bar
I used an event listener, `onclick`, to handle the previous and next functionality. I added a `data-index` attribute for easy looping between sections. Later, using the `linear-gradient` CSS property, I dynamically updated the bar color in JavaScript.

#### Beaches, Background Videos, Tour Guides, and Speech Bubbles
I maintained data in an array structure for easy looping. The previously injected `data-index` attribute facilitated easy retrieval of the index, allowing me to set the correct background video, tour guide, appropriate speech bubbles, and beach description for each view. I achieved this by toggling between the `display:none and block/flex` properties.

#### Navigation Menu
I extracted all the data from the markup and appended it to another separate div, `menu-items`. Since the navigation menu was a separate view from the existing markup, I gave each item a `data-slide` attribute to indicate which section to jump to when clicked. I achieved this by toggling between the `display: none` and `block/flex` properties.

#### Responsiveness and Other Styling
I wrote a substantial amount of CSS to center-align the text on top of the background videos. I used properties such as `position`, `z-index`, and `display` to achieve this alignment. Focusing on user-friendliness, I wrote media queries to ensure that the website looks great on all devices. The videos I used are dimensioned to support desktop viewing, so for mobile, I used the `object-fit:fill` property to avoid any white spaces.

### Deployment

I was pretty happy with the development locally after working on it for quite a few days. It was time to take it to the next level!

![Excited](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/153cic4wskwljrfudf1q.gif)
<br>GIF creds : [Gifer](https://gifer.com/)

I first faced the file too large issue. That is when I realized my videos were huge. Locally, I never had an issue, so I hadn't considered the file size. I needed to optimize them to be able to push to GitHub. I used [FreeConvert](https://www.freeconvert.com/video-compressor), an online video compressor tool that helped me to significantly reduce the video file size. I was then able to push my code and deploy it to GitHub Pages.

Later, I faced the grey screen issue while navigating the website using the prev and next buttons. This was happening because the video was taking time to load and set. Again, locally I never faced this issue; it only occurred after deployment. However, this severely affected the user experience of the website, so I had to address it. After much internet surfing, I found video attributes such as `poster` that could contain a loading image/gif URL, which would be displayed before the video loads. But I wasn't really happy with what I was able to achieve with it. So the research continued. 

I came across event listeners `loadstart` and `canplaythrough`, which then simplified my issue. I decided to toggle between the `display: none` and `display: flex` properties based on these event listeners on a custom loader. I used a wave loader gif from [LottieFiles](https://app.lottiefiles.com/animation/d6b7aa5a-4106-407b-b9ec-d5be3079433d), centered it on a div with a custom background color, and used it as my loading screen.

![loader](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nekx8a4bcvqb75tynw6w.png)

## What I learned and What I am proud of
It was great to challenge myself to think outside the box and pick up a front-end challenge. It's been a good amount of time since I worked with plain JS, HTML, and CSS. So, this challenge was a nice re-brushup on those skills.

I'm particularly proud that I was able to bring this vision to life despite the challenges I faced especially during deployment and finding assets.

Websites like [StackOverflow](https://stackoverflow.com/) and [w3schools](https://www.w3schools.com/) were also a huge help in resolving my blockers.


<!-- Tell us about your process, what you learned, anything you are particularly proud of, what you hope to do next, etc. -->

<!-- Team Submissions: Please pick one member to publish the submission and credit teammates by listing their DEV usernames directly in the body of the post. -->

<!-- We encourage you to consider adding a license for your code. -->

<!-- Don't forget to add a cover image to your post (if you want). -->


<!-- Thanks for participating! -->
