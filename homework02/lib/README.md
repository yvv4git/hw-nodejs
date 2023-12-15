# Ethereum address generator


## About lib
The package is designed to generate pseudo ethereum addresses



## About author
```
___________.__  .__                            ____   ____.__              .___.__        .__        
\_   _____/|  | |__| ______ ____   _______  __ \   \ /   /|  | _____     __| _/|__| _____ |__|______ 
 |    __)_ |  | |  |/  ___// __ \_/ __ \  \/ /  \   Y   / |  | \__  \   / __ | |  |/     \|  \_  __ \
 |        \|  |_|  |\___ \\  ___/\  ___/\   /    \     /  |  |__/ __ \_/ /_/ | |  |  Y Y  \  ||  | \/
/_______  /|____/__/____  >\___  >\___  >\_/      \___/   |____(____  /\____ | |__|__|_|  /__||__|   
        \/              \/     \/     \/                            \/      \/          \/           

```



## How to use
Install lib
```
npm i ethereum-addr-generator
```

And then use lib in code:
```
const generateEthereumAddress = require('ethereum-addr-generator');

let addr  = generateEthereumAddress();
console.log(`Address: ${addr}`);
```