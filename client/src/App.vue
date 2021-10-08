<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
          <v-list-item-content>
              <v-list-item-title>
                KingTwenty2
              </v-list-item-title>
              <v-list-item-subtitle>
                MEVN Full stack App
              </v-list-item-subtitle>
          </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
        <v-list dense>
      <v-list-item-group
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i" :to="item.link" link
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>MEVN MENU</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
      <loader></loader>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({ 
    drawer: null,
    items: [ { text: 'Home', icon: 'mdi-home', link: "/" }, 
             { text: 'Add Post', icon:'mdi-note-plus',link:"/add-post" }, 
             { text: 'About', icon: 'mdi-help-box', link: "/About" }, 
           ],
    }),
};
</script>
