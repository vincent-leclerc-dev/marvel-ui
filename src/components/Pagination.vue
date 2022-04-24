 <template>
  <div class="pagination mb-3 btn-group">
    <button type="button" @click="page=1" class="btn btn-lg btn-dark first" v-if="page > 1">
      <font-awesome-icon icon="angle-double-left" />
    </button>
    <button
      type="button"
      class="btn btn-lg btn-dark previous"
      v-if="page > 1"
      @click="decrementPage"
    >
      <font-awesome-icon icon="angle-left" />
    </button>
    <div class="pageNumContainer btn bg-dark">
      <div class="pageNumText">
        <span class="pageText">page</span>
        {{page}} / {{numberOfPages}}
      </div>
    </div>
    <button
      type="button"
      @click="incrementPage"
      class="btn btn-lg btn-dark next"
      v-if="page < numberOfPages"
    >
      <font-awesome-icon icon="angle-right" />
    </button>
    <button
      type="button"
      @click="page=numberOfPages"
      class="btn btn-lg btn-dark last"
      v-if="page < numberOfPages"
    >
      <font-awesome-icon icon="angle-double-right" />
    </button>
  </div>
</template>
<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleRight, faAngleLeft, faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'
library.add([faAngleRight, faAngleLeft, faAngleDoubleRight, faAngleDoubleLeft])

export default {
  name: 'Pagination',
  props: ['currentPage',
    'numberOfPages'],
    data() {
    return {
      page: this.currentPage,
    };
  },
  methods: {
    incrementPage(){
      this.page++;
    },
    decrementPage(){
      this.page--;
    }
  },
  watch: {
    page (cPage) {
      // call parent method to trigger getItems query
      this.$parent.setPage(cPage);
    }
  }
}
</script>

<style scoped lang="scss">
.pagination {
  color: #fff;
}

.pageNumContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}

@media (max-width: 576px) {
  .pageText {
    display: none;
  }
  .first,
  .last {
    display: none;
  }
}

.pageNumText {
  color: white;
  font-weight: bold;
}
</style>
 
