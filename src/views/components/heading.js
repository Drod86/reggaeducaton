const header = (type, text, className) => {
  return `<h${type} class="${className}">${text}</h${type}>`;
}
export default header;