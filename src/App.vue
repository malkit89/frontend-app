<template>
    <v-app id="app">
        <!-- <v-navigation-drawer
      v-model="drawer"
      app
    >
    </v-navigation-drawer> -->

        <v-app-bar color="" app>
            <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->
            <div>
                <v-img
                    class="mr-1"
                    src="@/assets/logo-m-t.png"
                    height="48px"
                    width="48px"
                ></v-img>
            </div>

            <v-toolbar-title></v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn color="green" icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>
        </v-app-bar>

        <v-main class="blue-grey lighten-4">
            <transition name="slide-fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </v-main>
        <v-footer padless>
            <v-col class="text-center" cols="12">
                Copyright@{{ new Date().getFullYear() }} —
                <strong>Malkit Sandhu</strong>
            </v-col>
        </v-footer>
    </v-app>
</template>
<script>
export default {
    name: 'app',
    data: () => ({ drawer: null })
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /* color: #2c3e50; */
}

.slide-fade-enter-active {
    transition: all 0.2s ease;
}
.slide-fade-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-active {
    padding-left: 10px;
    opacity: 0;
}
</style>
