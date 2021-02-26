export interface FooterComponent{
    attachTo(parent:HTMLElement, position?:InsertPosition): void
}

export class Footer <T extends HTMLElement> implements FooterComponent{
    protected readonly element: T

    constructor(footerString: string){
        const footer = document.createElement('template');
        footer.innerHTML = footerString;
        this.element = footer.content.firstElementChild! as T;
    }

    attachTo(parent: HTMLElement, position:InsertPosition="afterbegin"){
        parent.insertAdjacentElement(position, this.element);
    }
}