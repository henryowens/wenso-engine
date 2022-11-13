import { Plugin } from "vue";

// global plugin
declare const wensoEngine: Exclude<Plugin["install"], undefined>;
export default wensoEngine;
