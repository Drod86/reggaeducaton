import * as classes from './header.module.scss';

const header = (type, text) => `<h${type} class="${classes.header}">${text}</${type}>`;
export default header;