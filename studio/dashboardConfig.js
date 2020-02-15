export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5e483d30345eafe70ecd300e',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-r39zmdg1',
                  apiId: 'c90117ed-35a8-4cfc-b48f-ba9ab5437d69'
                },
                {
                  buildHookId: '5e483d309ce14cc8814633e0',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-e9cqk25j',
                  apiId: 'b1aa8d4a-f0f0-4a08-9fea-6b38becb0cd3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nunhes/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-e9cqk25j.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
