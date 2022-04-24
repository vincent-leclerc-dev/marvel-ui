<template>
  <div class="spinnerContainer">
    <font-awesome-icon class="spinner text-dark" icon="circle-notch" />
  </div>
</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
library.add([faCircleNotch])

export default {
  name: 'Spinner'
}
</script>

<style scoped lang="scss">
.spinnerContainer {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 160px;
}
.spinner {
  display: flex;
  font-size: 60px;
  $name: spin;
  $speed: 800ms;
  $iteration: infinite;
  $timing: linear;

  -webkit-animation-name: $name;
  -webkit-animation-duration: $speed;
  -webkit-animation-iteration-count: $iteration;
  -webkit-animation-timing-function: $timing;

  -moz-animation-name: $name;
  -moz-animation-duration: $speed;
  -moz-animation-iteration-count: $iteration;
  -moz-animation-timing-function: $timing;

  -ms-animation-name: $name;
  -ms-animation-duration: $speed;
  -ms-animation-iteration-count: $iteration;
  -ms-animation-timing-function: $timing;

  animation-name: $name;
  animation-duration: $speed;
  animation-iteration-count: $iteration;
  animation-timing-function: $timing;

  @-ms-keyframes spin {
    from {
      -ms-transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
    }
  }
  @-moz-keyframes spin {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
