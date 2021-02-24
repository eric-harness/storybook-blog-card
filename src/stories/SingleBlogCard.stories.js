import React from 'react';
import { SingleBlogCard } from './SingleBlogCard';

//1. Default export with our meta data
export default {
    title: 'SingleBlogCard',
    component: SingleBlogCard,
};

//2. function called template, map args here
SingleBlogCard.displayName = "Single";
const Template = (args) => <SingleBlogCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    post: {
        title: "Harness Software Acquires CertGround App, Hires Founder",
        date: "2021-02-19T19:58:27",
        author: {
            "node": {
              "firstName": "Tom",
              "lastName": "Whitaker",
              "seo": {
                "metaDesc": "Tom Whitaker is the Founder & CEO of Harness Software. He is passionate about the convergence of construction and technology. Particularly when it comes to safety on the job site. Tom is a father of three boys and lives near Toronto, Canada.",
                "title": "Tom Whitaker",
                "social": {
                  "twitter": "https://twitter.com/twhitter",
                  "linkedIn": "https://www.linkedin.com/in/tomwhitaker/",
                  "facebook": "",
                  "instagram": ""
                }
              },
              "avatar": {
                "url": "https://secure.gravatar.com/avatar/f95c6a3627a0a7def84f0ffbe8e21bc0?s=96&d=mm&r=g"
              }
            }
          }
    }
};