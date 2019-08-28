---
path: '/ucd-email-series'
title: "UCD Email Series"
excerpt: ''
tags: []
cover_image:
draft: false
date:
url: ""
github: ""
image: ../../images/thumbnails/updates-email.jpg
description: "Case Study"
client: "Updates in Clinical Dentistry"
role: "Designer, Developer, Email Developer"
deliverable: "Email System and Single Emails"
sub_title: "The design and development of a email system capable of producing many emails for a traveling conference"
project_description: "Updates in Clinical Dentistry was in need of an email system that could maintain their multiple emails targeting multiple locations. This system need to make universal changes to all the emails, keep consistent branding, be easily reproducible for any location, and be quick to create and deploy."
---

// cover image

## THE APPROACH

I needed to develop/utilize an automated system to insert the relevant information in every email, making it easy to use for different events. From there creating a email system with a lot of text copy to be dynamically put it. Finally, creating a finished email that keeps the design on brand while maintaining the modular nature of the templates and customizable pieces.

## RESEARCH

I subscribed to as many conference email lists as I could to see what other people were doing. I also found a great resource in [reallygoodemails.com](http://reallygoodemails.com/) and took note of some of the features of the emails such as subheaders, titles, buttons, and images. I started piecing together ideas on the general layouts, though keeping in mind I still needed to please my superiors.

// image
// subtitle = Keeping a consistent look and feel across all emails. This was tough on some of the more targeted emails.

## TYPES OF EMAILS

Breaking down the emails into three varieties — Marketing, Registrants, and Follow-up.

### MARKETING

The marketing group of emails are meant to entice and be informative, they have information on the emphasizing the location, talks and speakers. These emails though having similarities tend to look fairly different from each other, each one shares a basic layout of a large image and content below it. Some of them can contain a full agenda and speaker biographies or just topics and names.

### REGISTRANTS

The registrants are general emails sent to people who are already registered. These emails can be reminders of the upcoming event or alerts on a change of venue. These email are much simpler, usually pure text, in format from the need to pass crucial information.

### FOLLOW-UP

Starting a few days after the event the attendees will get these emails, reminding them about the courses they can take online and directing them to a page to find out how to redeem them. They will keep getting these emails until they have redeemed a course. These emails are very important and as such are more text heavy.

// image
// subtitle = JSON files and Nunjucks templates do all the heavy-lifting for the email system. The files can be very long and complex but they have made everything a million times easier.

## DEVELOPMENT SETUP

For this project I needed a high-level of automation to maintain at most 10 cities with a minimum of 11 emails for each location. I turned to Gulp to help me create a system that could call the information for each location into my templates. Doing this would help in cutting down on human error, of changing each template by hand, and make any changes down the line to the design easier to maintain in older versus newer versions.

To create this system, I looked on Github for any repo's that had a Gulp email workflow, to get an idea or a good jump off point. I stumbled across [A Gulp Workflow for Building HTML Emails](https://github.com/ireade/gulp-email-workflow) by [ireade](https://github.com/ireade) and saw that it was a perfect starting point. After making some changes, removing the PostCSS options because I didn't have the time to integrate the inlined css so everything was hardwired from the get go. Now I just needed two things, json files for each event with all of the information I'd need on each email and the templates for each email.

**Next idea** – Creating an interface connected to a server to manage the json files and changes to the information, so I wouldn't even have to worry about data manipulation. A future implementation.

## PRODUCED EMAILS

While setting this system up there was a drastic style change. This development setup made making the universal changes to all emails incredibly easy. My superiors like to keep making changes throughout the campaign and this system has been a life-saver. One change for the footer and the header and I didn't have to worry about making the change to every iteration of the new and old emails.

[MI - Email 1 (Original Style Pre-System)](http://aegispublications.com/news/cdeworld/2017/events/updates/01/MI-E1.html) [MI - Email 2 (New Style Pre-System)](http://aegispublications.com/news/cdeworld/2017/events/updates/02/MI-E2.html) [MI - Email 4](http://aegispublications.com/news/cdeworld/2017/events/updates/03/MI-E4.html) [MI - Email 5](http://aegispublications.com/news/cdeworld/2017/events/updates/03/MI-E5.html) [MI - Email 6](http://aegispublications.com/news/cdeworld/2017/events/updates/03/MI-E6.html) [PA - Email 7](http://aegispublications.com/news/cdeworld/2017/events/updates/04/PA-E7.html)

Examples of the email changes over the campaign
[1st E3 Version - Pre-System](http://aegispublications.com/news/cdeworld/2017/events/updates/02/MI-E3.html) [2nd E3 Version - Post-System](http://aegispublications.com/news/cdeworld/2017/events/updates/03/MA-E3.html) [3rd E3 Version - Post-System](http://aegispublications.com/news/cdeworld/2017/events/updates/05/CA-E3.html)