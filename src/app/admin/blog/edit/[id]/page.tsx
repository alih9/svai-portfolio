import React from 'react';
import BlogForm from '../../components/BlogForm';
import { createClient } from '@/utils/supabase/server';
import { notFound } from 'next/navigation';
import DeleteBlogButton from '../../components/DeleteBlogButton';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const EditBlogPage = async ({ params }: Props) => {
  const { id } = await params;
  const supabase = await createClient();

  const { data: blog, error: blogError } = await supabase
    .from('blogs')
    .select('*')
    .eq('id', id)
    .single();

  if (blogError || !blog) {
    notFound();
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8 pb-4">
        <h1 className="text-3xl font-bold text-gray-900">Edit Blog</h1>
        {id && <DeleteBlogButton id={id} />}
      </div>
      <BlogForm initialData={blog} />
    </div>
  );
};

export default EditBlogPage;
