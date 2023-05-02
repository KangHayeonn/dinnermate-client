<template>
  <div>
    Sample
    <CalendarForm />
    <CheckBox />
    <NumberForm />
    <RadioButton />
    <SearchForm />
    <SliderForm />
    <TextButton />
    <TextField />
  </div>
</template>

<script>
import CalendarForm from '@/components/common/CalendarForm.vue';
import CheckBox from '@/components/common/CheckBox.vue';
import NumberForm from '@/components/common/NumberForm.vue';
import RadioButton from '@/components/common/RadioButton.vue';
import SearchForm from '@/components/common/SearchForm.vue';
import SliderForm from '@/components/common/SliderForm.vue';
import TextButton from '@/components/common/TextButton.vue';
import TextField from '@/components/common/TextField.vue';

export default {
  name: 'SamplePage',
  components: {
    CalendarForm,
    CheckBox,
    NumberForm,
    RadioButton,
    SearchForm,
    SliderForm,
    TextButton,
    TextField,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
