<template>
  <NuxtLayout>
    <KeepAlive :keepalive>
      <NuxtPage/>
    </KeepAlive>
  </NuxtLayout>
</template>
<script lang="ts" setup>
const keepalive = {
  include: ["searchUser", "searchWorkOrder"],
};
</script>
