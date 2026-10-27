import MetaDataComponent from './index'
import {
  metaVerifiedMetadata,
  metaVerifiedViewport,
} from '#data/metaVerifiedMetadata'

export const metadata = metaVerifiedMetadata
export const viewport = metaVerifiedViewport

export default function MetaDataPage() {
  return <MetaDataComponent />
}