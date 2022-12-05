export default function transformTree(list) {
  const treeData = [];
  if (!list) {
    return;
  }
  list.forEach((item) => {
    // 没有父节点直接压入列表
    if (item.parentId === 0) {
      treeData.push(item);
    }
    // 存在父节点，获取父节点为此的元素
    const children = list.filter((data) => data.parentId === item.id);
    if (!children.length) return;
    item.children = children;
  });
  return treeData;
}
