<template>
<v-app>

    <!-- ツールバー (ヘッダー) -->
    <!-- 色：color=rgba(0, 118, 65, 1) -->
    <v-toolbar color="#007641" app>

      <!-- ナビゲーションボタン（スマホの時のみ描画）-->
      <!-- flat: ボタン背景色削除、icon：ボタンに丸みを持たせる click.stopの時にdrawer変数or関数?を反転させる -->
      <v-btn v-if="$vuetify.breakpoint.xs" flat icon @click.stop="drawer = !drawer">
        <font-awesome-icon icon="bars" color="#ffffff" class="fa-2x"/>
      </v-btn>
      

      <v-toolbar-items>
        <v-btn flat>
            <!-- router-txt: CSS layout, router-link :to="'/where'"で遷移 -->
            <router-link class='router-name-txt':to="'/Home'">
            Yushi Sato
            </router-link>      
        </v-btn>
      </v-toolbar-items>
      
      <!-- 区切り線 
      <v-divider class="mx-3" vertical></v-divider>
      -->


      <!-- v-spacer:  -->
      <v-spacer></v-spacer>


      <!-- ツールバーアイテム：スマホ以外の時に描画 -->
      <v-toolbar-items v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.lg || $vuetify.breakpoint.md || $vuetify.breakpoint.xl">
        <v-btn flat v-for="item in items" :key="item.title">
            <router-link class='router-txt' :to="'/' + item.title">
              {{ item.title }}
            </router-link>   
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>  


    <!-- ナビゲーションバー (スマホの場合のみ機能させる)-->
    <v-navigation-drawer v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm" v-model="drawer" width="250px" temporary fixed>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>

      <!-- Homeボタンを別でつける-->
        <v-list-tile>
        <v-list-tile-action><font-awesome-icon class="fa-lg" :icon="'home'"/></v-list-tile-action>
        <v-list-tile-content><v-list-tile-title><router-link class='navi-txt' :to="'/Home'">Home</router-link></v-list-tile-title></v-list-tile-content>
        </v-list-tile>

        <v-list-tile v-for="item in items" :key="item.title">
          <v-list-tile-action>
            <font-awesome-icon class="fa-lg" :icon="item.icon"/>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>
              <router-link class='navi-txt' :to="'/' + item.title">
                {{ item.title }}
              </router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>


    <v-content>   
      <router-view/>
    </v-content>

   <!-- フッター -->
   <v-footer color=rgba(224,224,216,1) height="70" outlined="True" absolute app>
        <div style="margin-left:auto;margin-right:auto;">Copyright &copy; Yushi Sato's Web All Rights Reserved.</div>
   </v-footer>


  </v-app>
</template>

   <!--
     <v-flex xs12 mb-3>
       <v-divider class="mb-3"></v-dividerT
       Copyright © Yushi Sato's Web All Rights Reserved.
     </v-flex>
     -->






<style lang="scss">
.router-txt{
  font-size: 17px;
  font-family: SegoeUI,"Helvetica Neue",Helvetica,Arial,sans-serif;
  color:#ffffff;
  text-decoration: none;
}
.navi-txt{
  font-size: 18px;
  font-family: SegoeUI,"Helvetica Neue",Helvetica,Arial,sans-serif;
  color:#000000;
  text-decoration: none;
}
.router-name-txt{
  font-size: 20px;
  font-family: SegoeUI,Helvetica,sans-serif;
  color:#ffffff;
  text-decoration: none;
}
</style>

<script type="ts">
export default {
    data() {
      return {
        drawer: null,
        items: [
         // { title: 'Home', icon: 'home' },
          { title: 'Profile', icon: 'address-card' },
          { title: 'Projects', icon: 'search' },
          { title: 'Publications', icon: 'book' },
          { title: 'Others', icon: 'ellipsis-h' },
        ],
      };
    },
    methods : {
          setMeta(to) {
              if (to.meta.title) {
                  document.title = to.meta.title;
              }
              if (to.meta.desc) {
                  document.querySelector('meta[name="description"]').setAttribute('content', to.meta.desc);
              }
          },
      },
      watch: {
          '$route' (to) {
              this.setMeta(to);
          }
      },
  };

</script>