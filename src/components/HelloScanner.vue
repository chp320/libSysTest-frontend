<template>
  <div>
    <h1>USB Barcode Scanner</h1>
    <input type="text"
           v-model="barcodeInput"
           @keydown.enter="onBarcodeScanned"
           ref="barcodeInputField"
           placeholder="Focus here and scan the barcode"
    />
    <div v-if="barcode">
      <h2>Scanned Barcode: </h2>
      <p>{{ barcode }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // stores the input from the barcode scanner
      barcodeInput: "",
      // stores the scanned barcode to display
      barcode: null,
    };
  },
  methods: {
    onBarcodeScanned () {
      // when the Enter key is pressed, the barcode is considered complete

      this.barcode = this.barcodeInput;
      // clear the input field for the next scan
      this.barcodeInput = "";
    }
  },
  mounted () {
    // autofocus the input field when the component is mounted

    this.$refs.barcodeInputField.focus();
  }
};
</script>

<style scoped>
input {
  padding: 10px;
  font-size: 1.2rem;
  width: 300px;
}
</style>
