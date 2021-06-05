---
title: Run your site for free using GitHub Pages and Gatsby
cover: ./sky.jpeg
date: 2021-06-05
description: All the usual blog post.
tags: ['post', 'github', 'gatsby']
draft: true
---

# How I host this blog for FREE using GitHub pages and Gatsby

If you are interested in making a blog, one of the first decisions you will face is where to host your content. There are many different options available like WordPress, Medium and more, however most of these will incur a cost for you.

Well, there is a handy way of hosting a site using GitHub and a static site generator such as Gatsby that will allow you to not only have a great site up and running quickly, but you'll also learn a bit about GitHub actions and CI/CD in the process.

## Let's get started
Ok first up, you're going to need to follow the steps to get your PC/Mac ready for Gatsby. Luckily the team have done a great job documenting this process here: [Set-up Gatsby](https://www.gatsbyjs.com/docs/tutorial/part-0/ "Set-up Gatsby")

Once you gave Gatsby CLI installed you can then create your first site quickly from scratch, or by using one of the many starters that are available. This site is based on the excellent [Chronoblog starter. ](https://github.com/Chronoblog/gatsby-theme-chronoblog#readme "Chronoblog starter ")

## Configure your Gatsby site for GitHub Pages

## Configure GitHub
If you are starting from scratch you will need to create what is known as a repo (repository) for your sites code and content. You can do that by: 1,2,3

You'll need to configure GitHub to host your site using GitHub pages. This can be found via settings -> pages. You'll want to set the branch to gh-pages (remember to create it if you dont already have this branch). If you have a custom domain name like louaboutcloud.com, then you can also specify that - you'll need to add some A records to your DNS provider to point to GitHub.
![image-in-post](./githubpages.png)

## Configure your DNS
Add the records required
Verify with GitHub

## Commit your code to GitHub

`git add .`
`git commit m "some cool commit message"`
`git push`

Dont forget to connect your site to the repo

## Download