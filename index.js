const { Octokit } = require("@octokit/rest");
const prompt = require('prompt');

prompt.start();

prompt.get(['org', 'team'], function (err, result) {
    if (err) {
      return -1;
    }

    const client = new Octokit({ auth: process.env.GITHUB_TOKEN });

(async () => {
    const teamResponse = await client.rest.teams.listReposInOrg({
        team_slug: result.team,
        org: result.org,
      });

      const repositories = teamResponse.data.map(d => d.full_name);
      const repositoryFilters = repositories.map(r => `repo:${r}`);
      
      let index = 0;
      let queries = [];      
      let query = repositoryFilters[index];
      for(let i=index+1; i<repositoryFilters.length; i++){
        let nextQuery = ` OR ${repositoryFilters[i]}`;
        if(query.length + nextQuery.length > 500){
            queries.push(query);
            query = repositoryFilters[i];
        }
        else{
            query += nextQuery;
        }
      }
      queries.push(query);

    for(let i=0; i<queries.length; i++){
        console.log(`Query ${i+1}`);    
        console.log(queries[i] + '\n');    
      }
})();
});