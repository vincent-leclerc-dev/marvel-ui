 <template>
  <div class="card bg-dark m-3">
    <div class="card-body">
      <h5 class="mt-2">{{name}}</h5>
      <b-img :src="thumbNail" fluid :alt="name" rounded="rounded"></b-img>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    name: String,
    thumbNail: String
  }
}
</script>

<style scoped lang="scss">
.card {
  height: 150px;
  width: 150px;
  border: 1px solid black;
  box-shadow: 0px 0px 12px black;
}
h5 {
  font-size: 12px;
  text-align: center;
  color: #fff;
}
.card-body {
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: no-wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}
</style>
 
