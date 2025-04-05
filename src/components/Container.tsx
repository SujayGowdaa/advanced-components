import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from 'react';

type ContainerProps<C extends ElementType> = {
  as?: C;
  children: ReactNode;
} & ComponentPropsWithoutRef<C>;

export default function Container<C extends ElementType = 'div'>({
  as,
  children,
  ...props
}: ContainerProps<C>) {
  const Component = as || 'div';

  return <Component {...props}>{children}</Component>;
}

// Notes

// 🧩 Piece                 	      💡 Why we need it

// C extends ElementType	             Only allow valid JSX elements/components
// as?: C	                             Accept any tag/component to render
// ComponentPropsWithoutRef<C>	       Pull the right props based on the tag/component

// <Container as="a" href="...">Link</Container>
// C = "a" // C becomes anchor element
// ComponentPropsWithoutRef<'a'> includes href, target, etc.
// So href is allowed ✅
