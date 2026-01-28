'use client';

import { createClient } from '@/utils/supabase/client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ConfirmationModal from './ConfirmationModal';

type Props = {
  blogId: number;
};

export default function BlogTableActions({ blogId }: Props) {
  const router = useRouter();
  const supabase = createClient();
  const [isDeleting, setIsDeleting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const { error } = await supabase
        .from('blogs')
        .delete()
        .eq('id', blogId);

      if (error) {
        throw error;
      }

      router.refresh();
      setIsModalOpen(false);
    } catch (err: unknown) {
      const error = err as Error;
      alert('Error deleting blog: ' + error.message);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="flex items-center justify-end gap-4">
      <Link 
        href={`/admin/blog/edit/${blogId}`} 
        className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
      >
        Edit
      </Link>
      <button
        onClick={() => setIsModalOpen(true)}
        disabled={isDeleting}
        className="text-red-600 hover:text-red-800 font-medium transition-colors disabled:opacity-50 cursor-pointer"
      >
        {isDeleting ? 'Deleting...' : 'Delete'}
      </button>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
        title="Delete Blog"
        message="Are you sure you want to delete this blog post? This action cannot be undone."
        confirmText="Yes, Delete"
        cancelText="No, Keep it"
        isLoading={isDeleting}
        isDanger={true}
      />
    </div>
  );
}
