import { Editor } from 'https://esm.sh/@tiptap/core';
import StarterKit from 'https://esm.sh/@tiptap/starter-kit';
import Image from 'https://esm.sh/@tiptap/extension-image';
import TextAlign from 'https://esm.sh/@tiptap/extension-text-align';

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
    image: document.querySelector('[data-tiptap-button="image"]'),
    heading2: document.querySelector('[data-tiptap-button="heading2"]'),
    heading3: document.querySelector('[data-tiptap-button="heading3"]'),
    paragraph: document.querySelector('[data-tiptap-button="paragraph"]'),
    strike: document.querySelector('[data-tiptap-button="strike"]'),
    left: document.querySelector('[data-tiptap-button="left"]'),
    center: document.querySelector('[data-tiptap-button="center"]'),
  };

  const content = document.querySelector('[data-tiptap-content]');

  const editor = new Editor({
    element: document.querySelector('[data-tiptap-editor]'),
    extensions: [
      StarterKit,
      Image,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: defaultContent,
    onUpdate({ editor }) {
      // content.innerHTML = JSON.stringify(editor.getJSON());
      // console.log(editor.getHTML());

      buttons.bold.classList.toggle('active', editor.isActive('bold'));
      buttons.italic.classList.toggle('active', editor.isActive('italic'));
      buttons.heading2.classList.toggle('active', editor.isActive('heading', { level: 2 }));
      buttons.heading3.classList.toggle('active', editor.isActive('heading', { level: 3 }));
      buttons.paragraph.classList.toggle('active', editor.isActive('paragraph'));
      buttons.strike.classList.toggle('active', editor.isActive('strike'));
      buttons.left.classList.toggle('active', editor.isActive({ textAlign: 'left' }));
      buttons.center.classList.toggle('active', editor.isActive({ textAlign: 'center' }));
    },
    onSelectionUpdate({ editor }) {
      console.log('selection update');
      buttons.bold.classList.toggle('active', editor.isActive('bold'));
      buttons.italic.classList.toggle('active', editor.isActive('italic'));
      buttons.heading2.classList.toggle('active', editor.isActive('heading', { level: 2 }));
      buttons.heading3.classList.toggle('active', editor.isActive('heading', { level: 3 }));
      buttons.paragraph.classList.toggle('active', editor.isActive('paragraph'));
      buttons.strike.classList.toggle('active', editor.isActive('strike'));
      buttons.left.classList.toggle('active', editor.isActive({ textAlign: 'left' }));
      buttons.center.classList.toggle('active', editor.isActive({ textAlign: 'center' }));
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

  buttons.image.addEventListener('click', () => {
    const url = window.prompt('URL');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  });

  buttons.heading2.addEventListener('click', () => {
    editor.chain().focus().toggleHeading({ level: 2 }).run();
  });

  buttons.heading3.addEventListener('click', () => {
    editor.chain().focus().toggleHeading({ level: 3 }).run();
  });

  buttons.paragraph.addEventListener('click', () => {
    editor.chain().focus().setParagraph().run();
  });

  buttons.strike.addEventListener('click', () => {
    editor.chain().focus().toggleStrike().run();
  });

  buttons.left.addEventListener('click', () => {
    editor.chain().focus().setTextAlign('left').run();
  });

  buttons.center.addEventListener('click', () => {
    editor.chain().focus().setTextAlign('center').run();
  });
})();
