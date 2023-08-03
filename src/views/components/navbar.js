const addNavItem = (navObj, itemName, content, url) => {
  navObj.push({
    itemName: itemName,
    content: content,
    url: url,
  })
};


const navbar = (className, navItems) => {
  return `
    <nav class="${className}">
      ${navItems.reduce((acc, item) => {
        return acc + `<li class="item">
          <a class="${item.itemName}-link" href="${item.url}">
            ${item.content}
          </a>
        </li>`
      }, '')}
    </nav>
    `
}

export {navbar, addNavItem};