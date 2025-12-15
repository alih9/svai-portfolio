
import React from 'react';
import { createClient } from '@/utils/supabase/server';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const supabase = await createClient();
  const { data: blog } = await supabase
    .from('blogs')
    .select('title, description, keywords, image_url')
    .eq('slug', slug)
    .single();

  if (!blog) {
    return {
      title: 'Blog Not Found',
    };
  }

  return {
    title: `${blog.title} | SparkVerseAI`,
    description: blog.description,
    keywords: blog.keywords ? blog.keywords.split(',').map(k => k.trim()) : [],
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: blog.image_url ? [{ url: blog.image_url }] : [],
    },
    twitter: {
        card: 'summary_large_image',
        title: blog.title,
        description: blog.description,
        images: blog.image_url ? [blog.image_url] : [],
    }
  };
}

const BlogDetailsPage = async ({ params }: Props) => {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: blog, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single();

  if (error || !blog) {
    notFound();
  }

  return (
    <>
      <section className="bg-white lg:py-25 md:py-12.5 py-7.5">
        <div className="container-small">
          <div data-aos="fade-up" data-aos-duration={500} data-aos-easing="ease-in-out">
            <div className="text-center md:pb-12.5 pb-5">
              <div className="mb-7.5 flex gap-7.5 justify-center items-center">
                <div className="bg-dark py-0.5 px-3.75 rounded-full font-medium text-sm text-primary">
                  {blog.category || 'Blog'}
                </div>
                <p>{format(new Date(blog.created_at), 'MMMM d, yyyy')}</p>
              </div>
              <h1 className="lg:text-6xl md:text-5.5xl text-4xl mb-2.5 font-heading">
                {blog.title}
              </h1>
              {blog.description && (
                  <p className="mb-2.5 text-lg">
                    {blog.description}
                  </p>
              )}
            </div>
            
            <div className="mb-10">
                {blog.image_url ? (
                     <div className="relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden">
                        <Image
                            src={blog.image_url}
                            alt={blog.title}
                            fill
                            className="object-cover"
                        />
                     </div>
                ) : null}
            </div>

            {/* 
              Using prose for content as it comes from a rich text editor. 
              We try to match the prose styles to the design's typography.
            */}
            <div 
                className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-p:text-body-color prose-li:text-body-color prose-strong:text-dark prose-a:text-primary"
                dangerouslySetInnerHTML={{ __html: blog.content }}
            />
             
             <div className="mt-12 pt-10 border-t border-gray-100 text-center">
                <Link 
                    href="/blog" 
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white transition-all duration-200 bg-primary rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                    Back to Blog
                </Link>
             </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
