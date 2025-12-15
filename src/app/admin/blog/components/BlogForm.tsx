
'use client';

import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { useState, ChangeEvent } from 'react';
import Image from 'next/image';
import RichTextEditor from './RichTextEditor';

type BlogFormProps = {
  initialData?: {
    id?: number;
    title: string;
    slug: string;
    description: string;
    content: string;
    image_url: string;
    published: boolean;
    category?: string;
    keywords?: string;
  };
};

export default function BlogForm({ initialData }: BlogFormProps) {
  const router = useRouter();
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    slug: initialData?.slug || '',
    description: initialData?.description || '',
    content: initialData?.content || '',
    image_url: initialData?.image_url || '',
    published: initialData?.published || false,
    category: initialData?.category || '',
    keywords: initialData?.keywords || '',
  });

  const handleSlugGeneration = (e: ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormData((prev) => ({
      ...prev,
      title,
      slug: title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, ''),
    }));
  };

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);
      setError(null);

      if (!e.target.files || e.target.files.length === 0) {
        throw new Error('You must select an image to upload.');
      }

      const file = e.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      const { data } = supabase.storage
        .from('blog-images')
        .getPublicUrl(filePath);

      setFormData((prev) => ({ ...prev, image_url: data.publicUrl }));
    } catch (error: any) {
      setError(error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const dataToSave = {
      title: formData.title,
      slug: formData.slug,
      description: formData.description,
      content: formData.content,
      image_url: formData.image_url,
      published: formData.published,
      category: formData.category,
      keywords: formData.keywords,
    };

    let result;

    if (initialData?.id) {
      // Update
      result = await supabase
        .from('blogs')
        .update(dataToSave)
        .eq('id', initialData.id);
    } else {
      // Create
      result = await supabase.from('blogs').insert(dataToSave);
    }

    if (result.error) {
      setError(result.error.message);
      setLoading(false);
    } else {
      // Revalidate paths (optional, but good practice)
      router.refresh(); 
      router.push('/admin');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100 font-body">
        {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-lg">
                {error}
            </div>
        )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-dark mb-2">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={handleSlugGeneration}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
              placeholder="Enter blog title"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-dark mb-2">Slug</label>
            <input
              type="text"
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50"
              placeholder="url-slug"
              required
            />
          </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-dark mb-2">Category</label>
        <input
          type="text"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
          placeholder="e.g. Business, Design, Technology"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-dark mb-2">Keywords (SEO)</label>
        <input
          type="text"
          value={formData.keywords}
          onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
          placeholder="e.g. remote work, design trends, productivity (comma separated)"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-dark mb-2">Description (Excerpt)</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all h-24 resize-none"
          placeholder="Short description for listing..."
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-dark mb-2">Cover Image</label>
         <div className="flex items-center gap-4">
             {formData.image_url && (
                 <div className="relative w-32 h-20 rounded-lg overflow-hidden border border-gray-200">
                     <Image src={formData.image_url} alt="Preview" fill className="object-cover" />
                 </div>
             )}
            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={uploading}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 transition-all cursor-pointer"
            />
         </div>
         {uploading && <p className="text-sm text-primary mt-2">Uploading image...</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-dark mb-2">Content</label>
        <RichTextEditor 
            content={formData.content} 
            onChange={(html) => setFormData({ ...formData, content: html })} 
        />
        <p className="text-xs text-gray-500 mt-2">Use the editor to format your post.</p>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="published"
          checked={formData.published}
          onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
          className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary transition-all cursor-pointer"
        />
        <label htmlFor="published" className="text-sm font-medium text-dark cursor-pointer">Publish immediately</label>
      </div>

      <div className="flex justify-end pt-6 border-t border-gray-100">
          <button
            type="submit"
            disabled={loading || uploading}
            className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-blue-600 transition-all shadow-md disabled:opacity-50 disabled:shadow-none cursor-pointer"
          >
            {loading ? 'Saving...' : initialData?.id ? 'Update Blog' : 'Create Blog'}
          </button>
      </div>
    </form>
  );
}
