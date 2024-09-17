import rss from '@astrojs/rss';
import { formatBlogPosts } from "../js/utils"

const postImportResult = import.meta.glob('./blog/**/*.md', { eager: true });
const posts = formatBlogPosts(Object.values(postImportResult));
import { getCollection } from 'astro:content';

export async function GET(context) {
    
    return rss({
        title: 'Kenton IT Blog',
        description: 'A minimal IT Blog',
        site: import.meta.env.SITE,
        stylesheet: '/rss/styles.xsl',
        items: posts.map((post) => ({
            title: post.frontmatter.title,
            pubDate: post.frontmatter.date,
            description: post.frontmatter.description,
            customData: `
                <author>${post.frontmatter.author}</author>
            `,
            link: `/blog/${post.slug}/`,
        })),
    });
}


