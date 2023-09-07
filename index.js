import { Editor } from 'https://esm.sh/@tiptap/core';
import StarterKit from 'https://esm.sh/@tiptap/starter-kit';
import Image from 'https://esm.sh/@tiptap/extension-image';

(function () {
  const defaultContent = `
            <h1>HTML Ipsum Presentsㅇㅇ</h1>

            <img src="https://source.unsplash.com/8xznAGy4HcY/800x400" />
            <img src="https://source.unsplash.com/K9QHL52rE2k/800x400" />

            <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>

            <h2>Header Level 2</h2>

            <ol>
              <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
              <li>Aliquam tincidunt mauris eu risus.</li>
            </ol>

            <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>

            <h3>Header Level 3</h3>

            <ul>
              <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
              <li>Aliquam tincidunt mauris eu risus.</li>
            </ul>

        `;

  const buttons = {
    bold: document.querySelector('[data-tiptap-button="bold"]'),
    italic: document.querySelector('[data-tiptap-button="italic"]'),
  };

  const content = document.querySelector('[data-tiptap-content]');

  const editor = new Editor({
    element: document.querySelector('[data-tiptap-editor]'),
    extensions: [StarterKit, Image],
    content: defaultContent,
    onUpdate({ editor }) {
      // content.innerHTML = JSON.stringify(editor.getJSON());
      // console.log(editor.getHTML());

      buttons.bold.classList.toggle('active', editor.isActive('bold'));
      buttons.italic.classList.toggle('active', editor.isActive('italic'));
    },
    onSelectionUpdate({ editor }) {
      console.log('selection update');
      buttons.bold.classList.toggle('active', editor.isActive('bold'));
      buttons.italic.classList.toggle('active', editor.isActive('italic'));
    },
    onCreate({ editor }) {
      console.log(editor.getHTML());
      // content.innerHTML = JSON.stringify(editor.getJSON());
    },
  }); // add your configuration, extensions, content, etc.

  buttons.bold.addEventListener('click', () => {
    editor.chain().focus().toggleBold().run();
  });

  buttons.italic.addEventListener('click', () => {
    editor.chain().focus().toggleItalic().run();
  });
})();
