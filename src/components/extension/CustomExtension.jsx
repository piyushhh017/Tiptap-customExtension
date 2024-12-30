import { Extension } from '@tiptap/core';
import { Mark } from '@tiptap/core';
import BulletList from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';

const CustomExtension = Extension.create({
  name: 'customExtension',

  addExtensions() {
    return [
      // creating mark for bold text
      Mark.create({
        name: 'bold',
        parseHTML() {
          return [{ tag: 'strong' }, { tag: 'b' }];
        },
        renderHTML({ HTMLAttributes }) {
          return ['strong', HTMLAttributes, 0];
        },
        addCommands() {
          return {
            toggleBold: () => ({ commands }) => commands.toggleMark(this.name),
          };
        },
      }),


      // creating marker for italic text
      Mark.create({
        name: 'italic',
        parseHTML() {
          return [{ tag: 'em' }, { tag: 'i' }];
        },
        renderHTML({ HTMLAttributes }) {
          return ['em', HTMLAttributes, 0];
        },
        addCommands() {
          return {
            toggleItalic: () => ({ commands }) => commands.toggleMark(this.name),
          };
        },
      }),


      // creating mark for underline
      Mark.create({
        name: 'underline',
        parseHTML() {
          return [{ tag: 'u' }];
        },
        renderHTML({ HTMLAttributes }) {
          return ['u', HTMLAttributes, 0];
        },
        addCommands() {
          return {
            toggleUnderline: () => ({ commands }) => commands.toggleMark(this.name),
          };
        },
      }),


      //creating mark for strike
      Mark.create({
        name: 'strike',
        parseHTML() {
          return [{ tag: 's' }, { tag: 'del' }];
        },
        renderHTML({ HTMLAttributes }) {
          return ['s', HTMLAttributes, 0];
        },
        addCommands() {
          return {
            toggleStrike: () => ({ commands }) => commands.toggleMark(this.name),
          };
        },
      }),

      BulletList, //Bullet List
      ListItem, // List Item
    ];
  },
});

export default CustomExtension;
