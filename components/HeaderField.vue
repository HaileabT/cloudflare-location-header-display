<template>
  <div class="header-box">
    <Button class="copy-btn" @click="copyHeader">{{ isCopied ? `Copied` : `Copy` }}</Button>
    <h2 class="header-type">{{ headerType }}</h2>
    <p class="header-value">{{ fieldValue }}</p>
  </div>
</template>

<script setup lang="ts">
const isCopied = ref<boolean>(false);

interface Props {
  headerType: String;
  fieldValue: String;
}
const props = defineProps<Props>();

const copyHeader = async () => {
  try {
    await navigator.clipboard.writeText(JSON.stringify(props.fieldValue));
    isCopied.value = true;

    setTimeout(() => (isCopied.value = false), 2000);
  } catch (error) {
    isCopied.value = false;
  }
};
</script>

<style scoped>
.header-box {
  position: relative;
  overflow: hidden;
  background-color: rgb(245, 240, 240);
  padding: 3px 10px;
  border-radius: 10px;
}

.header-type {
  font-size: 1rem;
}

.header-value {
  padding: 10px 20px;
  border-radius: 10px;
  background-color: rgb(204, 204, 204);
}

.copy-btn {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background-color: rgb(58, 58, 58);
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 2px 10px;
  cursor: pointer;
}
</style>
