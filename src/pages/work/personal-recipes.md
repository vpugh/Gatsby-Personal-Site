---
path: "/work/personal-recipes"
title: "Personal Recipes"
excerpt: ""
tags: []
cover_image:
draft: false
date:
url: ""
github: ""
image: ../../images/thumbnails/compressed/personal-recipes.jpg
description: "Case Study"
client: "Family Memeber"
role: "Designer, Developer"
deliverable: "Single Page App"
order: 1
sub_title: "Design and development of an application to store and manage recipes."
project_description: "A client, a close family member, was constantly lamenting they were losing their recipes. These recipes were printed and kept in folders in a draw. I thought that I could come up with something that would back up their printed collection with a digital solution."
---

<img src="../../images/gallery/personal-recipes/homepage.png" alt="Personal Recipes homepage">

## Project beginning

This was a project that was started because of the global pandemic of COVID-19. At the beginning, a family member was baking a lot, like many other people. They kept losing or couldn't find recipes they were looking for and it was driving them crazy. I challeneged myself to make a system that they could use and that would hopefully solve that problem for them.

The weekends were spent inside and I was looking for something to distract my mind, I thought this would be a perfect thing to attempt. It was a big ask and I'd never created something with a complete front-end, back-end, and authorization/authentication before.

## Design & Research

The initial design made was a test in making something Dribbble-esque. Something fancy and visually appealing. I'd done some research and decided to pick this pale pink as the theme color, it had a high-class look about it.

After development I learned quickly that going for just visual resulted in a poor user experience. I course corrected and redid the layout to be more friendly to getting what I wanted and now looking super pretty.

### Homepage

> Combo image of initial image from dribbble and current page

The initial homepage design was very visual, pictures of food groups and other appetizing things. The thought was it was about food this would all aid in making it more appealing or interesting.

### Add Recipes

> Combo image of initial image from dribbble and current page

The next page to work on was the add recipes page. Full disclaimer, I'm not much of a cooker/baker, so I had to do some research and get feedback on how these things were used and how some people would want them used.

It seemed pretty straightforward but then there was some complications with the level of complexity to attempt. I initially tried to go too complex, for example breaking down a recipe into crust and filling instructions. This was incredibly difficult to translate into code, so I decided to rein myself in and just keep it simple.

### View Recipe

> Combo image of initial image from dribbble and current page

The final page in the very basic layout was one to actually look at the recipe. This would be were you were redirected after the recipe was added and also were you'd navigate normally. This page went through a few iterations of finding out what the correct hierarchy there was for showing information.

The end result is a good balance of visually displaying everything that's relevant in a compact way and giving everything the space it deserves.

## Road to development

I'd never done something this large on my own I was unsure what I should do but knew what I wanted to use. I've wanted to use [GraphQL](https://graphql.org/) and get more familiar for some time, this seemed like a great chance to do that. this project was using so many new things, I added using [Hasura](https://hasura.io/) into the mix as well.

I did not use [Apollo](https://www.apollographql.com/), maybe a missed opportunity. I was already learning a lot of things and thought there would be time to update that in the future.

Starting development I was working with the assumption of a REST API. To mock the data and hopefully get it as close to the finished product as I could I used [Mirage](https://miragejs.com/). I randomly saw it one day and thought it was better than [MockAPI](https://www.mockapi.io/) purely on the thought that I wasn't dependent on making actual calls. So keeping it all on my local machine made adjustments easier and faster.

This was a crucial part in getting my data set, knowing what types each should be and what I expected in my code. I had some missteps but it was easier to course correct since I was in control of all the data.
