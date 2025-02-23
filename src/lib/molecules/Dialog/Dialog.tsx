'use client';

import React from 'react';

import { IconX } from '@tabler/icons-react';
import cn from 'classnames';
import Modal, { Props as ModalProps } from 'react-modal';

import Button from '@/lib/atoms/Button';

interface IProps extends ModalProps {
  closeBtn?: boolean;
}

const Dialog = ({
  className,
  closeBtn = true,
  contentLabel,
  isOpen,
  onRequestClose,
  children,
  shouldCloseOnOverlayClick,
  ...props
}: IProps) => (
  <Modal
    className={cn(
      'bg-bg py-5 px-5 absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-[90%] lg:w-[80%] max-w-[38rem] animate-appear',
      className
    )}
    contentLabel={contentLabel}
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-70 backdrop-blur-md"
    ariaHideApp={false}
    shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
    {...props}
  >
    {closeBtn && (
      <Button
        className="absolute top-[1rem] right-[1rem] z-1 border-transparent hover:border-transparent hover:text-primary"
        isMobileFull={false}
        onClick={onRequestClose}
        variant="text"
      >
        <IconX />
        <span className="sr-only">Close</span>
      </Button>
    )}
    {children}
  </Modal>
);

export default Dialog;
