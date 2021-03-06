import { FootString } from './components/page/item/footSting.js';
import { VideoComponent } from './components/page/item/video.js';
import { TodoComponent } from './components/page/item/todo.js';
import { NoteComponent } from './components/page/item/note.js';
import { ImageComponent } from './components/page/item/image.js';
import { PageComponent } from './components/page/page.js';
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
        this.page.addChild(image);
        const video = new VideoComponent('Video Title', 'https://www.youtube.com/embed/vr55wVFjF38');
        this.page.addChild(video);
        const note = new NoteComponent('Note Title', 'Note body');
        this.page.addChild(note);
        const todo = new TodoComponent('Todo Title', 'Todo Item');
        this.page.addChild(todo);
    }
}
class AppFooter {
    constructor(appRoot) {
        const footer = new FootString('© Copyright by me. All rights reserved');
        footer.attachTo(appRoot);
    }
}
new App(document.querySelector('.document'));
new AppFooter(document.querySelector('.footer'));
