/* eslint-disable */
/**
 * Generated from https://github.com/OAI/OpenAPI-Specification/blob/main/schemas/v2.0/schema.json
 * with http://borischerny.com/json-schema-to-typescript-browser/
 * You need to adjust all VendorExtensions to be a union with the type instead of including it directly!
 */

/**
 * The transfer protocol of the API.
 */
export type SchemesList = ("http" | "https" | "ws" | "wss")[];
/**
 * The MIME type of the HTTP message.
 */
export type MimeType = string;
export type MediaTypeList = MimeType[];
export type Parameter = BodyParameter | NonBodyParameter;
export type Title = string;
export type Description = string;
export type Default = unknown;
export type MultipleOf = number;
export type Maximum = number;
export type ExclusiveMaximum = boolean;
export type Minimum = number;
export type ExclusiveMinimum = boolean;
export type MaxLength = number;
export type MinLength = MaxLength;
export type Pattern = string;
export type UniqueItems = boolean;
/**
 * @minItems 1
 */
export type Enum = [unknown, ...unknown[]];
export type NonBodyParameter =
  | HeaderParameterSubSchema
  | FormDataParameterSubSchema
  | QueryParameterSubSchema
  | PathParameterSubSchema;
export type CollectionFormat = "csv" | "ssv" | "tsv" | "pipes";
export type CollectionFormatWithMulti =
  | "csv"
  | "ssv"
  | "tsv"
  | "pipes"
  | "multi";
/**
 * The parameters needed to send a valid API call.
 */
export type ParametersList = (Parameter | JsonReference)[];
/**
 * This interface was referenced by `Responses`'s JSON-Schema definition
 * via the `patternProperty` "^([0-9]{3})$|^(default)$".
 */
export type ResponseValue = Response | JsonReference;
export type Security = SecurityRequirement[];

export type OpenAPISchema = {
  /**
   * The Swagger version of this document.
   */
  swagger: "2.0";
  info: Info;
  /**
   * The host (name or ip) of the API. Example: 'swagger.io'
   */
  host?: string;
  /**
   * The base path to the API. Example: '/api'.
   */
  basePath?: string;
  schemes?: SchemesList;
  /**
   * A list of MIME types accepted by the API.
   */
  consumes?: MediaTypeList;
  /**
   * A list of MIME types the API can produce.
   */
  produces?: MediaTypeList;
  paths: Paths;
  definitions?: Definitions;
  parameters?: ParameterDefinitions;
  responses?: ResponseDefinitions;
  security?: Security;
  securityDefinitions?: SecurityDefinitions;
  tags?: Tag[];
  externalDocs?: ExternalDocs;
} & { [k: string]: VendorExtension };

/**
 * General information about the API.
 */
export type Info = {
  /**
   * A unique and precise title of the API.
   */
  title: string;
  /**
   * A semantic version number of the API.
   */
  version: string;
  /**
   * A longer description of the API. Should be different from the title.  GitHub Flavored Markdown is allowed.
   */
  description?: string;
  /**
   * The terms of service for the API.
   */
  termsOfService?: string;
  contact?: Contact;
  license?: License;
} & { [k: string]: VendorExtension };
/**
 * Contact information for the owners of the API.
 */
export type Contact = {
  /**
   * The identifying name of the contact person/organization.
   */
  name?: string;
  /**
   * The URL pointing to the contact information.
   */
  url?: string;
  /**
   * The email address of the contact person/organization.
   */
  email?: string;
} & { [k: string]: VendorExtension };

/**
 * Any property starting with x- is valid.
 *
 * This interface was referenced by `Contact`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `License`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `Info`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `Paths`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `ExternalDocs`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `Xml`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `Schema`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `BodyParameter`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `PrimitivesItems`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `HeaderParameterSubSchema`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `FormDataParameterSubSchema`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `QueryParameterSubSchema`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `PathParameterSubSchema`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `FileSchema`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `Header`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `Response`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `Responses`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `Operation`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `PathItem`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `BasicAuthenticationSecurity`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `ApiKeySecurity`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `Oauth2ImplicitSecurity`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `Oauth2PasswordSecurity`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `Oauth2ApplicationSecurity`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `Oauth2AccessCodeSecurity`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `Tag`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 */
export interface VendorExtension {
  [k: string]: any;
}

export type License = {
  /**
   * The name of the license type. It's encouraged to use an OSI compatible license.
   */
  name: string;
  /**
   * The URL pointing to the license.
   */
  url?: string;
} & { [k: string]: VendorExtension };

/**
 * Relative paths to the individual endpoints. They must be relative to the 'basePath'.
 */
export interface Paths {}

/**
 * This interface was referenced by `Paths`'s JSON-Schema definition
 * via the `patternProperty` "^/".
 */
export type PathItem = {
  $ref?: string;
  get?: Operation;
  put?: Operation;
  post?: Operation;
  delete?: Operation;
  options?: Operation;
  head?: Operation;
  patch?: Operation;
  parameters?: ParametersList;
} & { [k: string]: VendorExtension };

export type Operation = {
  tags?: string[];
  /**
   * A brief summary of the operation.
   */
  summary?: string;
  /**
   * A longer description of the operation, GitHub Flavored Markdown is allowed.
   */
  description?: string;
  externalDocs?: ExternalDocs;
  /**
   * A unique identifier of the operation.
   */
  operationId?: string;
  /**
   * A list of MIME types the API can produce.
   */
  produces?: MediaTypeList;
  /**
   * A list of MIME types the API can consume.
   */
  consumes?: MediaTypeList;
  parameters?: ParametersList;
  responses: Responses;
  schemes?: SchemesList;
  deprecated?: boolean;
  security?: Security;
} & { [k: string]: VendorExtension };

/**
 * information about external documentation
 */
export type ExternalDocs = {
  description?: string;
  url: string;
} & { [k: string]: VendorExtension };

export type BodyParameter = {
  /**
   * A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed.
   */
  description?: string;
  /**
   * The name of the parameter.
   */
  name: string;
  /**
   * Determines the location of the parameter.
   */
  in: "body";
  /**
   * Determines whether or not this parameter is required or optional.
   */
  required?: boolean;
  schema: Schema;
} & { [k: string]: VendorExtension };

/**
 * A deterministic version of a JSON Schema object.
 */
export type Schema = {
  $ref?: string;
  format?: string;
  title?: Title;
  description?: Description;
  default?: Default;
  multipleOf?: MultipleOf;
  maximum?: Maximum;
  exclusiveMaximum?: ExclusiveMaximum;
  minimum?: Minimum;
  exclusiveMinimum?: ExclusiveMinimum;
  maxLength?: MaxLength;
  minLength?: MinLength;
  pattern?: Pattern;
  maxItems?: MaxLength;
  minItems?: MinLength;
  uniqueItems?: UniqueItems;
  maxProperties?: MaxLength;
  minProperties?: MinLength;
  /**
   * @minItems 1
   */
  required?: [string, ...string[]];
  enum?: Enum;
  additionalProperties?: Schema | boolean;
  type?:
    | (
        | "array"
        | "boolean"
        | "integer"
        | "null"
        | "number"
        | "object"
        | "string"
      )
    | [
        (
          | "array"
          | "boolean"
          | "integer"
          | "null"
          | "number"
          | "object"
          | "string"
        ),
        ...(
          | "array"
          | "boolean"
          | "integer"
          | "null"
          | "number"
          | "object"
          | "string"
        )[]
      ];
  items?: Schema | [Schema, ...Schema[]];
  /**
   * @minItems 1
   */
  allOf?: [Schema, ...Schema[]];
  properties?: {
    [k: string]: Schema;
  };
  discriminator?: string;
  readOnly?: boolean;
  xml?: Xml;
  externalDocs?: ExternalDocs;
  example?: unknown;
} & { [k: string]: VendorExtension };

export type Xml = {
  name?: string;
  namespace?: string;
  prefix?: string;
  attribute?: boolean;
  wrapped?: boolean;
} & { [k: string]: VendorExtension };

export type HeaderParameterSubSchema = {
  /**
   * Determines whether or not this parameter is required or optional.
   */
  required?: boolean;
  /**
   * Determines the location of the parameter.
   */
  in?: "header";
  /**
   * A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed.
   */
  description?: string;
  /**
   * The name of the parameter.
   */
  name?: string;
  type?: "string" | "number" | "boolean" | "integer" | "array";
  format?: string;
  items?: PrimitivesItems;
  collectionFormat?: CollectionFormat;
  default?: Default;
  maximum?: Maximum;
  exclusiveMaximum?: ExclusiveMaximum;
  minimum?: Minimum;
  exclusiveMinimum?: ExclusiveMinimum;
  maxLength?: MaxLength;
  minLength?: MinLength;
  pattern?: Pattern;
  maxItems?: MaxLength;
  minItems?: MinLength;
  uniqueItems?: UniqueItems;
  enum?: Enum;
  multipleOf?: MultipleOf;
} & { [k: string]: VendorExtension };

export type PrimitivesItems = {
  type?: "string" | "number" | "integer" | "boolean" | "array";
  format?: string;
  items?: PrimitivesItems;
  collectionFormat?: CollectionFormat;
  default?: Default;
  maximum?: Maximum;
  exclusiveMaximum?: ExclusiveMaximum;
  minimum?: Minimum;
  exclusiveMinimum?: ExclusiveMinimum;
  maxLength?: MaxLength;
  minLength?: MinLength;
  pattern?: Pattern;
  maxItems?: MaxLength;
  minItems?: MinLength;
  uniqueItems?: UniqueItems;
  enum?: Enum;
  multipleOf?: MultipleOf;
} & { [k: string]: VendorExtension };

export type FormDataParameterSubSchema = {
  /**
   * Determines whether or not this parameter is required or optional.
   */
  required?: boolean;
  /**
   * Determines the location of the parameter.
   */
  in?: "formData";
  /**
   * A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed.
   */
  description?: string;
  /**
   * The name of the parameter.
   */
  name?: string;
  /**
   * allows sending a parameter by name only or with an empty value.
   */
  allowEmptyValue?: boolean;
  type?: "string" | "number" | "boolean" | "integer" | "array" | "file";
  format?: string;
  items?: PrimitivesItems;
  collectionFormat?: CollectionFormatWithMulti;
  default?: Default;
  maximum?: Maximum;
  exclusiveMaximum?: ExclusiveMaximum;
  minimum?: Minimum;
  exclusiveMinimum?: ExclusiveMinimum;
  maxLength?: MaxLength;
  minLength?: MinLength;
  pattern?: Pattern;
  maxItems?: MaxLength;
  minItems?: MinLength;
  uniqueItems?: UniqueItems;
  enum?: Enum;
  multipleOf?: MultipleOf;
} & { [k: string]: VendorExtension };

export type QueryParameterSubSchema = {
  /**
   * Determines whether or not this parameter is required or optional.
   */
  required?: boolean;
  /**
   * Determines the location of the parameter.
   */
  in?: "query";
  /**
   * A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed.
   */
  description?: string;
  /**
   * The name of the parameter.
   */
  name?: string;
  /**
   * allows sending a parameter by name only or with an empty value.
   */
  allowEmptyValue?: boolean;
  type?: "string" | "number" | "boolean" | "integer" | "array";
  format?: string;
  items?: PrimitivesItems;
  collectionFormat?: CollectionFormatWithMulti;
  default?: Default;
  maximum?: Maximum;
  exclusiveMaximum?: ExclusiveMaximum;
  minimum?: Minimum;
  exclusiveMinimum?: ExclusiveMinimum;
  maxLength?: MaxLength;
  minLength?: MinLength;
  pattern?: Pattern;
  maxItems?: MaxLength;
  minItems?: MinLength;
  uniqueItems?: UniqueItems;
  enum?: Enum;
  multipleOf?: MultipleOf;
} & { [k: string]: VendorExtension };

export type PathParameterSubSchema = {
  /**
   * Determines whether or not this parameter is required or optional.
   */
  required: true;
  /**
   * Determines the location of the parameter.
   */
  in?: "path";
  /**
   * A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed.
   */
  description?: string;
  /**
   * The name of the parameter.
   */
  name?: string;
  type?: "string" | "number" | "boolean" | "integer" | "array";
  format?: string;
  items?: PrimitivesItems;
  collectionFormat?: CollectionFormat;
  default?: Default;
  maximum?: Maximum;
  exclusiveMaximum?: ExclusiveMaximum;
  minimum?: Minimum;
  exclusiveMinimum?: ExclusiveMinimum;
  maxLength?: MaxLength;
  minLength?: MinLength;
  pattern?: Pattern;
  maxItems?: MaxLength;
  minItems?: MinLength;
  uniqueItems?: UniqueItems;
  enum?: Enum;
  multipleOf?: MultipleOf;
} & { [k: string]: VendorExtension };

export interface JsonReference {
  $ref: string;
}
/**
 * Response objects names can either be any valid HTTP status code or 'default'.
 */
export interface Responses {}

export type Response = {
  description: string;
  schema?: Schema | FileSchema;
  headers?: Headers;
  examples?: Examples;
} & { [k: string]: VendorExtension };

/**
 * A deterministic version of a JSON Schema object.
 */
export type FileSchema = {
  format?: string;
  title?: Title;
  description?: Description;
  default?: Default;
  /**
   * @minItems 1
   */
  required?: [string, ...string[]];
  type: "file";
  readOnly?: boolean;
  externalDocs?: ExternalDocs;
  example?: unknown;
} & { [k: string]: VendorExtension };

export interface Headers {
  [k: string]: Header;
}
export type Header = {
  type: "string" | "number" | "integer" | "boolean" | "array";
  format?: string;
  items?: PrimitivesItems;
  collectionFormat?: CollectionFormat;
  default?: Default;
  maximum?: Maximum;
  exclusiveMaximum?: ExclusiveMaximum;
  minimum?: Minimum;
  exclusiveMinimum?: ExclusiveMinimum;
  maxLength?: MaxLength;
  minLength?: MinLength;
  pattern?: Pattern;
  maxItems?: MaxLength;
  minItems?: MinLength;
  uniqueItems?: UniqueItems;
  enum?: Enum;
  multipleOf?: MultipleOf;
  description?: string;
} & { [k: string]: VendorExtension };

export interface Examples {
  [k: string]: unknown;
}
export interface SecurityRequirement {
  [k: string]: string[];
}
/**
 * One or more JSON objects describing the schemas being consumed and produced by the API.
 */
export interface Definitions {
  [k: string]: Schema;
}
/**
 * One or more JSON representations for parameters
 */
export interface ParameterDefinitions {
  [k: string]: Parameter;
}
/**
 * One or more JSON representations for responses
 */
export interface ResponseDefinitions {
  [k: string]: Response;
}
export interface SecurityDefinitions {
  [k: string]:
    | BasicAuthenticationSecurity
    | ApiKeySecurity
    | Oauth2ImplicitSecurity
    | Oauth2PasswordSecurity
    | Oauth2ApplicationSecurity
    | Oauth2AccessCodeSecurity;
}
export type BasicAuthenticationSecurity = {
  type: "basic";
  description?: string;
} & { [k: string]: VendorExtension };

export type ApiKeySecurity = {
  type: "apiKey";
  name: string;
  in: "header" | "query";
  description?: string;
} & { [k: string]: VendorExtension };

export type Oauth2ImplicitSecurity = {
  type: "oauth2";
  flow: "implicit";
  scopes?: Oauth2Scopes;
  authorizationUrl: string;
  description?: string;
} & { [k: string]: VendorExtension };

export interface Oauth2Scopes {
  [k: string]: string;
}

export type Oauth2PasswordSecurity = {
  type: "oauth2";
  flow: "password";
  scopes?: Oauth2Scopes;
  tokenUrl: string;
  description?: string;
} & { [k: string]: VendorExtension };

export type Oauth2ApplicationSecurity = {
  type: "oauth2";
  flow: "application";
  scopes?: Oauth2Scopes;
  tokenUrl: string;
  description?: string;
} & { [k: string]: VendorExtension };

export type Oauth2AccessCodeSecurity = {
  type: "oauth2";
  flow: "accessCode";
  scopes?: Oauth2Scopes;
  authorizationUrl: string;
  tokenUrl: string;
  description?: string;
} & { [k: string]: VendorExtension };

export type Tag = {
  name: string;
  description?: string;
  externalDocs?: ExternalDocs;
} & { [k: string]: VendorExtension };
