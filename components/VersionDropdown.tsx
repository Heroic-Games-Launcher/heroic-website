import React, { useEffect, useRef, useState } from 'react'
import styles from './VersionDropdown.module.css'

export interface VersionOption {
  label: string
  version?: string
  href: string
}

interface Props {
  // What the button itself says: "Download", "x86_64", "ARM64", ...
  label: React.ReactNode
  options: VersionOption[]
  onSelect: () => void
}

/**
 * Download button with a caret that reveals the available channels (stable and
 * beta) on hover, click or keyboard focus. With a single option it degrades to
 * a plain link, so missing beta assets never leave an empty menu around.
 */
export default function VersionDropdown({ label, options, onSelect }: Props) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const firstItemRef = useRef<HTMLAnchorElement>(null)
  const focusFirstItem = useRef(false)

  const close = () => setOpen(false)

  const select = () => {
    close()
    onSelect()
  }

  // Close when the pointer/keyboard interaction moves outside the component.
  useEffect(() => {
    if (!open) return

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) close()
    }

    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [open])

  // ArrowDown opens the menu and jumps straight to the first option.
  useEffect(() => {
    if (open && focusFirstItem.current) {
      focusFirstItem.current = false
      firstItemRef.current?.focus()
    }
  }, [open])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape' && open) {
      event.stopPropagation()
      close()
      triggerRef.current?.focus()
    }
  }

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      close()
    }
  }

  if (options.length < 2) {
    const only = options[0]
    return (
      <a
        className={`${styles.primaryButton} ${styles.single}`}
        href={only?.href}
        onClick={select}
      >
        <strong>{only?.label ?? label}</strong>
        {only?.version && <span className="smallText"> ({only.version})</span>}
      </a>
    )
  }

  return (
    <div
      ref={rootRef}
      className={`${styles.dropdown} ${open ? styles.open : ''}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={close}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
    >
      <button
        ref={triggerRef}
        type="button"
        className={styles.primaryButton}
        aria-expanded={open}
        onClick={() => setOpen(true)}
        onKeyDown={(event) => {
          if (event.key === 'ArrowDown') {
            event.preventDefault()
            focusFirstItem.current = true
            setOpen(true)
          }
        }}
      >
        <span>{label}</span>
        <svg
          className={styles.chevron}
          viewBox="0 0 16 16"
          width="12"
          height="12"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M2 5.5l6 6 6-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <ul className={styles.menu}>
          {options.map((option, index) => (
            <li key={option.href || option.label}>
              <a
                ref={index === 0 ? firstItemRef : undefined}
                href={option.href}
                onClick={select}
              >
                <span>{option.label}</span>
                {option.version && (
                  <span className={styles.version}>{option.version}</span>
                )}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
