<template>
  <div class="headers-container">
    <HeaderField header-type="Location Headers: " :field-value="cloudFlareHeaders as any ?? 'N/A'" />
    <HeaderField header-type="All Headers: " :field-value="headers as any" />
  </div>
</template>

<script setup lang="ts">
const { cloudFlareHeaders, headers, fetchHeaders } = useHeaders();

const { data, error } = useAsyncData(fetchHeaders);
</script>

<style scoped>
.headers-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
