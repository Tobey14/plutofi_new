import React from 'react';
import NextLink from 'next/link';

export default function Index(props: any) {
  const { children, to, target, ...rest } = props;
  return <NextLink target={target} {...rest} href={to}>{children}</NextLink>;
}
