<template>
  <div>
    <div class="container-fluid" style="background-color: #000;">
      <div class="row">
        <div class="col text-center py-4">
          <ul class="d-flex justify-content-center pl-0 mb-3" style="list-style: none;">
            <li class="mr-4">
              <a href="https://www.facebook.com/profile.php?id=100000402032431" target="_blank">
                <i class="fab fa-facebook text-white" style="font-size: 28px;"></i>
              </a>
            </li>
            <li class="mr-4">
              <a href="https://github.com/ambition1994" target="_blank">
                <i class="fab fa-github text-white" style="font-size: 28px;"></i>
              </a>
            </li>
            <li data-toggle="tooltip" data-placement="right" title="gene4137@gmail.com">
                <i class="fas fa-envelope text-white" style="font-size: 30px;"></i>
            </li>
          </ul>
          <P class="h6 text-white mb-3">圖片版權屬於 iTunes 所有</P>
          <p class="h6 text-white">Copyright &copy; 2019 POPULAR</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    mounted() {
      $('[data-toggle="tooltip"]').tooltip()
    }
  }
</script>
