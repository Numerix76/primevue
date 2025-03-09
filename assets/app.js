import { createApp } from 'vue'
// import the root component App from a single-file component.
import App from './component/App.vue'


import PrimeVue from 'primevue/config';
import { definePreset } from '@primeuix/themes';
import StyleClass from 'primevue/styleclass';
import Ripple from 'primevue/ripple';
import Aura from '@primeuix/themes/aura';
import Button from "primevue/button"
import InputText from "primevue/inputtext"
import Menu from "primevue/menu"


import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './component/HomeView.vue'
import AboutView from './component/AboutView.vue'

import './styles/app.css'
import { Avatar, Drawer, InputGroup, Popover } from 'primevue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const Noir = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{zinc.50}',
            100: '{zinc.100}',
            200: '{zinc.200}',
            300: '{zinc.300}',
            400: '{zinc.400}',
            500: '{zinc.500}',
            600: '{zinc.600}',
            700: '{zinc.700}',
            800: '{zinc.800}',
            900: '{zinc.900}',
            950: '{zinc.950}'
        },
        colorScheme: {
            light: {
                primary: {
                    color: '{zinc.950}',
                    inverseColor: '#ffffff',
                    hoverColor: '{zinc.900}',
                    activeColor: '{zinc.800}'
                },
                highlight: {
                    background: '{zinc.950}',
                    focusBackground: '{zinc.700}',
                    color: '#ffffff',
                    focusColor: '#ffffff'
                }
            },
            dark: {
                primary: {
                    color: '{zinc.50}',
                    inverseColor: '{zinc.950}',
                    hoverColor: '{zinc.100}',
                    activeColor: '{zinc.200}'
                },
                highlight: {
                    background: 'rgba(250, 250, 250, .16)',
                    focusBackground: 'rgba(250, 250, 250, .24)',
                    color: 'rgba(255,255,255,.87)',
                    focusColor: 'rgba(255,255,255,.87)'
                }
            }
        }
    }
});


const app = createApp(App)
	.use(router)
	.use(PrimeVue, {
		theme: {
			preset: Noir,
			ripple: true,
			options: {
				//darkModeSelector: true,
                cssLayer: {
                    name: 'primevue',
                    order: 'theme, base, primevue'
                }
			}
		}
	})
	.directive('styleclass', StyleClass)
	.directive('ripple', Ripple)
	.component('Button', Button)
	.component('InputText', InputText)
	.component('Menu', Menu)
	.component('Drawer', Drawer)
	.component('Avatar', Avatar)
    .component('Popover', Popover)
    .component("InputGroup", InputGroup)
	.mount("#app")