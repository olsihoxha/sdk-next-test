import Spinner from '../shared/Spinner';
import classNames from 'classnames';
import { ComponentChildren, FunctionalComponent } from 'preact';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// import { ReactTag } from '@headlessui/react/dist/types';

type Props = {
  loading: boolean;
  spinnerClass?: string;
  className?: string;
  style?: object;
  bg?: string;
  color?: string;
  type: 'default' | 'cover';
  asElement: any;
  children?: ComponentChildren;
  customLoader?: ComponentChildren;
  containerClass?: string; // added for cases when modifying loading container is needed. FE: 'border-none sm:rounded-[32px]'
};

const DefaultLoading: FunctionalComponent<Props> = (props) => {
  const {
    loading,
    children,
    spinnerClass,
    className,
    bg,
    style,
    color,
    asElement: Component,
    customLoader,
  } = props;

  return loading ? (
    <Component
      className={classNames(!customLoader && 'flex items-center justify-center h-full', className)}
      style={{
        ...style,
        background: bg,
      }}
    >
      {customLoader ? (
        <>{customLoader}</>
      ) : (
        <Spinner color={color} isSpining={loading} className={spinnerClass} size={40} />
      )}
    </Component>
  ) : (
    <>{children}</>
  );
};

const CoveredLoading: FunctionalComponent<Props> = (props) => {
  const {
    loading,
    children,
    spinnerClass,
    className,
    bg,
    color,
    asElement: Component,
    customLoader,
    containerClass,
  } = props;

  return (
    <Component
      className={classNames(loading ? 'relative' : '', className)}
      style={{
        background: bg,
      }}
    >
      {children}
      {loading && (
        <div
          className={classNames(
            'w-full h-full bg-white dark:bg-gray-800 dark:bg-opacity-60 bg-opacity-50 absolute inset-0',
            containerClass,
          )}
        />
      )}
      {loading && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          {customLoader ? (
            <>{customLoader}</>
          ) : (
            <Spinner color={color} isSpining={loading} className={spinnerClass} size={40} />
          )}
        </div>
      )}
    </Component>
  );
};

const Loading: FunctionalComponent<Props> = (props) => {
  switch (props.type) {
    case 'default':
      return <DefaultLoading {...props} />;
    case 'cover':
      return <CoveredLoading {...props} />;
    default:
      return <DefaultLoading {...props} />;
  }
};

export default Loading;
