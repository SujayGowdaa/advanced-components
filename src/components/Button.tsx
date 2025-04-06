import { type ComponentPropsWithoutRef } from 'react';

type ButtonProps = {
  el: 'button';
} & ComponentPropsWithoutRef<'button'>;

type AnchorProps = {
  el: 'link';
} & ComponentPropsWithoutRef<'a'>;

function Button(props: ButtonProps | AnchorProps) {
  if (props.el === 'button') {
    return (
      <button className='button' {...props}>
        {props.children}
      </button>
    );
  }
  if (props.el === 'link') {
    return (
      <a className='button' {...props}>
        A Link
      </a>
    );
  }
}

// Another way to render a component without using differentiater prop "el"
// type ButtonProps = ComponentPropsWithoutRef<'button'> & {
//   href?: never;
// };

// type AnchorProps = ComponentPropsWithoutRef<'a'> & {
//   href?: string;
// };

// function isAnchorProp(props: ButtonProps | AnchorProps): props is AnchorProps {
//   return 'href' in props;
// }

// function Button(props: ButtonProps | AnchorProps) {
//   if (isAnchorProp(props)) {
//     return <a className='button' {...props}></a>;
//   }
//   <button className='button' {...props}>
//     {props.children}
//   </button>;
// }

export default Button;
