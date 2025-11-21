
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Conversacion
 * 
 */
export type Conversacion = $Result.DefaultSelection<Prisma.$ConversacionPayload>
/**
 * Model Mensaje
 * 
 */
export type Mensaje = $Result.DefaultSelection<Prisma.$MensajePayload>
/**
 * Model ConversacionParticipante
 * 
 */
export type ConversacionParticipante = $Result.DefaultSelection<Prisma.$ConversacionParticipantePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversacion`: Exposes CRUD operations for the **Conversacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversacions
    * const conversacions = await prisma.conversacion.findMany()
    * ```
    */
  get conversacion(): Prisma.ConversacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mensaje`: Exposes CRUD operations for the **Mensaje** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mensajes
    * const mensajes = await prisma.mensaje.findMany()
    * ```
    */
  get mensaje(): Prisma.MensajeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversacionParticipante`: Exposes CRUD operations for the **ConversacionParticipante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConversacionParticipantes
    * const conversacionParticipantes = await prisma.conversacionParticipante.findMany()
    * ```
    */
  get conversacionParticipante(): Prisma.ConversacionParticipanteDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Conversacion: 'Conversacion',
    Mensaje: 'Mensaje',
    ConversacionParticipante: 'ConversacionParticipante'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "conversacion" | "mensaje" | "conversacionParticipante"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Conversacion: {
        payload: Prisma.$ConversacionPayload<ExtArgs>
        fields: Prisma.ConversacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload>
          }
          findFirst: {
            args: Prisma.ConversacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload>
          }
          findMany: {
            args: Prisma.ConversacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload>[]
          }
          create: {
            args: Prisma.ConversacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload>
          }
          createMany: {
            args: Prisma.ConversacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConversacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload>[]
          }
          delete: {
            args: Prisma.ConversacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload>
          }
          update: {
            args: Prisma.ConversacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload>
          }
          deleteMany: {
            args: Prisma.ConversacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConversacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload>[]
          }
          upsert: {
            args: Prisma.ConversacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload>
          }
          aggregate: {
            args: Prisma.ConversacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversacion>
          }
          groupBy: {
            args: Prisma.ConversacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversacionCountArgs<ExtArgs>
            result: $Utils.Optional<ConversacionCountAggregateOutputType> | number
          }
        }
      }
      Mensaje: {
        payload: Prisma.$MensajePayload<ExtArgs>
        fields: Prisma.MensajeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MensajeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MensajeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          findFirst: {
            args: Prisma.MensajeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MensajeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          findMany: {
            args: Prisma.MensajeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>[]
          }
          create: {
            args: Prisma.MensajeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          createMany: {
            args: Prisma.MensajeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MensajeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>[]
          }
          delete: {
            args: Prisma.MensajeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          update: {
            args: Prisma.MensajeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          deleteMany: {
            args: Prisma.MensajeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MensajeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MensajeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>[]
          }
          upsert: {
            args: Prisma.MensajeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          aggregate: {
            args: Prisma.MensajeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMensaje>
          }
          groupBy: {
            args: Prisma.MensajeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MensajeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MensajeCountArgs<ExtArgs>
            result: $Utils.Optional<MensajeCountAggregateOutputType> | number
          }
        }
      }
      ConversacionParticipante: {
        payload: Prisma.$ConversacionParticipantePayload<ExtArgs>
        fields: Prisma.ConversacionParticipanteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversacionParticipanteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionParticipantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversacionParticipanteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionParticipantePayload>
          }
          findFirst: {
            args: Prisma.ConversacionParticipanteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionParticipantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversacionParticipanteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionParticipantePayload>
          }
          findMany: {
            args: Prisma.ConversacionParticipanteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionParticipantePayload>[]
          }
          create: {
            args: Prisma.ConversacionParticipanteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionParticipantePayload>
          }
          createMany: {
            args: Prisma.ConversacionParticipanteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConversacionParticipanteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionParticipantePayload>[]
          }
          delete: {
            args: Prisma.ConversacionParticipanteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionParticipantePayload>
          }
          update: {
            args: Prisma.ConversacionParticipanteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionParticipantePayload>
          }
          deleteMany: {
            args: Prisma.ConversacionParticipanteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversacionParticipanteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConversacionParticipanteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionParticipantePayload>[]
          }
          upsert: {
            args: Prisma.ConversacionParticipanteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionParticipantePayload>
          }
          aggregate: {
            args: Prisma.ConversacionParticipanteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversacionParticipante>
          }
          groupBy: {
            args: Prisma.ConversacionParticipanteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversacionParticipanteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversacionParticipanteCountArgs<ExtArgs>
            result: $Utils.Optional<ConversacionParticipanteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    conversacion?: ConversacionOmit
    mensaje?: MensajeOmit
    conversacionParticipante?: ConversacionParticipanteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    mensajes: number
    participaciones: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mensajes?: boolean | UsuarioCountOutputTypeCountMensajesArgs
    participaciones?: boolean | UsuarioCountOutputTypeCountParticipacionesArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountMensajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensajeWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountParticipacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversacionParticipanteWhereInput
  }


  /**
   * Count Type ConversacionCountOutputType
   */

  export type ConversacionCountOutputType = {
    mensajes: number
    participantes: number
  }

  export type ConversacionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mensajes?: boolean | ConversacionCountOutputTypeCountMensajesArgs
    participantes?: boolean | ConversacionCountOutputTypeCountParticipantesArgs
  }

  // Custom InputTypes
  /**
   * ConversacionCountOutputType without action
   */
  export type ConversacionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversacionCountOutputType
     */
    select?: ConversacionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversacionCountOutputType without action
   */
  export type ConversacionCountOutputTypeCountMensajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensajeWhereInput
  }

  /**
   * ConversacionCountOutputType without action
   */
  export type ConversacionCountOutputTypeCountParticipantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversacionParticipanteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    contrasena: string | null
    propfilePicture: string | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    contrasena: string | null
    propfilePicture: string | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    contrasena: number
    propfilePicture: number
    creadoEn: number
    actualizadoEn: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    contrasena?: true
    propfilePicture?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    contrasena?: true
    propfilePicture?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    contrasena?: true
    propfilePicture?: true
    creadoEn?: true
    actualizadoEn?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nombre: string
    email: string
    contrasena: string | null
    propfilePicture: string | null
    creadoEn: Date
    actualizadoEn: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    contrasena?: boolean
    propfilePicture?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    mensajes?: boolean | Usuario$mensajesArgs<ExtArgs>
    participaciones?: boolean | Usuario$participacionesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    contrasena?: boolean
    propfilePicture?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    contrasena?: boolean
    propfilePicture?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    contrasena?: boolean
    propfilePicture?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "email" | "contrasena" | "propfilePicture" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mensajes?: boolean | Usuario$mensajesArgs<ExtArgs>
    participaciones?: boolean | Usuario$participacionesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      mensajes: Prisma.$MensajePayload<ExtArgs>[]
      participaciones: Prisma.$ConversacionParticipantePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      email: string
      contrasena: string | null
      propfilePicture: string | null
      creadoEn: Date
      actualizadoEn: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mensajes<T extends Usuario$mensajesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$mensajesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participaciones<T extends Usuario$participacionesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$participacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversacionParticipantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly contrasena: FieldRef<"Usuario", 'String'>
    readonly propfilePicture: FieldRef<"Usuario", 'String'>
    readonly creadoEn: FieldRef<"Usuario", 'DateTime'>
    readonly actualizadoEn: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.mensajes
   */
  export type Usuario$mensajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    where?: MensajeWhereInput
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    cursor?: MensajeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensajeScalarFieldEnum | MensajeScalarFieldEnum[]
  }

  /**
   * Usuario.participaciones
   */
  export type Usuario$participacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversacionParticipante
     */
    select?: ConversacionParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversacionParticipante
     */
    omit?: ConversacionParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionParticipanteInclude<ExtArgs> | null
    where?: ConversacionParticipanteWhereInput
    orderBy?: ConversacionParticipanteOrderByWithRelationInput | ConversacionParticipanteOrderByWithRelationInput[]
    cursor?: ConversacionParticipanteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversacionParticipanteScalarFieldEnum | ConversacionParticipanteScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Conversacion
   */

  export type AggregateConversacion = {
    _count: ConversacionCountAggregateOutputType | null
    _avg: ConversacionAvgAggregateOutputType | null
    _sum: ConversacionSumAggregateOutputType | null
    _min: ConversacionMinAggregateOutputType | null
    _max: ConversacionMaxAggregateOutputType | null
  }

  export type ConversacionAvgAggregateOutputType = {
    id: number | null
  }

  export type ConversacionSumAggregateOutputType = {
    id: number | null
  }

  export type ConversacionMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    tipo: string | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type ConversacionMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    tipo: string | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type ConversacionCountAggregateOutputType = {
    id: number
    titulo: number
    tipo: number
    creadoEn: number
    actualizadoEn: number
    _all: number
  }


  export type ConversacionAvgAggregateInputType = {
    id?: true
  }

  export type ConversacionSumAggregateInputType = {
    id?: true
  }

  export type ConversacionMinAggregateInputType = {
    id?: true
    titulo?: true
    tipo?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type ConversacionMaxAggregateInputType = {
    id?: true
    titulo?: true
    tipo?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type ConversacionCountAggregateInputType = {
    id?: true
    titulo?: true
    tipo?: true
    creadoEn?: true
    actualizadoEn?: true
    _all?: true
  }

  export type ConversacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversacion to aggregate.
     */
    where?: ConversacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversacions to fetch.
     */
    orderBy?: ConversacionOrderByWithRelationInput | ConversacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conversacions
    **/
    _count?: true | ConversacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConversacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConversacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversacionMaxAggregateInputType
  }

  export type GetConversacionAggregateType<T extends ConversacionAggregateArgs> = {
        [P in keyof T & keyof AggregateConversacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversacion[P]>
      : GetScalarType<T[P], AggregateConversacion[P]>
  }




  export type ConversacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversacionWhereInput
    orderBy?: ConversacionOrderByWithAggregationInput | ConversacionOrderByWithAggregationInput[]
    by: ConversacionScalarFieldEnum[] | ConversacionScalarFieldEnum
    having?: ConversacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversacionCountAggregateInputType | true
    _avg?: ConversacionAvgAggregateInputType
    _sum?: ConversacionSumAggregateInputType
    _min?: ConversacionMinAggregateInputType
    _max?: ConversacionMaxAggregateInputType
  }

  export type ConversacionGroupByOutputType = {
    id: number
    titulo: string | null
    tipo: string
    creadoEn: Date
    actualizadoEn: Date
    _count: ConversacionCountAggregateOutputType | null
    _avg: ConversacionAvgAggregateOutputType | null
    _sum: ConversacionSumAggregateOutputType | null
    _min: ConversacionMinAggregateOutputType | null
    _max: ConversacionMaxAggregateOutputType | null
  }

  type GetConversacionGroupByPayload<T extends ConversacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversacionGroupByOutputType[P]>
            : GetScalarType<T[P], ConversacionGroupByOutputType[P]>
        }
      >
    >


  export type ConversacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    tipo?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    mensajes?: boolean | Conversacion$mensajesArgs<ExtArgs>
    participantes?: boolean | Conversacion$participantesArgs<ExtArgs>
    _count?: boolean | ConversacionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversacion"]>

  export type ConversacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    tipo?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }, ExtArgs["result"]["conversacion"]>

  export type ConversacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    tipo?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }, ExtArgs["result"]["conversacion"]>

  export type ConversacionSelectScalar = {
    id?: boolean
    titulo?: boolean
    tipo?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }

  export type ConversacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "tipo" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["conversacion"]>
  export type ConversacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mensajes?: boolean | Conversacion$mensajesArgs<ExtArgs>
    participantes?: boolean | Conversacion$participantesArgs<ExtArgs>
    _count?: boolean | ConversacionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConversacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ConversacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ConversacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conversacion"
    objects: {
      mensajes: Prisma.$MensajePayload<ExtArgs>[]
      participantes: Prisma.$ConversacionParticipantePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string | null
      tipo: string
      creadoEn: Date
      actualizadoEn: Date
    }, ExtArgs["result"]["conversacion"]>
    composites: {}
  }

  type ConversacionGetPayload<S extends boolean | null | undefined | ConversacionDefaultArgs> = $Result.GetResult<Prisma.$ConversacionPayload, S>

  type ConversacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversacionCountAggregateInputType | true
    }

  export interface ConversacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conversacion'], meta: { name: 'Conversacion' } }
    /**
     * Find zero or one Conversacion that matches the filter.
     * @param {ConversacionFindUniqueArgs} args - Arguments to find a Conversacion
     * @example
     * // Get one Conversacion
     * const conversacion = await prisma.conversacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversacionFindUniqueArgs>(args: SelectSubset<T, ConversacionFindUniqueArgs<ExtArgs>>): Prisma__ConversacionClient<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conversacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversacionFindUniqueOrThrowArgs} args - Arguments to find a Conversacion
     * @example
     * // Get one Conversacion
     * const conversacion = await prisma.conversacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversacionFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversacionClient<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversacionFindFirstArgs} args - Arguments to find a Conversacion
     * @example
     * // Get one Conversacion
     * const conversacion = await prisma.conversacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversacionFindFirstArgs>(args?: SelectSubset<T, ConversacionFindFirstArgs<ExtArgs>>): Prisma__ConversacionClient<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversacionFindFirstOrThrowArgs} args - Arguments to find a Conversacion
     * @example
     * // Get one Conversacion
     * const conversacion = await prisma.conversacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversacionFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversacionClient<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversacions
     * const conversacions = await prisma.conversacion.findMany()
     * 
     * // Get first 10 Conversacions
     * const conversacions = await prisma.conversacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversacionWithIdOnly = await prisma.conversacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversacionFindManyArgs>(args?: SelectSubset<T, ConversacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conversacion.
     * @param {ConversacionCreateArgs} args - Arguments to create a Conversacion.
     * @example
     * // Create one Conversacion
     * const Conversacion = await prisma.conversacion.create({
     *   data: {
     *     // ... data to create a Conversacion
     *   }
     * })
     * 
     */
    create<T extends ConversacionCreateArgs>(args: SelectSubset<T, ConversacionCreateArgs<ExtArgs>>): Prisma__ConversacionClient<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conversacions.
     * @param {ConversacionCreateManyArgs} args - Arguments to create many Conversacions.
     * @example
     * // Create many Conversacions
     * const conversacion = await prisma.conversacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversacionCreateManyArgs>(args?: SelectSubset<T, ConversacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conversacions and returns the data saved in the database.
     * @param {ConversacionCreateManyAndReturnArgs} args - Arguments to create many Conversacions.
     * @example
     * // Create many Conversacions
     * const conversacion = await prisma.conversacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conversacions and only return the `id`
     * const conversacionWithIdOnly = await prisma.conversacion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConversacionCreateManyAndReturnArgs>(args?: SelectSubset<T, ConversacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conversacion.
     * @param {ConversacionDeleteArgs} args - Arguments to delete one Conversacion.
     * @example
     * // Delete one Conversacion
     * const Conversacion = await prisma.conversacion.delete({
     *   where: {
     *     // ... filter to delete one Conversacion
     *   }
     * })
     * 
     */
    delete<T extends ConversacionDeleteArgs>(args: SelectSubset<T, ConversacionDeleteArgs<ExtArgs>>): Prisma__ConversacionClient<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conversacion.
     * @param {ConversacionUpdateArgs} args - Arguments to update one Conversacion.
     * @example
     * // Update one Conversacion
     * const conversacion = await prisma.conversacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversacionUpdateArgs>(args: SelectSubset<T, ConversacionUpdateArgs<ExtArgs>>): Prisma__ConversacionClient<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conversacions.
     * @param {ConversacionDeleteManyArgs} args - Arguments to filter Conversacions to delete.
     * @example
     * // Delete a few Conversacions
     * const { count } = await prisma.conversacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversacionDeleteManyArgs>(args?: SelectSubset<T, ConversacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversacions
     * const conversacion = await prisma.conversacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversacionUpdateManyArgs>(args: SelectSubset<T, ConversacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversacions and returns the data updated in the database.
     * @param {ConversacionUpdateManyAndReturnArgs} args - Arguments to update many Conversacions.
     * @example
     * // Update many Conversacions
     * const conversacion = await prisma.conversacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conversacions and only return the `id`
     * const conversacionWithIdOnly = await prisma.conversacion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConversacionUpdateManyAndReturnArgs>(args: SelectSubset<T, ConversacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conversacion.
     * @param {ConversacionUpsertArgs} args - Arguments to update or create a Conversacion.
     * @example
     * // Update or create a Conversacion
     * const conversacion = await prisma.conversacion.upsert({
     *   create: {
     *     // ... data to create a Conversacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversacion we want to update
     *   }
     * })
     */
    upsert<T extends ConversacionUpsertArgs>(args: SelectSubset<T, ConversacionUpsertArgs<ExtArgs>>): Prisma__ConversacionClient<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conversacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversacionCountArgs} args - Arguments to filter Conversacions to count.
     * @example
     * // Count the number of Conversacions
     * const count = await prisma.conversacion.count({
     *   where: {
     *     // ... the filter for the Conversacions we want to count
     *   }
     * })
    **/
    count<T extends ConversacionCountArgs>(
      args?: Subset<T, ConversacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConversacionAggregateArgs>(args: Subset<T, ConversacionAggregateArgs>): Prisma.PrismaPromise<GetConversacionAggregateType<T>>

    /**
     * Group by Conversacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversacionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConversacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversacionGroupByArgs['orderBy'] }
        : { orderBy?: ConversacionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConversacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conversacion model
   */
  readonly fields: ConversacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conversacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mensajes<T extends Conversacion$mensajesArgs<ExtArgs> = {}>(args?: Subset<T, Conversacion$mensajesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participantes<T extends Conversacion$participantesArgs<ExtArgs> = {}>(args?: Subset<T, Conversacion$participantesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversacionParticipantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Conversacion model
   */
  interface ConversacionFieldRefs {
    readonly id: FieldRef<"Conversacion", 'Int'>
    readonly titulo: FieldRef<"Conversacion", 'String'>
    readonly tipo: FieldRef<"Conversacion", 'String'>
    readonly creadoEn: FieldRef<"Conversacion", 'DateTime'>
    readonly actualizadoEn: FieldRef<"Conversacion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Conversacion findUnique
   */
  export type ConversacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    /**
     * Filter, which Conversacion to fetch.
     */
    where: ConversacionWhereUniqueInput
  }

  /**
   * Conversacion findUniqueOrThrow
   */
  export type ConversacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    /**
     * Filter, which Conversacion to fetch.
     */
    where: ConversacionWhereUniqueInput
  }

  /**
   * Conversacion findFirst
   */
  export type ConversacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    /**
     * Filter, which Conversacion to fetch.
     */
    where?: ConversacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversacions to fetch.
     */
    orderBy?: ConversacionOrderByWithRelationInput | ConversacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversacions.
     */
    cursor?: ConversacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversacions.
     */
    distinct?: ConversacionScalarFieldEnum | ConversacionScalarFieldEnum[]
  }

  /**
   * Conversacion findFirstOrThrow
   */
  export type ConversacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    /**
     * Filter, which Conversacion to fetch.
     */
    where?: ConversacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversacions to fetch.
     */
    orderBy?: ConversacionOrderByWithRelationInput | ConversacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversacions.
     */
    cursor?: ConversacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversacions.
     */
    distinct?: ConversacionScalarFieldEnum | ConversacionScalarFieldEnum[]
  }

  /**
   * Conversacion findMany
   */
  export type ConversacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    /**
     * Filter, which Conversacions to fetch.
     */
    where?: ConversacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversacions to fetch.
     */
    orderBy?: ConversacionOrderByWithRelationInput | ConversacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conversacions.
     */
    cursor?: ConversacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversacions.
     */
    skip?: number
    distinct?: ConversacionScalarFieldEnum | ConversacionScalarFieldEnum[]
  }

  /**
   * Conversacion create
   */
  export type ConversacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    /**
     * The data needed to create a Conversacion.
     */
    data: XOR<ConversacionCreateInput, ConversacionUncheckedCreateInput>
  }

  /**
   * Conversacion createMany
   */
  export type ConversacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conversacions.
     */
    data: ConversacionCreateManyInput | ConversacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conversacion createManyAndReturn
   */
  export type ConversacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * The data used to create many Conversacions.
     */
    data: ConversacionCreateManyInput | ConversacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conversacion update
   */
  export type ConversacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    /**
     * The data needed to update a Conversacion.
     */
    data: XOR<ConversacionUpdateInput, ConversacionUncheckedUpdateInput>
    /**
     * Choose, which Conversacion to update.
     */
    where: ConversacionWhereUniqueInput
  }

  /**
   * Conversacion updateMany
   */
  export type ConversacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conversacions.
     */
    data: XOR<ConversacionUpdateManyMutationInput, ConversacionUncheckedUpdateManyInput>
    /**
     * Filter which Conversacions to update
     */
    where?: ConversacionWhereInput
    /**
     * Limit how many Conversacions to update.
     */
    limit?: number
  }

  /**
   * Conversacion updateManyAndReturn
   */
  export type ConversacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * The data used to update Conversacions.
     */
    data: XOR<ConversacionUpdateManyMutationInput, ConversacionUncheckedUpdateManyInput>
    /**
     * Filter which Conversacions to update
     */
    where?: ConversacionWhereInput
    /**
     * Limit how many Conversacions to update.
     */
    limit?: number
  }

  /**
   * Conversacion upsert
   */
  export type ConversacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    /**
     * The filter to search for the Conversacion to update in case it exists.
     */
    where: ConversacionWhereUniqueInput
    /**
     * In case the Conversacion found by the `where` argument doesn't exist, create a new Conversacion with this data.
     */
    create: XOR<ConversacionCreateInput, ConversacionUncheckedCreateInput>
    /**
     * In case the Conversacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversacionUpdateInput, ConversacionUncheckedUpdateInput>
  }

  /**
   * Conversacion delete
   */
  export type ConversacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    /**
     * Filter which Conversacion to delete.
     */
    where: ConversacionWhereUniqueInput
  }

  /**
   * Conversacion deleteMany
   */
  export type ConversacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversacions to delete
     */
    where?: ConversacionWhereInput
    /**
     * Limit how many Conversacions to delete.
     */
    limit?: number
  }

  /**
   * Conversacion.mensajes
   */
  export type Conversacion$mensajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    where?: MensajeWhereInput
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    cursor?: MensajeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensajeScalarFieldEnum | MensajeScalarFieldEnum[]
  }

  /**
   * Conversacion.participantes
   */
  export type Conversacion$participantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversacionParticipante
     */
    select?: ConversacionParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversacionParticipante
     */
    omit?: ConversacionParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionParticipanteInclude<ExtArgs> | null
    where?: ConversacionParticipanteWhereInput
    orderBy?: ConversacionParticipanteOrderByWithRelationInput | ConversacionParticipanteOrderByWithRelationInput[]
    cursor?: ConversacionParticipanteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversacionParticipanteScalarFieldEnum | ConversacionParticipanteScalarFieldEnum[]
  }

  /**
   * Conversacion without action
   */
  export type ConversacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
  }


  /**
   * Model Mensaje
   */

  export type AggregateMensaje = {
    _count: MensajeCountAggregateOutputType | null
    _avg: MensajeAvgAggregateOutputType | null
    _sum: MensajeSumAggregateOutputType | null
    _min: MensajeMinAggregateOutputType | null
    _max: MensajeMaxAggregateOutputType | null
  }

  export type MensajeAvgAggregateOutputType = {
    id: number | null
    conversacionId: number | null
    remitenteId: number | null
  }

  export type MensajeSumAggregateOutputType = {
    id: number | null
    conversacionId: number | null
    remitenteId: number | null
  }

  export type MensajeMinAggregateOutputType = {
    id: number | null
    contenido: string | null
    tipo: string | null
    visto: boolean | null
    creadoEn: Date | null
    actualizadoEn: Date | null
    conversacionId: number | null
    remitenteId: number | null
  }

  export type MensajeMaxAggregateOutputType = {
    id: number | null
    contenido: string | null
    tipo: string | null
    visto: boolean | null
    creadoEn: Date | null
    actualizadoEn: Date | null
    conversacionId: number | null
    remitenteId: number | null
  }

  export type MensajeCountAggregateOutputType = {
    id: number
    contenido: number
    tipo: number
    visto: number
    creadoEn: number
    actualizadoEn: number
    conversacionId: number
    remitenteId: number
    _all: number
  }


  export type MensajeAvgAggregateInputType = {
    id?: true
    conversacionId?: true
    remitenteId?: true
  }

  export type MensajeSumAggregateInputType = {
    id?: true
    conversacionId?: true
    remitenteId?: true
  }

  export type MensajeMinAggregateInputType = {
    id?: true
    contenido?: true
    tipo?: true
    visto?: true
    creadoEn?: true
    actualizadoEn?: true
    conversacionId?: true
    remitenteId?: true
  }

  export type MensajeMaxAggregateInputType = {
    id?: true
    contenido?: true
    tipo?: true
    visto?: true
    creadoEn?: true
    actualizadoEn?: true
    conversacionId?: true
    remitenteId?: true
  }

  export type MensajeCountAggregateInputType = {
    id?: true
    contenido?: true
    tipo?: true
    visto?: true
    creadoEn?: true
    actualizadoEn?: true
    conversacionId?: true
    remitenteId?: true
    _all?: true
  }

  export type MensajeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mensaje to aggregate.
     */
    where?: MensajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensajes to fetch.
     */
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MensajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mensajes
    **/
    _count?: true | MensajeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MensajeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MensajeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MensajeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MensajeMaxAggregateInputType
  }

  export type GetMensajeAggregateType<T extends MensajeAggregateArgs> = {
        [P in keyof T & keyof AggregateMensaje]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMensaje[P]>
      : GetScalarType<T[P], AggregateMensaje[P]>
  }




  export type MensajeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensajeWhereInput
    orderBy?: MensajeOrderByWithAggregationInput | MensajeOrderByWithAggregationInput[]
    by: MensajeScalarFieldEnum[] | MensajeScalarFieldEnum
    having?: MensajeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MensajeCountAggregateInputType | true
    _avg?: MensajeAvgAggregateInputType
    _sum?: MensajeSumAggregateInputType
    _min?: MensajeMinAggregateInputType
    _max?: MensajeMaxAggregateInputType
  }

  export type MensajeGroupByOutputType = {
    id: number
    contenido: string
    tipo: string
    visto: boolean
    creadoEn: Date
    actualizadoEn: Date
    conversacionId: number
    remitenteId: number
    _count: MensajeCountAggregateOutputType | null
    _avg: MensajeAvgAggregateOutputType | null
    _sum: MensajeSumAggregateOutputType | null
    _min: MensajeMinAggregateOutputType | null
    _max: MensajeMaxAggregateOutputType | null
  }

  type GetMensajeGroupByPayload<T extends MensajeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MensajeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MensajeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MensajeGroupByOutputType[P]>
            : GetScalarType<T[P], MensajeGroupByOutputType[P]>
        }
      >
    >


  export type MensajeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contenido?: boolean
    tipo?: boolean
    visto?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    conversacionId?: boolean
    remitenteId?: boolean
    conversacion?: boolean | ConversacionDefaultArgs<ExtArgs>
    remitente?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensaje"]>

  export type MensajeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contenido?: boolean
    tipo?: boolean
    visto?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    conversacionId?: boolean
    remitenteId?: boolean
    conversacion?: boolean | ConversacionDefaultArgs<ExtArgs>
    remitente?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensaje"]>

  export type MensajeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contenido?: boolean
    tipo?: boolean
    visto?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    conversacionId?: boolean
    remitenteId?: boolean
    conversacion?: boolean | ConversacionDefaultArgs<ExtArgs>
    remitente?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensaje"]>

  export type MensajeSelectScalar = {
    id?: boolean
    contenido?: boolean
    tipo?: boolean
    visto?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    conversacionId?: boolean
    remitenteId?: boolean
  }

  export type MensajeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contenido" | "tipo" | "visto" | "creadoEn" | "actualizadoEn" | "conversacionId" | "remitenteId", ExtArgs["result"]["mensaje"]>
  export type MensajeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversacion?: boolean | ConversacionDefaultArgs<ExtArgs>
    remitente?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type MensajeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversacion?: boolean | ConversacionDefaultArgs<ExtArgs>
    remitente?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type MensajeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversacion?: boolean | ConversacionDefaultArgs<ExtArgs>
    remitente?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $MensajePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mensaje"
    objects: {
      conversacion: Prisma.$ConversacionPayload<ExtArgs>
      remitente: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      contenido: string
      tipo: string
      visto: boolean
      creadoEn: Date
      actualizadoEn: Date
      conversacionId: number
      remitenteId: number
    }, ExtArgs["result"]["mensaje"]>
    composites: {}
  }

  type MensajeGetPayload<S extends boolean | null | undefined | MensajeDefaultArgs> = $Result.GetResult<Prisma.$MensajePayload, S>

  type MensajeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MensajeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MensajeCountAggregateInputType | true
    }

  export interface MensajeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mensaje'], meta: { name: 'Mensaje' } }
    /**
     * Find zero or one Mensaje that matches the filter.
     * @param {MensajeFindUniqueArgs} args - Arguments to find a Mensaje
     * @example
     * // Get one Mensaje
     * const mensaje = await prisma.mensaje.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MensajeFindUniqueArgs>(args: SelectSubset<T, MensajeFindUniqueArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mensaje that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MensajeFindUniqueOrThrowArgs} args - Arguments to find a Mensaje
     * @example
     * // Get one Mensaje
     * const mensaje = await prisma.mensaje.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MensajeFindUniqueOrThrowArgs>(args: SelectSubset<T, MensajeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mensaje that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeFindFirstArgs} args - Arguments to find a Mensaje
     * @example
     * // Get one Mensaje
     * const mensaje = await prisma.mensaje.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MensajeFindFirstArgs>(args?: SelectSubset<T, MensajeFindFirstArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mensaje that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeFindFirstOrThrowArgs} args - Arguments to find a Mensaje
     * @example
     * // Get one Mensaje
     * const mensaje = await prisma.mensaje.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MensajeFindFirstOrThrowArgs>(args?: SelectSubset<T, MensajeFindFirstOrThrowArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mensajes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mensajes
     * const mensajes = await prisma.mensaje.findMany()
     * 
     * // Get first 10 Mensajes
     * const mensajes = await prisma.mensaje.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mensajeWithIdOnly = await prisma.mensaje.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MensajeFindManyArgs>(args?: SelectSubset<T, MensajeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mensaje.
     * @param {MensajeCreateArgs} args - Arguments to create a Mensaje.
     * @example
     * // Create one Mensaje
     * const Mensaje = await prisma.mensaje.create({
     *   data: {
     *     // ... data to create a Mensaje
     *   }
     * })
     * 
     */
    create<T extends MensajeCreateArgs>(args: SelectSubset<T, MensajeCreateArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mensajes.
     * @param {MensajeCreateManyArgs} args - Arguments to create many Mensajes.
     * @example
     * // Create many Mensajes
     * const mensaje = await prisma.mensaje.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MensajeCreateManyArgs>(args?: SelectSubset<T, MensajeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mensajes and returns the data saved in the database.
     * @param {MensajeCreateManyAndReturnArgs} args - Arguments to create many Mensajes.
     * @example
     * // Create many Mensajes
     * const mensaje = await prisma.mensaje.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mensajes and only return the `id`
     * const mensajeWithIdOnly = await prisma.mensaje.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MensajeCreateManyAndReturnArgs>(args?: SelectSubset<T, MensajeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mensaje.
     * @param {MensajeDeleteArgs} args - Arguments to delete one Mensaje.
     * @example
     * // Delete one Mensaje
     * const Mensaje = await prisma.mensaje.delete({
     *   where: {
     *     // ... filter to delete one Mensaje
     *   }
     * })
     * 
     */
    delete<T extends MensajeDeleteArgs>(args: SelectSubset<T, MensajeDeleteArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mensaje.
     * @param {MensajeUpdateArgs} args - Arguments to update one Mensaje.
     * @example
     * // Update one Mensaje
     * const mensaje = await prisma.mensaje.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MensajeUpdateArgs>(args: SelectSubset<T, MensajeUpdateArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mensajes.
     * @param {MensajeDeleteManyArgs} args - Arguments to filter Mensajes to delete.
     * @example
     * // Delete a few Mensajes
     * const { count } = await prisma.mensaje.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MensajeDeleteManyArgs>(args?: SelectSubset<T, MensajeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mensajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mensajes
     * const mensaje = await prisma.mensaje.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MensajeUpdateManyArgs>(args: SelectSubset<T, MensajeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mensajes and returns the data updated in the database.
     * @param {MensajeUpdateManyAndReturnArgs} args - Arguments to update many Mensajes.
     * @example
     * // Update many Mensajes
     * const mensaje = await prisma.mensaje.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mensajes and only return the `id`
     * const mensajeWithIdOnly = await prisma.mensaje.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MensajeUpdateManyAndReturnArgs>(args: SelectSubset<T, MensajeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mensaje.
     * @param {MensajeUpsertArgs} args - Arguments to update or create a Mensaje.
     * @example
     * // Update or create a Mensaje
     * const mensaje = await prisma.mensaje.upsert({
     *   create: {
     *     // ... data to create a Mensaje
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mensaje we want to update
     *   }
     * })
     */
    upsert<T extends MensajeUpsertArgs>(args: SelectSubset<T, MensajeUpsertArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mensajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeCountArgs} args - Arguments to filter Mensajes to count.
     * @example
     * // Count the number of Mensajes
     * const count = await prisma.mensaje.count({
     *   where: {
     *     // ... the filter for the Mensajes we want to count
     *   }
     * })
    **/
    count<T extends MensajeCountArgs>(
      args?: Subset<T, MensajeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MensajeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mensaje.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MensajeAggregateArgs>(args: Subset<T, MensajeAggregateArgs>): Prisma.PrismaPromise<GetMensajeAggregateType<T>>

    /**
     * Group by Mensaje.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MensajeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MensajeGroupByArgs['orderBy'] }
        : { orderBy?: MensajeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MensajeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMensajeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mensaje model
   */
  readonly fields: MensajeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mensaje.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MensajeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversacion<T extends ConversacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversacionDefaultArgs<ExtArgs>>): Prisma__ConversacionClient<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    remitente<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mensaje model
   */
  interface MensajeFieldRefs {
    readonly id: FieldRef<"Mensaje", 'Int'>
    readonly contenido: FieldRef<"Mensaje", 'String'>
    readonly tipo: FieldRef<"Mensaje", 'String'>
    readonly visto: FieldRef<"Mensaje", 'Boolean'>
    readonly creadoEn: FieldRef<"Mensaje", 'DateTime'>
    readonly actualizadoEn: FieldRef<"Mensaje", 'DateTime'>
    readonly conversacionId: FieldRef<"Mensaje", 'Int'>
    readonly remitenteId: FieldRef<"Mensaje", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Mensaje findUnique
   */
  export type MensajeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * Filter, which Mensaje to fetch.
     */
    where: MensajeWhereUniqueInput
  }

  /**
   * Mensaje findUniqueOrThrow
   */
  export type MensajeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * Filter, which Mensaje to fetch.
     */
    where: MensajeWhereUniqueInput
  }

  /**
   * Mensaje findFirst
   */
  export type MensajeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * Filter, which Mensaje to fetch.
     */
    where?: MensajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensajes to fetch.
     */
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mensajes.
     */
    cursor?: MensajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mensajes.
     */
    distinct?: MensajeScalarFieldEnum | MensajeScalarFieldEnum[]
  }

  /**
   * Mensaje findFirstOrThrow
   */
  export type MensajeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * Filter, which Mensaje to fetch.
     */
    where?: MensajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensajes to fetch.
     */
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mensajes.
     */
    cursor?: MensajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mensajes.
     */
    distinct?: MensajeScalarFieldEnum | MensajeScalarFieldEnum[]
  }

  /**
   * Mensaje findMany
   */
  export type MensajeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * Filter, which Mensajes to fetch.
     */
    where?: MensajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensajes to fetch.
     */
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mensajes.
     */
    cursor?: MensajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensajes.
     */
    skip?: number
    distinct?: MensajeScalarFieldEnum | MensajeScalarFieldEnum[]
  }

  /**
   * Mensaje create
   */
  export type MensajeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * The data needed to create a Mensaje.
     */
    data: XOR<MensajeCreateInput, MensajeUncheckedCreateInput>
  }

  /**
   * Mensaje createMany
   */
  export type MensajeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mensajes.
     */
    data: MensajeCreateManyInput | MensajeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mensaje createManyAndReturn
   */
  export type MensajeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * The data used to create many Mensajes.
     */
    data: MensajeCreateManyInput | MensajeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mensaje update
   */
  export type MensajeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * The data needed to update a Mensaje.
     */
    data: XOR<MensajeUpdateInput, MensajeUncheckedUpdateInput>
    /**
     * Choose, which Mensaje to update.
     */
    where: MensajeWhereUniqueInput
  }

  /**
   * Mensaje updateMany
   */
  export type MensajeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mensajes.
     */
    data: XOR<MensajeUpdateManyMutationInput, MensajeUncheckedUpdateManyInput>
    /**
     * Filter which Mensajes to update
     */
    where?: MensajeWhereInput
    /**
     * Limit how many Mensajes to update.
     */
    limit?: number
  }

  /**
   * Mensaje updateManyAndReturn
   */
  export type MensajeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * The data used to update Mensajes.
     */
    data: XOR<MensajeUpdateManyMutationInput, MensajeUncheckedUpdateManyInput>
    /**
     * Filter which Mensajes to update
     */
    where?: MensajeWhereInput
    /**
     * Limit how many Mensajes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mensaje upsert
   */
  export type MensajeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * The filter to search for the Mensaje to update in case it exists.
     */
    where: MensajeWhereUniqueInput
    /**
     * In case the Mensaje found by the `where` argument doesn't exist, create a new Mensaje with this data.
     */
    create: XOR<MensajeCreateInput, MensajeUncheckedCreateInput>
    /**
     * In case the Mensaje was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MensajeUpdateInput, MensajeUncheckedUpdateInput>
  }

  /**
   * Mensaje delete
   */
  export type MensajeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * Filter which Mensaje to delete.
     */
    where: MensajeWhereUniqueInput
  }

  /**
   * Mensaje deleteMany
   */
  export type MensajeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mensajes to delete
     */
    where?: MensajeWhereInput
    /**
     * Limit how many Mensajes to delete.
     */
    limit?: number
  }

  /**
   * Mensaje without action
   */
  export type MensajeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
  }


  /**
   * Model ConversacionParticipante
   */

  export type AggregateConversacionParticipante = {
    _count: ConversacionParticipanteCountAggregateOutputType | null
    _avg: ConversacionParticipanteAvgAggregateOutputType | null
    _sum: ConversacionParticipanteSumAggregateOutputType | null
    _min: ConversacionParticipanteMinAggregateOutputType | null
    _max: ConversacionParticipanteMaxAggregateOutputType | null
  }

  export type ConversacionParticipanteAvgAggregateOutputType = {
    id: number | null
    conversacionId: number | null
    usuarioId: number | null
  }

  export type ConversacionParticipanteSumAggregateOutputType = {
    id: number | null
    conversacionId: number | null
    usuarioId: number | null
  }

  export type ConversacionParticipanteMinAggregateOutputType = {
    id: number | null
    creadoEn: Date | null
    actualizadoEn: Date | null
    conversacionId: number | null
    usuarioId: number | null
  }

  export type ConversacionParticipanteMaxAggregateOutputType = {
    id: number | null
    creadoEn: Date | null
    actualizadoEn: Date | null
    conversacionId: number | null
    usuarioId: number | null
  }

  export type ConversacionParticipanteCountAggregateOutputType = {
    id: number
    creadoEn: number
    actualizadoEn: number
    conversacionId: number
    usuarioId: number
    _all: number
  }


  export type ConversacionParticipanteAvgAggregateInputType = {
    id?: true
    conversacionId?: true
    usuarioId?: true
  }

  export type ConversacionParticipanteSumAggregateInputType = {
    id?: true
    conversacionId?: true
    usuarioId?: true
  }

  export type ConversacionParticipanteMinAggregateInputType = {
    id?: true
    creadoEn?: true
    actualizadoEn?: true
    conversacionId?: true
    usuarioId?: true
  }

  export type ConversacionParticipanteMaxAggregateInputType = {
    id?: true
    creadoEn?: true
    actualizadoEn?: true
    conversacionId?: true
    usuarioId?: true
  }

  export type ConversacionParticipanteCountAggregateInputType = {
    id?: true
    creadoEn?: true
    actualizadoEn?: true
    conversacionId?: true
    usuarioId?: true
    _all?: true
  }

  export type ConversacionParticipanteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConversacionParticipante to aggregate.
     */
    where?: ConversacionParticipanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversacionParticipantes to fetch.
     */
    orderBy?: ConversacionParticipanteOrderByWithRelationInput | ConversacionParticipanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversacionParticipanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversacionParticipantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversacionParticipantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConversacionParticipantes
    **/
    _count?: true | ConversacionParticipanteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConversacionParticipanteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConversacionParticipanteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversacionParticipanteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversacionParticipanteMaxAggregateInputType
  }

  export type GetConversacionParticipanteAggregateType<T extends ConversacionParticipanteAggregateArgs> = {
        [P in keyof T & keyof AggregateConversacionParticipante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversacionParticipante[P]>
      : GetScalarType<T[P], AggregateConversacionParticipante[P]>
  }




  export type ConversacionParticipanteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversacionParticipanteWhereInput
    orderBy?: ConversacionParticipanteOrderByWithAggregationInput | ConversacionParticipanteOrderByWithAggregationInput[]
    by: ConversacionParticipanteScalarFieldEnum[] | ConversacionParticipanteScalarFieldEnum
    having?: ConversacionParticipanteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversacionParticipanteCountAggregateInputType | true
    _avg?: ConversacionParticipanteAvgAggregateInputType
    _sum?: ConversacionParticipanteSumAggregateInputType
    _min?: ConversacionParticipanteMinAggregateInputType
    _max?: ConversacionParticipanteMaxAggregateInputType
  }

  export type ConversacionParticipanteGroupByOutputType = {
    id: number
    creadoEn: Date
    actualizadoEn: Date
    conversacionId: number
    usuarioId: number
    _count: ConversacionParticipanteCountAggregateOutputType | null
    _avg: ConversacionParticipanteAvgAggregateOutputType | null
    _sum: ConversacionParticipanteSumAggregateOutputType | null
    _min: ConversacionParticipanteMinAggregateOutputType | null
    _max: ConversacionParticipanteMaxAggregateOutputType | null
  }

  type GetConversacionParticipanteGroupByPayload<T extends ConversacionParticipanteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversacionParticipanteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversacionParticipanteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversacionParticipanteGroupByOutputType[P]>
            : GetScalarType<T[P], ConversacionParticipanteGroupByOutputType[P]>
        }
      >
    >


  export type ConversacionParticipanteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    conversacionId?: boolean
    usuarioId?: boolean
    conversacion?: boolean | ConversacionDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversacionParticipante"]>

  export type ConversacionParticipanteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    conversacionId?: boolean
    usuarioId?: boolean
    conversacion?: boolean | ConversacionDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversacionParticipante"]>

  export type ConversacionParticipanteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    conversacionId?: boolean
    usuarioId?: boolean
    conversacion?: boolean | ConversacionDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversacionParticipante"]>

  export type ConversacionParticipanteSelectScalar = {
    id?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    conversacionId?: boolean
    usuarioId?: boolean
  }

  export type ConversacionParticipanteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "creadoEn" | "actualizadoEn" | "conversacionId" | "usuarioId", ExtArgs["result"]["conversacionParticipante"]>
  export type ConversacionParticipanteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversacion?: boolean | ConversacionDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ConversacionParticipanteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversacion?: boolean | ConversacionDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ConversacionParticipanteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversacion?: boolean | ConversacionDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ConversacionParticipantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConversacionParticipante"
    objects: {
      conversacion: Prisma.$ConversacionPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      creadoEn: Date
      actualizadoEn: Date
      conversacionId: number
      usuarioId: number
    }, ExtArgs["result"]["conversacionParticipante"]>
    composites: {}
  }

  type ConversacionParticipanteGetPayload<S extends boolean | null | undefined | ConversacionParticipanteDefaultArgs> = $Result.GetResult<Prisma.$ConversacionParticipantePayload, S>

  type ConversacionParticipanteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversacionParticipanteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversacionParticipanteCountAggregateInputType | true
    }

  export interface ConversacionParticipanteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConversacionParticipante'], meta: { name: 'ConversacionParticipante' } }
    /**
     * Find zero or one ConversacionParticipante that matches the filter.
     * @param {ConversacionParticipanteFindUniqueArgs} args - Arguments to find a ConversacionParticipante
     * @example
     * // Get one ConversacionParticipante
     * const conversacionParticipante = await prisma.conversacionParticipante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversacionParticipanteFindUniqueArgs>(args: SelectSubset<T, ConversacionParticipanteFindUniqueArgs<ExtArgs>>): Prisma__ConversacionParticipanteClient<$Result.GetResult<Prisma.$ConversacionParticipantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConversacionParticipante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversacionParticipanteFindUniqueOrThrowArgs} args - Arguments to find a ConversacionParticipante
     * @example
     * // Get one ConversacionParticipante
     * const conversacionParticipante = await prisma.conversacionParticipante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversacionParticipanteFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversacionParticipanteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversacionParticipanteClient<$Result.GetResult<Prisma.$ConversacionParticipantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConversacionParticipante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversacionParticipanteFindFirstArgs} args - Arguments to find a ConversacionParticipante
     * @example
     * // Get one ConversacionParticipante
     * const conversacionParticipante = await prisma.conversacionParticipante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversacionParticipanteFindFirstArgs>(args?: SelectSubset<T, ConversacionParticipanteFindFirstArgs<ExtArgs>>): Prisma__ConversacionParticipanteClient<$Result.GetResult<Prisma.$ConversacionParticipantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConversacionParticipante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversacionParticipanteFindFirstOrThrowArgs} args - Arguments to find a ConversacionParticipante
     * @example
     * // Get one ConversacionParticipante
     * const conversacionParticipante = await prisma.conversacionParticipante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversacionParticipanteFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversacionParticipanteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversacionParticipanteClient<$Result.GetResult<Prisma.$ConversacionParticipantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConversacionParticipantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversacionParticipanteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConversacionParticipantes
     * const conversacionParticipantes = await prisma.conversacionParticipante.findMany()
     * 
     * // Get first 10 ConversacionParticipantes
     * const conversacionParticipantes = await prisma.conversacionParticipante.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversacionParticipanteWithIdOnly = await prisma.conversacionParticipante.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversacionParticipanteFindManyArgs>(args?: SelectSubset<T, ConversacionParticipanteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversacionParticipantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConversacionParticipante.
     * @param {ConversacionParticipanteCreateArgs} args - Arguments to create a ConversacionParticipante.
     * @example
     * // Create one ConversacionParticipante
     * const ConversacionParticipante = await prisma.conversacionParticipante.create({
     *   data: {
     *     // ... data to create a ConversacionParticipante
     *   }
     * })
     * 
     */
    create<T extends ConversacionParticipanteCreateArgs>(args: SelectSubset<T, ConversacionParticipanteCreateArgs<ExtArgs>>): Prisma__ConversacionParticipanteClient<$Result.GetResult<Prisma.$ConversacionParticipantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConversacionParticipantes.
     * @param {ConversacionParticipanteCreateManyArgs} args - Arguments to create many ConversacionParticipantes.
     * @example
     * // Create many ConversacionParticipantes
     * const conversacionParticipante = await prisma.conversacionParticipante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversacionParticipanteCreateManyArgs>(args?: SelectSubset<T, ConversacionParticipanteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConversacionParticipantes and returns the data saved in the database.
     * @param {ConversacionParticipanteCreateManyAndReturnArgs} args - Arguments to create many ConversacionParticipantes.
     * @example
     * // Create many ConversacionParticipantes
     * const conversacionParticipante = await prisma.conversacionParticipante.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConversacionParticipantes and only return the `id`
     * const conversacionParticipanteWithIdOnly = await prisma.conversacionParticipante.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConversacionParticipanteCreateManyAndReturnArgs>(args?: SelectSubset<T, ConversacionParticipanteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversacionParticipantePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConversacionParticipante.
     * @param {ConversacionParticipanteDeleteArgs} args - Arguments to delete one ConversacionParticipante.
     * @example
     * // Delete one ConversacionParticipante
     * const ConversacionParticipante = await prisma.conversacionParticipante.delete({
     *   where: {
     *     // ... filter to delete one ConversacionParticipante
     *   }
     * })
     * 
     */
    delete<T extends ConversacionParticipanteDeleteArgs>(args: SelectSubset<T, ConversacionParticipanteDeleteArgs<ExtArgs>>): Prisma__ConversacionParticipanteClient<$Result.GetResult<Prisma.$ConversacionParticipantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConversacionParticipante.
     * @param {ConversacionParticipanteUpdateArgs} args - Arguments to update one ConversacionParticipante.
     * @example
     * // Update one ConversacionParticipante
     * const conversacionParticipante = await prisma.conversacionParticipante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversacionParticipanteUpdateArgs>(args: SelectSubset<T, ConversacionParticipanteUpdateArgs<ExtArgs>>): Prisma__ConversacionParticipanteClient<$Result.GetResult<Prisma.$ConversacionParticipantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConversacionParticipantes.
     * @param {ConversacionParticipanteDeleteManyArgs} args - Arguments to filter ConversacionParticipantes to delete.
     * @example
     * // Delete a few ConversacionParticipantes
     * const { count } = await prisma.conversacionParticipante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversacionParticipanteDeleteManyArgs>(args?: SelectSubset<T, ConversacionParticipanteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConversacionParticipantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversacionParticipanteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConversacionParticipantes
     * const conversacionParticipante = await prisma.conversacionParticipante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversacionParticipanteUpdateManyArgs>(args: SelectSubset<T, ConversacionParticipanteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConversacionParticipantes and returns the data updated in the database.
     * @param {ConversacionParticipanteUpdateManyAndReturnArgs} args - Arguments to update many ConversacionParticipantes.
     * @example
     * // Update many ConversacionParticipantes
     * const conversacionParticipante = await prisma.conversacionParticipante.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConversacionParticipantes and only return the `id`
     * const conversacionParticipanteWithIdOnly = await prisma.conversacionParticipante.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConversacionParticipanteUpdateManyAndReturnArgs>(args: SelectSubset<T, ConversacionParticipanteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversacionParticipantePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConversacionParticipante.
     * @param {ConversacionParticipanteUpsertArgs} args - Arguments to update or create a ConversacionParticipante.
     * @example
     * // Update or create a ConversacionParticipante
     * const conversacionParticipante = await prisma.conversacionParticipante.upsert({
     *   create: {
     *     // ... data to create a ConversacionParticipante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConversacionParticipante we want to update
     *   }
     * })
     */
    upsert<T extends ConversacionParticipanteUpsertArgs>(args: SelectSubset<T, ConversacionParticipanteUpsertArgs<ExtArgs>>): Prisma__ConversacionParticipanteClient<$Result.GetResult<Prisma.$ConversacionParticipantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConversacionParticipantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversacionParticipanteCountArgs} args - Arguments to filter ConversacionParticipantes to count.
     * @example
     * // Count the number of ConversacionParticipantes
     * const count = await prisma.conversacionParticipante.count({
     *   where: {
     *     // ... the filter for the ConversacionParticipantes we want to count
     *   }
     * })
    **/
    count<T extends ConversacionParticipanteCountArgs>(
      args?: Subset<T, ConversacionParticipanteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversacionParticipanteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConversacionParticipante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversacionParticipanteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConversacionParticipanteAggregateArgs>(args: Subset<T, ConversacionParticipanteAggregateArgs>): Prisma.PrismaPromise<GetConversacionParticipanteAggregateType<T>>

    /**
     * Group by ConversacionParticipante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversacionParticipanteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConversacionParticipanteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversacionParticipanteGroupByArgs['orderBy'] }
        : { orderBy?: ConversacionParticipanteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConversacionParticipanteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversacionParticipanteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConversacionParticipante model
   */
  readonly fields: ConversacionParticipanteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConversacionParticipante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversacionParticipanteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversacion<T extends ConversacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversacionDefaultArgs<ExtArgs>>): Prisma__ConversacionClient<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ConversacionParticipante model
   */
  interface ConversacionParticipanteFieldRefs {
    readonly id: FieldRef<"ConversacionParticipante", 'Int'>
    readonly creadoEn: FieldRef<"ConversacionParticipante", 'DateTime'>
    readonly actualizadoEn: FieldRef<"ConversacionParticipante", 'DateTime'>
    readonly conversacionId: FieldRef<"ConversacionParticipante", 'Int'>
    readonly usuarioId: FieldRef<"ConversacionParticipante", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ConversacionParticipante findUnique
   */
  export type ConversacionParticipanteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversacionParticipante
     */
    select?: ConversacionParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversacionParticipante
     */
    omit?: ConversacionParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionParticipanteInclude<ExtArgs> | null
    /**
     * Filter, which ConversacionParticipante to fetch.
     */
    where: ConversacionParticipanteWhereUniqueInput
  }

  /**
   * ConversacionParticipante findUniqueOrThrow
   */
  export type ConversacionParticipanteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversacionParticipante
     */
    select?: ConversacionParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversacionParticipante
     */
    omit?: ConversacionParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionParticipanteInclude<ExtArgs> | null
    /**
     * Filter, which ConversacionParticipante to fetch.
     */
    where: ConversacionParticipanteWhereUniqueInput
  }

  /**
   * ConversacionParticipante findFirst
   */
  export type ConversacionParticipanteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversacionParticipante
     */
    select?: ConversacionParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversacionParticipante
     */
    omit?: ConversacionParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionParticipanteInclude<ExtArgs> | null
    /**
     * Filter, which ConversacionParticipante to fetch.
     */
    where?: ConversacionParticipanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversacionParticipantes to fetch.
     */
    orderBy?: ConversacionParticipanteOrderByWithRelationInput | ConversacionParticipanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConversacionParticipantes.
     */
    cursor?: ConversacionParticipanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversacionParticipantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversacionParticipantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConversacionParticipantes.
     */
    distinct?: ConversacionParticipanteScalarFieldEnum | ConversacionParticipanteScalarFieldEnum[]
  }

  /**
   * ConversacionParticipante findFirstOrThrow
   */
  export type ConversacionParticipanteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversacionParticipante
     */
    select?: ConversacionParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversacionParticipante
     */
    omit?: ConversacionParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionParticipanteInclude<ExtArgs> | null
    /**
     * Filter, which ConversacionParticipante to fetch.
     */
    where?: ConversacionParticipanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversacionParticipantes to fetch.
     */
    orderBy?: ConversacionParticipanteOrderByWithRelationInput | ConversacionParticipanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConversacionParticipantes.
     */
    cursor?: ConversacionParticipanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversacionParticipantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversacionParticipantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConversacionParticipantes.
     */
    distinct?: ConversacionParticipanteScalarFieldEnum | ConversacionParticipanteScalarFieldEnum[]
  }

  /**
   * ConversacionParticipante findMany
   */
  export type ConversacionParticipanteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversacionParticipante
     */
    select?: ConversacionParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversacionParticipante
     */
    omit?: ConversacionParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionParticipanteInclude<ExtArgs> | null
    /**
     * Filter, which ConversacionParticipantes to fetch.
     */
    where?: ConversacionParticipanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversacionParticipantes to fetch.
     */
    orderBy?: ConversacionParticipanteOrderByWithRelationInput | ConversacionParticipanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConversacionParticipantes.
     */
    cursor?: ConversacionParticipanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversacionParticipantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversacionParticipantes.
     */
    skip?: number
    distinct?: ConversacionParticipanteScalarFieldEnum | ConversacionParticipanteScalarFieldEnum[]
  }

  /**
   * ConversacionParticipante create
   */
  export type ConversacionParticipanteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversacionParticipante
     */
    select?: ConversacionParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversacionParticipante
     */
    omit?: ConversacionParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionParticipanteInclude<ExtArgs> | null
    /**
     * The data needed to create a ConversacionParticipante.
     */
    data: XOR<ConversacionParticipanteCreateInput, ConversacionParticipanteUncheckedCreateInput>
  }

  /**
   * ConversacionParticipante createMany
   */
  export type ConversacionParticipanteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConversacionParticipantes.
     */
    data: ConversacionParticipanteCreateManyInput | ConversacionParticipanteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConversacionParticipante createManyAndReturn
   */
  export type ConversacionParticipanteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversacionParticipante
     */
    select?: ConversacionParticipanteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConversacionParticipante
     */
    omit?: ConversacionParticipanteOmit<ExtArgs> | null
    /**
     * The data used to create many ConversacionParticipantes.
     */
    data: ConversacionParticipanteCreateManyInput | ConversacionParticipanteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionParticipanteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConversacionParticipante update
   */
  export type ConversacionParticipanteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversacionParticipante
     */
    select?: ConversacionParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversacionParticipante
     */
    omit?: ConversacionParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionParticipanteInclude<ExtArgs> | null
    /**
     * The data needed to update a ConversacionParticipante.
     */
    data: XOR<ConversacionParticipanteUpdateInput, ConversacionParticipanteUncheckedUpdateInput>
    /**
     * Choose, which ConversacionParticipante to update.
     */
    where: ConversacionParticipanteWhereUniqueInput
  }

  /**
   * ConversacionParticipante updateMany
   */
  export type ConversacionParticipanteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConversacionParticipantes.
     */
    data: XOR<ConversacionParticipanteUpdateManyMutationInput, ConversacionParticipanteUncheckedUpdateManyInput>
    /**
     * Filter which ConversacionParticipantes to update
     */
    where?: ConversacionParticipanteWhereInput
    /**
     * Limit how many ConversacionParticipantes to update.
     */
    limit?: number
  }

  /**
   * ConversacionParticipante updateManyAndReturn
   */
  export type ConversacionParticipanteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversacionParticipante
     */
    select?: ConversacionParticipanteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConversacionParticipante
     */
    omit?: ConversacionParticipanteOmit<ExtArgs> | null
    /**
     * The data used to update ConversacionParticipantes.
     */
    data: XOR<ConversacionParticipanteUpdateManyMutationInput, ConversacionParticipanteUncheckedUpdateManyInput>
    /**
     * Filter which ConversacionParticipantes to update
     */
    where?: ConversacionParticipanteWhereInput
    /**
     * Limit how many ConversacionParticipantes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionParticipanteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConversacionParticipante upsert
   */
  export type ConversacionParticipanteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversacionParticipante
     */
    select?: ConversacionParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversacionParticipante
     */
    omit?: ConversacionParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionParticipanteInclude<ExtArgs> | null
    /**
     * The filter to search for the ConversacionParticipante to update in case it exists.
     */
    where: ConversacionParticipanteWhereUniqueInput
    /**
     * In case the ConversacionParticipante found by the `where` argument doesn't exist, create a new ConversacionParticipante with this data.
     */
    create: XOR<ConversacionParticipanteCreateInput, ConversacionParticipanteUncheckedCreateInput>
    /**
     * In case the ConversacionParticipante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversacionParticipanteUpdateInput, ConversacionParticipanteUncheckedUpdateInput>
  }

  /**
   * ConversacionParticipante delete
   */
  export type ConversacionParticipanteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversacionParticipante
     */
    select?: ConversacionParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversacionParticipante
     */
    omit?: ConversacionParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionParticipanteInclude<ExtArgs> | null
    /**
     * Filter which ConversacionParticipante to delete.
     */
    where: ConversacionParticipanteWhereUniqueInput
  }

  /**
   * ConversacionParticipante deleteMany
   */
  export type ConversacionParticipanteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConversacionParticipantes to delete
     */
    where?: ConversacionParticipanteWhereInput
    /**
     * Limit how many ConversacionParticipantes to delete.
     */
    limit?: number
  }

  /**
   * ConversacionParticipante without action
   */
  export type ConversacionParticipanteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversacionParticipante
     */
    select?: ConversacionParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversacionParticipante
     */
    omit?: ConversacionParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionParticipanteInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    contrasena: 'contrasena',
    propfilePicture: 'propfilePicture',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const ConversacionScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    tipo: 'tipo',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
  };

  export type ConversacionScalarFieldEnum = (typeof ConversacionScalarFieldEnum)[keyof typeof ConversacionScalarFieldEnum]


  export const MensajeScalarFieldEnum: {
    id: 'id',
    contenido: 'contenido',
    tipo: 'tipo',
    visto: 'visto',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn',
    conversacionId: 'conversacionId',
    remitenteId: 'remitenteId'
  };

  export type MensajeScalarFieldEnum = (typeof MensajeScalarFieldEnum)[keyof typeof MensajeScalarFieldEnum]


  export const ConversacionParticipanteScalarFieldEnum: {
    id: 'id',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn',
    conversacionId: 'conversacionId',
    usuarioId: 'usuarioId'
  };

  export type ConversacionParticipanteScalarFieldEnum = (typeof ConversacionParticipanteScalarFieldEnum)[keyof typeof ConversacionParticipanteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    contrasena?: StringNullableFilter<"Usuario"> | string | null
    propfilePicture?: StringNullableFilter<"Usuario"> | string | null
    creadoEn?: DateTimeFilter<"Usuario"> | Date | string
    actualizadoEn?: DateTimeFilter<"Usuario"> | Date | string
    mensajes?: MensajeListRelationFilter
    participaciones?: ConversacionParticipanteListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contrasena?: SortOrderInput | SortOrder
    propfilePicture?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    mensajes?: MensajeOrderByRelationAggregateInput
    participaciones?: ConversacionParticipanteOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    contrasena?: StringNullableFilter<"Usuario"> | string | null
    propfilePicture?: StringNullableFilter<"Usuario"> | string | null
    creadoEn?: DateTimeFilter<"Usuario"> | Date | string
    actualizadoEn?: DateTimeFilter<"Usuario"> | Date | string
    mensajes?: MensajeListRelationFilter
    participaciones?: ConversacionParticipanteListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contrasena?: SortOrderInput | SortOrder
    propfilePicture?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    contrasena?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    propfilePicture?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    creadoEn?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type ConversacionWhereInput = {
    AND?: ConversacionWhereInput | ConversacionWhereInput[]
    OR?: ConversacionWhereInput[]
    NOT?: ConversacionWhereInput | ConversacionWhereInput[]
    id?: IntFilter<"Conversacion"> | number
    titulo?: StringNullableFilter<"Conversacion"> | string | null
    tipo?: StringFilter<"Conversacion"> | string
    creadoEn?: DateTimeFilter<"Conversacion"> | Date | string
    actualizadoEn?: DateTimeFilter<"Conversacion"> | Date | string
    mensajes?: MensajeListRelationFilter
    participantes?: ConversacionParticipanteListRelationFilter
  }

  export type ConversacionOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrderInput | SortOrder
    tipo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    mensajes?: MensajeOrderByRelationAggregateInput
    participantes?: ConversacionParticipanteOrderByRelationAggregateInput
  }

  export type ConversacionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ConversacionWhereInput | ConversacionWhereInput[]
    OR?: ConversacionWhereInput[]
    NOT?: ConversacionWhereInput | ConversacionWhereInput[]
    titulo?: StringNullableFilter<"Conversacion"> | string | null
    tipo?: StringFilter<"Conversacion"> | string
    creadoEn?: DateTimeFilter<"Conversacion"> | Date | string
    actualizadoEn?: DateTimeFilter<"Conversacion"> | Date | string
    mensajes?: MensajeListRelationFilter
    participantes?: ConversacionParticipanteListRelationFilter
  }, "id">

  export type ConversacionOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrderInput | SortOrder
    tipo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    _count?: ConversacionCountOrderByAggregateInput
    _avg?: ConversacionAvgOrderByAggregateInput
    _max?: ConversacionMaxOrderByAggregateInput
    _min?: ConversacionMinOrderByAggregateInput
    _sum?: ConversacionSumOrderByAggregateInput
  }

  export type ConversacionScalarWhereWithAggregatesInput = {
    AND?: ConversacionScalarWhereWithAggregatesInput | ConversacionScalarWhereWithAggregatesInput[]
    OR?: ConversacionScalarWhereWithAggregatesInput[]
    NOT?: ConversacionScalarWhereWithAggregatesInput | ConversacionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Conversacion"> | number
    titulo?: StringNullableWithAggregatesFilter<"Conversacion"> | string | null
    tipo?: StringWithAggregatesFilter<"Conversacion"> | string
    creadoEn?: DateTimeWithAggregatesFilter<"Conversacion"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"Conversacion"> | Date | string
  }

  export type MensajeWhereInput = {
    AND?: MensajeWhereInput | MensajeWhereInput[]
    OR?: MensajeWhereInput[]
    NOT?: MensajeWhereInput | MensajeWhereInput[]
    id?: IntFilter<"Mensaje"> | number
    contenido?: StringFilter<"Mensaje"> | string
    tipo?: StringFilter<"Mensaje"> | string
    visto?: BoolFilter<"Mensaje"> | boolean
    creadoEn?: DateTimeFilter<"Mensaje"> | Date | string
    actualizadoEn?: DateTimeFilter<"Mensaje"> | Date | string
    conversacionId?: IntFilter<"Mensaje"> | number
    remitenteId?: IntFilter<"Mensaje"> | number
    conversacion?: XOR<ConversacionScalarRelationFilter, ConversacionWhereInput>
    remitente?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type MensajeOrderByWithRelationInput = {
    id?: SortOrder
    contenido?: SortOrder
    tipo?: SortOrder
    visto?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    conversacionId?: SortOrder
    remitenteId?: SortOrder
    conversacion?: ConversacionOrderByWithRelationInput
    remitente?: UsuarioOrderByWithRelationInput
  }

  export type MensajeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MensajeWhereInput | MensajeWhereInput[]
    OR?: MensajeWhereInput[]
    NOT?: MensajeWhereInput | MensajeWhereInput[]
    contenido?: StringFilter<"Mensaje"> | string
    tipo?: StringFilter<"Mensaje"> | string
    visto?: BoolFilter<"Mensaje"> | boolean
    creadoEn?: DateTimeFilter<"Mensaje"> | Date | string
    actualizadoEn?: DateTimeFilter<"Mensaje"> | Date | string
    conversacionId?: IntFilter<"Mensaje"> | number
    remitenteId?: IntFilter<"Mensaje"> | number
    conversacion?: XOR<ConversacionScalarRelationFilter, ConversacionWhereInput>
    remitente?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type MensajeOrderByWithAggregationInput = {
    id?: SortOrder
    contenido?: SortOrder
    tipo?: SortOrder
    visto?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    conversacionId?: SortOrder
    remitenteId?: SortOrder
    _count?: MensajeCountOrderByAggregateInput
    _avg?: MensajeAvgOrderByAggregateInput
    _max?: MensajeMaxOrderByAggregateInput
    _min?: MensajeMinOrderByAggregateInput
    _sum?: MensajeSumOrderByAggregateInput
  }

  export type MensajeScalarWhereWithAggregatesInput = {
    AND?: MensajeScalarWhereWithAggregatesInput | MensajeScalarWhereWithAggregatesInput[]
    OR?: MensajeScalarWhereWithAggregatesInput[]
    NOT?: MensajeScalarWhereWithAggregatesInput | MensajeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mensaje"> | number
    contenido?: StringWithAggregatesFilter<"Mensaje"> | string
    tipo?: StringWithAggregatesFilter<"Mensaje"> | string
    visto?: BoolWithAggregatesFilter<"Mensaje"> | boolean
    creadoEn?: DateTimeWithAggregatesFilter<"Mensaje"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"Mensaje"> | Date | string
    conversacionId?: IntWithAggregatesFilter<"Mensaje"> | number
    remitenteId?: IntWithAggregatesFilter<"Mensaje"> | number
  }

  export type ConversacionParticipanteWhereInput = {
    AND?: ConversacionParticipanteWhereInput | ConversacionParticipanteWhereInput[]
    OR?: ConversacionParticipanteWhereInput[]
    NOT?: ConversacionParticipanteWhereInput | ConversacionParticipanteWhereInput[]
    id?: IntFilter<"ConversacionParticipante"> | number
    creadoEn?: DateTimeFilter<"ConversacionParticipante"> | Date | string
    actualizadoEn?: DateTimeFilter<"ConversacionParticipante"> | Date | string
    conversacionId?: IntFilter<"ConversacionParticipante"> | number
    usuarioId?: IntFilter<"ConversacionParticipante"> | number
    conversacion?: XOR<ConversacionScalarRelationFilter, ConversacionWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type ConversacionParticipanteOrderByWithRelationInput = {
    id?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    conversacionId?: SortOrder
    usuarioId?: SortOrder
    conversacion?: ConversacionOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type ConversacionParticipanteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    conversacionId_usuarioId?: ConversacionParticipanteConversacionIdUsuarioIdCompoundUniqueInput
    AND?: ConversacionParticipanteWhereInput | ConversacionParticipanteWhereInput[]
    OR?: ConversacionParticipanteWhereInput[]
    NOT?: ConversacionParticipanteWhereInput | ConversacionParticipanteWhereInput[]
    creadoEn?: DateTimeFilter<"ConversacionParticipante"> | Date | string
    actualizadoEn?: DateTimeFilter<"ConversacionParticipante"> | Date | string
    conversacionId?: IntFilter<"ConversacionParticipante"> | number
    usuarioId?: IntFilter<"ConversacionParticipante"> | number
    conversacion?: XOR<ConversacionScalarRelationFilter, ConversacionWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id" | "conversacionId_usuarioId">

  export type ConversacionParticipanteOrderByWithAggregationInput = {
    id?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    conversacionId?: SortOrder
    usuarioId?: SortOrder
    _count?: ConversacionParticipanteCountOrderByAggregateInput
    _avg?: ConversacionParticipanteAvgOrderByAggregateInput
    _max?: ConversacionParticipanteMaxOrderByAggregateInput
    _min?: ConversacionParticipanteMinOrderByAggregateInput
    _sum?: ConversacionParticipanteSumOrderByAggregateInput
  }

  export type ConversacionParticipanteScalarWhereWithAggregatesInput = {
    AND?: ConversacionParticipanteScalarWhereWithAggregatesInput | ConversacionParticipanteScalarWhereWithAggregatesInput[]
    OR?: ConversacionParticipanteScalarWhereWithAggregatesInput[]
    NOT?: ConversacionParticipanteScalarWhereWithAggregatesInput | ConversacionParticipanteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ConversacionParticipante"> | number
    creadoEn?: DateTimeWithAggregatesFilter<"ConversacionParticipante"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"ConversacionParticipante"> | Date | string
    conversacionId?: IntWithAggregatesFilter<"ConversacionParticipante"> | number
    usuarioId?: IntWithAggregatesFilter<"ConversacionParticipante"> | number
  }

  export type UsuarioCreateInput = {
    nombre: string
    email: string
    contrasena?: string | null
    propfilePicture?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    mensajes?: MensajeCreateNestedManyWithoutRemitenteInput
    participaciones?: ConversacionParticipanteCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nombre: string
    email: string
    contrasena?: string | null
    propfilePicture?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    mensajes?: MensajeUncheckedCreateNestedManyWithoutRemitenteInput
    participaciones?: ConversacionParticipanteUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    propfilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    mensajes?: MensajeUpdateManyWithoutRemitenteNestedInput
    participaciones?: ConversacionParticipanteUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    propfilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    mensajes?: MensajeUncheckedUpdateManyWithoutRemitenteNestedInput
    participaciones?: ConversacionParticipanteUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nombre: string
    email: string
    contrasena?: string | null
    propfilePicture?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    propfilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    propfilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversacionCreateInput = {
    titulo?: string | null
    tipo: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    mensajes?: MensajeCreateNestedManyWithoutConversacionInput
    participantes?: ConversacionParticipanteCreateNestedManyWithoutConversacionInput
  }

  export type ConversacionUncheckedCreateInput = {
    id?: number
    titulo?: string | null
    tipo: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    mensajes?: MensajeUncheckedCreateNestedManyWithoutConversacionInput
    participantes?: ConversacionParticipanteUncheckedCreateNestedManyWithoutConversacionInput
  }

  export type ConversacionUpdateInput = {
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    mensajes?: MensajeUpdateManyWithoutConversacionNestedInput
    participantes?: ConversacionParticipanteUpdateManyWithoutConversacionNestedInput
  }

  export type ConversacionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    mensajes?: MensajeUncheckedUpdateManyWithoutConversacionNestedInput
    participantes?: ConversacionParticipanteUncheckedUpdateManyWithoutConversacionNestedInput
  }

  export type ConversacionCreateManyInput = {
    id?: number
    titulo?: string | null
    tipo: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type ConversacionUpdateManyMutationInput = {
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversacionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensajeCreateInput = {
    contenido: string
    tipo?: string
    visto?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    conversacion: ConversacionCreateNestedOneWithoutMensajesInput
    remitente: UsuarioCreateNestedOneWithoutMensajesInput
  }

  export type MensajeUncheckedCreateInput = {
    id?: number
    contenido: string
    tipo?: string
    visto?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    conversacionId: number
    remitenteId: number
  }

  export type MensajeUpdateInput = {
    contenido?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    visto?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    conversacion?: ConversacionUpdateOneRequiredWithoutMensajesNestedInput
    remitente?: UsuarioUpdateOneRequiredWithoutMensajesNestedInput
  }

  export type MensajeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenido?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    visto?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    conversacionId?: IntFieldUpdateOperationsInput | number
    remitenteId?: IntFieldUpdateOperationsInput | number
  }

  export type MensajeCreateManyInput = {
    id?: number
    contenido: string
    tipo?: string
    visto?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    conversacionId: number
    remitenteId: number
  }

  export type MensajeUpdateManyMutationInput = {
    contenido?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    visto?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensajeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenido?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    visto?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    conversacionId?: IntFieldUpdateOperationsInput | number
    remitenteId?: IntFieldUpdateOperationsInput | number
  }

  export type ConversacionParticipanteCreateInput = {
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    conversacion: ConversacionCreateNestedOneWithoutParticipantesInput
    usuario: UsuarioCreateNestedOneWithoutParticipacionesInput
  }

  export type ConversacionParticipanteUncheckedCreateInput = {
    id?: number
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    conversacionId: number
    usuarioId: number
  }

  export type ConversacionParticipanteUpdateInput = {
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    conversacion?: ConversacionUpdateOneRequiredWithoutParticipantesNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutParticipacionesNestedInput
  }

  export type ConversacionParticipanteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    conversacionId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ConversacionParticipanteCreateManyInput = {
    id?: number
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    conversacionId: number
    usuarioId: number
  }

  export type ConversacionParticipanteUpdateManyMutationInput = {
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversacionParticipanteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    conversacionId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MensajeListRelationFilter = {
    every?: MensajeWhereInput
    some?: MensajeWhereInput
    none?: MensajeWhereInput
  }

  export type ConversacionParticipanteListRelationFilter = {
    every?: ConversacionParticipanteWhereInput
    some?: ConversacionParticipanteWhereInput
    none?: ConversacionParticipanteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MensajeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversacionParticipanteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contrasena?: SortOrder
    propfilePicture?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contrasena?: SortOrder
    propfilePicture?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contrasena?: SortOrder
    propfilePicture?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ConversacionCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    tipo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type ConversacionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ConversacionMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    tipo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type ConversacionMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    tipo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type ConversacionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ConversacionScalarRelationFilter = {
    is?: ConversacionWhereInput
    isNot?: ConversacionWhereInput
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type MensajeCountOrderByAggregateInput = {
    id?: SortOrder
    contenido?: SortOrder
    tipo?: SortOrder
    visto?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    conversacionId?: SortOrder
    remitenteId?: SortOrder
  }

  export type MensajeAvgOrderByAggregateInput = {
    id?: SortOrder
    conversacionId?: SortOrder
    remitenteId?: SortOrder
  }

  export type MensajeMaxOrderByAggregateInput = {
    id?: SortOrder
    contenido?: SortOrder
    tipo?: SortOrder
    visto?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    conversacionId?: SortOrder
    remitenteId?: SortOrder
  }

  export type MensajeMinOrderByAggregateInput = {
    id?: SortOrder
    contenido?: SortOrder
    tipo?: SortOrder
    visto?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    conversacionId?: SortOrder
    remitenteId?: SortOrder
  }

  export type MensajeSumOrderByAggregateInput = {
    id?: SortOrder
    conversacionId?: SortOrder
    remitenteId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ConversacionParticipanteConversacionIdUsuarioIdCompoundUniqueInput = {
    conversacionId: number
    usuarioId: number
  }

  export type ConversacionParticipanteCountOrderByAggregateInput = {
    id?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    conversacionId?: SortOrder
    usuarioId?: SortOrder
  }

  export type ConversacionParticipanteAvgOrderByAggregateInput = {
    id?: SortOrder
    conversacionId?: SortOrder
    usuarioId?: SortOrder
  }

  export type ConversacionParticipanteMaxOrderByAggregateInput = {
    id?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    conversacionId?: SortOrder
    usuarioId?: SortOrder
  }

  export type ConversacionParticipanteMinOrderByAggregateInput = {
    id?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    conversacionId?: SortOrder
    usuarioId?: SortOrder
  }

  export type ConversacionParticipanteSumOrderByAggregateInput = {
    id?: SortOrder
    conversacionId?: SortOrder
    usuarioId?: SortOrder
  }

  export type MensajeCreateNestedManyWithoutRemitenteInput = {
    create?: XOR<MensajeCreateWithoutRemitenteInput, MensajeUncheckedCreateWithoutRemitenteInput> | MensajeCreateWithoutRemitenteInput[] | MensajeUncheckedCreateWithoutRemitenteInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutRemitenteInput | MensajeCreateOrConnectWithoutRemitenteInput[]
    createMany?: MensajeCreateManyRemitenteInputEnvelope
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
  }

  export type ConversacionParticipanteCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ConversacionParticipanteCreateWithoutUsuarioInput, ConversacionParticipanteUncheckedCreateWithoutUsuarioInput> | ConversacionParticipanteCreateWithoutUsuarioInput[] | ConversacionParticipanteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ConversacionParticipanteCreateOrConnectWithoutUsuarioInput | ConversacionParticipanteCreateOrConnectWithoutUsuarioInput[]
    createMany?: ConversacionParticipanteCreateManyUsuarioInputEnvelope
    connect?: ConversacionParticipanteWhereUniqueInput | ConversacionParticipanteWhereUniqueInput[]
  }

  export type MensajeUncheckedCreateNestedManyWithoutRemitenteInput = {
    create?: XOR<MensajeCreateWithoutRemitenteInput, MensajeUncheckedCreateWithoutRemitenteInput> | MensajeCreateWithoutRemitenteInput[] | MensajeUncheckedCreateWithoutRemitenteInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutRemitenteInput | MensajeCreateOrConnectWithoutRemitenteInput[]
    createMany?: MensajeCreateManyRemitenteInputEnvelope
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
  }

  export type ConversacionParticipanteUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ConversacionParticipanteCreateWithoutUsuarioInput, ConversacionParticipanteUncheckedCreateWithoutUsuarioInput> | ConversacionParticipanteCreateWithoutUsuarioInput[] | ConversacionParticipanteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ConversacionParticipanteCreateOrConnectWithoutUsuarioInput | ConversacionParticipanteCreateOrConnectWithoutUsuarioInput[]
    createMany?: ConversacionParticipanteCreateManyUsuarioInputEnvelope
    connect?: ConversacionParticipanteWhereUniqueInput | ConversacionParticipanteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MensajeUpdateManyWithoutRemitenteNestedInput = {
    create?: XOR<MensajeCreateWithoutRemitenteInput, MensajeUncheckedCreateWithoutRemitenteInput> | MensajeCreateWithoutRemitenteInput[] | MensajeUncheckedCreateWithoutRemitenteInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutRemitenteInput | MensajeCreateOrConnectWithoutRemitenteInput[]
    upsert?: MensajeUpsertWithWhereUniqueWithoutRemitenteInput | MensajeUpsertWithWhereUniqueWithoutRemitenteInput[]
    createMany?: MensajeCreateManyRemitenteInputEnvelope
    set?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    disconnect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    delete?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    update?: MensajeUpdateWithWhereUniqueWithoutRemitenteInput | MensajeUpdateWithWhereUniqueWithoutRemitenteInput[]
    updateMany?: MensajeUpdateManyWithWhereWithoutRemitenteInput | MensajeUpdateManyWithWhereWithoutRemitenteInput[]
    deleteMany?: MensajeScalarWhereInput | MensajeScalarWhereInput[]
  }

  export type ConversacionParticipanteUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ConversacionParticipanteCreateWithoutUsuarioInput, ConversacionParticipanteUncheckedCreateWithoutUsuarioInput> | ConversacionParticipanteCreateWithoutUsuarioInput[] | ConversacionParticipanteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ConversacionParticipanteCreateOrConnectWithoutUsuarioInput | ConversacionParticipanteCreateOrConnectWithoutUsuarioInput[]
    upsert?: ConversacionParticipanteUpsertWithWhereUniqueWithoutUsuarioInput | ConversacionParticipanteUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ConversacionParticipanteCreateManyUsuarioInputEnvelope
    set?: ConversacionParticipanteWhereUniqueInput | ConversacionParticipanteWhereUniqueInput[]
    disconnect?: ConversacionParticipanteWhereUniqueInput | ConversacionParticipanteWhereUniqueInput[]
    delete?: ConversacionParticipanteWhereUniqueInput | ConversacionParticipanteWhereUniqueInput[]
    connect?: ConversacionParticipanteWhereUniqueInput | ConversacionParticipanteWhereUniqueInput[]
    update?: ConversacionParticipanteUpdateWithWhereUniqueWithoutUsuarioInput | ConversacionParticipanteUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ConversacionParticipanteUpdateManyWithWhereWithoutUsuarioInput | ConversacionParticipanteUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ConversacionParticipanteScalarWhereInput | ConversacionParticipanteScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MensajeUncheckedUpdateManyWithoutRemitenteNestedInput = {
    create?: XOR<MensajeCreateWithoutRemitenteInput, MensajeUncheckedCreateWithoutRemitenteInput> | MensajeCreateWithoutRemitenteInput[] | MensajeUncheckedCreateWithoutRemitenteInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutRemitenteInput | MensajeCreateOrConnectWithoutRemitenteInput[]
    upsert?: MensajeUpsertWithWhereUniqueWithoutRemitenteInput | MensajeUpsertWithWhereUniqueWithoutRemitenteInput[]
    createMany?: MensajeCreateManyRemitenteInputEnvelope
    set?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    disconnect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    delete?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    update?: MensajeUpdateWithWhereUniqueWithoutRemitenteInput | MensajeUpdateWithWhereUniqueWithoutRemitenteInput[]
    updateMany?: MensajeUpdateManyWithWhereWithoutRemitenteInput | MensajeUpdateManyWithWhereWithoutRemitenteInput[]
    deleteMany?: MensajeScalarWhereInput | MensajeScalarWhereInput[]
  }

  export type ConversacionParticipanteUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ConversacionParticipanteCreateWithoutUsuarioInput, ConversacionParticipanteUncheckedCreateWithoutUsuarioInput> | ConversacionParticipanteCreateWithoutUsuarioInput[] | ConversacionParticipanteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ConversacionParticipanteCreateOrConnectWithoutUsuarioInput | ConversacionParticipanteCreateOrConnectWithoutUsuarioInput[]
    upsert?: ConversacionParticipanteUpsertWithWhereUniqueWithoutUsuarioInput | ConversacionParticipanteUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ConversacionParticipanteCreateManyUsuarioInputEnvelope
    set?: ConversacionParticipanteWhereUniqueInput | ConversacionParticipanteWhereUniqueInput[]
    disconnect?: ConversacionParticipanteWhereUniqueInput | ConversacionParticipanteWhereUniqueInput[]
    delete?: ConversacionParticipanteWhereUniqueInput | ConversacionParticipanteWhereUniqueInput[]
    connect?: ConversacionParticipanteWhereUniqueInput | ConversacionParticipanteWhereUniqueInput[]
    update?: ConversacionParticipanteUpdateWithWhereUniqueWithoutUsuarioInput | ConversacionParticipanteUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ConversacionParticipanteUpdateManyWithWhereWithoutUsuarioInput | ConversacionParticipanteUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ConversacionParticipanteScalarWhereInput | ConversacionParticipanteScalarWhereInput[]
  }

  export type MensajeCreateNestedManyWithoutConversacionInput = {
    create?: XOR<MensajeCreateWithoutConversacionInput, MensajeUncheckedCreateWithoutConversacionInput> | MensajeCreateWithoutConversacionInput[] | MensajeUncheckedCreateWithoutConversacionInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutConversacionInput | MensajeCreateOrConnectWithoutConversacionInput[]
    createMany?: MensajeCreateManyConversacionInputEnvelope
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
  }

  export type ConversacionParticipanteCreateNestedManyWithoutConversacionInput = {
    create?: XOR<ConversacionParticipanteCreateWithoutConversacionInput, ConversacionParticipanteUncheckedCreateWithoutConversacionInput> | ConversacionParticipanteCreateWithoutConversacionInput[] | ConversacionParticipanteUncheckedCreateWithoutConversacionInput[]
    connectOrCreate?: ConversacionParticipanteCreateOrConnectWithoutConversacionInput | ConversacionParticipanteCreateOrConnectWithoutConversacionInput[]
    createMany?: ConversacionParticipanteCreateManyConversacionInputEnvelope
    connect?: ConversacionParticipanteWhereUniqueInput | ConversacionParticipanteWhereUniqueInput[]
  }

  export type MensajeUncheckedCreateNestedManyWithoutConversacionInput = {
    create?: XOR<MensajeCreateWithoutConversacionInput, MensajeUncheckedCreateWithoutConversacionInput> | MensajeCreateWithoutConversacionInput[] | MensajeUncheckedCreateWithoutConversacionInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutConversacionInput | MensajeCreateOrConnectWithoutConversacionInput[]
    createMany?: MensajeCreateManyConversacionInputEnvelope
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
  }

  export type ConversacionParticipanteUncheckedCreateNestedManyWithoutConversacionInput = {
    create?: XOR<ConversacionParticipanteCreateWithoutConversacionInput, ConversacionParticipanteUncheckedCreateWithoutConversacionInput> | ConversacionParticipanteCreateWithoutConversacionInput[] | ConversacionParticipanteUncheckedCreateWithoutConversacionInput[]
    connectOrCreate?: ConversacionParticipanteCreateOrConnectWithoutConversacionInput | ConversacionParticipanteCreateOrConnectWithoutConversacionInput[]
    createMany?: ConversacionParticipanteCreateManyConversacionInputEnvelope
    connect?: ConversacionParticipanteWhereUniqueInput | ConversacionParticipanteWhereUniqueInput[]
  }

  export type MensajeUpdateManyWithoutConversacionNestedInput = {
    create?: XOR<MensajeCreateWithoutConversacionInput, MensajeUncheckedCreateWithoutConversacionInput> | MensajeCreateWithoutConversacionInput[] | MensajeUncheckedCreateWithoutConversacionInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutConversacionInput | MensajeCreateOrConnectWithoutConversacionInput[]
    upsert?: MensajeUpsertWithWhereUniqueWithoutConversacionInput | MensajeUpsertWithWhereUniqueWithoutConversacionInput[]
    createMany?: MensajeCreateManyConversacionInputEnvelope
    set?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    disconnect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    delete?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    update?: MensajeUpdateWithWhereUniqueWithoutConversacionInput | MensajeUpdateWithWhereUniqueWithoutConversacionInput[]
    updateMany?: MensajeUpdateManyWithWhereWithoutConversacionInput | MensajeUpdateManyWithWhereWithoutConversacionInput[]
    deleteMany?: MensajeScalarWhereInput | MensajeScalarWhereInput[]
  }

  export type ConversacionParticipanteUpdateManyWithoutConversacionNestedInput = {
    create?: XOR<ConversacionParticipanteCreateWithoutConversacionInput, ConversacionParticipanteUncheckedCreateWithoutConversacionInput> | ConversacionParticipanteCreateWithoutConversacionInput[] | ConversacionParticipanteUncheckedCreateWithoutConversacionInput[]
    connectOrCreate?: ConversacionParticipanteCreateOrConnectWithoutConversacionInput | ConversacionParticipanteCreateOrConnectWithoutConversacionInput[]
    upsert?: ConversacionParticipanteUpsertWithWhereUniqueWithoutConversacionInput | ConversacionParticipanteUpsertWithWhereUniqueWithoutConversacionInput[]
    createMany?: ConversacionParticipanteCreateManyConversacionInputEnvelope
    set?: ConversacionParticipanteWhereUniqueInput | ConversacionParticipanteWhereUniqueInput[]
    disconnect?: ConversacionParticipanteWhereUniqueInput | ConversacionParticipanteWhereUniqueInput[]
    delete?: ConversacionParticipanteWhereUniqueInput | ConversacionParticipanteWhereUniqueInput[]
    connect?: ConversacionParticipanteWhereUniqueInput | ConversacionParticipanteWhereUniqueInput[]
    update?: ConversacionParticipanteUpdateWithWhereUniqueWithoutConversacionInput | ConversacionParticipanteUpdateWithWhereUniqueWithoutConversacionInput[]
    updateMany?: ConversacionParticipanteUpdateManyWithWhereWithoutConversacionInput | ConversacionParticipanteUpdateManyWithWhereWithoutConversacionInput[]
    deleteMany?: ConversacionParticipanteScalarWhereInput | ConversacionParticipanteScalarWhereInput[]
  }

  export type MensajeUncheckedUpdateManyWithoutConversacionNestedInput = {
    create?: XOR<MensajeCreateWithoutConversacionInput, MensajeUncheckedCreateWithoutConversacionInput> | MensajeCreateWithoutConversacionInput[] | MensajeUncheckedCreateWithoutConversacionInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutConversacionInput | MensajeCreateOrConnectWithoutConversacionInput[]
    upsert?: MensajeUpsertWithWhereUniqueWithoutConversacionInput | MensajeUpsertWithWhereUniqueWithoutConversacionInput[]
    createMany?: MensajeCreateManyConversacionInputEnvelope
    set?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    disconnect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    delete?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    update?: MensajeUpdateWithWhereUniqueWithoutConversacionInput | MensajeUpdateWithWhereUniqueWithoutConversacionInput[]
    updateMany?: MensajeUpdateManyWithWhereWithoutConversacionInput | MensajeUpdateManyWithWhereWithoutConversacionInput[]
    deleteMany?: MensajeScalarWhereInput | MensajeScalarWhereInput[]
  }

  export type ConversacionParticipanteUncheckedUpdateManyWithoutConversacionNestedInput = {
    create?: XOR<ConversacionParticipanteCreateWithoutConversacionInput, ConversacionParticipanteUncheckedCreateWithoutConversacionInput> | ConversacionParticipanteCreateWithoutConversacionInput[] | ConversacionParticipanteUncheckedCreateWithoutConversacionInput[]
    connectOrCreate?: ConversacionParticipanteCreateOrConnectWithoutConversacionInput | ConversacionParticipanteCreateOrConnectWithoutConversacionInput[]
    upsert?: ConversacionParticipanteUpsertWithWhereUniqueWithoutConversacionInput | ConversacionParticipanteUpsertWithWhereUniqueWithoutConversacionInput[]
    createMany?: ConversacionParticipanteCreateManyConversacionInputEnvelope
    set?: ConversacionParticipanteWhereUniqueInput | ConversacionParticipanteWhereUniqueInput[]
    disconnect?: ConversacionParticipanteWhereUniqueInput | ConversacionParticipanteWhereUniqueInput[]
    delete?: ConversacionParticipanteWhereUniqueInput | ConversacionParticipanteWhereUniqueInput[]
    connect?: ConversacionParticipanteWhereUniqueInput | ConversacionParticipanteWhereUniqueInput[]
    update?: ConversacionParticipanteUpdateWithWhereUniqueWithoutConversacionInput | ConversacionParticipanteUpdateWithWhereUniqueWithoutConversacionInput[]
    updateMany?: ConversacionParticipanteUpdateManyWithWhereWithoutConversacionInput | ConversacionParticipanteUpdateManyWithWhereWithoutConversacionInput[]
    deleteMany?: ConversacionParticipanteScalarWhereInput | ConversacionParticipanteScalarWhereInput[]
  }

  export type ConversacionCreateNestedOneWithoutMensajesInput = {
    create?: XOR<ConversacionCreateWithoutMensajesInput, ConversacionUncheckedCreateWithoutMensajesInput>
    connectOrCreate?: ConversacionCreateOrConnectWithoutMensajesInput
    connect?: ConversacionWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutMensajesInput = {
    create?: XOR<UsuarioCreateWithoutMensajesInput, UsuarioUncheckedCreateWithoutMensajesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMensajesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ConversacionUpdateOneRequiredWithoutMensajesNestedInput = {
    create?: XOR<ConversacionCreateWithoutMensajesInput, ConversacionUncheckedCreateWithoutMensajesInput>
    connectOrCreate?: ConversacionCreateOrConnectWithoutMensajesInput
    upsert?: ConversacionUpsertWithoutMensajesInput
    connect?: ConversacionWhereUniqueInput
    update?: XOR<XOR<ConversacionUpdateToOneWithWhereWithoutMensajesInput, ConversacionUpdateWithoutMensajesInput>, ConversacionUncheckedUpdateWithoutMensajesInput>
  }

  export type UsuarioUpdateOneRequiredWithoutMensajesNestedInput = {
    create?: XOR<UsuarioCreateWithoutMensajesInput, UsuarioUncheckedCreateWithoutMensajesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMensajesInput
    upsert?: UsuarioUpsertWithoutMensajesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutMensajesInput, UsuarioUpdateWithoutMensajesInput>, UsuarioUncheckedUpdateWithoutMensajesInput>
  }

  export type ConversacionCreateNestedOneWithoutParticipantesInput = {
    create?: XOR<ConversacionCreateWithoutParticipantesInput, ConversacionUncheckedCreateWithoutParticipantesInput>
    connectOrCreate?: ConversacionCreateOrConnectWithoutParticipantesInput
    connect?: ConversacionWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutParticipacionesInput = {
    create?: XOR<UsuarioCreateWithoutParticipacionesInput, UsuarioUncheckedCreateWithoutParticipacionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutParticipacionesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ConversacionUpdateOneRequiredWithoutParticipantesNestedInput = {
    create?: XOR<ConversacionCreateWithoutParticipantesInput, ConversacionUncheckedCreateWithoutParticipantesInput>
    connectOrCreate?: ConversacionCreateOrConnectWithoutParticipantesInput
    upsert?: ConversacionUpsertWithoutParticipantesInput
    connect?: ConversacionWhereUniqueInput
    update?: XOR<XOR<ConversacionUpdateToOneWithWhereWithoutParticipantesInput, ConversacionUpdateWithoutParticipantesInput>, ConversacionUncheckedUpdateWithoutParticipantesInput>
  }

  export type UsuarioUpdateOneRequiredWithoutParticipacionesNestedInput = {
    create?: XOR<UsuarioCreateWithoutParticipacionesInput, UsuarioUncheckedCreateWithoutParticipacionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutParticipacionesInput
    upsert?: UsuarioUpsertWithoutParticipacionesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutParticipacionesInput, UsuarioUpdateWithoutParticipacionesInput>, UsuarioUncheckedUpdateWithoutParticipacionesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MensajeCreateWithoutRemitenteInput = {
    contenido: string
    tipo?: string
    visto?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    conversacion: ConversacionCreateNestedOneWithoutMensajesInput
  }

  export type MensajeUncheckedCreateWithoutRemitenteInput = {
    id?: number
    contenido: string
    tipo?: string
    visto?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    conversacionId: number
  }

  export type MensajeCreateOrConnectWithoutRemitenteInput = {
    where: MensajeWhereUniqueInput
    create: XOR<MensajeCreateWithoutRemitenteInput, MensajeUncheckedCreateWithoutRemitenteInput>
  }

  export type MensajeCreateManyRemitenteInputEnvelope = {
    data: MensajeCreateManyRemitenteInput | MensajeCreateManyRemitenteInput[]
    skipDuplicates?: boolean
  }

  export type ConversacionParticipanteCreateWithoutUsuarioInput = {
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    conversacion: ConversacionCreateNestedOneWithoutParticipantesInput
  }

  export type ConversacionParticipanteUncheckedCreateWithoutUsuarioInput = {
    id?: number
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    conversacionId: number
  }

  export type ConversacionParticipanteCreateOrConnectWithoutUsuarioInput = {
    where: ConversacionParticipanteWhereUniqueInput
    create: XOR<ConversacionParticipanteCreateWithoutUsuarioInput, ConversacionParticipanteUncheckedCreateWithoutUsuarioInput>
  }

  export type ConversacionParticipanteCreateManyUsuarioInputEnvelope = {
    data: ConversacionParticipanteCreateManyUsuarioInput | ConversacionParticipanteCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type MensajeUpsertWithWhereUniqueWithoutRemitenteInput = {
    where: MensajeWhereUniqueInput
    update: XOR<MensajeUpdateWithoutRemitenteInput, MensajeUncheckedUpdateWithoutRemitenteInput>
    create: XOR<MensajeCreateWithoutRemitenteInput, MensajeUncheckedCreateWithoutRemitenteInput>
  }

  export type MensajeUpdateWithWhereUniqueWithoutRemitenteInput = {
    where: MensajeWhereUniqueInput
    data: XOR<MensajeUpdateWithoutRemitenteInput, MensajeUncheckedUpdateWithoutRemitenteInput>
  }

  export type MensajeUpdateManyWithWhereWithoutRemitenteInput = {
    where: MensajeScalarWhereInput
    data: XOR<MensajeUpdateManyMutationInput, MensajeUncheckedUpdateManyWithoutRemitenteInput>
  }

  export type MensajeScalarWhereInput = {
    AND?: MensajeScalarWhereInput | MensajeScalarWhereInput[]
    OR?: MensajeScalarWhereInput[]
    NOT?: MensajeScalarWhereInput | MensajeScalarWhereInput[]
    id?: IntFilter<"Mensaje"> | number
    contenido?: StringFilter<"Mensaje"> | string
    tipo?: StringFilter<"Mensaje"> | string
    visto?: BoolFilter<"Mensaje"> | boolean
    creadoEn?: DateTimeFilter<"Mensaje"> | Date | string
    actualizadoEn?: DateTimeFilter<"Mensaje"> | Date | string
    conversacionId?: IntFilter<"Mensaje"> | number
    remitenteId?: IntFilter<"Mensaje"> | number
  }

  export type ConversacionParticipanteUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ConversacionParticipanteWhereUniqueInput
    update: XOR<ConversacionParticipanteUpdateWithoutUsuarioInput, ConversacionParticipanteUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ConversacionParticipanteCreateWithoutUsuarioInput, ConversacionParticipanteUncheckedCreateWithoutUsuarioInput>
  }

  export type ConversacionParticipanteUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ConversacionParticipanteWhereUniqueInput
    data: XOR<ConversacionParticipanteUpdateWithoutUsuarioInput, ConversacionParticipanteUncheckedUpdateWithoutUsuarioInput>
  }

  export type ConversacionParticipanteUpdateManyWithWhereWithoutUsuarioInput = {
    where: ConversacionParticipanteScalarWhereInput
    data: XOR<ConversacionParticipanteUpdateManyMutationInput, ConversacionParticipanteUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ConversacionParticipanteScalarWhereInput = {
    AND?: ConversacionParticipanteScalarWhereInput | ConversacionParticipanteScalarWhereInput[]
    OR?: ConversacionParticipanteScalarWhereInput[]
    NOT?: ConversacionParticipanteScalarWhereInput | ConversacionParticipanteScalarWhereInput[]
    id?: IntFilter<"ConversacionParticipante"> | number
    creadoEn?: DateTimeFilter<"ConversacionParticipante"> | Date | string
    actualizadoEn?: DateTimeFilter<"ConversacionParticipante"> | Date | string
    conversacionId?: IntFilter<"ConversacionParticipante"> | number
    usuarioId?: IntFilter<"ConversacionParticipante"> | number
  }

  export type MensajeCreateWithoutConversacionInput = {
    contenido: string
    tipo?: string
    visto?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    remitente: UsuarioCreateNestedOneWithoutMensajesInput
  }

  export type MensajeUncheckedCreateWithoutConversacionInput = {
    id?: number
    contenido: string
    tipo?: string
    visto?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    remitenteId: number
  }

  export type MensajeCreateOrConnectWithoutConversacionInput = {
    where: MensajeWhereUniqueInput
    create: XOR<MensajeCreateWithoutConversacionInput, MensajeUncheckedCreateWithoutConversacionInput>
  }

  export type MensajeCreateManyConversacionInputEnvelope = {
    data: MensajeCreateManyConversacionInput | MensajeCreateManyConversacionInput[]
    skipDuplicates?: boolean
  }

  export type ConversacionParticipanteCreateWithoutConversacionInput = {
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    usuario: UsuarioCreateNestedOneWithoutParticipacionesInput
  }

  export type ConversacionParticipanteUncheckedCreateWithoutConversacionInput = {
    id?: number
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    usuarioId: number
  }

  export type ConversacionParticipanteCreateOrConnectWithoutConversacionInput = {
    where: ConversacionParticipanteWhereUniqueInput
    create: XOR<ConversacionParticipanteCreateWithoutConversacionInput, ConversacionParticipanteUncheckedCreateWithoutConversacionInput>
  }

  export type ConversacionParticipanteCreateManyConversacionInputEnvelope = {
    data: ConversacionParticipanteCreateManyConversacionInput | ConversacionParticipanteCreateManyConversacionInput[]
    skipDuplicates?: boolean
  }

  export type MensajeUpsertWithWhereUniqueWithoutConversacionInput = {
    where: MensajeWhereUniqueInput
    update: XOR<MensajeUpdateWithoutConversacionInput, MensajeUncheckedUpdateWithoutConversacionInput>
    create: XOR<MensajeCreateWithoutConversacionInput, MensajeUncheckedCreateWithoutConversacionInput>
  }

  export type MensajeUpdateWithWhereUniqueWithoutConversacionInput = {
    where: MensajeWhereUniqueInput
    data: XOR<MensajeUpdateWithoutConversacionInput, MensajeUncheckedUpdateWithoutConversacionInput>
  }

  export type MensajeUpdateManyWithWhereWithoutConversacionInput = {
    where: MensajeScalarWhereInput
    data: XOR<MensajeUpdateManyMutationInput, MensajeUncheckedUpdateManyWithoutConversacionInput>
  }

  export type ConversacionParticipanteUpsertWithWhereUniqueWithoutConversacionInput = {
    where: ConversacionParticipanteWhereUniqueInput
    update: XOR<ConversacionParticipanteUpdateWithoutConversacionInput, ConversacionParticipanteUncheckedUpdateWithoutConversacionInput>
    create: XOR<ConversacionParticipanteCreateWithoutConversacionInput, ConversacionParticipanteUncheckedCreateWithoutConversacionInput>
  }

  export type ConversacionParticipanteUpdateWithWhereUniqueWithoutConversacionInput = {
    where: ConversacionParticipanteWhereUniqueInput
    data: XOR<ConversacionParticipanteUpdateWithoutConversacionInput, ConversacionParticipanteUncheckedUpdateWithoutConversacionInput>
  }

  export type ConversacionParticipanteUpdateManyWithWhereWithoutConversacionInput = {
    where: ConversacionParticipanteScalarWhereInput
    data: XOR<ConversacionParticipanteUpdateManyMutationInput, ConversacionParticipanteUncheckedUpdateManyWithoutConversacionInput>
  }

  export type ConversacionCreateWithoutMensajesInput = {
    titulo?: string | null
    tipo: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    participantes?: ConversacionParticipanteCreateNestedManyWithoutConversacionInput
  }

  export type ConversacionUncheckedCreateWithoutMensajesInput = {
    id?: number
    titulo?: string | null
    tipo: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    participantes?: ConversacionParticipanteUncheckedCreateNestedManyWithoutConversacionInput
  }

  export type ConversacionCreateOrConnectWithoutMensajesInput = {
    where: ConversacionWhereUniqueInput
    create: XOR<ConversacionCreateWithoutMensajesInput, ConversacionUncheckedCreateWithoutMensajesInput>
  }

  export type UsuarioCreateWithoutMensajesInput = {
    nombre: string
    email: string
    contrasena?: string | null
    propfilePicture?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    participaciones?: ConversacionParticipanteCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutMensajesInput = {
    id?: number
    nombre: string
    email: string
    contrasena?: string | null
    propfilePicture?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    participaciones?: ConversacionParticipanteUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutMensajesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutMensajesInput, UsuarioUncheckedCreateWithoutMensajesInput>
  }

  export type ConversacionUpsertWithoutMensajesInput = {
    update: XOR<ConversacionUpdateWithoutMensajesInput, ConversacionUncheckedUpdateWithoutMensajesInput>
    create: XOR<ConversacionCreateWithoutMensajesInput, ConversacionUncheckedCreateWithoutMensajesInput>
    where?: ConversacionWhereInput
  }

  export type ConversacionUpdateToOneWithWhereWithoutMensajesInput = {
    where?: ConversacionWhereInput
    data: XOR<ConversacionUpdateWithoutMensajesInput, ConversacionUncheckedUpdateWithoutMensajesInput>
  }

  export type ConversacionUpdateWithoutMensajesInput = {
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    participantes?: ConversacionParticipanteUpdateManyWithoutConversacionNestedInput
  }

  export type ConversacionUncheckedUpdateWithoutMensajesInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    participantes?: ConversacionParticipanteUncheckedUpdateManyWithoutConversacionNestedInput
  }

  export type UsuarioUpsertWithoutMensajesInput = {
    update: XOR<UsuarioUpdateWithoutMensajesInput, UsuarioUncheckedUpdateWithoutMensajesInput>
    create: XOR<UsuarioCreateWithoutMensajesInput, UsuarioUncheckedCreateWithoutMensajesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutMensajesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutMensajesInput, UsuarioUncheckedUpdateWithoutMensajesInput>
  }

  export type UsuarioUpdateWithoutMensajesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    propfilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    participaciones?: ConversacionParticipanteUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutMensajesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    propfilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    participaciones?: ConversacionParticipanteUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ConversacionCreateWithoutParticipantesInput = {
    titulo?: string | null
    tipo: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    mensajes?: MensajeCreateNestedManyWithoutConversacionInput
  }

  export type ConversacionUncheckedCreateWithoutParticipantesInput = {
    id?: number
    titulo?: string | null
    tipo: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    mensajes?: MensajeUncheckedCreateNestedManyWithoutConversacionInput
  }

  export type ConversacionCreateOrConnectWithoutParticipantesInput = {
    where: ConversacionWhereUniqueInput
    create: XOR<ConversacionCreateWithoutParticipantesInput, ConversacionUncheckedCreateWithoutParticipantesInput>
  }

  export type UsuarioCreateWithoutParticipacionesInput = {
    nombre: string
    email: string
    contrasena?: string | null
    propfilePicture?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    mensajes?: MensajeCreateNestedManyWithoutRemitenteInput
  }

  export type UsuarioUncheckedCreateWithoutParticipacionesInput = {
    id?: number
    nombre: string
    email: string
    contrasena?: string | null
    propfilePicture?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    mensajes?: MensajeUncheckedCreateNestedManyWithoutRemitenteInput
  }

  export type UsuarioCreateOrConnectWithoutParticipacionesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutParticipacionesInput, UsuarioUncheckedCreateWithoutParticipacionesInput>
  }

  export type ConversacionUpsertWithoutParticipantesInput = {
    update: XOR<ConversacionUpdateWithoutParticipantesInput, ConversacionUncheckedUpdateWithoutParticipantesInput>
    create: XOR<ConversacionCreateWithoutParticipantesInput, ConversacionUncheckedCreateWithoutParticipantesInput>
    where?: ConversacionWhereInput
  }

  export type ConversacionUpdateToOneWithWhereWithoutParticipantesInput = {
    where?: ConversacionWhereInput
    data: XOR<ConversacionUpdateWithoutParticipantesInput, ConversacionUncheckedUpdateWithoutParticipantesInput>
  }

  export type ConversacionUpdateWithoutParticipantesInput = {
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    mensajes?: MensajeUpdateManyWithoutConversacionNestedInput
  }

  export type ConversacionUncheckedUpdateWithoutParticipantesInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    mensajes?: MensajeUncheckedUpdateManyWithoutConversacionNestedInput
  }

  export type UsuarioUpsertWithoutParticipacionesInput = {
    update: XOR<UsuarioUpdateWithoutParticipacionesInput, UsuarioUncheckedUpdateWithoutParticipacionesInput>
    create: XOR<UsuarioCreateWithoutParticipacionesInput, UsuarioUncheckedCreateWithoutParticipacionesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutParticipacionesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutParticipacionesInput, UsuarioUncheckedUpdateWithoutParticipacionesInput>
  }

  export type UsuarioUpdateWithoutParticipacionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    propfilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    mensajes?: MensajeUpdateManyWithoutRemitenteNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutParticipacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    propfilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    mensajes?: MensajeUncheckedUpdateManyWithoutRemitenteNestedInput
  }

  export type MensajeCreateManyRemitenteInput = {
    id?: number
    contenido: string
    tipo?: string
    visto?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    conversacionId: number
  }

  export type ConversacionParticipanteCreateManyUsuarioInput = {
    id?: number
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    conversacionId: number
  }

  export type MensajeUpdateWithoutRemitenteInput = {
    contenido?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    visto?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    conversacion?: ConversacionUpdateOneRequiredWithoutMensajesNestedInput
  }

  export type MensajeUncheckedUpdateWithoutRemitenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenido?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    visto?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    conversacionId?: IntFieldUpdateOperationsInput | number
  }

  export type MensajeUncheckedUpdateManyWithoutRemitenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenido?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    visto?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    conversacionId?: IntFieldUpdateOperationsInput | number
  }

  export type ConversacionParticipanteUpdateWithoutUsuarioInput = {
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    conversacion?: ConversacionUpdateOneRequiredWithoutParticipantesNestedInput
  }

  export type ConversacionParticipanteUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    conversacionId?: IntFieldUpdateOperationsInput | number
  }

  export type ConversacionParticipanteUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    conversacionId?: IntFieldUpdateOperationsInput | number
  }

  export type MensajeCreateManyConversacionInput = {
    id?: number
    contenido: string
    tipo?: string
    visto?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    remitenteId: number
  }

  export type ConversacionParticipanteCreateManyConversacionInput = {
    id?: number
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    usuarioId: number
  }

  export type MensajeUpdateWithoutConversacionInput = {
    contenido?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    visto?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    remitente?: UsuarioUpdateOneRequiredWithoutMensajesNestedInput
  }

  export type MensajeUncheckedUpdateWithoutConversacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenido?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    visto?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    remitenteId?: IntFieldUpdateOperationsInput | number
  }

  export type MensajeUncheckedUpdateManyWithoutConversacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenido?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    visto?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    remitenteId?: IntFieldUpdateOperationsInput | number
  }

  export type ConversacionParticipanteUpdateWithoutConversacionInput = {
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutParticipacionesNestedInput
  }

  export type ConversacionParticipanteUncheckedUpdateWithoutConversacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ConversacionParticipanteUncheckedUpdateManyWithoutConversacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}