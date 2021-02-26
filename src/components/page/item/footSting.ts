import { Footer } from '../../footerComponent.js';

export class FootString extends Footer<HTMLElement>{
    constructor(foot:string){
        super(`<section class="foot">
        <p class="foot__body"></p>
    </section>`);
        
        const footerElement = this.element.querySelector('.foot__body')! as HTMLParagraphElement;
        footerElement.textContent = foot;
    }

}