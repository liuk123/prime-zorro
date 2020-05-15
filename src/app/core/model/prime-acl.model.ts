/**
 * 访问控制的参数实体
 */
export class PrimeAclModel {
  constructor(
    public nodeType?:string, // 节点类型：tabs（页签）、text
    public disabled?: boolean, // 无些权限时，是否禁用
    public readOnly?: boolean, // 无些权限时，是否只读
    public hidden?: boolean, // 无些权限时，是否隐藏
    public aclCode?: string, // 权限标识
    public aclCodes?: [], // 权限标识
  ) {
  }
}
