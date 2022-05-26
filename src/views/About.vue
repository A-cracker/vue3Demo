<template>
  <div class="about">
    <h1>按F12打开控制台查看接口数据</h1>
  </div>
</template>
<script>
import {getInfo} from '@/request/api'
export default{
  components: {

  },
  props: {

  },
  setup (props) {
    return {
      props
    }
  },
  data: () => ({
  }),
  computed: {
  },
  watch: {
    
  },
  methods: {
    
  },
  mounted(){
    getInfo().then(res => {
    console.log(res)
    });
  }
}
</script>

