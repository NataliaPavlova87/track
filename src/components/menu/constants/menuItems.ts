import { APP_ROUTES } from '~/router/routers'
import { type MenuItemData } from '@components/menu/interfaces/menuItem'

export const MENU_ITEMS: Array<MenuItemData> = [
    {
        icon: '<svg class="w-5" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 426.667 426.667" style="enable-background:new 0 0 426.667 426.667;" xml:space="preserve"><g><g><path d="M213.227,0C95.36,0,0,95.467,0,213.333s95.36,213.333,213.227,213.333s213.44-95.467,213.44-213.333S331.093,0,213.227,0z M213.333,384c-94.293,0-170.667-76.373-170.667-170.667S119.04,42.667,213.333,42.667S384,119.04,384,213.333 S307.627,384,213.333,384z"/></g></g><g><g><polygon points="224,218.667 224,106.667 192,106.667 192,234.667 303.893,301.867 320,275.627 "/></g></g></svg>',
        href: APP_ROUTES.TIMELINE,
        name: 'Timeline'
    },
    {
        icon: '<svg class="w-5" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="Layer_2" data-name="Layer 2"><path d="m28 3h-16a3 3 0 0 0 0 6h16a3 3 0 0 0 0-6zm0 4h-16a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2z"/><path d="m4 3a3 3 0 1 0 3 3 3 3 0 0 0 -3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z"/><path d="m28 13h-16a3 3 0 0 0 0 6h16a3 3 0 0 0 0-6zm0 4h-16a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2z"/><path d="m4 13a3 3 0 1 0 3 3 3 3 0 0 0 -3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z"/><path d="m28 23h-16a3 3 0 0 0 0 6h16a3 3 0 0 0 0-6zm0 4h-16a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2z"/><path d="m4 23a3 3 0 1 0 3 3 3 3 0 0 0 -3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z"/></g></svg>',
        href: APP_ROUTES.ACTIVITIES,
        name: 'Activities'
    },
    {
        icon: '<svg class="w-5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="_21-progress" data-name="21-progress"><path d="m488 480v-280a16 16 0 0 0 -16-16h-96a16 16 0 0 0 -16 16v280h-40v-216a16 16 0 0 0 -16-16h-96a16 16 0 0 0 -16 16v216h-40v-168a16 16 0 0 0 -16-16h-96a16 16 0 0 0 -16 16v168h-24v32h512v-32zm-432 0v-152h64v152zm168 0v-200h64v200zm168 0v-264h64v264z"/><path d="m443.9 55.76 4.184 41.832 31.84-3.184-8-80a16 16 0 0 0 -17.373-14.343l-88 8 2.9 31.87 49.711-4.52c-25.688 30.231-70.034 70.311-130.281 105.8-57.921 34.116-149.504 74.785-256.881 74.785v32c114.588 0 211.771-43.077 273.121-79.214 63.812-37.586 110.679-79.764 138.779-113.026z"/></g></svg>',
        href: APP_ROUTES.PROGRESS,
        name: 'Progress'
    }
]
