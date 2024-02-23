<template>
  <div id="wrapper">
    <nav class="navbar is-danger">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item"><strong>Aster store</strong></router-link>

        <a class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu" @click="showMobileMenu = !showMobileMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" id="navbar-menu" v-bind:class="{'is-active': showMobileMenu}">
        <div class="navbar-end">
          <router-link to="/bricks" class="navbar-item">Bricks</router-link>
          <router-link to="/blocks" class="navbar-item">Blocks</router-link>
          <router-link to="/tiles" class="navbar-item">Tiles</router-link>
          <router-link to="/rods" class="navbar-item">Rods</router-link>
          <router-link to="/faucets" class="navbar-item">Faucets</router-link>
          <router-link to="/lights_and_lambs" class="navbar-item">Lights_and_Lambs</router-link>
          <router-link to="/door_handles" class="navbar-item">Door_handles</router-link>
          <router-link to="/building_accessories" class="navbar-item">Building_accessories</router-link>

          <div class="navbar-item">
            <div class="buttons">
              <router-link to="/log-in" class="button is-light">Log in</router-link>

              <router-link to="/cart" class="button is-success">
                <span class="icon"><i class="fas fa-shopping-cart"></i></span>
                <span>Cart ({{ cartTotalLength }})</span>
              </router-link>
            </div>
          </div>          
        </div>
      </div>
    </nav>

    <section class="section">
    </section>
      <router-view/>

    <footer class="footer">
      <p class="has-text-centered">Copyright (d) 2024</p>
    </footer>

  </div>
</template>

<script>
export default {
  data() {
    return {
      showMobileMenu: false,
      cart: {
        items: []
      }
    }
  },
  beforeCreate() {
    this.$store.commit('initializeStore')
  },
  computed: {
    cartTotalLength() {
      let totalLength = 0

      for (let i = 0; i < this.cart.items.length; i++) {
        totalLength += this.cart.items[i].quantity
      }

      return totalLength
    }
  }
}
</script>


<style lang="scss">
@import '../node_modules/bulma';
</style>
