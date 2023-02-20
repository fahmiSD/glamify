<template>
  <div>
    <header>
      <nav>
        <ul>
          <li>
            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link to="/about">About</nuxt-link>
            <nuxt-link to="/products">Products</nuxt-link>
          </li>
        </ul>
      </nav>
    </header>
    <!-- output the page content -->

    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: blue;
}
</style>
