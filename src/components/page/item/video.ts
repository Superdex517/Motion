import { BaseComponent } from './../../component.js';

export class VideoComponent extends BaseComponent<HTMLElement>{
    
    constructor(title:string, url:string){
    super(`<section class="video">
        <div class="video__player"><iframe class="video__iframe"></iframe></div>
        <h3 class="video__title"></h3>
        </section>`);
    
    
    const iframe = this.element.querySelector('.video__iframe')! as HTMLIFrameElement;
    iframe.src = this.convertToEmbeddedURL(url);
    

    const titleElement = this.element.querySelector('.video__title')!as HTMLHeadingElement;
    titleElement.textContent = title;
    }

    private convertToEmbeddedURL(url: string): string{ //파라미터는 전달 받은 string, 밖에 string은 return string
        const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
        const match = url.match(regExp); //match라는 api를 사용하면 파라미터 값이랑 매칭되는 값을 전달하게됨

        const videoId = match? match[1] || match[2] : undefined;
        if(videoId){
            return `https://www.youtube.com/embed/${videoId}`;
        }
        return url;
    }
}


// <iframe 
// width="566" 
// height="318" 
// src="https://www.youtube.com/embed/vr55wVFjF38" 
// frameborder="0" 
// allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
// allowfullscreen>
// </iframe>