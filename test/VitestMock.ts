import { vi } from 'vitest';

export namespace vimock {

    export const func = vi.fn;

    export function defunc(identifier: string) {
        return vi.fn().mockRejectedValue(new Error(`Unexpected invocation of mocked function <${identifier}(...)>!`));
    }
}