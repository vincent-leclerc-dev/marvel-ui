 <template>
  <header class="header text-center">
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String
  }
}
</script>

<style scoped lang="scss">
.header {
  flex-wrap: wrap;
  height: auto;
  background: linear-gradient(#ee0000, #770000);
}

h1 {
  font-family: "MarvelRegular", Impact, sans-serif;
  font-size: 60px;
  line-height: 30px;
  padding: 25px 0 20px 0;
}

@media (max-width: 992px) {
  h1 {
    font-size: 50px;
    line-height: 30px;
    padding: 25px 0 20px 0;
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 40px;
    line-height: 20px;
    padding: 25px 0 20px 0;
  }
}

@media (max-width: 576px) {
  h1 {
    font-size: 25px;
    line-height: 25px;
    padding: 20px 0 15px 0;
  }
}
</style>
 
