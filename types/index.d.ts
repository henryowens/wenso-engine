import { Config } from "../src/service/config";
import { Plugin } from "vue";

// global plugin
declare const wensoEngine: Exclude<Plugin["install"], Config>;
export default wensoEngine;
