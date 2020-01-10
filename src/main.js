import hey from './test';
import { whatIsYourName } from './test';
import './styles/main.scss';
                                                                                                                                                                                   
const hi = greetings => {
    const greetingNode = document.createElement('h1');
    greetingNode.className = 'title';
    greetingNode.innerText = greetings;

    const imgNode = document.querySelector('img');
    
    if(imgNode){
        imgNode.parentElement.insertBefore(greetingNode, imgNode);
    }
};

const Hey = new hey('hi there');
const greeting = Hey.getGreetings();
hi(`${greeting} ${whatIsYourName()}`);
