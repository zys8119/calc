import vine from "@vinejs/vine";
import {
  FieldContext,
  SchemaTypes,
  ValidationFields,
} from "@vinejs/vine/build/src/types";
import { RuleTemplate, ruleTemplate } from "@/config/ruleTemplate";

function createMessages(): Record<any, RuleTemplate> {
  return ruleTemplate;
}

type Fields = Record<
  any,
  | {
      title: string;
      message?: RuleTemplate;
      rule?: SchemaTypes;
    }
  | string
>;
export default async function (data: Record<any, any>, fields: Fields = {}) {
  try {
    const object: Record<string, SchemaTypes> = {};
    const fieldsMap: ValidationFields = {};
    const defaultRule = vine.string().minLength(1);
    for (const [k, v] of Object.entries(fields)) {
      if (typeof v === "string") {
        object[k] = defaultRule;
        fieldsMap[k] = v;
      } else {
        object[k] = v.rule || defaultRule;
        fieldsMap[k] = v.title;
      }
    }
    const messages: any = createMessages();
    await vine.validate({
      schema: vine.object(object),
      data,
      messagesProvider: {
        getMessage(
          defaultMessage: string,
          rule: string,
          field: FieldContext,
          args?: Record<string, any>,
        ): string {
          const returnMessage =
            ((fields as any)?.[field.name] as any)?.message ||
            messages[rule] ||
            defaultMessage;
          if (returnMessage) {
            if (typeof returnMessage === "function") {
              return (returnMessage as any)?.call(
                this,
                defaultMessage,
                rule,
                field,
                args,
              );
            }
            if (typeof messages[rule] === "string") {
              return l_template(returnMessage, {
                interpolate: /{{([\s\S]+?)}}/g,
              })({
                field: l_get(fieldsMap, field.name, field.name),
                ...args,
              });
            }
          }
          return returnMessage;
        },
        toJSON() {
          return {
            messages: messages,
            fields: fieldsMap,
          };
        },
      },
    });
  } catch (e: any) {
    $message.error(e.messages?.[0]?.message || e?.message);
    throw e?.messages?.[0] || e;
  }
}
