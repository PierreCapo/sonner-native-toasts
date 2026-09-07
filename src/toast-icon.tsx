import * as React from 'react';
import type { ToastProps } from './types';

export const ToastIcon: React.FC<
  Pick<ToastProps, 'variant'> & {
    invert: boolean;
    richColors: boolean;
  }
> = () => {
  return null;
};
