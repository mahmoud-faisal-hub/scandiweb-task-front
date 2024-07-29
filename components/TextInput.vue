<script setup>
defineOptions({
  inheritAttrs: false,
})

defineProps({
  label: String,
  modelValue: String,
  labelFor: String,
});

defineEmits(["update:modelValue"]);

const input = ref(null);

onMounted(() => {
  if (input.value.hasAttribute("autofocus")) {
    input.value.focus();
  }
});

defineExpose({ focus: () => input.value.focus() });
</script>
<template>
  <div class="py-4 pb-0 my-5 bg-white sm:rounded-lg first:mt-0">
    <div class="wave-group pt-1">
      <div class="overflow-hidden rounded-[4px]">
        <input v-bind="$attrs" class="input" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" ref="input" />
        <span class="bar"></span>
        <label class="label" :for="labelFor">
          <span class="label-char text-capitalize" style="--index: 0">
            {{ label }}
          </span>
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wave-group {
  position: relative;   

  .input {
    background-color: #f4f5f9;
    border: 2px solid #f4f5f9;
    font-size: 13px;
    -webkit-box-shadow: none;
    box-shadow: none;
    padding: 15px;
    color: #4f5d77;
    width: 100%;
    border-radius: 4px;
    display: block; 

    &:focus {
      outline: none;
      box-shadow: none;

      &~.bar:before,
      &~.bar:after {
        width: 50%;
      }
    }

    &:focus,
    &:valid {
      &~label .label-char {
        transform: translateY(-35px);
        font-size: 14px;
        color: rgb(0, 0, 0);
      }
    }
  }

  .bar {
    position: relative;
    display: block;
    width: 100%;

    &::before, 
    &::after {
      content: "";
      height: 2px;
      width: 0;
      bottom: 0;
      position: absolute;
      background: #000;
      transition: 0.2s ease all;
      -moz-transition: 0.2s ease all;
      -webkit-transition: 0.2s ease all;
    }

    &::before {
      left: 50%;
    }

    &::after {
      right: 50%;
    }
  }

  .label {
    color: #999;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 10px;
    top: 18px;
    display: flex;

    .label-char {
      transition: 0.2s ease all;
      transition-delay: calc(var(--index) * 0.05s);
    }
  }
}
</style>
