
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
 * Model Dishes
 * 
 */
export type Dishes = $Result.DefaultSelection<Prisma.$DishesPayload>
/**
 * Model Nutritions
 * 
 */
export type Nutritions = $Result.DefaultSelection<Prisma.$NutritionsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Dishes
 * const dishes = await prisma.dishes.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Dishes
   * const dishes = await prisma.dishes.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.dishes`: Exposes CRUD operations for the **Dishes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dishes
    * const dishes = await prisma.dishes.findMany()
    * ```
    */
  get dishes(): Prisma.DishesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nutritions`: Exposes CRUD operations for the **Nutritions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nutritions
    * const nutritions = await prisma.nutritions.findMany()
    * ```
    */
  get nutritions(): Prisma.NutritionsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Dishes: 'Dishes',
    Nutritions: 'Nutritions'
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
      modelProps: "dishes" | "nutritions"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Dishes: {
        payload: Prisma.$DishesPayload<ExtArgs>
        fields: Prisma.DishesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DishesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DishesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishesPayload>
          }
          findFirst: {
            args: Prisma.DishesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DishesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishesPayload>
          }
          findMany: {
            args: Prisma.DishesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishesPayload>[]
          }
          create: {
            args: Prisma.DishesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishesPayload>
          }
          createMany: {
            args: Prisma.DishesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DishesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishesPayload>[]
          }
          delete: {
            args: Prisma.DishesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishesPayload>
          }
          update: {
            args: Prisma.DishesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishesPayload>
          }
          deleteMany: {
            args: Prisma.DishesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DishesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DishesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishesPayload>[]
          }
          upsert: {
            args: Prisma.DishesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishesPayload>
          }
          aggregate: {
            args: Prisma.DishesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDishes>
          }
          groupBy: {
            args: Prisma.DishesGroupByArgs<ExtArgs>
            result: $Utils.Optional<DishesGroupByOutputType>[]
          }
          count: {
            args: Prisma.DishesCountArgs<ExtArgs>
            result: $Utils.Optional<DishesCountAggregateOutputType> | number
          }
        }
      }
      Nutritions: {
        payload: Prisma.$NutritionsPayload<ExtArgs>
        fields: Prisma.NutritionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NutritionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NutritionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionsPayload>
          }
          findFirst: {
            args: Prisma.NutritionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NutritionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionsPayload>
          }
          findMany: {
            args: Prisma.NutritionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionsPayload>[]
          }
          create: {
            args: Prisma.NutritionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionsPayload>
          }
          createMany: {
            args: Prisma.NutritionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NutritionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionsPayload>[]
          }
          delete: {
            args: Prisma.NutritionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionsPayload>
          }
          update: {
            args: Prisma.NutritionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionsPayload>
          }
          deleteMany: {
            args: Prisma.NutritionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NutritionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NutritionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionsPayload>[]
          }
          upsert: {
            args: Prisma.NutritionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionsPayload>
          }
          aggregate: {
            args: Prisma.NutritionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNutritions>
          }
          groupBy: {
            args: Prisma.NutritionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NutritionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NutritionsCountArgs<ExtArgs>
            result: $Utils.Optional<NutritionsCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    dishes?: DishesOmit
    nutritions?: NutritionsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model Dishes
   */

  export type AggregateDishes = {
    _count: DishesCountAggregateOutputType | null
    _avg: DishesAvgAggregateOutputType | null
    _sum: DishesSumAggregateOutputType | null
    _min: DishesMinAggregateOutputType | null
    _max: DishesMaxAggregateOutputType | null
  }

  export type DishesAvgAggregateOutputType = {
    id: number | null
  }

  export type DishesSumAggregateOutputType = {
    id: number | null
  }

  export type DishesMinAggregateOutputType = {
    id: number | null
    title: string | null
    instruction_step: string | null
    isFavorite: boolean | null
    createdAt: Date | null
  }

  export type DishesMaxAggregateOutputType = {
    id: number | null
    title: string | null
    instruction_step: string | null
    isFavorite: boolean | null
    createdAt: Date | null
  }

  export type DishesCountAggregateOutputType = {
    id: number
    title: number
    thumnail: number
    videoLinks: number
    instruction_step: number
    isFavorite: number
    createdAt: number
    _all: number
  }


  export type DishesAvgAggregateInputType = {
    id?: true
  }

  export type DishesSumAggregateInputType = {
    id?: true
  }

  export type DishesMinAggregateInputType = {
    id?: true
    title?: true
    instruction_step?: true
    isFavorite?: true
    createdAt?: true
  }

  export type DishesMaxAggregateInputType = {
    id?: true
    title?: true
    instruction_step?: true
    isFavorite?: true
    createdAt?: true
  }

  export type DishesCountAggregateInputType = {
    id?: true
    title?: true
    thumnail?: true
    videoLinks?: true
    instruction_step?: true
    isFavorite?: true
    createdAt?: true
    _all?: true
  }

  export type DishesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dishes to aggregate.
     */
    where?: DishesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dishes to fetch.
     */
    orderBy?: DishesOrderByWithRelationInput | DishesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DishesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dishes
    **/
    _count?: true | DishesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DishesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DishesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DishesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DishesMaxAggregateInputType
  }

  export type GetDishesAggregateType<T extends DishesAggregateArgs> = {
        [P in keyof T & keyof AggregateDishes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDishes[P]>
      : GetScalarType<T[P], AggregateDishes[P]>
  }




  export type DishesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DishesWhereInput
    orderBy?: DishesOrderByWithAggregationInput | DishesOrderByWithAggregationInput[]
    by: DishesScalarFieldEnum[] | DishesScalarFieldEnum
    having?: DishesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DishesCountAggregateInputType | true
    _avg?: DishesAvgAggregateInputType
    _sum?: DishesSumAggregateInputType
    _min?: DishesMinAggregateInputType
    _max?: DishesMaxAggregateInputType
  }

  export type DishesGroupByOutputType = {
    id: number
    title: string
    thumnail: string[]
    videoLinks: string[]
    instruction_step: string
    isFavorite: boolean
    createdAt: Date
    _count: DishesCountAggregateOutputType | null
    _avg: DishesAvgAggregateOutputType | null
    _sum: DishesSumAggregateOutputType | null
    _min: DishesMinAggregateOutputType | null
    _max: DishesMaxAggregateOutputType | null
  }

  type GetDishesGroupByPayload<T extends DishesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DishesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DishesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DishesGroupByOutputType[P]>
            : GetScalarType<T[P], DishesGroupByOutputType[P]>
        }
      >
    >


  export type DishesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    thumnail?: boolean
    videoLinks?: boolean
    instruction_step?: boolean
    isFavorite?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dishes"]>

  export type DishesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    thumnail?: boolean
    videoLinks?: boolean
    instruction_step?: boolean
    isFavorite?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dishes"]>

  export type DishesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    thumnail?: boolean
    videoLinks?: boolean
    instruction_step?: boolean
    isFavorite?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dishes"]>

  export type DishesSelectScalar = {
    id?: boolean
    title?: boolean
    thumnail?: boolean
    videoLinks?: boolean
    instruction_step?: boolean
    isFavorite?: boolean
    createdAt?: boolean
  }

  export type DishesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "thumnail" | "videoLinks" | "instruction_step" | "isFavorite" | "createdAt", ExtArgs["result"]["dishes"]>

  export type $DishesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dishes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      thumnail: string[]
      videoLinks: string[]
      instruction_step: string
      isFavorite: boolean
      createdAt: Date
    }, ExtArgs["result"]["dishes"]>
    composites: {}
  }

  type DishesGetPayload<S extends boolean | null | undefined | DishesDefaultArgs> = $Result.GetResult<Prisma.$DishesPayload, S>

  type DishesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DishesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DishesCountAggregateInputType | true
    }

  export interface DishesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dishes'], meta: { name: 'Dishes' } }
    /**
     * Find zero or one Dishes that matches the filter.
     * @param {DishesFindUniqueArgs} args - Arguments to find a Dishes
     * @example
     * // Get one Dishes
     * const dishes = await prisma.dishes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DishesFindUniqueArgs>(args: SelectSubset<T, DishesFindUniqueArgs<ExtArgs>>): Prisma__DishesClient<$Result.GetResult<Prisma.$DishesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dishes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DishesFindUniqueOrThrowArgs} args - Arguments to find a Dishes
     * @example
     * // Get one Dishes
     * const dishes = await prisma.dishes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DishesFindUniqueOrThrowArgs>(args: SelectSubset<T, DishesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DishesClient<$Result.GetResult<Prisma.$DishesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dishes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishesFindFirstArgs} args - Arguments to find a Dishes
     * @example
     * // Get one Dishes
     * const dishes = await prisma.dishes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DishesFindFirstArgs>(args?: SelectSubset<T, DishesFindFirstArgs<ExtArgs>>): Prisma__DishesClient<$Result.GetResult<Prisma.$DishesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dishes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishesFindFirstOrThrowArgs} args - Arguments to find a Dishes
     * @example
     * // Get one Dishes
     * const dishes = await prisma.dishes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DishesFindFirstOrThrowArgs>(args?: SelectSubset<T, DishesFindFirstOrThrowArgs<ExtArgs>>): Prisma__DishesClient<$Result.GetResult<Prisma.$DishesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dishes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dishes
     * const dishes = await prisma.dishes.findMany()
     * 
     * // Get first 10 Dishes
     * const dishes = await prisma.dishes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dishesWithIdOnly = await prisma.dishes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DishesFindManyArgs>(args?: SelectSubset<T, DishesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dishes.
     * @param {DishesCreateArgs} args - Arguments to create a Dishes.
     * @example
     * // Create one Dishes
     * const Dishes = await prisma.dishes.create({
     *   data: {
     *     // ... data to create a Dishes
     *   }
     * })
     * 
     */
    create<T extends DishesCreateArgs>(args: SelectSubset<T, DishesCreateArgs<ExtArgs>>): Prisma__DishesClient<$Result.GetResult<Prisma.$DishesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dishes.
     * @param {DishesCreateManyArgs} args - Arguments to create many Dishes.
     * @example
     * // Create many Dishes
     * const dishes = await prisma.dishes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DishesCreateManyArgs>(args?: SelectSubset<T, DishesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dishes and returns the data saved in the database.
     * @param {DishesCreateManyAndReturnArgs} args - Arguments to create many Dishes.
     * @example
     * // Create many Dishes
     * const dishes = await prisma.dishes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dishes and only return the `id`
     * const dishesWithIdOnly = await prisma.dishes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DishesCreateManyAndReturnArgs>(args?: SelectSubset<T, DishesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dishes.
     * @param {DishesDeleteArgs} args - Arguments to delete one Dishes.
     * @example
     * // Delete one Dishes
     * const Dishes = await prisma.dishes.delete({
     *   where: {
     *     // ... filter to delete one Dishes
     *   }
     * })
     * 
     */
    delete<T extends DishesDeleteArgs>(args: SelectSubset<T, DishesDeleteArgs<ExtArgs>>): Prisma__DishesClient<$Result.GetResult<Prisma.$DishesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dishes.
     * @param {DishesUpdateArgs} args - Arguments to update one Dishes.
     * @example
     * // Update one Dishes
     * const dishes = await prisma.dishes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DishesUpdateArgs>(args: SelectSubset<T, DishesUpdateArgs<ExtArgs>>): Prisma__DishesClient<$Result.GetResult<Prisma.$DishesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dishes.
     * @param {DishesDeleteManyArgs} args - Arguments to filter Dishes to delete.
     * @example
     * // Delete a few Dishes
     * const { count } = await prisma.dishes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DishesDeleteManyArgs>(args?: SelectSubset<T, DishesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dishes
     * const dishes = await prisma.dishes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DishesUpdateManyArgs>(args: SelectSubset<T, DishesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dishes and returns the data updated in the database.
     * @param {DishesUpdateManyAndReturnArgs} args - Arguments to update many Dishes.
     * @example
     * // Update many Dishes
     * const dishes = await prisma.dishes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dishes and only return the `id`
     * const dishesWithIdOnly = await prisma.dishes.updateManyAndReturn({
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
    updateManyAndReturn<T extends DishesUpdateManyAndReturnArgs>(args: SelectSubset<T, DishesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dishes.
     * @param {DishesUpsertArgs} args - Arguments to update or create a Dishes.
     * @example
     * // Update or create a Dishes
     * const dishes = await prisma.dishes.upsert({
     *   create: {
     *     // ... data to create a Dishes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dishes we want to update
     *   }
     * })
     */
    upsert<T extends DishesUpsertArgs>(args: SelectSubset<T, DishesUpsertArgs<ExtArgs>>): Prisma__DishesClient<$Result.GetResult<Prisma.$DishesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishesCountArgs} args - Arguments to filter Dishes to count.
     * @example
     * // Count the number of Dishes
     * const count = await prisma.dishes.count({
     *   where: {
     *     // ... the filter for the Dishes we want to count
     *   }
     * })
    **/
    count<T extends DishesCountArgs>(
      args?: Subset<T, DishesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DishesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DishesAggregateArgs>(args: Subset<T, DishesAggregateArgs>): Prisma.PrismaPromise<GetDishesAggregateType<T>>

    /**
     * Group by Dishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishesGroupByArgs} args - Group by arguments.
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
      T extends DishesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DishesGroupByArgs['orderBy'] }
        : { orderBy?: DishesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DishesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDishesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dishes model
   */
  readonly fields: DishesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dishes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DishesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Dishes model
   */
  interface DishesFieldRefs {
    readonly id: FieldRef<"Dishes", 'Int'>
    readonly title: FieldRef<"Dishes", 'String'>
    readonly thumnail: FieldRef<"Dishes", 'String[]'>
    readonly videoLinks: FieldRef<"Dishes", 'String[]'>
    readonly instruction_step: FieldRef<"Dishes", 'String'>
    readonly isFavorite: FieldRef<"Dishes", 'Boolean'>
    readonly createdAt: FieldRef<"Dishes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dishes findUnique
   */
  export type DishesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dishes
     */
    select?: DishesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dishes
     */
    omit?: DishesOmit<ExtArgs> | null
    /**
     * Filter, which Dishes to fetch.
     */
    where: DishesWhereUniqueInput
  }

  /**
   * Dishes findUniqueOrThrow
   */
  export type DishesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dishes
     */
    select?: DishesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dishes
     */
    omit?: DishesOmit<ExtArgs> | null
    /**
     * Filter, which Dishes to fetch.
     */
    where: DishesWhereUniqueInput
  }

  /**
   * Dishes findFirst
   */
  export type DishesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dishes
     */
    select?: DishesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dishes
     */
    omit?: DishesOmit<ExtArgs> | null
    /**
     * Filter, which Dishes to fetch.
     */
    where?: DishesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dishes to fetch.
     */
    orderBy?: DishesOrderByWithRelationInput | DishesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dishes.
     */
    cursor?: DishesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dishes.
     */
    distinct?: DishesScalarFieldEnum | DishesScalarFieldEnum[]
  }

  /**
   * Dishes findFirstOrThrow
   */
  export type DishesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dishes
     */
    select?: DishesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dishes
     */
    omit?: DishesOmit<ExtArgs> | null
    /**
     * Filter, which Dishes to fetch.
     */
    where?: DishesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dishes to fetch.
     */
    orderBy?: DishesOrderByWithRelationInput | DishesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dishes.
     */
    cursor?: DishesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dishes.
     */
    distinct?: DishesScalarFieldEnum | DishesScalarFieldEnum[]
  }

  /**
   * Dishes findMany
   */
  export type DishesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dishes
     */
    select?: DishesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dishes
     */
    omit?: DishesOmit<ExtArgs> | null
    /**
     * Filter, which Dishes to fetch.
     */
    where?: DishesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dishes to fetch.
     */
    orderBy?: DishesOrderByWithRelationInput | DishesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dishes.
     */
    cursor?: DishesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dishes.
     */
    skip?: number
    distinct?: DishesScalarFieldEnum | DishesScalarFieldEnum[]
  }

  /**
   * Dishes create
   */
  export type DishesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dishes
     */
    select?: DishesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dishes
     */
    omit?: DishesOmit<ExtArgs> | null
    /**
     * The data needed to create a Dishes.
     */
    data: XOR<DishesCreateInput, DishesUncheckedCreateInput>
  }

  /**
   * Dishes createMany
   */
  export type DishesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dishes.
     */
    data: DishesCreateManyInput | DishesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dishes createManyAndReturn
   */
  export type DishesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dishes
     */
    select?: DishesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dishes
     */
    omit?: DishesOmit<ExtArgs> | null
    /**
     * The data used to create many Dishes.
     */
    data: DishesCreateManyInput | DishesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dishes update
   */
  export type DishesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dishes
     */
    select?: DishesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dishes
     */
    omit?: DishesOmit<ExtArgs> | null
    /**
     * The data needed to update a Dishes.
     */
    data: XOR<DishesUpdateInput, DishesUncheckedUpdateInput>
    /**
     * Choose, which Dishes to update.
     */
    where: DishesWhereUniqueInput
  }

  /**
   * Dishes updateMany
   */
  export type DishesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dishes.
     */
    data: XOR<DishesUpdateManyMutationInput, DishesUncheckedUpdateManyInput>
    /**
     * Filter which Dishes to update
     */
    where?: DishesWhereInput
    /**
     * Limit how many Dishes to update.
     */
    limit?: number
  }

  /**
   * Dishes updateManyAndReturn
   */
  export type DishesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dishes
     */
    select?: DishesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dishes
     */
    omit?: DishesOmit<ExtArgs> | null
    /**
     * The data used to update Dishes.
     */
    data: XOR<DishesUpdateManyMutationInput, DishesUncheckedUpdateManyInput>
    /**
     * Filter which Dishes to update
     */
    where?: DishesWhereInput
    /**
     * Limit how many Dishes to update.
     */
    limit?: number
  }

  /**
   * Dishes upsert
   */
  export type DishesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dishes
     */
    select?: DishesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dishes
     */
    omit?: DishesOmit<ExtArgs> | null
    /**
     * The filter to search for the Dishes to update in case it exists.
     */
    where: DishesWhereUniqueInput
    /**
     * In case the Dishes found by the `where` argument doesn't exist, create a new Dishes with this data.
     */
    create: XOR<DishesCreateInput, DishesUncheckedCreateInput>
    /**
     * In case the Dishes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DishesUpdateInput, DishesUncheckedUpdateInput>
  }

  /**
   * Dishes delete
   */
  export type DishesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dishes
     */
    select?: DishesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dishes
     */
    omit?: DishesOmit<ExtArgs> | null
    /**
     * Filter which Dishes to delete.
     */
    where: DishesWhereUniqueInput
  }

  /**
   * Dishes deleteMany
   */
  export type DishesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dishes to delete
     */
    where?: DishesWhereInput
    /**
     * Limit how many Dishes to delete.
     */
    limit?: number
  }

  /**
   * Dishes without action
   */
  export type DishesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dishes
     */
    select?: DishesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dishes
     */
    omit?: DishesOmit<ExtArgs> | null
  }


  /**
   * Model Nutritions
   */

  export type AggregateNutritions = {
    _count: NutritionsCountAggregateOutputType | null
    _avg: NutritionsAvgAggregateOutputType | null
    _sum: NutritionsSumAggregateOutputType | null
    _min: NutritionsMinAggregateOutputType | null
    _max: NutritionsMaxAggregateOutputType | null
  }

  export type NutritionsAvgAggregateOutputType = {
    id: number | null
    caloriesIn: number | null
    fat: number | null
    protein: number | null
    carbs: number | null
  }

  export type NutritionsSumAggregateOutputType = {
    id: number | null
    caloriesIn: number | null
    fat: number | null
    protein: number | null
    carbs: number | null
  }

  export type NutritionsMinAggregateOutputType = {
    id: number | null
    datatime: Date | null
    caloriesIn: number | null
    fat: number | null
    protein: number | null
    carbs: number | null
  }

  export type NutritionsMaxAggregateOutputType = {
    id: number | null
    datatime: Date | null
    caloriesIn: number | null
    fat: number | null
    protein: number | null
    carbs: number | null
  }

  export type NutritionsCountAggregateOutputType = {
    id: number
    datatime: number
    caloriesIn: number
    fat: number
    protein: number
    carbs: number
    _all: number
  }


  export type NutritionsAvgAggregateInputType = {
    id?: true
    caloriesIn?: true
    fat?: true
    protein?: true
    carbs?: true
  }

  export type NutritionsSumAggregateInputType = {
    id?: true
    caloriesIn?: true
    fat?: true
    protein?: true
    carbs?: true
  }

  export type NutritionsMinAggregateInputType = {
    id?: true
    datatime?: true
    caloriesIn?: true
    fat?: true
    protein?: true
    carbs?: true
  }

  export type NutritionsMaxAggregateInputType = {
    id?: true
    datatime?: true
    caloriesIn?: true
    fat?: true
    protein?: true
    carbs?: true
  }

  export type NutritionsCountAggregateInputType = {
    id?: true
    datatime?: true
    caloriesIn?: true
    fat?: true
    protein?: true
    carbs?: true
    _all?: true
  }

  export type NutritionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nutritions to aggregate.
     */
    where?: NutritionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nutritions to fetch.
     */
    orderBy?: NutritionsOrderByWithRelationInput | NutritionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NutritionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nutritions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nutritions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Nutritions
    **/
    _count?: true | NutritionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NutritionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NutritionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NutritionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NutritionsMaxAggregateInputType
  }

  export type GetNutritionsAggregateType<T extends NutritionsAggregateArgs> = {
        [P in keyof T & keyof AggregateNutritions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNutritions[P]>
      : GetScalarType<T[P], AggregateNutritions[P]>
  }




  export type NutritionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NutritionsWhereInput
    orderBy?: NutritionsOrderByWithAggregationInput | NutritionsOrderByWithAggregationInput[]
    by: NutritionsScalarFieldEnum[] | NutritionsScalarFieldEnum
    having?: NutritionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NutritionsCountAggregateInputType | true
    _avg?: NutritionsAvgAggregateInputType
    _sum?: NutritionsSumAggregateInputType
    _min?: NutritionsMinAggregateInputType
    _max?: NutritionsMaxAggregateInputType
  }

  export type NutritionsGroupByOutputType = {
    id: number
    datatime: Date
    caloriesIn: number
    fat: number
    protein: number
    carbs: number
    _count: NutritionsCountAggregateOutputType | null
    _avg: NutritionsAvgAggregateOutputType | null
    _sum: NutritionsSumAggregateOutputType | null
    _min: NutritionsMinAggregateOutputType | null
    _max: NutritionsMaxAggregateOutputType | null
  }

  type GetNutritionsGroupByPayload<T extends NutritionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NutritionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NutritionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NutritionsGroupByOutputType[P]>
            : GetScalarType<T[P], NutritionsGroupByOutputType[P]>
        }
      >
    >


  export type NutritionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    datatime?: boolean
    caloriesIn?: boolean
    fat?: boolean
    protein?: boolean
    carbs?: boolean
  }, ExtArgs["result"]["nutritions"]>

  export type NutritionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    datatime?: boolean
    caloriesIn?: boolean
    fat?: boolean
    protein?: boolean
    carbs?: boolean
  }, ExtArgs["result"]["nutritions"]>

  export type NutritionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    datatime?: boolean
    caloriesIn?: boolean
    fat?: boolean
    protein?: boolean
    carbs?: boolean
  }, ExtArgs["result"]["nutritions"]>

  export type NutritionsSelectScalar = {
    id?: boolean
    datatime?: boolean
    caloriesIn?: boolean
    fat?: boolean
    protein?: boolean
    carbs?: boolean
  }

  export type NutritionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "datatime" | "caloriesIn" | "fat" | "protein" | "carbs", ExtArgs["result"]["nutritions"]>

  export type $NutritionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Nutritions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      datatime: Date
      caloriesIn: number
      fat: number
      protein: number
      carbs: number
    }, ExtArgs["result"]["nutritions"]>
    composites: {}
  }

  type NutritionsGetPayload<S extends boolean | null | undefined | NutritionsDefaultArgs> = $Result.GetResult<Prisma.$NutritionsPayload, S>

  type NutritionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NutritionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NutritionsCountAggregateInputType | true
    }

  export interface NutritionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Nutritions'], meta: { name: 'Nutritions' } }
    /**
     * Find zero or one Nutritions that matches the filter.
     * @param {NutritionsFindUniqueArgs} args - Arguments to find a Nutritions
     * @example
     * // Get one Nutritions
     * const nutritions = await prisma.nutritions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NutritionsFindUniqueArgs>(args: SelectSubset<T, NutritionsFindUniqueArgs<ExtArgs>>): Prisma__NutritionsClient<$Result.GetResult<Prisma.$NutritionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Nutritions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NutritionsFindUniqueOrThrowArgs} args - Arguments to find a Nutritions
     * @example
     * // Get one Nutritions
     * const nutritions = await prisma.nutritions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NutritionsFindUniqueOrThrowArgs>(args: SelectSubset<T, NutritionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NutritionsClient<$Result.GetResult<Prisma.$NutritionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nutritions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionsFindFirstArgs} args - Arguments to find a Nutritions
     * @example
     * // Get one Nutritions
     * const nutritions = await prisma.nutritions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NutritionsFindFirstArgs>(args?: SelectSubset<T, NutritionsFindFirstArgs<ExtArgs>>): Prisma__NutritionsClient<$Result.GetResult<Prisma.$NutritionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nutritions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionsFindFirstOrThrowArgs} args - Arguments to find a Nutritions
     * @example
     * // Get one Nutritions
     * const nutritions = await prisma.nutritions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NutritionsFindFirstOrThrowArgs>(args?: SelectSubset<T, NutritionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NutritionsClient<$Result.GetResult<Prisma.$NutritionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Nutritions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nutritions
     * const nutritions = await prisma.nutritions.findMany()
     * 
     * // Get first 10 Nutritions
     * const nutritions = await prisma.nutritions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nutritionsWithIdOnly = await prisma.nutritions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NutritionsFindManyArgs>(args?: SelectSubset<T, NutritionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NutritionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Nutritions.
     * @param {NutritionsCreateArgs} args - Arguments to create a Nutritions.
     * @example
     * // Create one Nutritions
     * const Nutritions = await prisma.nutritions.create({
     *   data: {
     *     // ... data to create a Nutritions
     *   }
     * })
     * 
     */
    create<T extends NutritionsCreateArgs>(args: SelectSubset<T, NutritionsCreateArgs<ExtArgs>>): Prisma__NutritionsClient<$Result.GetResult<Prisma.$NutritionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Nutritions.
     * @param {NutritionsCreateManyArgs} args - Arguments to create many Nutritions.
     * @example
     * // Create many Nutritions
     * const nutritions = await prisma.nutritions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NutritionsCreateManyArgs>(args?: SelectSubset<T, NutritionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Nutritions and returns the data saved in the database.
     * @param {NutritionsCreateManyAndReturnArgs} args - Arguments to create many Nutritions.
     * @example
     * // Create many Nutritions
     * const nutritions = await prisma.nutritions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Nutritions and only return the `id`
     * const nutritionsWithIdOnly = await prisma.nutritions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NutritionsCreateManyAndReturnArgs>(args?: SelectSubset<T, NutritionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NutritionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Nutritions.
     * @param {NutritionsDeleteArgs} args - Arguments to delete one Nutritions.
     * @example
     * // Delete one Nutritions
     * const Nutritions = await prisma.nutritions.delete({
     *   where: {
     *     // ... filter to delete one Nutritions
     *   }
     * })
     * 
     */
    delete<T extends NutritionsDeleteArgs>(args: SelectSubset<T, NutritionsDeleteArgs<ExtArgs>>): Prisma__NutritionsClient<$Result.GetResult<Prisma.$NutritionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Nutritions.
     * @param {NutritionsUpdateArgs} args - Arguments to update one Nutritions.
     * @example
     * // Update one Nutritions
     * const nutritions = await prisma.nutritions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NutritionsUpdateArgs>(args: SelectSubset<T, NutritionsUpdateArgs<ExtArgs>>): Prisma__NutritionsClient<$Result.GetResult<Prisma.$NutritionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Nutritions.
     * @param {NutritionsDeleteManyArgs} args - Arguments to filter Nutritions to delete.
     * @example
     * // Delete a few Nutritions
     * const { count } = await prisma.nutritions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NutritionsDeleteManyArgs>(args?: SelectSubset<T, NutritionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nutritions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nutritions
     * const nutritions = await prisma.nutritions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NutritionsUpdateManyArgs>(args: SelectSubset<T, NutritionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nutritions and returns the data updated in the database.
     * @param {NutritionsUpdateManyAndReturnArgs} args - Arguments to update many Nutritions.
     * @example
     * // Update many Nutritions
     * const nutritions = await prisma.nutritions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Nutritions and only return the `id`
     * const nutritionsWithIdOnly = await prisma.nutritions.updateManyAndReturn({
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
    updateManyAndReturn<T extends NutritionsUpdateManyAndReturnArgs>(args: SelectSubset<T, NutritionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NutritionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Nutritions.
     * @param {NutritionsUpsertArgs} args - Arguments to update or create a Nutritions.
     * @example
     * // Update or create a Nutritions
     * const nutritions = await prisma.nutritions.upsert({
     *   create: {
     *     // ... data to create a Nutritions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nutritions we want to update
     *   }
     * })
     */
    upsert<T extends NutritionsUpsertArgs>(args: SelectSubset<T, NutritionsUpsertArgs<ExtArgs>>): Prisma__NutritionsClient<$Result.GetResult<Prisma.$NutritionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Nutritions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionsCountArgs} args - Arguments to filter Nutritions to count.
     * @example
     * // Count the number of Nutritions
     * const count = await prisma.nutritions.count({
     *   where: {
     *     // ... the filter for the Nutritions we want to count
     *   }
     * })
    **/
    count<T extends NutritionsCountArgs>(
      args?: Subset<T, NutritionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NutritionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nutritions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NutritionsAggregateArgs>(args: Subset<T, NutritionsAggregateArgs>): Prisma.PrismaPromise<GetNutritionsAggregateType<T>>

    /**
     * Group by Nutritions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionsGroupByArgs} args - Group by arguments.
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
      T extends NutritionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NutritionsGroupByArgs['orderBy'] }
        : { orderBy?: NutritionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NutritionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNutritionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Nutritions model
   */
  readonly fields: NutritionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Nutritions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NutritionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Nutritions model
   */
  interface NutritionsFieldRefs {
    readonly id: FieldRef<"Nutritions", 'Int'>
    readonly datatime: FieldRef<"Nutritions", 'DateTime'>
    readonly caloriesIn: FieldRef<"Nutritions", 'Int'>
    readonly fat: FieldRef<"Nutritions", 'Float'>
    readonly protein: FieldRef<"Nutritions", 'Float'>
    readonly carbs: FieldRef<"Nutritions", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Nutritions findUnique
   */
  export type NutritionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutritions
     */
    select?: NutritionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nutritions
     */
    omit?: NutritionsOmit<ExtArgs> | null
    /**
     * Filter, which Nutritions to fetch.
     */
    where: NutritionsWhereUniqueInput
  }

  /**
   * Nutritions findUniqueOrThrow
   */
  export type NutritionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutritions
     */
    select?: NutritionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nutritions
     */
    omit?: NutritionsOmit<ExtArgs> | null
    /**
     * Filter, which Nutritions to fetch.
     */
    where: NutritionsWhereUniqueInput
  }

  /**
   * Nutritions findFirst
   */
  export type NutritionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutritions
     */
    select?: NutritionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nutritions
     */
    omit?: NutritionsOmit<ExtArgs> | null
    /**
     * Filter, which Nutritions to fetch.
     */
    where?: NutritionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nutritions to fetch.
     */
    orderBy?: NutritionsOrderByWithRelationInput | NutritionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nutritions.
     */
    cursor?: NutritionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nutritions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nutritions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nutritions.
     */
    distinct?: NutritionsScalarFieldEnum | NutritionsScalarFieldEnum[]
  }

  /**
   * Nutritions findFirstOrThrow
   */
  export type NutritionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutritions
     */
    select?: NutritionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nutritions
     */
    omit?: NutritionsOmit<ExtArgs> | null
    /**
     * Filter, which Nutritions to fetch.
     */
    where?: NutritionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nutritions to fetch.
     */
    orderBy?: NutritionsOrderByWithRelationInput | NutritionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nutritions.
     */
    cursor?: NutritionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nutritions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nutritions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nutritions.
     */
    distinct?: NutritionsScalarFieldEnum | NutritionsScalarFieldEnum[]
  }

  /**
   * Nutritions findMany
   */
  export type NutritionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutritions
     */
    select?: NutritionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nutritions
     */
    omit?: NutritionsOmit<ExtArgs> | null
    /**
     * Filter, which Nutritions to fetch.
     */
    where?: NutritionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nutritions to fetch.
     */
    orderBy?: NutritionsOrderByWithRelationInput | NutritionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Nutritions.
     */
    cursor?: NutritionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nutritions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nutritions.
     */
    skip?: number
    distinct?: NutritionsScalarFieldEnum | NutritionsScalarFieldEnum[]
  }

  /**
   * Nutritions create
   */
  export type NutritionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutritions
     */
    select?: NutritionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nutritions
     */
    omit?: NutritionsOmit<ExtArgs> | null
    /**
     * The data needed to create a Nutritions.
     */
    data: XOR<NutritionsCreateInput, NutritionsUncheckedCreateInput>
  }

  /**
   * Nutritions createMany
   */
  export type NutritionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Nutritions.
     */
    data: NutritionsCreateManyInput | NutritionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Nutritions createManyAndReturn
   */
  export type NutritionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutritions
     */
    select?: NutritionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Nutritions
     */
    omit?: NutritionsOmit<ExtArgs> | null
    /**
     * The data used to create many Nutritions.
     */
    data: NutritionsCreateManyInput | NutritionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Nutritions update
   */
  export type NutritionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutritions
     */
    select?: NutritionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nutritions
     */
    omit?: NutritionsOmit<ExtArgs> | null
    /**
     * The data needed to update a Nutritions.
     */
    data: XOR<NutritionsUpdateInput, NutritionsUncheckedUpdateInput>
    /**
     * Choose, which Nutritions to update.
     */
    where: NutritionsWhereUniqueInput
  }

  /**
   * Nutritions updateMany
   */
  export type NutritionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Nutritions.
     */
    data: XOR<NutritionsUpdateManyMutationInput, NutritionsUncheckedUpdateManyInput>
    /**
     * Filter which Nutritions to update
     */
    where?: NutritionsWhereInput
    /**
     * Limit how many Nutritions to update.
     */
    limit?: number
  }

  /**
   * Nutritions updateManyAndReturn
   */
  export type NutritionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutritions
     */
    select?: NutritionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Nutritions
     */
    omit?: NutritionsOmit<ExtArgs> | null
    /**
     * The data used to update Nutritions.
     */
    data: XOR<NutritionsUpdateManyMutationInput, NutritionsUncheckedUpdateManyInput>
    /**
     * Filter which Nutritions to update
     */
    where?: NutritionsWhereInput
    /**
     * Limit how many Nutritions to update.
     */
    limit?: number
  }

  /**
   * Nutritions upsert
   */
  export type NutritionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutritions
     */
    select?: NutritionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nutritions
     */
    omit?: NutritionsOmit<ExtArgs> | null
    /**
     * The filter to search for the Nutritions to update in case it exists.
     */
    where: NutritionsWhereUniqueInput
    /**
     * In case the Nutritions found by the `where` argument doesn't exist, create a new Nutritions with this data.
     */
    create: XOR<NutritionsCreateInput, NutritionsUncheckedCreateInput>
    /**
     * In case the Nutritions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NutritionsUpdateInput, NutritionsUncheckedUpdateInput>
  }

  /**
   * Nutritions delete
   */
  export type NutritionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutritions
     */
    select?: NutritionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nutritions
     */
    omit?: NutritionsOmit<ExtArgs> | null
    /**
     * Filter which Nutritions to delete.
     */
    where: NutritionsWhereUniqueInput
  }

  /**
   * Nutritions deleteMany
   */
  export type NutritionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nutritions to delete
     */
    where?: NutritionsWhereInput
    /**
     * Limit how many Nutritions to delete.
     */
    limit?: number
  }

  /**
   * Nutritions without action
   */
  export type NutritionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutritions
     */
    select?: NutritionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nutritions
     */
    omit?: NutritionsOmit<ExtArgs> | null
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


  export const DishesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    thumnail: 'thumnail',
    videoLinks: 'videoLinks',
    instruction_step: 'instruction_step',
    isFavorite: 'isFavorite',
    createdAt: 'createdAt'
  };

  export type DishesScalarFieldEnum = (typeof DishesScalarFieldEnum)[keyof typeof DishesScalarFieldEnum]


  export const NutritionsScalarFieldEnum: {
    id: 'id',
    datatime: 'datatime',
    caloriesIn: 'caloriesIn',
    fat: 'fat',
    protein: 'protein',
    carbs: 'carbs'
  };

  export type NutritionsScalarFieldEnum = (typeof NutritionsScalarFieldEnum)[keyof typeof NutritionsScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type DishesWhereInput = {
    AND?: DishesWhereInput | DishesWhereInput[]
    OR?: DishesWhereInput[]
    NOT?: DishesWhereInput | DishesWhereInput[]
    id?: IntFilter<"Dishes"> | number
    title?: StringFilter<"Dishes"> | string
    thumnail?: StringNullableListFilter<"Dishes">
    videoLinks?: StringNullableListFilter<"Dishes">
    instruction_step?: StringFilter<"Dishes"> | string
    isFavorite?: BoolFilter<"Dishes"> | boolean
    createdAt?: DateTimeFilter<"Dishes"> | Date | string
  }

  export type DishesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    thumnail?: SortOrder
    videoLinks?: SortOrder
    instruction_step?: SortOrder
    isFavorite?: SortOrder
    createdAt?: SortOrder
  }

  export type DishesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DishesWhereInput | DishesWhereInput[]
    OR?: DishesWhereInput[]
    NOT?: DishesWhereInput | DishesWhereInput[]
    title?: StringFilter<"Dishes"> | string
    thumnail?: StringNullableListFilter<"Dishes">
    videoLinks?: StringNullableListFilter<"Dishes">
    instruction_step?: StringFilter<"Dishes"> | string
    isFavorite?: BoolFilter<"Dishes"> | boolean
    createdAt?: DateTimeFilter<"Dishes"> | Date | string
  }, "id">

  export type DishesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    thumnail?: SortOrder
    videoLinks?: SortOrder
    instruction_step?: SortOrder
    isFavorite?: SortOrder
    createdAt?: SortOrder
    _count?: DishesCountOrderByAggregateInput
    _avg?: DishesAvgOrderByAggregateInput
    _max?: DishesMaxOrderByAggregateInput
    _min?: DishesMinOrderByAggregateInput
    _sum?: DishesSumOrderByAggregateInput
  }

  export type DishesScalarWhereWithAggregatesInput = {
    AND?: DishesScalarWhereWithAggregatesInput | DishesScalarWhereWithAggregatesInput[]
    OR?: DishesScalarWhereWithAggregatesInput[]
    NOT?: DishesScalarWhereWithAggregatesInput | DishesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dishes"> | number
    title?: StringWithAggregatesFilter<"Dishes"> | string
    thumnail?: StringNullableListFilter<"Dishes">
    videoLinks?: StringNullableListFilter<"Dishes">
    instruction_step?: StringWithAggregatesFilter<"Dishes"> | string
    isFavorite?: BoolWithAggregatesFilter<"Dishes"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Dishes"> | Date | string
  }

  export type NutritionsWhereInput = {
    AND?: NutritionsWhereInput | NutritionsWhereInput[]
    OR?: NutritionsWhereInput[]
    NOT?: NutritionsWhereInput | NutritionsWhereInput[]
    id?: IntFilter<"Nutritions"> | number
    datatime?: DateTimeFilter<"Nutritions"> | Date | string
    caloriesIn?: IntFilter<"Nutritions"> | number
    fat?: FloatFilter<"Nutritions"> | number
    protein?: FloatFilter<"Nutritions"> | number
    carbs?: FloatFilter<"Nutritions"> | number
  }

  export type NutritionsOrderByWithRelationInput = {
    id?: SortOrder
    datatime?: SortOrder
    caloriesIn?: SortOrder
    fat?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
  }

  export type NutritionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NutritionsWhereInput | NutritionsWhereInput[]
    OR?: NutritionsWhereInput[]
    NOT?: NutritionsWhereInput | NutritionsWhereInput[]
    datatime?: DateTimeFilter<"Nutritions"> | Date | string
    caloriesIn?: IntFilter<"Nutritions"> | number
    fat?: FloatFilter<"Nutritions"> | number
    protein?: FloatFilter<"Nutritions"> | number
    carbs?: FloatFilter<"Nutritions"> | number
  }, "id">

  export type NutritionsOrderByWithAggregationInput = {
    id?: SortOrder
    datatime?: SortOrder
    caloriesIn?: SortOrder
    fat?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    _count?: NutritionsCountOrderByAggregateInput
    _avg?: NutritionsAvgOrderByAggregateInput
    _max?: NutritionsMaxOrderByAggregateInput
    _min?: NutritionsMinOrderByAggregateInput
    _sum?: NutritionsSumOrderByAggregateInput
  }

  export type NutritionsScalarWhereWithAggregatesInput = {
    AND?: NutritionsScalarWhereWithAggregatesInput | NutritionsScalarWhereWithAggregatesInput[]
    OR?: NutritionsScalarWhereWithAggregatesInput[]
    NOT?: NutritionsScalarWhereWithAggregatesInput | NutritionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Nutritions"> | number
    datatime?: DateTimeWithAggregatesFilter<"Nutritions"> | Date | string
    caloriesIn?: IntWithAggregatesFilter<"Nutritions"> | number
    fat?: FloatWithAggregatesFilter<"Nutritions"> | number
    protein?: FloatWithAggregatesFilter<"Nutritions"> | number
    carbs?: FloatWithAggregatesFilter<"Nutritions"> | number
  }

  export type DishesCreateInput = {
    title: string
    thumnail?: DishesCreatethumnailInput | string[]
    videoLinks?: DishesCreatevideoLinksInput | string[]
    instruction_step: string
    isFavorite?: boolean
    createdAt?: Date | string
  }

  export type DishesUncheckedCreateInput = {
    id?: number
    title: string
    thumnail?: DishesCreatethumnailInput | string[]
    videoLinks?: DishesCreatevideoLinksInput | string[]
    instruction_step: string
    isFavorite?: boolean
    createdAt?: Date | string
  }

  export type DishesUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    thumnail?: DishesUpdatethumnailInput | string[]
    videoLinks?: DishesUpdatevideoLinksInput | string[]
    instruction_step?: StringFieldUpdateOperationsInput | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    thumnail?: DishesUpdatethumnailInput | string[]
    videoLinks?: DishesUpdatevideoLinksInput | string[]
    instruction_step?: StringFieldUpdateOperationsInput | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishesCreateManyInput = {
    id?: number
    title: string
    thumnail?: DishesCreatethumnailInput | string[]
    videoLinks?: DishesCreatevideoLinksInput | string[]
    instruction_step: string
    isFavorite?: boolean
    createdAt?: Date | string
  }

  export type DishesUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    thumnail?: DishesUpdatethumnailInput | string[]
    videoLinks?: DishesUpdatevideoLinksInput | string[]
    instruction_step?: StringFieldUpdateOperationsInput | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    thumnail?: DishesUpdatethumnailInput | string[]
    videoLinks?: DishesUpdatevideoLinksInput | string[]
    instruction_step?: StringFieldUpdateOperationsInput | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NutritionsCreateInput = {
    datatime?: Date | string
    caloriesIn: number
    fat: number
    protein: number
    carbs: number
  }

  export type NutritionsUncheckedCreateInput = {
    id?: number
    datatime?: Date | string
    caloriesIn: number
    fat: number
    protein: number
    carbs: number
  }

  export type NutritionsUpdateInput = {
    datatime?: DateTimeFieldUpdateOperationsInput | Date | string
    caloriesIn?: IntFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
  }

  export type NutritionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    datatime?: DateTimeFieldUpdateOperationsInput | Date | string
    caloriesIn?: IntFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
  }

  export type NutritionsCreateManyInput = {
    id?: number
    datatime?: Date | string
    caloriesIn: number
    fat: number
    protein: number
    carbs: number
  }

  export type NutritionsUpdateManyMutationInput = {
    datatime?: DateTimeFieldUpdateOperationsInput | Date | string
    caloriesIn?: IntFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
  }

  export type NutritionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    datatime?: DateTimeFieldUpdateOperationsInput | Date | string
    caloriesIn?: IntFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type DishesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    thumnail?: SortOrder
    videoLinks?: SortOrder
    instruction_step?: SortOrder
    isFavorite?: SortOrder
    createdAt?: SortOrder
  }

  export type DishesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DishesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    instruction_step?: SortOrder
    isFavorite?: SortOrder
    createdAt?: SortOrder
  }

  export type DishesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    instruction_step?: SortOrder
    isFavorite?: SortOrder
    createdAt?: SortOrder
  }

  export type DishesSumOrderByAggregateInput = {
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NutritionsCountOrderByAggregateInput = {
    id?: SortOrder
    datatime?: SortOrder
    caloriesIn?: SortOrder
    fat?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
  }

  export type NutritionsAvgOrderByAggregateInput = {
    id?: SortOrder
    caloriesIn?: SortOrder
    fat?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
  }

  export type NutritionsMaxOrderByAggregateInput = {
    id?: SortOrder
    datatime?: SortOrder
    caloriesIn?: SortOrder
    fat?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
  }

  export type NutritionsMinOrderByAggregateInput = {
    id?: SortOrder
    datatime?: SortOrder
    caloriesIn?: SortOrder
    fat?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
  }

  export type NutritionsSumOrderByAggregateInput = {
    id?: SortOrder
    caloriesIn?: SortOrder
    fat?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DishesCreatethumnailInput = {
    set: string[]
  }

  export type DishesCreatevideoLinksInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DishesUpdatethumnailInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DishesUpdatevideoLinksInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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