import { useEffect, useState } from 'react'

export function QualityHoldTotals({ readyIds, blockedIds }: { readonly readyIds: readonly string[]; readonly blockedIds: readonly string[] }) {
  const [ready, setReady] = useState(0)
  const [blocked, setBlocked] = useState(0)
  useEffect(() => {
    setReady(readyIds.length)
    setBlocked(blockedIds.length)
  }, [readyIds, blockedIds])
  return <p><strong>{ready}</strong> quality lots ready · <strong>{blocked}</strong> blocked</p>
}
