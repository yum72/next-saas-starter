import React, { PropsWithChildren, useContext, useState } from 'react'

export const NewsletterModalContext = React.createContext(null)

export function NewsletterModalContextProvider<T> ({ children }: PropsWithChildren<T>) {
  const [isModalOpened, setIsModalOpened] = useState(false)
  const [tags, setTags] = useState([])

  return (
    <NewsletterModalContext.Provider
      // @ts-expect-error
      value={{
        isModalOpened,
        setIsModalOpened,
        tags,
        setTags,
      }}
    >
      {children}
    </NewsletterModalContext.Provider>
  )
}

export function useNewsletterModalContext () {
  const context = useContext(NewsletterModalContext)
  if (!context) {
    throw new Error('useNewsletterModalContext can only be used inside NewsletterModalContextProvider')
  }
  return context
}
