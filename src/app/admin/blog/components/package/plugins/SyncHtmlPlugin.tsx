import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import {$generateHtmlFromNodes, $generateNodesFromDOM} from '@lexical/html';
import {useEffect, useRef} from 'react';
import {$insertNodes, $getRoot} from 'lexical';

interface SyncHtmlPluginProps {
  html?: string;
  onChange: (html: string) => void;
}

export function SyncHtmlPlugin({html, onChange}: SyncHtmlPluginProps) {
  const [editor] = useLexicalComposerContext();

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!isFirstRender.current) return;
    isFirstRender.current = false;

    editor.update(() => {
      const root = $getRoot();
      if (html) {
        const parser = new DOMParser();
        const dom = parser.parseFromString(html, 'text/html');
        const nodes = $generateNodesFromDOM(editor, dom);
        root.clear();
        $insertNodes(nodes);
      } else {
        root.clear();
      }
      root.select();
    });
  }, [editor, html]);

  useEffect(() => {
    return editor.registerUpdateListener(({editorState}) => {
      editorState.read(() => {
        const htmlString = $generateHtmlFromNodes(editor);
        onChange(htmlString);
      });
    });
  }, [editor, onChange]);

  return null;
}
