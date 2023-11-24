require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `ANZZA wiki`,
    description: `ANZZA wiki`,
    image: `assets/favicon.png`,
    siteUrl: `https://anzzait.github.io/team-blog/`,
    type: `website`,
    keywords: `ANZZA, 革バッグ, ランドセルリメイク, 東松島, バッグ, イージーオーダー, 革リメイク, 革工房, 鞄工舎`,
  },
  pathPrefix: "/team-blog",

  plugins: [
    {
      // gatsby-plugin-manifest:= Gatsbyサイトのウェブアプリマニフェストを生成するプラグインです。これはPWA（Progressive Web App）の要件の一部として使用されます。
      // サイトをスマートフォンのホームスクリーンに追加する際のアイコン、アプリ名、色などの設定を定義します。また、オフラインサポートやアプリの外観に関する設定も含みます。
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ANZZA wiki`, // アプリ名
        short_name: `ANZZAwiki`, // 短いアプリ名
        description: `ANZZA wiki`,
        lang: `ja`,
        display: `standalone`,
        icon: 'src/assets/favicon.png',
        start_url: `/`,
        background_color:  `#FFE200`, // 背景色：蒲公英色
        theme_color: `#FFE200`, // テーマ色
      },
    },

    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', Disallow: '/' }]
      }
    },

    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST
      },
    },
  ],
};
