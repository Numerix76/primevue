<script>
import { RouterView } from 'vue-router';
import NavBar from './NavBar.vue';
import { TieredMenu } from 'primevue';

export default {
  data() {
    return {
      count: 0,
      visible: false,
      items: [
        {separator: true},
        { label: 'New', icon: 'pi pi-plus', items: [{label: "Test", icon: 'pi pi-plus'}] },
        { label: 'Search', icon: 'pi pi-search' },
        {separator: true},
      ]
    }
  },
  mounted() {
    this.$primevue.config.ripple = true;
  },
  components: {NavBar, TieredMenu}
}
</script>

<template>
    <div>
        <div class="flex flex-row">
            <div class="hidden">
                <Button icon="pi pi-bars" @click="visible = true" />
            </div>
            
            <!--<NavBar class="h-screen"></NavBar>-->

            <TieredMenu :model="items" class="h-screen flex flex-col" pt:end="mt-auto">
              <template #start>
                  <span class="inline-flex items-center gap-1 px-2 py-2">
                      <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-8">
                          <path d="..." fill="var(--p-primary-color)" />
                          <path d="..." fill="var(--p-text-color)" />
                      </svg>
                      <span class="text-xl font-semibold">PRIME<span class="text-primary">APP</span></span>
                  </span>
              </template>

              <template #end>
                  <div>
                      <button v-ripple class="relative overflow-hidden w-full border-0 bg-transparent flex items-start p-2 pl-4 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-none cursor-pointer transition-colors duration-200">
                        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="mr-2" shape="circle" />
                        <span class="inline-flex flex-col items-start">
                            <span class="font-bold">Amy Elsner</span>
                            <span class="text-sm">Admin</span>
                        </span>
                    </button>
                  </div>
              </template>
            </TieredMenu>

            <div class="flex-grow ms-4 me-4">
                <RouterView></RouterView>
            </div>
            
        </div>
        <!--<Drawer v-model:visible="visible">
            <template #container="{closeCallback}">
                <NavBar @close="closeCallback"></NavBar>
            </template>      
        </Drawer>-->
    </div>
</template>

<style scoped>
</style>