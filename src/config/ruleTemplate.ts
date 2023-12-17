import { FieldContext } from "@vinejs/vine/build/src/types";

export const ruleTemplate: Record<any, RuleTemplate> = {
  required: "【{{field}}】必填选项",
  string: "【{{field}}】必须是字符串",
  email: "【{{field}}】必须是有效邮箱",
  date: "【{{field}}】必须是有效时间",
  minLength: "【{{field}}】 长度至少为{{min}}",
  maxLength: "【{{field}}】 长度最大为{{max}}",
};

export type RuleTemplate =
  | string
  | ((
      defaultMessage: string,
      rule: string,
      field: FieldContext,
      args?: Record<string, any>,
    ) => string);
