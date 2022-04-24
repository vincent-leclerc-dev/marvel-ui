 <template>
  <footer class="footer">
    <span v-html="copyright"></span>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    copyright: String
  }
}
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: #101010;
  height: 60px;
}
.footer span {
  color: #555;
  font-size: 12px;
}
</style>
 
