<template>
  <header>
    <Header importBill="Importar fatura" listBill="Consulta por fatura" analytics="Análise de faturas" />
  </header>
  <main class="px-3 h-full mt-auto">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>

  <footer class="mt-auto text-white-50">
    <p>Digital Bill, by <a href="#" class="text-white">@petz</a>.</p>
  </footer>
</template>

<script>
import Header from '@/components/navbar/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style global>
.h-full {
  height: -webkit-fill-available;
}

.start-height {
  min-height: 100%;
}

.round-border {
  --radius: .75em;
  --border: .05em;
  border: var(--border) solid rgb(198, 231, 231);
  border-radius: calc(var(--radius) + var(--border));
  overflow: hidden;
  margin: 0.5rem;
  padding: 0.5rem;
}

.default-margin {
  margin: 0.5rem;
}

.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus {
  color: #333;
  text-shadow: none;
  /* Prevent inheritance from `body` */
}


/*
 * Base structure
 */

body {
  text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);
}

.cover-container {
  max-width: 100em;

}


/*
 * Header
 */

.nav-masthead .nav-link {
  color: rgba(255, 255, 255, .5);
  border-bottom: .25rem solid transparent;
}

.nav-masthead .nav-link:hover {
  color: rgba(255, 255, 255, .5);
  border-bottom-color: rgba(255, 255, 255, .25);
}

.nav-masthead .nav-link+.nav-link {
  margin-left: 1rem;
}

.nav-masthead .active {
  color: #fff;
  border-bottom-color: #fff;
}

.nav-masthead .router-link-active {
  color: #fff;
  border-bottom-color: #fff;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease-out;
}
</style>
