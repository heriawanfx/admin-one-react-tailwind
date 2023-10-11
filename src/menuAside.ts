import {
  mdiMonitor,
  mdiTable,
} from '@mdi/js'
import { MenuAsideItem } from './interfaces'

const menuAside: MenuAsideItem[] = [
  {
    href: '/dashboard',
    icon: mdiMonitor,
    label: 'Dashboard',
  },
  {
    href: '/categories',
    label: 'Categories',
    icon: mdiTable,
  },
]

export default menuAside
