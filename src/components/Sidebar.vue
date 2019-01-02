<template>
  <div>
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
      <div class="sidebar-sticky">
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/products">Products</router-link>
            <router-link class="nav-link" to="/admin/coupons">Coupons</router-link>
            <router-link class="nav-link" to="/admin/orders">Orders</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
