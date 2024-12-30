import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextStyle from '@tiptap/extension-text-style';
import CustomExtension from './components/extensions/CustomExtension';
import './css/App.css'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { AiOutlineUnderline } from 'react-icons/ai'
import { AiOutlineStrikethrough } from 'react-icons/ai'
import { AiOutlineItalic } from 'react-icons/ai'
import { AiOutlineBold } from 'react-icons/ai'


const App = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      CustomExtension,
    ],
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, unde. Nemo voluptates neque aut commodi. Tenetur, perspiciatis quia facere in id nobis harum doloremque aliquam nesciunt? Ab odit accusantium itaque.',
  });

  return (
    <div className='main-div'>
      {/* creating the buttons with the help of react Icons */}
      <div className='buttons'>
        <button onClick={() => editor.commands.toggleBold()}>
          <AiOutlineBold />
        </button>
        <button onClick={() => editor.commands.toggleItalic()}>
          <AiOutlineItalic />
        </button>
        <button onClick={() => editor.commands.toggleUnderline()}>
          <AiOutlineUnderline />
        </button>
        <button onClick={() => editor.commands.toggleStrike()}>
          <AiOutlineStrikethrough />
        </button>
        <button onClick={() => editor.commands.toggleBulletList()}> 
          <AiOutlineUnorderedList />
        </button>
      </div>

      {/* Editor section */}
      <div className='input'>
        <EditorContent editor={editor} className='editor'  />
      </div>
    </div>
  );
};

export default App;
