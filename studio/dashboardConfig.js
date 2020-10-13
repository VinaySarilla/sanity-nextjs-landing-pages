export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f855c97fa94d4c3a2e29cfa',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-hpd9wto7',
                  apiId: '2050c74d-102f-4c34-a7ec-cc5a3ba9f71a'
                },
                {
                  buildHookId: '5f855c98f6bd71a6926457a1',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-hbth55ga',
                  apiId: 'c36e8d41-617e-4344-ab37-67ee79c97755'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/VinaySarilla/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-hbth55ga.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
