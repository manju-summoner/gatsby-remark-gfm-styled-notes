const visit = require('unist-util-visit');

function patch(context, key, value) {
  if (!context[key]) {
    context[key] = value;
  }

  return context[key];
}

module.exports = ({markdownAST}) => {
  visit(markdownAST, 'blockquote', node => {
    if(node.children.length === 0)
      return;
    
    const paragraph = node.children[0];
    if(paragraph.type !== 'paragraph' || paragraph.children.length === 0)
      return;
    
    const strong = paragraph.children[0];
    if(strong.type !== 'strong' || strong.children.length !== 1)
      return;
    
    const text = strong.children[0];
    if(text.type !== 'text' || (text.value !== 'Warning' && text.value !== 'Note'))
      return;
    
    paragraph.children = paragraph.children.slice(1);

    node.type = 'div';
    var data = patch(node, 'data', {});
    const className = `md-${text.value.toLowerCase()}`; 
    patch(data, 'hProperties', {});
    patch(data.hProperties, 'class', className);
  });
  return markdownAST;
};