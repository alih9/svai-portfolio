

'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { createClient } from '@/utils/supabase/client';
import { Blog } from '@/types/blog';
import { format } from 'date-fns';

const BlogComponent = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching blogs:', error);
      } else {
        setBlogs(data || []);
      }
      setLoading(false);
    };

    fetchBlogs();

    // specific column/table subscription could be added here for "real-time" if strictly needed,
    // but just fetching on mount is standard for public pages.
    // Realtime subscription example:
    const channel = supabase
      .channel('public:blogs')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'blogs' },
        (payload) => {
           // efficient update logic or simple re-fetch
           fetchBlogs();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase]);

  if (loading) {
    return (
      <section className="bg-white lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <p className="text-center text-gray-500">Loading blogs...</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-white lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div
            className="grid md:grid-cols-3 lg:gap-12.5 md:gap-5 gap-10"
            data-aos="fade-up"
            data-aos-delay={150}
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            {blogs.map(item => (
              <Link key={item.id} href={`/blog/${item.slug}`}>
                <div className="overflow-hidden rounded-2xl relative h-64 w-full">
                  {item.image_url ? (
                     <Image
                     src={item.image_url}
                     alt={item.title}
                     fill
                     className="object-cover duration-300 hover:scale-105 transition-all"
                   />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                      No Image
                    </div>
                  )}
                 
                </div>
                <div className="md:mt-5 mt-2.5">
                  <p className="text-dark">{format(new Date(item.created_at), 'MMMM d, yyyy')}</p>
                  <h2 className="text-2xl md:mt-2.5 mt-1.25 font-bold">{item.title}</h2>
                  <p className="text-gray-600 mt-2 line-clamp-2">{item.description}</p>
                </div>
              </Link>
            ))}

            {blogs.length === 0 && (
                 <div className="col-span-full text-center py-10">
                    <p className="text-xl text-gray-500">No blogs found.</p>
                 </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogComponent;
