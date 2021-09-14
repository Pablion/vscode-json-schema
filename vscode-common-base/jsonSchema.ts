// cloned from https://github.com/microsoft/vscode/blob/a017ece5a57d5b1aefff6c8b3cd7ada5e54700b7/src/vs/base/common/jsonSchema.ts#L71
export type JSONSchemaType =
  | "string"
  | "number"
  | "integer"
  | "boolean"
  | "null"
  | "array"
  | "object";

export interface IJSONSchema {
  id?: string;
  $id?: string;
  $schema?: string;
  type?: JSONSchemaType | JSONSchemaType[];
  title?: string;
  default?: any;
  definitions?: IJSONSchemaMap;
  description?: string;
  properties?: IJSONSchemaMap;
  patternProperties?: IJSONSchemaMap;
  additionalProperties?: boolean | IJSONSchema;
  minProperties?: number;
  maxProperties?: number;
  dependencies?: IJSONSchemaMap | { [prop: string]: string[] };
  items?: IJSONSchema | IJSONSchema[];
  minItems?: number;
  maxItems?: number;
  uniqueItems?: boolean;
  additionalItems?: boolean | IJSONSchema;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  minimum?: number;
  maximum?: number;
  exclusiveMinimum?: boolean | number;
  exclusiveMaximum?: boolean | number;
  multipleOf?: number;
  required?: string[];
  $ref?: string;
  anyOf?: IJSONSchema[];
  allOf?: IJSONSchema[];
  oneOf?: IJSONSchema[];
  not?: IJSONSchema;
  enum?: any[];
  format?: string;

  // schema draft 06
  const?: any;
  contains?: IJSONSchema;
  propertyNames?: IJSONSchema;

  // schema draft 07
  $comment?: string;
  if?: IJSONSchema;
  then?: IJSONSchema;
  else?: IJSONSchema;

  // VS Code extensions
  defaultSnippets?: IJSONSchemaSnippet[];
  errorMessage?: string;
  patternErrorMessage?: string;
  deprecationMessage?: string;
  markdownDeprecationMessage?: string;
  enumDescriptions?: string[];
  markdownEnumDescriptions?: string[];
  markdownDescription?: string;
  doNotSuggest?: boolean;
  suggestSortText?: string;
  allowComments?: boolean;
  allowTrailingCommas?: boolean;
}

export interface IJSONSchemaMap {
  [name: string]: IJSONSchema;
}

export interface IJSONSchemaSnippet {
  label?: string;
  description?: string;
  body?: any; // a object that will be JSON stringified
  bodyText?: string; // an already stringified JSON object that can contain new lines (\n) and tabs (\t)
}