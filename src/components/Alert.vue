 <template>
  <div :class="['alert', classNames, 'text-center', 'mb-2']">{{ message }}</div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    classNames: String,
    message: String
  }
}
</script>

<style scoped lang="scss">
</style>
 
