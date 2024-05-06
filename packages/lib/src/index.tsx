import React, { HTMLAttributes } from 'react';
import cx from 'classnames';

const CLASS_NAME = 'react-drawer';

export type IProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
} & HTMLAttributes<HTMLDivElement>;

export default function Button(props: IProps) {
  const { className, children, ...rest } = props;
  return <div data-component={CLASS_NAME} className={cx(CLASS_NAME, className)} {...rest} />;
}
