import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactVisible from '@feizheng/react-visible';
import ReactBackdrop from '@feizheng/react-backdrop';

const CLASS_NAME = 'react-drawer';

export default class ReactModal extends ReactVisible {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    ...ReactVisible.propTypes,
    /**
     * Backdrop props or not display backdrop.
     */
    backdrop: PropTypes.oneOfType([PropTypes.bool, PropTypes.object])
  };

  static defaultProps = {
    ...ReactVisible.defaultProps,
    destroyable: true,
    rootable: true
  };

  get visibleElementView() {
    const {
      className,
      backdrop,
      destroyable,
      onDismiss,
      onPresent,
      rootable,
      ...props
    } = this.props;

    const { hidden, value, children } = this.state;
    const element = (
      <div
        onClick={(e) => e.stopPropagation()}
        hidden={hidden}
        data-visible={value}
        onAnimationEnd={this.handleAnimationEnd}
        className={classNames(`${CLASS_NAME}`, className)}
        {...props}>
        {children}
      </div>
    );

    if (!backdrop) return element;
    return <ReactBackdrop value={value} children={element} {...backdrop} />;
  }
}
