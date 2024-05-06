import { RalipoObject } from '@/types'

export const handleRalipoInit = () => {
  const { hideLauncher, initialize, openWidget, setCustomData, showLauncher, setNewResponseDynamically }: RalipoObject =
    window.ralipo
  return {
    hideLauncher,
    initialize,
    openWidget,
    setCustomData,
    showLauncher,
    setNewResponseDynamically
  }
}
