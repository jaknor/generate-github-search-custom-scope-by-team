# Generate Gituh Search Custom Scope By Team
The new [Github search functionality](https://cs.github.com/) allows you to search Github code in a better way. However, it is currently not possible to search repositories by team. It has [been requested](https://github.com/github/feedback/discussions/9023) but has yet to be implemented. 

In the meanwhile to search by team you can create custom scopes that contain all the repositories the teams you are a part of own. Doing this manually can be tedious. 

To help make it a bit more managable you can use this tool which will query the Github API to find all the repositories that belong to a specific team. It will output the search queries that you can use for your custom scopes. Please note that the search string is limited to 500 characters so you may get multiple queries back. In this case you will have to create multiple scopes. 

Please upvote the feature request to make this tool obsolete :) 

Instructions
* Download the code from Github
* Run `npm install`
* Make sure GITHUB_TOKEN is set to a token with access to the org you want to query
* Run `index.js`