/**
 * " remark-html doesn’t have type definitions within the package or in DefinitelyTyped,
 * create a top-level global.d.ts file to add a type declaration."
 */

declare module 'remark-html' {
  const html: any;
  export default html;
}
