playlytics-app
==============

This application was built as an assigment for a Job oportuny at Majority company.

# Server side (Sinatra)

As this assingment was built to test my knowledge with javascript, i decide to use a Sinatra Server only with the purpose to have an HTTP Server, and to provide a very simple route to the application pages.
Also, Sinatra is used to help views with javascript inclusions, just to ease my life and avoid the use of requirejs for this Demo.

# Client side (Javascript and Views)

As the server only provide basic routing system, the Client Side is responsible for all the magic.
All data is fetched from Spotify API and synced with HTML5 LocalStorage, so you can open and close the server multiple times, and it will not affect your experience as User, since all data is stored locally in your LocalStorage session.

# Vendor

I have used the following vendores to make this app:

- Zepto (as a lightweight replacement for jQuery)
- Backbone (for models, collections and some RouteViews)
- Backbone.Modals (for modals)
- Backbone.LocalStorage (for LocalStorage sync)
- Underscore (used to array manipulation, templates, and as dependency of Backbone)
- Also , i adapted a single function from my Utils library to help with Milliseconds conversion. (lib/)

# How to Run

No database or external servers are required, all you have to do is:

```
git clone https://github.com/renatodex/playlytics-app
cd playlystics-app
ruby app.rb
```

# Stylesheets

I have used a standalone version of Sass to create the stylesheet of this app.
In the repository folder, you will found a folder called "source". If you want to update the CSS, you should do the following:

```
cd playlytics-app
cd public/stylesheets
sass --watch source/playlytics.css.scss:playlytics.css
```

Also, i have used a single Stylesheet file, which fitted my purpose for this app, but should not be the best option for professional applications running on production. 

# Author

Renato Alves (renatodex@gmail.com)
