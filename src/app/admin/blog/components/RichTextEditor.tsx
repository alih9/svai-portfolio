'use client';

import { useEditor, EditorContent, Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import ImageExtension from '@tiptap/extension-image';
import { TextStyle } from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import { TextAlign } from '@tiptap/extension-text-align';
import { useEffect } from 'react';
import { Icon } from '@iconify/react';

type Props = {
  content: string;
  onChange: (content: string) => void;
};

const MenuBar = ({ editor }: { editor: Editor | null }) => {
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
    <div className="flex flex-wrap gap-1 p-2 bg-gray-50 border-b border-gray-200 rounded-t-xl mb-0 sticky top-0 z-10">
        
      {/* Headings */}
      <div className="flex items-center gap-1 border-r border-gray-300 pr-2 mr-1">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={`p-1.5 rounded hover:bg-gray-200 transition-colors ${editor.isActive('heading', { level: 1 }) ? 'bg-gray-200 text-primary' : 'text-gray-600'}`}
            title="Heading 1"
          >
            <Icon icon="lucide:heading-1" className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={`p-1.5 rounded hover:bg-gray-200 transition-colors ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-200 text-primary' : 'text-gray-600'}`}
            title="Heading 2"
          >
            <Icon icon="lucide:heading-2" className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={`p-1.5 rounded hover:bg-gray-200 transition-colors ${editor.isActive('heading', { level: 3 }) ? 'bg-gray-200 text-primary' : 'text-gray-600'}`}
            title="Heading 3"
          >
            <Icon icon="lucide:heading-3" className="w-5 h-5" />
          </button>
      </div>

      {/* Text Style */}
      <div className="flex items-center gap-1 border-r border-gray-300 pr-2 mr-1">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className={`p-1.5 rounded hover:bg-gray-200 transition-colors ${editor.isActive('bold') ? 'bg-gray-200 text-primary' : 'text-gray-600'}`}
            title="Bold"
          >
            <Icon icon="lucide:bold" className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className={`p-1.5 rounded hover:bg-gray-200 transition-colors ${editor.isActive('italic') ? 'bg-gray-200 text-primary' : 'text-gray-600'}`}
            title="Italic"
          >
            <Icon icon="lucide:italic" className="w-5 h-5" />
          </button>
           <button
            type="button"
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={`p-1.5 rounded hover:bg-gray-200 transition-colors ${editor.isActive('underline') ? 'bg-gray-200 text-primary' : 'text-gray-600'}`}
            title="Underline"
          >
            <Icon icon="lucide:underline" className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleStrike().run()}
             className={`p-1.5 rounded hover:bg-gray-200 transition-colors ${editor.isActive('strike') ? 'bg-gray-200 text-primary' : 'text-gray-600'}`}
            title="Strike"
          >
            <Icon icon="lucide:strikethrough" className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleCode().run()}
             className={`p-1.5 rounded hover:bg-gray-200 transition-colors ${editor.isActive('code') ? 'bg-gray-200 text-primary' : 'text-gray-600'}`}
            title="Code"
          >
            <Icon icon="lucide:code" className="w-5 h-5" />
          </button>
           <input
            type="color"
            onInput={event => editor.chain().focus().setColor((event.target as HTMLInputElement).value).run()}
            value={editor.getAttributes('textStyle').color || '#000000'}
            className="w-8 h-8 p-0 border-0 rounded cursor-pointer ml-1"
            title="Text Color"
           />
      </div>

       {/* Alignment */}
      <div className="flex items-center gap-1 border-r border-gray-300 pr-2 mr-1">
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            className={`p-1.5 rounded hover:bg-gray-200 transition-colors ${editor.isActive({ textAlign: 'left' }) ? 'bg-gray-200 text-primary' : 'text-gray-600'}`}
            title="Align Left"
          >
           <Icon icon="lucide:align-left" className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            className={`p-1.5 rounded hover:bg-gray-200 transition-colors ${editor.isActive({ textAlign: 'center' }) ? 'bg-gray-200 text-primary' : 'text-gray-600'}`}
            title="Align Center"
          >
            <Icon icon="lucide:align-center" className="w-5 h-5" />
          </button>
           <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            className={`p-1.5 rounded hover:bg-gray-200 transition-colors ${editor.isActive({ textAlign: 'right' }) ? 'bg-gray-200 text-primary' : 'text-gray-600'}`}
            title="Align Right"
          >
             <Icon icon="lucide:align-right" className="w-5 h-5" />
          </button>
      </div>


      {/* Lists & Structure */}
      <div className="flex items-center gap-1 border-r border-gray-300 pr-2 mr-1">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`p-1.5 rounded hover:bg-gray-200 transition-colors ${editor.isActive('bulletList') ? 'bg-gray-200 text-primary' : 'text-gray-600'}`}
            title="Bullet List"
          >
             <Icon icon="lucide:list" className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`p-1.5 rounded hover:bg-gray-200 transition-colors ${editor.isActive('orderedList') ? 'bg-gray-200 text-primary' : 'text-gray-600'}`}
            title="Ordered List"
          >
             <Icon icon="lucide:list-ordered" className="w-5 h-5" />
          </button>
           <button
            type="button"
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={`p-1.5 rounded hover:bg-gray-200 transition-colors ${editor.isActive('blockquote') ? 'bg-gray-200 text-primary' : 'text-gray-600'}`}
            title="Blockquote"
          >
             <Icon icon="lucide:quote" className="w-5 h-5" />
          </button>
           <button
            type="button"
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            className={`p-1.5 rounded hover:bg-gray-200 transition-colors text-gray-600`}
            title="Horizontal Rule"
          >
             <Icon icon="lucide:minus" className="w-5 h-5" />
          </button>
      </div>

       {/* Insert & Actions */}
       <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={setLink}
            className={`p-1.5 rounded hover:bg-gray-200 transition-colors ${editor.isActive('link') ? 'bg-gray-200 text-primary' : 'text-gray-600'}`}
            title="Link"
          >
            <Icon icon="lucide:link" className="w-5 h-5" />
          </button>
           <button
            type="button"
            onClick={addImage}
            className={`p-1.5 rounded hover:bg-gray-200 transition-colors text-gray-600`}
            title="Image"
          >
             <Icon icon="lucide:image" className="w-5 h-5" />
          </button>
            <button
            type="button"
            onClick={() => editor.chain().focus().unsetAllMarks().run()}
            className={`p-1.5 rounded hover:bg-gray-200 transition-colors text-gray-600`}
            title="Clear Formatting"
          >
            <Icon icon="lucide:remove-formatting" className="w-5 h-5" />
          </button>
           <button
            type="button"
            onClick={() => editor.chain().focus().undo().run()}
             disabled={!editor.can().chain().focus().undo().run()}
            className={`p-1.5 rounded hover:bg-gray-200 transition-colors text-gray-600 disabled:opacity-50`}
            title="Undo"
          >
            <Icon icon="lucide:undo" className="w-5 h-5" />
          </button>
           <button
            type="button"
            onClick={() => editor.chain().focus().redo().run()}
             disabled={!editor.can().chain().focus().redo().run()}
            className={`p-1.5 rounded hover:bg-gray-200 transition-colors text-gray-600 disabled:opacity-50`}
            title="Redo"
          >
            <Icon icon="lucide:redo" className="w-5 h-5" />
          </button>
       </div>

    </div>
  );
};

export default function RichTextEditor({ content, onChange }: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      ImageExtension,
      TextStyle,
      Color,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-primary underline cursor-pointer',
        },
      }),
    ],
    content,
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl m-5 focus:outline-none min-h-[300px] max-w-none',
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
