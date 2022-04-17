export class Transport {
    private static Url = 'https://api.spotify.com/v1';

    protected static get<T>(url: string, toObject: (json: any) => T): Promise<T> {
        return this.fetch<T>('GET', url, toObject);
    }

    protected static post<T>(url: string, body: {}, toObject: (json: any) => T): Promise<T> {
        return this.fetch<T>('POST', url, toObject, body);
    }

    protected static put<T>(url: string, body: {}, toObject: (json: any) => T): Promise<T> {
        return this.fetch<T>('PUT', url, toObject, body);
    }

    protected static delete(url: string, body: {} | null = null): Promise<void> {
        return this.fetch<void>('DELETE', url, () => {
        }, body);
    }

    private static fetch<T>(method: string, url: string, toObject: (json: any) => T, body: {} | null = null): Promise<T> {
        let request = body == null ? {
            method: method,
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token') as string}`
            }
        } : {
            method: method,
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token') as string}`
            },
            body: new URLSearchParams(body)
        };

        return fetch(this.Url + url, request).then(response => {
            if (!response.ok)
                return Promise.reject(response);
            return response.json().then(json => toObject(json))
        });
    }
}