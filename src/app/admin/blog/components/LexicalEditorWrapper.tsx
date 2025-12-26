'use client';

import dynamic from 'next/dynamic';

const PlaygroundApp = dynamic(() => import('./package/App'), {
  ssr: false,
  loading: () => <p>Loading Editor...</p>,
});

import './package/index.css';

type Props = {
  content?: string;
  onChange?: (html: string) => void;
};

export default function LexicalEditorWrapper({ content, onChange }: Props) {
  return <PlaygroundApp html={content} onChange={onChange || (() => {})} />;
}
