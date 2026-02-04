
import React from 'react';
import '../blog-content.css';
import {  createStaticClient } from '@/utils/supabase/server';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import CTA from '../../component/CTA';

export async function generateStaticParams() {
  const supabase = createStaticClient();
  const { data: blogs } = await supabase.from('blogs').select('slug').eq('published', true);
  return blogs?.map((blog) => ({ slug: blog.slug })) || [];
}

export const revalidate = 3600; // Revalidate every hour

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const supabase = createStaticClient();
  const { data: blog } = await supabase
    .from('blogs')
    .select('title, description, keywords, image_url, created_at')
    .eq('slug', slug)
    .single();

  if (!blog) {
    return {
      title: 'Blog Not Found',
    };
  }

  const url = `https://www.sparkverse.ai/blog/${slug}`;
  const ogImage = blog.image_url || '/Logos/PNG/FINAL LOGO-02.png';

  return {
    title: `${blog.title}`,
    description: blog.description,
    keywords: blog.keywords ? blog.keywords.split(',').map((k: string) => k.trim()) : [],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'article',
      url,
      title: blog.title,
      description: blog.description,
      publishedTime: blog.created_at,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.description,
      images: [ogImage],
    },
  };
}

const BlogDetailsPage = async ({ params }: Props) => {
  const { slug } = await params;
  const supabase = createStaticClient();

  // Fetch current blog
  const { data: blog, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single();

  if (error || !blog) {
    notFound();
  }

  // Fetch more blogs (latest 3 excluding current)
  const { data: moreBlogs } = await supabase
    .from('blogs')
    .select('id, title, slug, created_at, image_url, category')
    .eq('published', true)
    .neq('slug', slug)
    .order('created_at', { ascending: false })
    .limit(3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: blog.title,
        description: blog.description,
        image: blog.image_url ? [blog.image_url] : ['https://www.sparkverse.ai/Logos/PNG/FINAL%20LOGO-02.png'],
        datePublished: blog.created_at,
        dateModified: blog.updated_at || blog.created_at,
        author: {
          '@type': 'Person',
          name: blog.author || 'SparkVerse AI Team',
        },
        publisher: {
          '@type': 'Organization',
          name: 'SparkVerse AI',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.sparkverse.ai/Logos/PNG/FINAL%20LOGO-02.png',
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://www.sparkverse.ai/blog/${slug}`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.sparkverse.ai',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: 'https://www.sparkverse.ai/blog',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: blog.title,
            item: `https://www.sparkverse.ai/blog/${slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Blog Detail Article */}
      <article className="bg-white lg:py-25 md:py-12.5 py-7.5">
        <div className="container-small">
          <div data-aos="fade-up" data-aos-duration={500} data-aos-easing="ease-in-out">
            <div className="text-center md:pb-12.5 pb-5">
              <div className="mb-7.5 flex gap-7.5 justify-center items-center">
                <div className="bg-dark py-0.5 px-3.75 rounded-full font-medium text-sm text-primary">
                  {blog.category || 'AI'}
                </div>
                <p className="text-body-color">{format(new Date(blog.created_at), 'MMMM d, yyyy')}</p>
              </div>
              <h1 className="lg:text-6xl md:text-5.5xl text-4xl mb-4 font-heading font-bold text-black leading-tight">
                {blog.title}
              </h1>
              {blog.description && (
                  <p className="mb-2.5 text-lg text-body-color leading-relaxed max-w-2xl mx-auto">
                    {blog.description}
                  </p>
              )}
            </div>
            
            <div className="mb-12.5">
                {blog.image_url ? (
                     <div className="relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-sm">
                        <Image
                            src={blog.image_url}
                            alt={blog.title}
                            fill
                            className="object-cover"
                            priority
                        />
                     </div>
                ) : null}
            </div>

            {/* Rich Text Content */}
            <div 
                className="prose prose-lg max-w-none 
                           prose-headings:font-heading prose-headings:font-bold prose-headings:text-black prose-headings:mb-4
                           prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
                           prose-p:text-body-color prose-p:leading-relaxed prose-p:mb-6
                           prose-li:text-body-color prose-strong:text-black prose-strong:font-bold
                           prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                           prose-img:rounded-2xl"
                dangerouslySetInnerHTML={{ __html: blog.content }}
            />
             
             {/* Author Section */}
             <div className="mt-12 py-8 border-y border-gray-100 flex items-center gap-6">
                 <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                     <Image
                        src="/Logos/FINAL LOGO-02.jpg"
                        alt="SparkVerse AI Logo"
                        width={200}
                        height={200}
                      />
                 </div>
                 <div>
                     <p className="text-sm font-bold text-dark uppercase tracking-wider mb-1">Written By</p>
                     <h4 className="text-xl font-heading font-bold text-black">{blog.author || 'SparkVerse AI Team'}</h4>
                 </div>
             </div>

             {/* Tags/Categories Session if any (Optional expansion) */}
             {blog.keywords && (
                 <div className="mt-12 pt-8 border-t border-gray-100">
                     <div className="flex flex-wrap gap-2 justify-center">
                         {blog.keywords.split(',').map((tag: string, i: number) => (
                             <span key={i} className="bg-gray-50 text-gray-600 px-4 py-1.5 rounded-full text-sm font-medium border border-gray-100">
                                 #{tag.trim()}
                             </span>
                         ))}
                     </div>
                 </div>
             )}
          </div>
        </div>
      </article>

      {/* More Blogs Section */}
      {moreBlogs && moreBlogs.length > 0 && (
        <section className="bg-white lg:pb-25 md:pb-12.5 pb-7.5">
          <div className="container">
            <h2 className="text-center mb-10 lg:text-5.5xl md:text-4.6xl text-3.4xl font-heading font-bold text-black">
              More blog
            </h2>
            <div className="grid md:grid-cols-3 lg:gap-12.5 md:gap-5 gap-10">
              {moreBlogs.map((item) => (
                <Link href={`/blog/${item.slug}`} key={item.id} className="group">
                  <div className="flex flex-col h-full">
                    <div className="overflow-hidden rounded-2xl aspect-[4/3] relative">
                      {item.image_url ? (
                        <Image
                          src={item.image_url}
                          alt={item.title}
                          fill
                          className="object-cover duration-300 group-hover:scale-105 transition-all"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                          No Image
                        </div>
                      )}
                    </div>
                    <div className="md:mt-5 mt-2.5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-primary text-xs font-bold uppercase tracking-wider">{item.category || 'Business'}</span>
                        <span className="text-gray-300">•</span>
                        <p className="text-dark text-sm">{format(new Date(item.created_at), 'MMMM d, yyyy')}</p>
                      </div>
                      <h2 className="text-2xl font-heading font-bold text-black group-hover:text-primary transition-colors line-clamp-2">
                        {item.title}
                      </h2>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer Navigation */}
      <section className="bg-white">
          <div className="container text-center">
              <Link 
                  href="/blog" 
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-300 bg-primary rounded-full hover:bg-dark hover:shadow-lg focus:outline-none"
              >
                  Explore All
              </Link>
          </div>
      </section>

      <CTA />
    </>
  );
};

export default BlogDetailsPage;
