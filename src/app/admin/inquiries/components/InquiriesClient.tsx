'use client';

import { createClient } from '@/utils/supabase/client';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';
import ConfirmationModal from '../../blog/components/ConfirmationModal';

type Inquiry = {
  id: string;
  full_name: string;
  email: string;
  role: string | null;
  country: string | null;
  message: string;
  created_at: string;
};

type InquiriesClientProps = {
  initialInquiries: Inquiry[];
};

export default function InquiriesClient({ initialInquiries }: InquiriesClientProps) {
  const [inquiries, setInquiries] = useState<Inquiry[]>(initialInquiries);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [copyingId, setCopyingId] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  const handleCopyMessage = async (id: string, message: string) => {
    setCopyingId(id);
    try {
      await navigator.clipboard.writeText(message);
      setTimeout(() => setCopyingId(null), 2000);
    } catch (err) {
      console.error('Failed to copy message:', err);
      setCopyingId(null);
    }
  };

  const openDeleteModal = (id: string) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };

  const handleDelete = async () => {
    if (!selectedId) return;
    
    setIsDeleting(true);
    try {
      const { error } = await supabase
        .from('contact_requests')
        .delete()
        .eq('id', selectedId);

      if (error) throw error;

      setInquiries(inquiries.filter(i => i.id !== selectedId));
      setIsModalOpen(false);
      router.refresh();
    } catch (err: unknown) {
      const error = err as Error;
      alert('Error deleting inquiry: ' + error.message);
    } finally {
      setIsDeleting(false);
      setSelectedId(null);
    }
  };

  return (
    <div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead className="bg-gray-50 border-b border-gray-100">
                    <tr>
                        <th className="px-6 py-4 font-semibold text-gray-700">Name</th>
                        <th className="px-6 py-4 font-semibold text-gray-700">Email</th>
                        <th className="px-6 py-4 font-semibold text-gray-700">Role/Country</th>
                        <th className="px-6 py-4 font-semibold text-gray-700">Message</th>
                        <th className="px-6 py-4 font-semibold text-gray-700">Date</th>
                        <th className="px-6 py-4 font-semibold text-gray-700 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {inquiries.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 font-medium text-gray-900">{item.full_name}</td>
                            <td className="px-6 py-4 font-medium text-gray-900">{item.email}</td>
                            <td className="px-6 py-4">
                                <div className="text-sm font-medium text-gray-900">{item.role || 'N/A'}</div>
                                <div className="text-xs text-gray-500">{item.country || 'N/A'}</div>
                            </td>
                            <td className="px-6 py-4 text-gray-500 max-w-sm truncate cursor-pointer" title={item.message}>{item.message}</td>
                            <td className="px-6 py-4 text-gray-500 text-sm">{new Date(item.created_at).toLocaleDateString()}</td>
                            <td className="px-6 py-4 text-right">
                                <div className="flex justify-end gap-3">
                                    <button
                                        onClick={() => handleCopyMessage(item.id, item.message)}
                                        className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                                        title="Copy Message"
                                    >
                                        <Icon 
                                            icon={copyingId === item.id ? "radix-icons:check" : "radix-icons:copy"} 
                                            className={`size-5 ${copyingId === item.id ? 'text-green-500' : ''}`}
                                        />
                                    </button>
                                    <button
                                        onClick={() => openDeleteModal(item.id)}
                                        className="text-gray-400 hover:text-red-600 transition-colors cursor-pointer"
                                        title="Delete Inquiry"
                                    >
                                        <Icon icon="radix-icons:trash" className="size-5" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    {inquiries.length === 0 && (
                        <tr>
                            <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                                No inquiries found yet.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
      </div>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
        title="Delete Inquiry"
        message="Are you sure you want to delete this inquiry? This action cannot be undone."
        confirmText="Yes, Delete"
        cancelText="No, Keep it"
        isLoading={isDeleting}
        isDanger={true}
      />
    </div>
  );
}
