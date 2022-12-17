[a]: https://app.netlify.com/start/deploy?repository=https://github.com/icepcp/RunIsomer
# Getting Started
In this section, we will be going over how to deploy your very own Isomer site. You can use Netlify or Cloudflare Pages to deploy your site.
:::warning
Both Netlify and Cloudflare Pages are unable to deploy Isomer properly. Although it might look fine, Jekyll collections do not function properly. I've [uploaded the Cloudflare log file to GitHub Gist](https://gist.github.com/icepcp/9132ab952e7c2050cfaae32d6295f004) in case you know how to fix the issue. Please do not deploy Isomer as of now as it will not function like you expect.
:::
# Deploying Isomer
## Netlify
This section will help you clone the RunIsomer repository and have your very own Isomer page.

Isomer uses Netlify to deploy the website, so we will be using that too. Clicking on the Deploy to Netlify button will clone my repo and give you an Isomer website with a Netlify domain.

[![](https://www.netlify.com/img/deploy/button.svg)][a]

Give it about a minute for Netlify to deploy your site.
## Cloudflare Pages
If you're more of a Cloudflare person, you can use Cloudflare Pages to deploy your site. 
### Requirements
* Clone the [RunIsomer](https://github.com/icepcp/RunIsomer) repository  

Once you have a cloned repo, you can head over to Cloudflare and deploy your site. Set the framework preset to Jekyll in build settings, deploy, and you should be set!
## GitHub Pages
I've tried deploying to GitHub Pages using the default jekyll.yml, however images do not load. If you have a solution, please open a PR on the RunIsomer repo.
::: info
If you would like me to add any other deployment methods, please open an issue on my docs repo.
:::
# Building Isomer
I've tried building Isomer using GitHub Codespaces, as it is just your regular ol' Jekyll site, however I always end up with an error, even after installing the right Gems. If you have a solution, please open a PR on the RunIsomer repo, I've uploaded the error to [GitHub Gist if you wanna check that out](https://gist.github.com/icepcp/efb41652100512f34b27441bac500a40).


# What's next?
By now, you should have the base Isomer template. It showcases most of the features available within Isomer, however it is filled with generic text. Let's change that - once you're ready, head on to the next page ;)