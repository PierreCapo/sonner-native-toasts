import type { ReactTestRenderer } from 'react-test-renderer';
export declare const resetToastStore: () => void;
export declare const cleanupToasterRenderers: (renderers: ReactTestRenderer[]) => void;
export declare const titlesIn: (channel?: string) => string[];
export declare const createToasterHarness: () => {
    render: (element: React.ReactElement) => ReactTestRenderer;
    cleanup: () => void;
};
//# sourceMappingURL=test-utils.d.ts.map