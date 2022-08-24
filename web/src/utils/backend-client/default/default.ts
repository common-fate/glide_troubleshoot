/**
 * Generated by orval v6.9.6 🍺
 * Do not edit manually.
 * Approvals
 * Granted Approvals API
 * OpenAPI spec version: 1.0
 */
import useSwr from 'swr'
import type {
  SWRConfiguration,
  Key
} from 'swr'
import type {
  ListRequestsResponseResponse,
  UserListRequestsUpcomingParams,
  UserListRequestsPastParams,
  AccessRuleDetail,
  ErrorResponseResponse,
  Provider,
  GetProviderArgs200,
  ArgOptionsResponseResponse,
  ListProviderArgOptionsParams
} from '.././types'
import { customInstance } from '../../custom-instance'
import type { ErrorType } from '../../custom-instance'


  
  // eslint-disable-next-line
  type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

/**
 * display pending requests and approved requests that are currently active or scheduled to begin some time in future.
 * @summary Your GET endpoint
 */
export const userListRequestsUpcoming = (
    params?: UserListRequestsUpcomingParams,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<ListRequestsResponseResponse>(
      {url: `/api/v1/requests/upcoming`, method: 'get',
        params
    },
      options);
    }
  

export const getUserListRequestsUpcomingKey = (params?: UserListRequestsUpcomingParams,) => [`/api/v1/requests/upcoming`, ...(params ? [params]: [])];

    
export type UserListRequestsUpcomingQueryResult = NonNullable<Awaited<ReturnType<typeof userListRequestsUpcoming>>>
export type UserListRequestsUpcomingQueryError = ErrorType<unknown>

export const useUserListRequestsUpcoming = <TError = ErrorType<unknown>>(
 params?: UserListRequestsUpcomingParams, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof userListRequestsUpcoming>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getUserListRequestsUpcomingKey(params) : null);
  const swrFn = () => userListRequestsUpcoming(params, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * display show cancelled, expired, and revoked requests.

 * @summary Your GET endpoint
 */
export const userListRequestsPast = (
    params?: UserListRequestsPastParams,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<ListRequestsResponseResponse>(
      {url: `/api/v1/requests/past`, method: 'get',
        params
    },
      options);
    }
  

export const getUserListRequestsPastKey = (params?: UserListRequestsPastParams,) => [`/api/v1/requests/past`, ...(params ? [params]: [])];

    
export type UserListRequestsPastQueryResult = NonNullable<Awaited<ReturnType<typeof userListRequestsPast>>>
export type UserListRequestsPastQueryError = ErrorType<unknown>

export const useUserListRequestsPast = <TError = ErrorType<unknown>>(
 params?: UserListRequestsPastParams, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof userListRequestsPast>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getUserListRequestsPastKey(params) : null);
  const swrFn = () => userListRequestsPast(params, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Marks an access rule as archived.
Any pending requests for this access rule will be cancelled.
 * @summary Archive Access Rule
 */
export const adminArchiveAccessRule = (
    ruleId: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<AccessRuleDetail>(
      {url: `/api/v1/admin/access-rules/${ruleId}/archive`, method: 'post'
    },
      options);
    }
  

/**
 * List providers
 * @summary List providers
 */
export const listProviders = (
    
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<Provider[]>(
      {url: `/api/v1/admin/providers`, method: 'get'
    },
      options);
    }
  

export const getListProvidersKey = () => [`/api/v1/admin/providers`];

    
export type ListProvidersQueryResult = NonNullable<Awaited<ReturnType<typeof listProviders>>>
export type ListProvidersQueryError = ErrorType<ErrorResponseResponse>

export const useListProviders = <TError = ErrorType<ErrorResponseResponse>>(
  options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof listProviders>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getListProvidersKey() : null);
  const swrFn = () => listProviders(requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Get provider by id
 * @summary List providers
 */
export const getProvider = (
    providerId: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<Provider>(
      {url: `/api/v1/admin/providers/${providerId}`, method: 'get'
    },
      options);
    }
  

export const getGetProviderKey = (providerId: string,) => [`/api/v1/admin/providers/${providerId}`];

    
export type GetProviderQueryResult = NonNullable<Awaited<ReturnType<typeof getProvider>>>
export type GetProviderQueryError = ErrorType<ErrorResponseResponse>

export const useGetProvider = <TError = ErrorType<ErrorResponseResponse>>(
 providerId: string, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof getProvider>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false && !!(providerId)
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getGetProviderKey(providerId) : null);
  const swrFn = () => getProvider(providerId, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * gets the jsonschema describing the args for this provider
 * @summary Get provider arg schema
 */
export const getProviderArgs = (
    providerId: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<GetProviderArgs200>(
      {url: `/api/v1/admin/providers/${providerId}/args`, method: 'get'
    },
      options);
    }
  

export const getGetProviderArgsKey = (providerId: string,) => [`/api/v1/admin/providers/${providerId}/args`];

    
export type GetProviderArgsQueryResult = NonNullable<Awaited<ReturnType<typeof getProviderArgs>>>
export type GetProviderArgsQueryError = ErrorType<ErrorResponseResponse>

export const useGetProviderArgs = <TError = ErrorType<ErrorResponseResponse>>(
 providerId: string, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof getProviderArgs>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false && !!(providerId)
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getGetProviderArgsKey(providerId) : null);
  const swrFn = () => getProviderArgs(providerId, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Returns the options for a particular Access Provider argument. The options may be cached. To refresh the cache, pass the `refresh` query parameter.
 * @summary List provider arg options
 */
export const listProviderArgOptions = (
    providerId: string,
    argId: string,
    params?: ListProviderArgOptionsParams,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<ArgOptionsResponseResponse>(
      {url: `/api/v1/admin/providers/${providerId}/args/${argId}/options`, method: 'get',
        params
    },
      options);
    }
  

export const getListProviderArgOptionsKey = (providerId: string,
    argId: string,
    params?: ListProviderArgOptionsParams,) => [`/api/v1/admin/providers/${providerId}/args/${argId}/options`, ...(params ? [params]: [])];

    
export type ListProviderArgOptionsQueryResult = NonNullable<Awaited<ReturnType<typeof listProviderArgOptions>>>
export type ListProviderArgOptionsQueryError = ErrorType<ErrorResponseResponse>

export const useListProviderArgOptions = <TError = ErrorType<ErrorResponseResponse>>(
 providerId: string,
    argId: string,
    params?: ListProviderArgOptionsParams, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof listProviderArgOptions>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false && !!(providerId && argId)
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getListProviderArgOptionsKey(providerId,argId,params) : null);
  const swrFn = () => listProviderArgOptions(providerId,argId,params, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

