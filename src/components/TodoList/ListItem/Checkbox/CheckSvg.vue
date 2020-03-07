<template>
  <img :src="svgImage" class="checkbox-checked-svg" />
</template>

<script>
export default {
  name: 'CheckboxCheckedSvg',
  data(){
    return {
      svgImage: require('@/assets/marker.svg')
    }
  }
}
</script>