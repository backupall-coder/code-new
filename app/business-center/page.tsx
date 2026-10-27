import React from 'react'

import AccountsCenter from '@/components/meta-verified-for-business/AccountsCenter'
import {
  metaVerifiedMetadata,
  metaVerifiedViewport,
} from '#data/metaVerifiedMetadata'

export const metadata = metaVerifiedMetadata
export const viewport = metaVerifiedViewport

export default function BusinessCenterPage() {
  return <AccountsCenter />
}
