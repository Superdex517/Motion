import { FootString } from './components/page/item/footSting.js';
import { VideoComponent } from './components/page/item/video.js';
import { TodoComponent } from './components/page/item/todo.js';
import { NoteComponent } from './components/page/item/note.js';
import { ImageComponent } from './components/page/item/image.js';
import { Composable, PageComponent } from './components/page/page.js';
import { Component } from './components/component.js';

class App{
    private readonly page: Component & Composable;
    constructor(appRoot: HTMLElement){
        this.page = new PageComponent();
        this.page.attachTo(appRoot);

        const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
        this.page.addChild(image);
        
        const video = new VideoComponent('Video Title','https://www.youtube.com/embed/vr55wVFjF38')
        this.page.addChild(video);
        // video.attachTo(appRoot, 'beforeend')

        const note = new NoteComponent('Note Title', 'Note body');
        this.page.addChild(note);

        const todo = new TodoComponent('Todo Title', 'Todo Item');
        this.page.addChild(todo);
    }
}

class AppFooter{
    constructor(appRoot: HTMLElement){
        const footer = new FootString('© Copyright by me. All rights reserved')
        footer.attachTo(appRoot)
    }
}


new App(document.querySelector('.document')! as HTMLElement)  // document라는 것이 무엇인지, html이 여러개면 어떻게 하는지
new AppFooter(document.querySelector('.footer')! as HTMLElement)

//일반 자바스크립트에서 사용하는 풋터 붙이기
// const footer = document.querySelector('.footer')
// const innerP = document.createElement('p')

// function init(){footer?.appendChild(innerP)
//     innerP.innerHTML = 'skdjfldskfjl'}

//     init()