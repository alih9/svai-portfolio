
'use client';

import { createClient } from '@/utils/supabase/client';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';
import ConfirmationModal from '../../blog/components/ConfirmationModal';

type Subscriber = {
  id: string;
  email: string;
  created_at: string;
};

type SubscribersClientProps = {
  initialSubscribers: Subscriber[];
};

export default function SubscribersClient({ initialSubscribers }: SubscribersClientProps) {
  const [subscribers, setSubscribers] = useState(initialSubscribers);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copying' | 'success'>('idle');
  const router = useRouter();
  const supabase = createClient();

  const handleCopyAsJson = () => {
    setCopyStatus('copying');
    try {
      const json = JSON.stringify(subscribers, null, 2);
      navigator.clipboard.writeText(json);
      setCopyStatus('success');
      setTimeout(() => setCopyStatus('idle'), 2000);
    } catch (err) {
      console.error('Failed to copy JSON:', err);
      setCopyStatus('idle');
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
        .from('product_alert_subscribers')
        .delete()
        .eq('id', selectedId);

      if (error) throw error;

      setSubscribers(subscribers.filter(s => s.id !== selectedId));
      setIsModalOpen(false);
      router.refresh();
    } catch (err: unknown) {
      const error = err as Error;
      alert('Error deleting subscriber: ' + error.message);
    } finally {
      setIsDeleting(false);
      setSelectedId(null);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold font-heading bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
            Subscribers
        </h1>
        <button
          onClick={handleCopyAsJson}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all shadow-sm cursor-pointer"
        >
          <Icon icon={copyStatus === 'success' ? 'radix-icons:check' : 'radix-icons:copy'} />
          {copyStatus === 'success' ? 'Copied!' : 'Copy as JSON'}
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden max-w-4xl">
        <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead className="bg-gray-50 border-b border-gray-100">
                    <tr>
                        <th className="px-6 py-4 font-semibold text-gray-700">Email Address</th>
                        <th className="px-6 py-4 font-semibold text-gray-700">Subscribed Date</th>
                        <th className="px-6 py-4 font-semibold text-gray-700 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {subscribers.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 font-medium text-gray-900">{item.email}</td>
                            <td className="px-6 py-4 text-gray-500">{new Date(item.created_at).toLocaleDateString()}</td>
                            <td className="px-6 py-4 text-right">
                                <button
                                    onClick={() => openDeleteModal(item.id)}
                                    className="text-red-600 hover:text-red-800 font-medium text-sm transition-colors cursor-pointer"
                                    disabled={isDeleting}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    {subscribers.length === 0 && (
                        <tr>
                            <td colSpan={3} className="px-6 py-8 text-center text-gray-500">
                                No subscribers found yet.
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
        title="Delete Subscriber"
        message="Are you sure you want to remove this subscriber? They will no longer receive product alerts."
        confirmText="Yes, Delete"
        cancelText="No, Keep it"
        isLoading={isDeleting}
        isDanger={true}
      />
    </div>
  );
}
