---
path: '/pomodoro-timer-app'
title: "Pomodoro Timer App"
excerpt: ''
tags: []
cover_image:
draft: false
date:
url: "https://vpugh.github.io/vue-pomodoro-timer/"
github: "https://github.com/vpugh/vue-pomodoro-timer"
image: ../../images/thumbnails/pomodoro-timer.jpg
description: "Case Study + Github Pages App"
client: "Self"
role: "Designer, Developer"
deliverable: "Github Pages Site"
sub_title: "A development challenge that turned into it's own app"
project_description: "To keep my skills sharp and for some fun I decided to participate in the development challenge that Scotch.io was running every week. At the completion of the challenge I wanted to make my own Pomodoro Timer using the Vue-CLI and host it online so anyone could use it."
---

When I started making this timer for the challenge, I thought it would be no problem. How hard could a timer be to make? I ended up learning a lot and in the end building my own version from scratch using the Vue-CLI and then hosting it on Github Pages.

Since it was such an involved process I wrote a blog article about my experience; my steps in creating; and the lessons I learned.

## MINOR SETBACK

I thought that creating a countdown system would be easy. It was anything but easy, at least for me who is weak in math. I had to go on a tangent of breaking down all the time into milliseconds and then using that as a base for keeping track of the overall time. I learned how all this worked by making a digital clock.

// embedded codepen

After creating the clock I worked what I had learned into the countdown timer, which was pretty simple. I fulfilled the simple requests for the challenge - the Play button starts the timer; the Pause button stops the timer; and the Reset button returns the timer to its original state of 25 minutes.

I'd done the challenge and had succeeded, where to go from here. I decided to dive in and make a fully functional pomodoro timer, one that counts from 25 mins to a 5 min break and repeats this a few times. This version needed to tell you what stage you were in, alert you when the stage was over and visually look a bit slicker.

// image

image subtitle - My challenge complete timer, the messages changed depending what state it was in.

## MY POMODORO TIMER

The design for this was purely tongue and cheek. Pomodoro is italian for tomato so it should be red. For the rest periods I thought it should be a 'green tomato' or 'tomatillo' and made the theme green. Something cute and different, a slight change of pace from just being red all the time.

I have a display for what stage your in. This clearly has the 5 stages — Timer, Rest, Timer, Rest, and Timer. It then tells you which stage your currently in and highlights the marker. I also fixed an issue with the original timer that it wouldn't clear the time between restarts. This caused it to gain speed on every restart and countdown into obliviion.

I've also added sound effects to mark the change of the rounds. This was an interesting part for me as I'd never done anything with sounds embedded in anything. It adds that extra level of professionalism and helps if you've moved to another program or another tab.

For this version I did not make the app in CodePen, I used the Vue CLI and exported it out and uploaded it to Github Pages. This was it's on mini adventure but luckily wasn't nearly as tough as I thought it would be.

// image - break (tomatillo)
// subtitle - The rest period tomatillo theme.

