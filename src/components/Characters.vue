<template>
  <div class="container-fluid flex-grow">
    <Search placeholder="Character name ex: Iron man" />
    <span v-touch:swipe="swipeHandler">
      <div class="row">
        <div
          class="d-flex justify-content-center col-6 col-sm-4 col-md-4 col-lg-2"
          v-for="item in items"
          :key="item.index"
        >
          <Card
            v-if="dataLoaded"
            :name="item.name"
            :thumbNail="item.thumbnail.path+'/landscape_small.'+item.thumbnail.extension"
          />
        </div>
      </div>
    </span>
    <Spinner v-if="!dataLoaded" />
    <Pagination
      v-if="dataLoaded && total !== 0 && numberOfPages > 1"
      :currentPage="currentPage"
      :numberOfPages="numberOfPages"
    />
    <Alert
      classNames="alert-dark bg-dark border-dark"
      v-if="dataLoaded && total === 0"
      message="No results found"
    />
    <Alert classNames="alert-danger" v-if="errorMessage !==''" :message="errorMessage" />
    <Popup v-if="modalIsVisible" />
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
library.add([faSearch])

//import characters from '../data/mock.json';
const axios = require('axios');
import Alert from '../components/Alert.vue';
import Card from '../components/Card.vue';
import Pagination from '../components/Pagination.vue';
import Popup from '../components/Popup.vue';
import Search from '../components/Search.vue';
import Spinner from '../components/Spinner.vue';

export default {
  name: 'Characters',
  props: {
    title: String
  },
  components: {
    Alert,
    Card,
    Pagination,
    Popup,
    Search,
    Spinner
  },
  data() {
    return {
      baseUrl: process.env.VUE_APP_API_HOST,
      currentPage: 1,
      dataLoaded: false,
      errorMessage: '',
      items: [],
      limit: 18,
      nameStartsWith: '',
      numberOfPages: 0,
      offset: 0,
      pages: [],
      total: 0,
      modalIsVisible: false
    }
  },
  created () {
    this.getItems();
  },
  methods: {
    showModal(){
      this.modalIsVisible = true;
    },
    swipeHandler (direction) {
      switch(direction){
        case 'right':
          if(this.currentPage > 1){
            this.currentPage--;
          }
          break;
        case 'left':
          if(this.currentPage < this.numberOfPages){
            this.currentPage++;
          }
          break;
          default:
      }
    },
    getItems() {
      // reset spinner flag
      this.dataLoaded = false;
      this.offset = (this.currentPage-1)*this.limit;  
      
      let nameStartsWithQuery = '';
      if(this.nameStartsWith.length > 1){
        nameStartsWithQuery='&nameStartsWith='+this.nameStartsWith;
      }

      axios.get(this.baseUrl+'characters?offset='+this.offset+'&limit='+this.limit+nameStartsWithQuery)
        .then(response => {
          let data = response.data.data;
          this.offset = data.offset;
          this.limit = data.limit;
          this.total = data.total;
          this.items = data.results;
          this.numberOfPages = Math.ceil(this.total / this.limit);
          
          // auto reset to first page
          if(this.currentPage > this.numberOfPages){
            this.setPage(1);
          }

          this.dataLoaded = true;
        })
        .catch(error => {
          this.dataLoaded = true;
          if(error){
            this.errorMessage = 'API Error.';
          }
        });
    },
    setSearchText(searchText) {
      this.nameStartsWith = searchText;
      this.getItems();
    },
    setPage(page){
      this.currentPage = page;
    }
  },
  watch: {
    currentPage (cPage) {
      this.getItems(cPage);
    }
  },
  computed: {
    currentPageComputed: function(){
      return this.currentPage;
    },
    numberOfPagesComputed: function(){
      return this.numberOfPages;
    }
  }
}
</script>

<style scoped lang="scss">
</style>
