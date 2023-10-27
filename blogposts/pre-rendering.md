---
title: "Two Forms of Pre-rendering"
date: "2023-10-27"
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.

Static Generation means creating the HTML pages of your website in advance, before any user visits the site. It's like baking a bunch of cakes and having them ready on the shelf before guests arrive at your party. So, when someone comes to your website, they get a pre-made, ready-to-serve page. This makes the website load really fast because the pages are already prepared.

- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Server-side Rendering. It's like a chef making a dish as soon as you order it in a restaurant. This method takes a bit more time because the chef needs to cook it up on the spot.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
