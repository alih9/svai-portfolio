
import React from 'react';
import BlogForm from '../../components/BlogForm';
import { createClient } from '@/utils/supabase/server';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const EditBlogPage = async ({ params }: Props) => {
  const { id } = await params;
  const supabase = await createClient();

  const { data: blog, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !blog) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Edit Blog</h1>
      <BlogForm initialData={blog} />
    </div>
  );
};

export default EditBlogPage;
