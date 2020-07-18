# Web Accessibility for Visually Impaired People

<img src="https://sun9-68.userapi.com/2rnoRWA3UmxxboBvlCl3L_O026FOUkDz2jx6Qw/zEYVYbPX5EY.jpg" alt="library">

## Installation

Using npm:
```shell
$ npm i -g npm
$ npm i --save userhelperlibrary
```

Using yarn: 
```shell
$ yarn add userhelperlibrary
```

Options: 
```js
{
  destroy: false, // true or false --> destroy library or not 
  lang: 'en' // buttons language --> ru / en / ro --> default en
}
// example
userhelperlibrary({destroy: true, lang: 'en'});
```

In React:
```js
import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import userhelperlibrary from "userhelperlibrary";

const App = ()=> {
  useEffect(() => {
    userhelperlibrary();
  }, []);
  
    return(
      <div>
        // any code...
      </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
```
In Vue.js:
```js
<script>
 import userHelperLibrary from "userhelperlibrary";

  export default {
    name: "App",
    components: {},
    computed: {},
    methods: {},
    created() {
      userHelperLibrary();
    }
  };
</script>
```