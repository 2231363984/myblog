'use strict';
import React from 'react';
import { Modal } from 'antd';

export function showError(msg, correlationid, callbackfunc) {
    return Modal.error({
        title: 'Error',
        content: (
            <div>
                <p>{msg}</p>
                {correlationid && <p>{`Correlation Id: ${correlationid}`}</p>}
            </div>
        ),
        onOk() {
            if (callbackfunc) { callbackfunc() }
        },
        onCancel() {
            if (callbackfunc) { callbackfunc() }
        }
    });
}
export function showSuccess(msg, callbackfunc) {
    Modal.success({
        title: 'Message',
        content: msg,
        onOk() {
            if (callbackfunc)
                callbackfunc()
        },
        onCancel() {
            if (callbackfunc) { callbackfunc() }
        }
    });
}
export function showConfirm(msg, callbackOk, callbackCancel) {
    Modal.confirm({
        title: 'Confirm',
        content: msg,
        onOk() {
            if (callbackOk)
                callbackOk()
        },
        onCancel() {
            if (callbackCancel)
                callbackCancel()
        }
    });
}

export function showWidthSuccess(width,msg, callbackfunc) {
    Modal.success({
        title: 'Message',
        content: msg,
        width:width,
        onOk() {
            if (callbackfunc)
                callbackfunc()
        },
        onCancel() {
            if (callbackfunc) { callbackfunc() }
        }
    });
}