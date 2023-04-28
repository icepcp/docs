[a]: /assets/RunIsomer/theme/configuration-1.png
# Configuration
Configure the website title, favicon and colours. The file is located at /_config.yml
### Formatting
You can format the config in three ways. You can just have it plain,
```
title: Title
```
maybe add apostrophes..
```
title: 'Title'
```
or quotation marks.
```
title: "Title"
```
However, if your property includes spaces or any other magical characters, it is most preferred that you use either the apostrophes or quotation marks.
```
title: 'Example Title'
```
## Title
```
title: Example Title
```
The title property will change the text in the footer. 

![Footer text][a]
## URL
```
url: https://example.com
```
I'm not so sure what the URL property does but yea just put your site URL because why not, I'm thinking maybe it's for a sitemap or something.
## Favicon
```
favicon: /images/favicon-isomer.ico
```
The favicon property will change the favicon of the website. It supports .ico, .png and .svg files. 
::: info
In the case you provide a .png file with dimensions longer (example: 32x16) than a square, it will be resized to a square. However, when you provide a .svg, it will remain its original size. 
:::