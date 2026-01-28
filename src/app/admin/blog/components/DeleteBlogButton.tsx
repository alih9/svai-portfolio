'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import ConfirmationModal from './ConfirmationModal';

type DeleteBlogButtonProps = {
  id: string;
};

export default function DeleteBlogButton({ id }: DeleteBlogButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleDelete = async () => {
    setLoading(true);
    setError(null);

    try {
      const { error: deleteError } = await supabase
        .from('blogs')
        .delete()
        .eq('id', id);

      if (deleteError) {
        throw deleteError;
      }

      setIsModalOpen(false);
      router.refresh();
      router.push('/admin');
    } catch (err: unknown) {
      const error = err as Error;
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        disabled={loading}
        className="px-4 py-2 text-sm font-semibold text-red-600 hover:text-red-800 border border-red-100 hover:border-red-200 rounded-lg transition-all disabled:opacity-50 cursor-pointer"
      >
        {loading ? 'Deleting...' : 'Delete Blog'}
      </button>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
        title="Delete Blog"
        message="Are you sure you want to delete this blog post? This action cannot be undone."
        confirmText="Yes, Delete"
        cancelText="No, Keep it"
        isLoading={loading}
        isDanger={true}
      />

      {error && (
        <div className="fixed bottom-4 right-4 bg-red-50 text-red-600 p-4 rounded-lg shadow-lg border border-red-100 z-50">
          {error}
        </div>
      )}
    </>
  );
}
