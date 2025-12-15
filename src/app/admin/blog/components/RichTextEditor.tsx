
'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import ImageExtension from '@tiptap/extension-image';
import { useEffect } from 'react';

type Props = {
  content: string;
  onChange: (content: string) => void;
};

const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) {
    return null;
  }

  const addImage = () => {
    const url = window.prompt('URL');

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const setLink = () => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();

      return;
    }

    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  return (
    <div className="flex flex-wrap gap-2 p-3 bg-gray-50 border-b border-gray-200 rounded-t-xl mb-0">
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor.isActive('bold') ? 'bg-gray-200 text-primary font-bold' : 'text-gray-600'}`}
        title="Bold"
      >
        <strong>B</strong>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor.isActive('italic') ? 'bg-gray-200 text-primary italic' : 'text-gray-600'}`}
        title="Italic"
      >
        <em>i</em>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor.isActive('underline') ? 'bg-gray-200 text-primary underline' : 'text-gray-600'}`}
        title="Underline"
      >
        <u>U</u>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-200 text-primary' : 'text-gray-600'}`}
        title="Heading 2"
      >
        H2
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor.isActive('heading', { level: 3 }) ? 'bg-gray-200 text-primary' : 'text-gray-600'}`}
        title="Heading 3"
      >
        H3
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor.isActive('bulletList') ? 'bg-gray-200 text-primary' : 'text-gray-600'}`}
        title="Bullet List"
      >
        • List
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor.isActive('orderedList') ? 'bg-gray-200 text-primary' : 'text-gray-600'}`}
        title="Ordered List"
      >
        1. List
      </button>
      <button
        type="button"
        onClick={setLink}
        className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor.isActive('link') ? 'bg-gray-200 text-primary' : 'text-gray-600'}`}
        title="Link"
      >
        Link
      </button>
       <button
        type="button"
        onClick={addImage}
        className={`p-2 rounded hover:bg-gray-200 transition-colors text-gray-600`}
        title="Image"
      >
        Image
      </button>
    </div>
  );
};

export default function RichTextEditor({ content, onChange }: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      ImageExtension,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
            class: 'text-primary underline cursor-pointer',
        }
      }),
    ],
    content,
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl m-5 focus:outline-none min-h-[300px]',
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
     // Important for handling initial content updates effectively without infinite loops
    immediatelyRender: false,
  });

  // Handle external content changes (e.g. from initial load) if editor is ready
  useEffect(() => {
    if (editor && content && editor.getHTML() !== content) {
       // Only set content if it's materially different to avoid cursor jumps
       // But for simple "initial load" this is okay.
       // editor.commands.setContent(content)
       // This can be tricky with collaborative editing but fine here.
    }
  }, [content, editor]);

  return (
    <div className="border border-gray-300 rounded-xl overflow-hidden bg-white focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent transition-all">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
