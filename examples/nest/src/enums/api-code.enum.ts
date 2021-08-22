/**
 * API接口错误码枚举
 */
 export enum APICode {
  /** 成功 */
  SUCCESS = 200,
  /** 系统错误 */
  FAILED = 5000,
  /** 用户已存在 */
  INVALID_USER = 5001,
  /** 用户冻结 */
  USER_FROZEN = 5002,
  /** 用户未登录或登录已过期 */
  USER_NOT_LOGIN = 5004,
  /** 用户已存在 */
  DUPLICATE_USER = 5006,
  /** 标签数据未找到 */
  INVALID_TAG = 5007,
  /** 文件类型不正确 */
  ERROR_FILE_TYPE = 5008,
  /** 同名标签 */
  SAME_NAME_TAG = 5012,
  /** 入参异常 */
  ABNORMAL_PARAMS = 5013,
  /** S3错误 */
  S3_ERROR = 6000,
  /** 无效记录 */
  INVALID_RECORD = 5017,

  /** 重复记录 */
  REPEAT_RECORD = 5019,
  /** 小程序加密信息解密失败 */
  WXDECODE_ERROR = 5064,
  /** 白名单id为空 */
  IS_EXIST = 5021,
  /** 消息推送错误 */
  TPL_RECORD = 5020,
  /** 无访问权限 */
  NO_PERMISSIONS = 4003
}
