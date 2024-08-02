// declarations.d.ts
declare module '*.pdf' {
    const content: string;
    export default content;
}

interface Window {
    gtag: (...args: any[]) => void;
}
