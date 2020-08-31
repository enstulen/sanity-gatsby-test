export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f4cdb9875bd50127e34bc61',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-test-studio-kmamgzrp',
                  apiId: 'a1a672da-dd3a-41a6-8ce9-66ed088d9e17'
                },
                {
                  buildHookId: '5f4cdb99d2823d168ad7a55c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-test-web-zmscv32w',
                  apiId: 'e42d3037-5f0e-4b5e-bf7b-474dba5d4339'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/enstulen/sanity-gatsby-test',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-test-web-zmscv32w.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
