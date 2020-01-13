import './styles/main.scss';
import Controller from './js/controller';
import Model from './js/Model';
import View from './js/View';

const app = new Controller(new Model(), new View());
