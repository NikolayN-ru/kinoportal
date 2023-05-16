type ReactSVGComponent = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & { title?: string }
>;

declare module "*.svg" {
  export const ReactComponent: ReactSVGComponent;

  const src: string;
  export default src;
}
