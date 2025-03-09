<script>
import { RouterView } from 'vue-router';
import NavBar from './NavBar.vue';

export default {
  data() {
    return {
      count: 0,
      visible: false,
      items: [
        { label: 'New', icon: 'pi pi-plus', items: [{label: "Test"}] },
        { label: 'Search', icon: 'pi pi-search' }
      ]
    }
  },
  mounted() {
    this.$primevue.config.ripple = true;
  },
  components: {NavBar}
}
</script>

<template>
    <div>
        <div class="flex flex-row">
            <div class="hidden">
                <Button icon="pi pi-bars" @click="visible = true" />
            </div>
            
            <NavBar class="h-screen"></NavBar>

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