import type { IFetchProvider, PreloadAction } from '../FetchProvider';
import type { JSONObject } from '../../../../../node_modules/websocket-rpc/dist/types';

export default class implements IFetchProvider {

    IsVerboseModeEnabled: boolean;

    Initialize(): void {
        console.log('Platform::Electron::FetchProvider::Initialize()');
        throw new Error('Method not implemented.');
    }

    Fetch(request: Request): Promise<Response> {
        console.log('Platform::Electron::FetchProvider::Fetch()', '=>', request);
        throw new Error('Method not implemented.');
    }

    FetchHTML(request: Request): Promise<Document> {
        console.log('Platform::Electron::FetchProvider::FetchHTML()', '=>', request);
        throw new Error('Method not implemented.');
    }

    FetchJSON<TResult>(request: Request): Promise<TResult> {
        console.log('Platform::Electron::FetchProvider::FetchJSON()', '=>', request);
        throw new Error('Method not implemented.');
    }

    FetchCSS<T extends HTMLElement>(request: Request, query: string): Promise<T[]> {
        console.log('Platform::Electron::FetchProvider::FetchCSS()', '=>', request, query);
        throw new Error('Method not implemented.');
    }

    FetchGraphQL<TResult>(request: Request, operationName: string, query: string, variables: JSONObject): Promise<TResult> {
        console.log('Platform::Electron::FetchProvider::FetchGraphQL()', '=>', request, operationName, query, variables);
        throw new Error('Method not implemented.');
    }

    FetchRegex(request: Request, regex: RegExp): Promise<string[]> {
        console.log('Platform::Electron::FetchProvider::FetchRegex()', '=>', request, regex);
        throw new Error('Method not implemented.');
    }

    FetchProto<TResult>(request: Request, schema: string, messageTypePath: string): Promise<TResult> {
        console.log('Platform::Electron::FetchProvider::FetchProto()', '=>', request, schema, messageTypePath);
        throw new Error('Method not implemented.');
    }

    FetchWindowCSS<T extends HTMLElement>(request: Request, query: string, delay?: number, timeout?: number): Promise<T[]> {
        console.log('Platform::Electron::FetchProvider::FetchWindowCSS()', '=>', request, query, delay, timeout);
        throw new Error('Method not implemented.');
    }

    FetchWindowScript<T>(request: Request, script: string, delay?: number, timeout?: number): Promise<T> {
        console.log('Platform::Electron::FetchProvider::FetchWindowScript()', '=>', request, script, delay, timeout);
        throw new Error('Method not implemented.');
    }

    FetchWindowPreloadScript<T>(request: Request, preload: PreloadAction, script: string, delay?: number, timeout?: number): Promise<T> {
        console.log('Platform::Electron::FetchProvider::FetchWindowPreloadScript()', '=>', request, preload, script, delay, timeout);
        throw new Error('Method not implemented.');
    }
}