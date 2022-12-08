<template>
  <we-img-two src="https://picsum.photos/300/200" alt="test" />
  <!-- <div>
    <h1><u>Image Component</u></h1>
    <h2><b>margin xx-large</b></h2>
    <we-img src="https://picsum.photos/300/200" margin="xx-lg" />
    <h2><b>margin x-large</b></h2>
    <we-img src="https://picsum.photos/300/200" margin="x-lg" />
    <h2><b>margin large</b></h2>
    <we-img src="https://picsum.photos/300/200" margin="lg" />
    <h2><b>margin medium</b></h2>
    <we-img src="https://picsum.photos/300/200" margin="m" />
    <h2><b>margin small</b></h2>
    <we-img src="https://picsum.photos/300/200" margin="sm" />
    <h2><b>margin x-small</b></h2>
    <we-img src="https://picsum.photos/300/200" margin="x-sm" />
    <h2><b>margin xx-small</b></h2>
    <we-img src="https://picsum.photos/300/200" margin="xx-sm" />
    <h2><b>margin no</b></h2>
    <we-img src="https://picsum.photos/300/200" />
  </div> -->
  <div>
    <h1><u>Input Component</u></h1>
    <we-input v-model="model" placeholder="enter email" />
    <div>model: {{ model }}</div>
  </div>

  <div>
    <h1><u>Text Component</u></h1>
    <we-text size="xx-lg"> Wenso Engine </we-text>
    <we-text size="x-lg"> Wenso Engine </we-text>
    <we-text size="lg"> Wenso Engine </we-text>
    <we-text size="m"> Wenso Engine </we-text>
    <we-text size="sm"> Wenso Engine </we-text>
    <we-text size="x-sm"> Wenso Engine </we-text>
    <we-text size="xx-sm"> Wenso Engine </we-text>
  </div>

  <div>
    <h1><u>Button Component</u></h1>
    <h2><b>xx-large</b></h2>
    <we-button size="xx-lg" margin="xx-sm"> Wenso Engine </we-button>
    <we-button size="xx-lg" appearance="outlined" margin="xx-sm">
      Wenso Engine
    </we-button>
    <we-button size="xx-lg" type="secondary" margin="xx-sm">
      Wenso Engine
    </we-button>
    <we-button
      size="xx-lg"
      type="secondary"
      appearance="outlined"
      margin="xx-sm"
    >
      Wenso Engine
    </we-button>
    <h2><b>x-large</b></h2>
    <we-button size="x-lg" margin="xx-sm"> Wenso Engine </we-button>
    <we-button size="x-lg" appearance="outlined" margin="xx-sm">
      Wenso Engine
    </we-button>
    <we-button size="x-lg" type="secondary" margin="xx-sm">
      Wenso Engine
    </we-button>
    <we-button
      size="x-lg"
      type="secondary"
      appearance="outlined"
      margin="xx-sm"
    >
      Wenso Engine
    </we-button>
    <h2><b>large</b></h2>
    <we-button size="lg" margin="xx-sm"> Wenso Engine </we-button>
    <we-button size="lg" margin="xx-sm" appearance="outlined">
      Wenso Engine
    </we-button>
    <we-button size="lg" margin="xx-sm" type="secondary">
      Wenso Engine
    </we-button>
    <we-button size="lg" margin="xx-sm" type="secondary" appearance="outlined">
      Wenso Engine
    </we-button>
    <h2><b>medium</b></h2>
    <we-button size="m" margin="xx-sm"> Wenso Engine </we-button>
    <we-button size="m" margin="xx-sm" appearance="outlined">
      Wenso Engine
    </we-button>
    <we-button size="m" margin="xx-sm" type="secondary">
      Wenso Engine
    </we-button>
    <we-button size="m" margin="xx-sm" type="secondary" appearance="outlined">
      Wenso Engine
    </we-button>
    <h2><b>small</b></h2>
    <we-button size="sm" margin="xx-sm"> Wenso Engine </we-button>
    <we-button size="sm" margin="xx-sm" appearance="outlined">
      Wenso Engine
    </we-button>
    <we-button size="sm" margin="xx-sm" type="secondary">
      Wenso Engine
    </we-button>
    <we-button size="sm" margin="xx-sm" type="secondary" appearance="outlined">
      Wenso Engine
    </we-button>
    <h2><b>x-small</b></h2>
    <we-button size="x-sm" margin="xx-sm"> Wenso Engine </we-button>
    <we-button size="x-sm" margin="xx-sm" appearance="outlined">
      Wenso Engine
    </we-button>
    <we-button size="x-sm" margin="xx-sm" type="secondary">
      Wenso Engine
    </we-button>
    <we-button
      size="x-sm"
      margin="xx-sm"
      type="secondary"
      appearance="outlined"
    >
      Wenso Engine
    </we-button>
    <h2><b>xx-small</b></h2>
    <we-button size="xx-sm" margin="xx-sm"> Wenso Engine </we-button>
    <we-button size="xx-sm" margin="xx-sm" appearance="outlined">
      Wenso Engine
    </we-button>
    <we-button size="xx-sm" margin="xx-sm" type="secondary">
      Wenso Engine
    </we-button>
    <we-button
      size="xx-sm"
      margin="xx-sm"
      type="secondary"
      appearance="outlined"
    >
      Wenso Engine
    </we-button>
  </div>

  <div>
    <h1><u>Link Component</u></h1>
    <h2><b>xx-large</b></h2>
    <div><we-link size="xx-lg">Wenso Enginge</we-link></div>
    <h2><b>x-large</b></h2>
    <div><we-link size="x-lg">Wenso Enginge</we-link></div>
    <h2><b>large</b></h2>
    <div><we-link size="lg">Wenso Enginge</we-link></div>
    <h2><b>medium</b></h2>
    <div><we-link size="m">Wenso Enginge</we-link></div>
    <h2><b>small</b></h2>
    <div><we-link size="sm">Wenso Enginge</we-link></div>
    <h2><b>x-small</b></h2>
    <div><we-link size="x-sm">Wenso Enginge</we-link></div>
    <h2><b>xx-small</b></h2>
    <div><we-link size="xx-sm">Wenso Enginge</we-link></div>
  </div>

  <div>
    <h1><u>Icon Component</u></h1>
    <h2><b>margin xx-large</b></h2>
    <we-icon name="ticket" margin="xx-lg" width="100px" />
    <h2><b>margin x-large</b></h2>
    <we-icon name="ticket" margin="x-lg" width="100px" />
    <h2><b>margin large</b></h2>
    <we-icon name="ticket" margin="lg" width="100px" />
    <h2><b>margin medium</b></h2>
    <we-icon name="ticket" margin="m" width="100px" />
    <h2><b>margin small</b></h2>
    <we-icon name="ticket" margin="sm" width="100px" />
    <h2><b>margin x-small</b></h2>
    <we-icon name="ticket" margin="x-sm" width="100px" />
    <h2><b>margin xx-small</b></h2>
    <we-icon name="ticket" margin="xx-sm" width="100px" />
    <h2><b>margin no</b></h2>
    <we-icon name="ticket" margin="no" width="100px" />
    <h2><b>custom color</b></h2>
    <we-icon name="ticket" margin="no" color="primary" width="100px" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";

const model = ref("");
</script>
