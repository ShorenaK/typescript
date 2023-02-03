import { HasFormatter } from "../interfaces/HasFormatter.js";

export class ListTemplate {
    // register a list container (ul) in the constructor 
    constructor(private container: HTMLUListElement){}
    // create the render method to render a new 'li' to the container
    render(item: HasFormatter, heading: string, pos: 'start' | 'end'){
        const li = document.createElement('li')
        const h4 = document.createElement('h4')
        h4.innerText = heading
        li.append(h4)
        
        const p = document.createElement('p')
        p.innerText = item.format()
        li.append(p)
        if(pos === 'start'){
            this.container.prepend(li)
        }else{
            this.container.append(li)
        }
    }
}