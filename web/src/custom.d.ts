// /src/custom.d.ts

declare namespace JSX {
  interface IntrinsicElements {
    'ion-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      name?: string;
      src?: string;
      icon?: string;
      size?: 'small' | 'large';
      class?: string; // Allow 'class' for styling
    };
  }
}