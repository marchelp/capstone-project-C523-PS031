import React, { useEffect, useState } from 'react'
import { mdiMinus, mdiPlus } from '@mdi/js'
import Icon from '../Icon'
import Link from 'next/link'
import { getButtonColor } from '../../colors'
import AsideMenuList from './List'
import { MenuAsideItem } from '../../interfaces'
import { useRouter } from 'next/router'
import { useAuth } from '../../auth/AuthContext' // Import useAuth from your AuthContext

type Props = {
  item: MenuAsideItem
  isDropdownList?: boolean
}

const AsideMenuItem = ({ item, isDropdownList = false }: Props) => {
  const [isLinkActive, setIsLinkActive] = useState(false)
  const [isDropdownActive] = useState(false)
  const { adminLogout } = useAuth()
  const router = useRouter()

  const activeClassAddon = !item.color && isLinkActive ? 'aside-menu-item-active font-bold' : ''

  const { asPath, isReady } = useRouter()

  useEffect(() => {
    if (item.href && isReady) {
      const linkPathName = new URL(item.href, location.href).pathname
      const activePathname = new URL(asPath, location.href).pathname
      setIsLinkActive(linkPathName === activePathname)
    }
  }, [item.href, isReady, asPath])

  const asideMenuItemInnerContents = (
    <>
      {item.icon && (
        <Icon path={item.icon} className={`flex-none ${activeClassAddon}`} w="w-16" size="18" />
      )}
      <span
        className={`grow text-ellipsis line-clamp-1 ${
          item.menu ? '' : 'pr-12'
        } ${activeClassAddon}`}
      >
        {item.label}
      </span>
      {item.menu && (
        <Icon
          path={isDropdownActive ? mdiMinus : mdiPlus}
          className={`flex-none ${activeClassAddon}`}
          w="w-12"
        />
      )}
    </>
  )

  const handleLogout = () => {
    // Perform logout actions here
    localStorage.removeItem('isAdminAuthenticated')
    localStorage.removeItem('admin')
    localStorage.removeItem('adminToken')
    adminLogout()
    router.push('/signIn')
  }

  const componentClass = [
    'flex cursor-pointer',
    isDropdownList ? 'py-3 px-6 text-sm' : 'py-3',
    item.color
      ? getButtonColor(item.color, false, true)
      : `aside-menu-item dark:text-slate-300 dark:hover:text-white`,
  ].join(' ')

  return (
    <li>
      <div onClick={item.isLogout ? handleLogout : undefined}>
        <Link href={item.href} target={item.target} className={componentClass}>
          {asideMenuItemInnerContents}
        </Link>
      </div>
      {item.menu && (
        <AsideMenuList
          menu={item.menu}
          className={`aside-menu-dropdown ${
            isDropdownActive ? 'block dark:bg-slate-800/50' : 'hidden'
          }`}
          isDropdownList
        />
      )}
    </li>
  )
}

export default AsideMenuItem
