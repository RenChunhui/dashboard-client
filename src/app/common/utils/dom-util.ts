export class DomUtil {

  /**
   * 交换两个节点位置顺序
   *
   * @param node1 - 节点 1
   * @param node2 - 节点 2
   */
  public static swapNodes(node1: HTMLElement, node2: HTMLElement) {
    if (node1.nextElementSibling === node2) {
      node1.parentElement.insertBefore(node2, node1);
    } else if (node2.nextElementSibling === node1) {
      node1.parentNode.insertBefore(node1, node2);
    }
  }

  /**
   * 返回节点的位置
   *
   * @param node
   */
  public static getNodePosition(node: HTMLElement) {
    return node.getBoundingClientRect();
  }
}
