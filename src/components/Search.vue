<template>
  <div class="input-group mb-2">
    <div class="input-group-prepend">
      <span class="input-group-text bg-dark border-dark" id="basic-addon1">
        <font-awesome-icon icon="search" />
      </span>
    </div>
    <input
      @keyup="updateSearchText"
      :value="searchText"
      class="form-control bg-dark border-dark searchText"
      type="text"
      :placeholder="placeholder"
      :aria-label="placeholder"
      aria-describedby="basic-addon1"
    />
  </div>
</template>

<script>
export default {
    name: 'Search',
    props: {
        placeholder: String
    },
    data() {
        return {
            searchText: '',
        }
    },
    methods:{
        updateSearchText(event){
            // prevent for multiple space char
            let value = event.target.value.replace(/  +/g, '');
            this.searchText = value;
            // auto reset to first page
            if(this.searchText === ''){
                this.$parent.setPage(1);
            }
        }
    },
    watch: {
        searchText() {
            if((this.searchText.length > 1 && this.searchText !== '') || this.searchText.length === 0){
                this.$parent.setSearchText(this.searchText);
            }
        }
    }
}
</script>

<style scoped lang="scss">
.searchText {
  color: white;
}
</style>
 