export const useMyFetch: typeof useFetch = (request, opts?) => {
    const config = useRuntimeConfig()

    let headers: any = {
        accept: 'application/json',
        ...opts?.headers,
    }

    return useFetch(request, { 
        baseURL: config.public.apiBaseUrl, 
        mode: 'cors',
        headers,
        credentials: 'include',
        ...opts 
    })
}