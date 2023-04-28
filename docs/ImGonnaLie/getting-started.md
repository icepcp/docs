[a]: /assets/ImGonnaLie/getting-started-1.png
# Getting Started
In this section, we will be going over how to deploy your very own IGL site. You can use mostly anything to host your site, as it is just static HTML.
## Requirements
* Cloned/forked repo of [ImGonnaLie](https://github.com/icepcp/ImGonnaLie)
* Supabase/Firebase account
* Any code editor, I use VS Code
## Configuring NGL's code
In this section, we will be going over how to configure the code to your liking. The code is located in the `src` folder.
:::warning
Do note that whatever you do to one .html file, you must do the same to the other .html file.
:::
### Slug Setup
Change the folder name to whatever you want your slug to be. For example, if you want your slug to be `yourdomain.com/username123`, then change the folder name to `username123`.
### Website Title
![Website Title][a]

The website title is the one shown in your browser. To modify it, go to `index.html` and change the title tag.
```
<head>
    ...
    <title>username | igl</title>
    ...
</head>
```
### Favicon
The favicon is the icon shown right beside the site title. To modify it, add a new image to /assets/img/. Once you've dropped your image there, go to `index.html` and change the link tag.
```
<head>
    ...
    <link rel="icon" type="image/x-icon" href="../assets/img/1F92B_color.png">
    ...
</head>
```
## Deploying
We will be using [GitHub Pages](https://netlify.com) to host our site. You can use any other service, but this is the one that's the most simplest.
### Step 1: Forking the repo