module.exports = {
  siteMetadata: {
    siteTitle: 'LoudAboutCloud',
    siteDescription: 'LIVE Cloud Discussions = We talk with you, not to you.',
    siteImage: '/banner.png', // main image of the site for metadata
    siteUrl: 'https://loudaboutcloud.com/',
    pathPrefix: '/loudaboutcloud', // add the repo name for github pages here
    siteLanguage: 'en',
    ogLanguage: `en_US`,
    author: 'Loud About Cloud', // for example - 'Ivan Ganev'
    authorDescription: 'Built by Kirk Ryan & Lisa Clark', // short text about the author
    avatar: '/avatar.jpg',
    twitterSite: '@kirk__ryan', // website account on twitter
    twitterCreator: '', // creator account on twitter
    social: [
      {
        icon: `twitter`,
        url: `https://twitter.com/kirk__ryan`
      },
      {
        icon: `twitter`,
        url: `https://twitter.com/lisaattheedge`
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: 'show more',
          feedSearchPlaceholder: 'search',
          cardReadMoreButton: 'read more →',
          allTagsButton: 'all tags'
        },
        feedItems: {
          // global settings for feed items
          limit: 50,
          yearSeparator: true,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '🔗 '
            }
          }
        },
        feedSearch: {
          symbol: '🔍'
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chronoblog Gatsby Theme`,
        short_name: `Chronoblog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-XXXXXXXXX-X'
      }
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        // replace "chronoblog-1" with your own disqus shortname
        shortname: `chronoblog-1`
      }
    }
  ]
};
