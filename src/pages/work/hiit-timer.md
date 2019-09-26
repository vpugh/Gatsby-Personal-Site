---
path: '/work/hiit-timer'
title: "HIIT Timer App"
excerpt: ''
tags: []
cover_image:
draft: false
date:
url: "https://hiit-timer-tp.herokuapp.com/"
github: "https://github.com/vpugh/hiit-timer-react"
image: ../../images/thumbnails/hiit-timer.jpg
description: "Case Study + Heroku App"
client: "Self"
role: "Designer, Developer"
deliverable: "Heroku Hosted App"
sub_title: "A sideproject, pushed into development"
project_description: "Pushing my skills to make something I wanted to use at the time. I started to create this timer for myself and then realized there might be others who could use this. It's currently a work-in-progress. I'm working on being able to save your exercises individually. The next step is saving the sessions with different exercises. Then to save those sessions would be creating a login and using a database, probably Firebase for start."
---

I had grandiose plans at the initial planning of this app. Then I broke it down into many phases highlighting the important skills I'd need to learn to complete it. This project is broken down into different parts. Each part makes sense for transitioning into the next part.

## RECREATING TIMER IN REACT

The simplest and most important part of the initial phase was just getting the timer to work at all. At the most basic I needed a timer that when hardcoded with an arbitrary time and content would cycle through and countdown.

This required converting my Vue pomodoro timer into the base for this project in React. It was a little challenging, since React and Vue are different methodologies. Understanding the intent in each piece, I was slowly able to convert the functions and methods over into useful pieces.

As a closing action on this first part, I changed the design so it wouldn't look exactly like the pomodoro timer. It would also serve a different purpose so I tried to think of a layout the would be helpful whether you were using your computer or phone. Somthing I wasn't concerned with while making the pomodoro timer.

## INTEGRATING REDUX AND DYNAMIC DATA

After getting the timer to work in general it was time to work on upgrades. I wanted to use Redux to simplify passing data all the way from the timer into the settings. This seeemd like the best way, at the time. Also, gave me a change to understand Redux more and test it in an environment were it could go wrong.

Integrating Redux in the timer page was fairly straightforward and easy. Getting it to work properly in the settings page was another matter. That was a bit more of blood, sweat, and tears. I got the nested state to work correctly and getting updates to propagate to the timer was a fight. In the end, everything came together and worked.

## FUTURE PARTS

The next planned step is to create Redux action and reducers for creating a session. A session would be a collection of exercises that could be saved and can comeback to later. With the integration of sessions that would be leading into account setup and databases. If people were to start creating many different sessions, storing them would be the next big thing. Getting accounts setup, attaching DBs to them, and making sure the data stays put.

An idea I'm working out in my mind was a suggestion. It would allow for a higher level of customiztion in regards to the sessions and their exercises. It would allow you immense customiztion in regards to the exact time of each exercise and rest period in a session. This sounds fairly complex so I look forward to testing it out in the near future.

Further down the line, I would like to include a system for themeing the page. I can start with some premade colors I come up with. In the more distant future I could let people mess around and make whatever they want.

<img src="/static/hiit-timer-initial-02e66613ecafd94954ae3f905193dbd7.jpg" alt="">
<img src="/static/hiit-setting-initial-baedf7ddd13600d5d3727e11033ff915.jpg" alt="">
<img src="/static/hiit-settings-abb368538973b0942f3de3a3558099e8.jpg" alt="">
<div class="quote">
  Initial blank state, initial settings page, settings page filled out.
</div>