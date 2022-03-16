<template>
  <div>
  <Header></Header>
    我是根组件
  <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
export default {
  name: 'APP',
  components:{
    Header,
    Footer,
    
  }
}
</script>

<style>

</style>