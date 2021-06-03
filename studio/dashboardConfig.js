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
                  buildHookId: '60b8befc76457ff7ab567cd1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-35hynufu',
                  apiId: '826e1ce5-91de-4e81-93e4-e0d72e365ecd'
                },
                {
                  buildHookId: '60b8befc1b3c810436d3be7b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-c36vkgur',
                  apiId: 'f4ec197f-db13-46cb-8a88-16f32bbf29d8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/reshma0111/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-c36vkgur.netlify.app',
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
