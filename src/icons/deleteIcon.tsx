/* eslint-disable max-len */
import React, { type MouseEventHandler, type FC } from 'react';

type IconProps = {
  className?: string
  size?: number
  color?: string
  onClick?: MouseEventHandler
};

export const DeleteIcon: FC<IconProps> = ({
  className,
  size = 16,
  color = '#d81e06',
  onClick
}) => {
  return <svg
            className={className}
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            onClick={onClick}
        >
            <path d="M864 192l-128 0L736 128c0-35.2-28.8-64-64-64L352 64C316.8 64 288 92.8 288 128l0 64L160 192C140.8 192 128 204.8 128 224s12.8 32 32 32l32 0 0 640c0 35.2 28.8 64 64 64l512 0c35.2 0 64-28.8 64-64L832 256l32 0c19.2 0 32-12.8 32-32S883.2 192 864 192zM352 128l320 0 0 64L352 192 352 128zM768 896 256 896 256 256l96 0 320 0 96 0L768 896z"
                fill={color}
            ></path>
            <path d="M352 352c-19.2 0-32 12.8-32 32l0 384c0 19.2 12.8 32 32 32s32-12.8 32-32L384 384C384 364.8 371.2 352 352 352z"
                fill={color}
            ></path>
            <path d="M512 352c-19.2 0-32 12.8-32 32l0 384c0 19.2 12.8 32 32 32s32-12.8 32-32L544 384C544 364.8 531.2 352 512 352z"
                fill={color}>
            </path>
            <path d="M640 384l0 384c0 19.2 12.8 32 32 32s32-12.8 32-32L704 384c0-19.2-12.8-32-32-32S640 364.8 640 384z"
                fill={color}
            ></path>
        </svg>;
};
