const addNavItem = (navObj, itemName, content, url) => {
  navObj.push({
    itemName,
    content,
    url,
  });
};

const navbar = (className, navItems) => `
    <nav class="${className}">
      ${navItems.reduce((acc, item) => `${acc}<li class="item">
          <a class="${item.itemName}-link" href="${item.url}">
            ${item.content}
          </a>
        </li>`, '')}
    </nav>
    `;

export { navbar, addNavItem };